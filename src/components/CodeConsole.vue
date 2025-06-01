<template>
  <div class="code-console" ref="consoleRef" @click="focusInput">
    <div class="console-window">
      <div class="console-header">
        <span class="terminal-title">console.exe</span>
      </div>
      <div class="console-content" ref="contentRef">
        <div class="welcome-message">
          <p>Welcome to BaranGezen's Portfolio Console v1.0.0</p>
          <p>Type 'help' to see available commands</p>
        </div>
        
        <div v-for="(line, index) in commandHistory" :key="index" class="command-line">
          <template v-if="line.type === 'command'">
            <span class="prompt">$</span>
            <span class="command">{{ line.content }}</span>
          </template>
          <template v-else>
            <div class="response" v-html="formatResponse(line.content)"></div>
          </template>
        </div>
        
        <div class="input-line">
          <span class="prompt">$</span>
          <input
            ref="inputRef"
            v-model="currentCommand"
            @keydown="handleKeyPress"
            type="text"
            spellcheck="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'CodeConsole',
  setup() {
    const router = useRouter()
    const activeGames = ref({})
    const consoleRef = ref(null)
    const contentRef = ref(null)
    const inputRef = ref(null)
    const currentCommand = ref('')
    const commandHistory = ref([])
    const historyIndex = ref(-1)
    const commandBuffer = ref([])

    const availableCommands = {
      help: {
        description: 'Show available commands',
        action: () => {
          return Object.entries(availableCommands)
            .map(([cmd, info]) => cmd.padEnd(15) + ' - ' + info.description)
            .join('\\n')
        }
      },
      clear: {
        description: 'Clear console',
        action: () => {
          commandHistory.value = []
          return ''
        }
      },
      music: {
        description: 'Control space ambient music player',
        action: (args) => {
          if (!args || args.length === 0) {
            return `=== Music Player Controls ===\\n\\nUsage: music <command> [value]\\n\\nCommands:\\n  on/start    - Start music player\\n  off/stop    - Stop music player\\n  status      - Show current status\\n  volume <n>  - Set volume (0-100)\\n  track <name> - Change track\\n  list        - List available tracks\\n\\nExamples:\\n  music on\\n  music volume 75\\n  music track deep_space`
          }

          const subCommand = args[0].toLowerCase()
          
          // Get the sound manager element
          const soundManager = document.querySelector('.cyber-sound-manager')
          if (!soundManager) {
            return 'Error: Music system not initialized'
          }

          // Get Vue component instance
          const soundManagerComponent = soundManager.__vueParentComponent
          if (!soundManagerComponent) {
            return 'Error: Cannot access music controls'
          }

          const musicState = soundManagerComponent.ctx || soundManagerComponent.exposed || soundManagerComponent.setupState
          
          switch (subCommand) {
            case 'on':
            case 'start': {
              if (musicState.isEnabled) {
                return '♫ Music is already playing: ' + musicState.currentTrack.replace('_', ' ').toUpperCase()
              } else {
                // Find and click the music toggle button
                const toggleButton = document.querySelector('.sound-toggle')
                if (toggleButton) {
                  toggleButton.click()
                  return '♫ Music started: ' + musicState.currentTrack.replace('_', ' ').toUpperCase()
                } else {
                  return 'Error: Cannot access music controls'
                }
              }
            }

            case 'off':
            case 'stop': {
              if (!musicState.isEnabled) {
                return '♫ Music is already stopped'
              } else {
                const toggleButton = document.querySelector('.sound-toggle')
                if (toggleButton) {
                  toggleButton.click()
                  return '♫ Music stopped'
                } else {
                  return 'Error: Cannot access music controls'
                }
              }
            }

            case 'status': {
              const status = musicState.isEnabled ? 'PLAYING' : 'STOPPED'
              const track = musicState.currentTrack.replace('_', ' ').toUpperCase()
              const vol = musicState.volume
              const bpm = musicState.currentBPM
              return `=== Music Player Status ===\\n\\nStatus: ${status}\\nTrack: ${track}\\nVolume: ${vol}%\\nBPM: ${bpm}\\n\\nSpace ambient system online 🌌`
            }

            case 'volume': {
              if (args.length < 2) {
                return 'Usage: music volume <0-100>\\nCurrent volume: ' + musicState.volume + '%'
              }
              const newVolume = parseInt(args[1])
              if (isNaN(newVolume) || newVolume < 0 || newVolume > 100) {
                return 'Error: Volume must be a number between 0 and 100'
              }
              
              // Update volume
              const volumeSlider = document.querySelector('.volume-slider')
              if (volumeSlider) {
                volumeSlider.value = newVolume
                volumeSlider.dispatchEvent(new Event('input', { bubbles: true }))
                return `♫ Volume set to ${newVolume}%`
              } else {
                return 'Error: Cannot access volume controls'
              }
            }

            case 'track': {
              if (args.length < 2) {
                return 'Usage: music track <track_name>\\nAvailable tracks: deep_space, nebula_drift, cosmic_void'
              }
              const trackName = args[1].toLowerCase()
              const validTracks = ['deep_space', 'nebula_drift', 'cosmic_void']
              
              if (!validTracks.includes(trackName)) {
                return 'Error: Invalid track name\\nAvailable tracks: ' + validTracks.join(', ')
              }
              
              // Update track
              const trackDropdown = document.querySelector('.track-dropdown')
              if (trackDropdown) {
                trackDropdown.value = trackName
                trackDropdown.dispatchEvent(new Event('change', { bubbles: true }))
                return `♫ Changed to track: ${trackName.replace('_', ' ').toUpperCase()}`
              } else {
                return 'Error: Cannot access track controls'
              }
            }

            case 'list':
              return `=== Available Space Ambient Tracks ===\\n\\ndeep_space    - Deep harmonic drones in vast space\\nnebula_drift  - Ethereal wisps through stellar clouds\\ncosmic_void   - Minimal atmospheres of empty space\\n\\nUsage: music track <name>`

            default:
              return 'Unknown music command: ' + subCommand + '\\nType "music" for help'
          }
        }
      },
      games: {
        description: 'List and play available games',
        action: (args) => {
          const games = {
            snake: 'Classic snake game - Use WASD to move',
            guess: 'Number guessing game - Guess the number between 1-100'
          }

          const gameActions = {
            snake: () => {
              const width = 20
              const height = 10
              const initialState = {
                snake: [{ x: 10, y: 5 }],
                food: { x: 15, y: 5 },
                direction: 'right',
                score: 0,
                width,
                height
              }

              const createBoard = (state) => {
                let board = Array(height).fill().map(() => Array(width).fill(' '))
                
                // Place snake
                state.snake.forEach((part, index) => {
                  if (part.x >= 0 && part.x < width && part.y >= 0 && part.y < height) {
                    board[part.y][part.x] = index === 0 ? '◉' : '○'
                  }
                })
                
                // Place food
                board[state.food.y][state.food.x] = '★'
                
                // Create border and format board
                const horizontalBorder = '═'.repeat(width + 2)
                let display = 'Score: ' + state.score + '\\n╔' + horizontalBorder + '╗\\n'
                
                board.forEach(row => {
                  display += '║' + row.join('') + '║\\n'
                })
                
                display += '╚' + horizontalBorder + '╝'
                return display
              }

              const generateFood = (state) => {
                do {
                  state.food = {
                    x: Math.floor(Math.random() * width),
                    y: Math.floor(Math.random() * height)
                  }
                } while (state.snake.some(part => part.x === state.food.x && part.y === state.food.y))
              }

              const moveSnake = () => {
                const state = activeGames.value.snake
                if (!state) return

                const head = { ...state.snake[0] }
                
                switch (state.direction) {
                  case 'up': head.y--; break
                  case 'down': head.y++; break
                  case 'left': head.x--; break
                  case 'right': head.x++; break
                }

                // Check collision with walls or self
                if (
                  head.x < 0 || head.x >= width ||
                  head.y < 0 || head.y >= height ||
                  state.snake.some((part, index) => index !== 0 && part.x === head.x && part.y === head.y)
                ) {
                  clearInterval(state.gameLoop)
                  delete activeGames.value.snake
                  addToHistory('Game Over! Final Score: ' + state.score, false)
                  return
                }

                state.snake.unshift(head)
                
                // Check if food is eaten
                if (head.x === state.food.x && head.y === state.food.y) {
                  state.score += 10
                  generateFood(state)
                } else {
                  state.snake.pop()
                }

                // Update display by modifying the last history entry
                if (commandHistory.value.length > 0) {
                  const lastEntry = commandHistory.value[commandHistory.value.length - 1]
                  if (lastEntry.type === 'response' && lastEntry.content.startsWith('Score:')) {
                    lastEntry.content = createBoard(state)
                  } else {
                    addToHistory(createBoard(state), false)
                  }
                } else {
                  addToHistory(createBoard(state), false)
                }
                // Force reactivity for the updated board
                commandHistory.value = [...commandHistory.value]
                nextTick(() => {
                  scrollToBottom()
                })
              }

              // Initialize game state
              activeGames.value.snake = { ...initialState }
              
              // Start game
              addToHistory(createBoard(activeGames.value.snake), false)
              addToHistory('Use WASD to move, type "quit" to exit', false)
              activeGames.value.snake.gameLoop = setInterval(moveSnake, 500)

              return ''
            },
            guess: () => {
              const number = Math.floor(Math.random() * 100) + 1
              let attempts = 0
              
              activeGames.value.numberGuess = {
                check: (guess) => {
                  attempts++
                  if (guess === number) {
                    delete activeGames.value.numberGuess
                    return 'Congratulations! You found the number in ' + attempts + ' attempts!'
                  }
                  return guess < number ? 'Too low!' : 'Too high!'
                }
              }
              
              return 'Let\'s play a number guessing game!\\nI\'m thinking of a number between 1 and 100.\\nType your guess:'
            }
          }

          if (!args || args.length === 0) {
            let response = '=== Available Games ===\\n\\n'
            Object.entries(games).forEach(([name, desc]) => {
              response += name.padEnd(10) + ' - ' + desc + '\\n'
            })
            response += '\\nTo play a game, type: games <game_name>'
            return response
          }

          const gameName = args[0].toLowerCase()
          if (gameName in gameActions) {
            return gameActions[gameName]()
          }
          
          return 'Game not found. Type "games" to see available games.'
        }
      },
      about: {
        description: 'Display information about me',
        action: () => {
          router.push('/about')
          return 'Navigating to about page...'
        }
      },
      skills: {
        description: 'List technical skills',
        action: () => {
          return `
Frontend:
- React, Next.js, React Native
- Vite, Remix, React Query
- Redux, Zustand
- Tailwind, Bootstrap, Sass

Backend:
- Node.js, Express
- Mongoose, .Net
- SQL, Entity Framework

Languages:
- TypeScript
- JavaScript
- C#`
        }
      },
      experience: {
        description: 'Show work experience',
        action: () => {
          router.push('/experience');
          return 'Navigating to experience page...';
        }
      },
      contact: {
        description: 'Show contact information',
        action: () => {
          return `
GitHub: @barangezen
LinkedIn: @baran-gezenoglu
Location: Izmir/Bornova`
        }
      },
      projects: {
        description: 'List recent projects',
        action: () => {
          return `
1. Market App (TypeScript)
   - Full-stack e-commerce platform
   - Tech: React, Node.js, MongoDB

2. Music List App
   - Spotify API integration
   - Tech: JavaScript, Express

3. Weather Web App
   - Real-time weather data
   - Tech: TypeScript, React`
        }
      },
      whoami: {
        description: 'Display current user info',
        action: () => {
          return `Baran Gezenoglu\nFull-Stack Software Engineer\nBorn in 1998. Graduated with a B.S. in Computer Engineering.\nCurrently living in Izmir.\nI love riding motorcycles, reading books, visiting historical places, playing computer games, and watching series & movies.`
        }
      },
      date: {
        description: 'Show current date and time',
        action: () => {
          return new Date().toLocaleString()
        }
      },
      ascii: {
        description: 'Generate random ASCII animal art',
        action: () => {
          const animals = [
            // Cat variations
            `
  /\\___/\\
 (  o o  )
 (  =^=  ) 
  (--m-m--)`,
            `
   |\\__/,|   ( \\
   |_ _  |.--.) )
   ( T   )     /
  (((^_(((/(((_/`,
            `
 |\\---/|
 | o_o |
  \\_^_/`,
            
            // Dog variations
            `
  __      _
o'')}____//
 \`_/      )
 (_(_/-(_/`,
            `
     / \\__
    (    @\\___
     /         O
    /   (_____/
   /_____/   U`,
            
            // Bunny variations
            `
  (\\(\\_
  (=' :')
   (,(")(")`,
            `
   /\\ /\\
  ( . . )
   (---)
   |||||
   |||||`,
            
            // Bird variations
            `
    \\\\
    (o>
 \\\\_//)
  \\_/_)
   _|_`,
            `
   ___
 _(o o)_
(_______)
 V     V`,
            
            // Mouse variations
            `
  _  _
 (q\\_/p)
  /. .\\
 =\\_t_/=   __
  /   \\   (  )
 ((   ))   ||
 /\\) (/\\  ||
 \\  Y  /  ||
  nn^nn   ||`,
            `
  ,--,      ,--,
 (  ( \\    /  ) )
  \\  \\ (\\--/) /  /
   \\  \\/    \\/  /
    \\  \\-/\\-/  /
     \\_/    \\_/`,
            
            // Penguin
            `
   __
-=(o '.
   '.-\\
   /|  \\
   '|  |
    |  |
    |  |
    |  |
    |  |
    |__|`,
            
            // Fish
            `
    ><(((º>`,
            `
       o
    o  |  o
     \\ | /
   ___\\|/___
  |    o    |
  |_________|`,
            
            // Owl
            `
   ,___,
   [O.o]
   /)__)
    ""`,
            `
   /\\_/\\
  ((@v@))
   ()^()
    VVV`,
            
            // Butterfly
            `
  \\||/
  (o o)
--|=|--
  |||
  |||
  ||| 
  |||`,
            
            // Snail
            `
    .----.   @   @
   / .-"-.'.  \\v/
   | | '\\ \\ \\_/ )
 ,-\\ \\'-.' /.'  /
'---'  '---'   '`,
            
            // Bear
            `
 ʕ•ᴥ•ʔ`,
            `
  _____   _____
 /     \\ /     \\
| 'o' | | 'o' |
|     | |     |
 \\   /   \\   /
  \\_/     \\_/`,
            
            // Frog
            `
    /\\___/\\
   (  o o  )
   (  =^=  )
    (--m-m-)`,
            `
     _  _
    (.)(.)
     )  (
    (    )
     \\  /
      \\/`
          ]
          
          // Return a random animal
          const randomIndex = Math.floor(Math.random() * animals.length)
          return animals[randomIndex]
        }
      },
      color: {
        description: 'Change console color theme',
        action: (args) => {
          const themes = {
            matrix: { prompt: '#00ff41', response: '#00ff41', bg: '#0c0c0c' },
            cyber: { prompt: '#0ff', response: '#ff1493', bg: '#1a1a1a' },
            retro: { prompt: '#ffa500', response: '#ff6347', bg: '#2d2d2d' }
          }
          
          const theme = args[0]
          if (!theme || !themes[theme]) {
            return 'Available themes: ' + Object.keys(themes).join(', ')
          }
          
          const root = document.documentElement
          const selected = themes[theme]
          root.style.setProperty('--matrix-green', selected.prompt)
          root.style.setProperty('--cyber-blue', selected.response)
          root.style.setProperty('--terminal-bg', selected.bg)
          
          return `Theme changed to ${theme}`
        }
      },
      goals: {
        description: 'Display my career goals',
        action: () => {
          return 'I am currently working as a Frontend Engineer and actively developing my skills in backend and cloud concepts to become a proficient Full-Stack Engineer.'
        }
      }
    }

    const addToHistory = (command, isCommand = true) => {
      commandHistory.value.push({
        type: isCommand ? 'command' : 'response',
        content: command
      })
    }

    const handleGameInput = (game, input) => {
      if (game === 'snake' && activeGames.value.snake) {
        switch (input) {
          case 'w': 
            activeGames.value.snake.direction = 'up'; 
            return true;
          case 's': 
            activeGames.value.snake.direction = 'down'; 
            return true;
          case 'a': 
            activeGames.value.snake.direction = 'left'; 
            return true;
          case 'd': 
            activeGames.value.snake.direction = 'right'; 
            return true;
          case 'quit':
            clearInterval(activeGames.value.snake.gameLoop);
            delete activeGames.value.snake;
            addToHistory('Game terminated', false);
            return true;
        }
      } else if (game === 'numberGuess' && activeGames.value.numberGuess) {
        const guess = parseInt(input);
        if (input === 'quit') {
          delete activeGames.value.numberGuess;
          addToHistory('Game terminated', false);
          return true;
        } else if (isNaN(guess)) {
          addToHistory('Please enter a valid number between 1 and 100', false);
        } else {
          const result = activeGames.value.numberGuess.check(guess);
          addToHistory(result, false);
        }
        return true;
      }
      return false;
    }

    const executeCommand = async () => {
      const enteredCommandValue = currentCommand.value.trim();
      const cmd = enteredCommandValue.toLowerCase();

      if (!cmd && !(activeGames.value.numberGuess && currentCommand.value.trim() !== '')) { 
        // Allow empty enter for number guess if input is not empty before trim (e.g. " ")
        // Or if cmd is truly empty for other cases
        if (!cmd) return;
      }
      
      // Play command execute sound
      playSound('execute')
      
      addToHistory(currentCommand.value, true); // Add the raw command (untrimmed, original case)
      commandBuffer.value.push(currentCommand.value);
      historyIndex.value = commandBuffer.value.length;

      let gameProcessedThisCommand = false;
      if (Object.keys(activeGames.value).length > 0) {
        for (const gameName of Object.keys(activeGames.value)) {
          if (gameName === 'numberGuess' && activeGames.value.numberGuess) {
            // Pass the potentially non-lowercased, but trimmed, command for number guess
            if (handleGameInput(gameName, enteredCommandValue)) { 
              gameProcessedThisCommand = true;
              break;
            }
          } else if ((gameName === 'snake' && activeGames.value.snake) && cmd === 'quit') {
            if (handleGameInput(gameName, cmd)) { // 'quit' is already lowercased
              gameProcessedThisCommand = true;
              break;
            }
          }
        }
      }

      if (gameProcessedThisCommand) {
        currentCommand.value = '';
        await nextTick();
        scrollToBottom();
        return;
      }

      const [mainCmd, ...args] = cmd.split(' ');
      const commandDefinition = availableCommands[mainCmd];

      if (commandDefinition) {
        const response = await commandDefinition.action(args);
        if (response) {
          addToHistory(response, false);
          // Play success sound for valid commands
          playSound('success')
        }
      } else {
        addToHistory('Command not found: ' + mainCmd + '. Type \'help\' for available commands.', false);
        // Play error sound for invalid commands
        playSound('error')
      }

      currentCommand.value = '';
      await nextTick();
      scrollToBottom();
    }

    const playSound = (type) => {
      // Create cyberpunk sound effects using Web Audio API
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        
        const soundEffects = {
          type: () => {
            const oscillator = audioContext.createOscillator()
            const gainNode = audioContext.createGain()
            
            oscillator.type = 'square'
            oscillator.frequency.setValueAtTime(800 + Math.random() * 400, audioContext.currentTime)
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime)
            gainNode.gain.linearRampToValueAtTime(0.02, audioContext.currentTime + 0.01)
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.03)
            
            oscillator.connect(gainNode)
            gainNode.connect(audioContext.destination)
            
            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.03)
          },
          execute: () => {
            const oscillator = audioContext.createOscillator()
            const gainNode = audioContext.createGain()
            
            oscillator.type = 'sawtooth'
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime)
            oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2)
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime)
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01)
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2)
            
            oscillator.connect(gainNode)
            gainNode.connect(audioContext.destination)
            
            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.2)
          },
          success: () => {
            const oscillator = audioContext.createOscillator()
            const gainNode = audioContext.createGain()
            
            oscillator.type = 'sine'
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime)
            oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.1)
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime)
            gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.01)
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1)
            
            oscillator.connect(gainNode)
            gainNode.connect(audioContext.destination)
            
            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.1)
          },
          error: () => {
            const oscillator = audioContext.createOscillator()
            const gainNode = audioContext.createGain()
            
            oscillator.type = 'sawtooth'
            oscillator.frequency.setValueAtTime(150, audioContext.currentTime)
            oscillator.frequency.exponentialRampToValueAtTime(75, audioContext.currentTime + 0.3)
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime)
            gainNode.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 0.01)
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3)
            
            oscillator.connect(gainNode)
            gainNode.connect(audioContext.destination)
            
            oscillator.start(audioContext.currentTime)
            oscillator.stop(audioContext.currentTime + 0.3)
          }
        }

        if (soundEffects[type]) {
          soundEffects[type]()
        }
      } catch (error) {
        // Silently fail if Web Audio API is not supported
      }
    }

    const handleKeyPress = (event) => {
      const key = event.key.toLowerCase();
      const originalKey = event.key;

      const isSnakeActive = !!activeGames.value.snake;

      if (isSnakeActive) {
        if (['w', 'a', 's', 'd'].includes(key)) {
          event.preventDefault();
          handleGameInput('snake', key);
          return;
        }
      }

      // Play typing sound for printable characters
      if (originalKey.length === 1 && originalKey.match(/[a-zA-Z0-9\s]/)) {
        playSound('type')
      }

      if (originalKey === 'Enter') {
        executeCommand();
      } else if (originalKey === 'ArrowUp') {
        event.preventDefault();
        navigateHistory(-1);
      } else if (originalKey === 'ArrowDown') {
        event.preventDefault();
        navigateHistory(1);
      } else if (originalKey === 'Tab') {
        event.preventDefault();
        handleTabCompletion();
      }
    };

    const navigateHistory = (direction) => {
      if (commandBuffer.value.length === 0) return

      historyIndex.value += direction
      if (historyIndex.value < 0) historyIndex.value = 0
      if (historyIndex.value > commandBuffer.value.length) {
        historyIndex.value = commandBuffer.value.length
      }

      currentCommand.value = commandBuffer.value[historyIndex.value] || ''
    }

    const handleTabCompletion = () => {
      const cmd = currentCommand.value.toLowerCase()
      const matches = Object.keys(availableCommands).filter(c => c.startsWith(cmd))
      
      if (matches.length === 1) {
        currentCommand.value = matches[0]
      }
    }

    const formatResponse = (text) => {
      return text.replace(/\\n/g, '<br>')
    }

    const scrollToBottom = () => {
      if (contentRef.value) {
        contentRef.value.scrollTop = contentRef.value.scrollHeight
      }
    }

    const focusInput = () => {
      inputRef.value?.focus()
    }

    onMounted(() => {
      focusInput()
    })

    return {
      consoleRef,
      contentRef,
      inputRef,
      currentCommand,
      commandHistory,
      executeCommand,
      navigateHistory,
      handleTabCompletion,
      formatResponse,
      focusInput,
      handleKeyPress
    }
  }
}
</script>

<style lang="scss" scoped>
.code-console {
  margin: 2rem auto;
  max-width: 800px;
  font-family: 'Courier New', monospace;
}

.console-window {
  background: var(--terminal-bg);
  border: 1px solid var(--matrix-green);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
}

.console-header {
  background: #1a1a1a;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--terminal-border);
  
  .terminal-title {
    color: var(--matrix-green);
    font-size: 0.9rem;
  }
}

.console-content {
  height: 400px;
  overflow-y: auto;
  padding: 1rem;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--terminal-bg);
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--matrix-green);
    border-radius: 4px;
  }
}

.welcome-message {
  color: var(--cyber-blue);
  margin-bottom: 1rem;
  
  p {
    margin: 0.2rem 0;
  }
}

.command-line {
  margin-bottom: 0.5rem;
  
  .prompt {
    color: var(--matrix-green);
    margin-right: 0.5rem;
  }
  
  .command {
    color: var(--text-color);
  }
  
  .response {
    color: var(--cyber-blue);
    margin-left: 1.5rem;
    white-space: pre-wrap;
  }
}

.input-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .prompt {
    color: var(--matrix-green);
  }
  
  input {
    flex: 1;
    background: none;
    border: none;
    color: var(--text-color);
    font-family: inherit;
    font-size: 1rem;
    outline: none;
    
    &:focus {
      outline: none;
    }
  }
}

/* Animation for command responses */
.response {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 