<template>
  <div class="cyber-sound-manager">
    <!-- Sound Toggle Button -->
    <button 
      class="sound-toggle"
      @click="toggleSound"
      :class="{ 'active': isEnabled }"
    >
      <div class="sound-icon">
        <div v-if="isEnabled" class="sound-waves">
          <div class="wave wave-1"></div>
          <div class="wave wave-2"></div>
          <div class="wave wave-3"></div>
        </div>
        <div v-else class="sound-off">🤖</div>
      </div>
      <span class="sound-label">{{ isEnabled ? 'MUSIC ON' : 'MUSIC OFF' }}</span>
    </button>

    <!-- Controls when enabled -->
    <div v-if="isEnabled" class="sound-controls">
      <!-- Volume Control -->
      <div class="volume-control">
        <span class="volume-label">VOL</span>
        <input 
          type="range" 
          min="0" 
          max="100" 
          v-model="volume"
          @input="updateVolume"
          class="volume-slider"
        />
        <span class="volume-value">{{ volume }}%</span>
      </div>

      <!-- Track Selector -->
      <div class="track-selector">
        <span class="track-label">TRACK</span>
        <select v-model="currentTrack" @change="changeTrack" class="track-dropdown">
          <option value="deep_space">Deep Space</option>
          <option value="nebula_drift">Nebula Drift</option>
          <option value="cosmic_void">Cosmic Void</option>
        </select>
      </div>

      <!-- Beat Indicator -->
      <div class="beat-indicator" :class="{ 'beat': isBeat }">
        <span>🎯 {{ Math.floor(currentBPM) }} BPM</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'CyberSoundManager',
  setup() {
    const isEnabled = ref(false)
    const volume = ref(60)
    const currentTrack = ref('deep_space')
    const currentBPM = ref(60)
    const isBeat = ref(false)
    const audioContext = ref(null)
    const masterGain = ref(null)
    const soundEffects = ref({})
    
    // Musical intervals and timing
    const beatInterval = ref(null)
    const bassInterval = ref(null)
    const melodyInterval = ref(null)
    const drumInterval = ref(null)
    
    // Track configurations with space ambience themes
    const tracks = {
      deep_space: {
        name: 'Deep Space',
        bpm: 60,
        drones: [65.41, 98.00, 130.81], // C2, G2, C3 - perfect fifth harmony
        pads: [261.63, 329.63, 392.00], // C4, E4, G4 - major triad
        effects: ['cosmic_wind', 'stellar_pulse', 'void_echo'],
        style: 'deep_ambient',
        rhythmPattern: null, // No rhythm - pure ambience
        effectTiming: [3000, 7000, 12000], // Effects every 3, 7, 12 seconds
        filterSweep: { min: 200, max: 800, duration: 15000 }
      },
      nebula_drift: {
        name: 'Nebula Drift',
        bpm: 45,
        drones: [55.00, 82.41, 110.00], // A1, E2, A2 - perfect fifth
        pads: [220.00, 277.18, 329.63, 415.30], // A3, C#4, E4, G#4 - A major 7th
        effects: ['nebula_whisper', 'crystal_chime', 'plasma_flow'],
        style: 'ethereal',
        rhythmPattern: null,
        effectTiming: [4000, 9000, 15000],
        filterSweep: { min: 300, max: 1200, duration: 20000 }
      },
      cosmic_void: {
        name: 'Cosmic Void',
        bpm: 40,
        drones: [73.42, 110.00, 146.83], // D2, A2, D3 - perfect fifth
        pads: [293.66, 369.99, 440.00, 554.37], // D4, F#4, A4, C#5 - D major 7th
        effects: ['void_reverb', 'solar_wind', 'quantum_flutter'],
        style: 'vast_space',
        rhythmPattern: null,
        effectTiming: [5000, 11000, 18000],
        filterSweep: { min: 150, max: 600, duration: 25000 }
      }
    }

    // Initialize Web Audio API
    const initAudio = () => {
      try {
        audioContext.value = new (window.AudioContext || window.webkitAudioContext)()
        masterGain.value = audioContext.value.createGain()
        masterGain.value.connect(audioContext.value.destination)
        createSoundEffects()
      } catch (error) {
        console.log('Web Audio API not supported:', error)
      }
    }

    // Create ambient sound effects
    const createSoundEffects = () => {
      if (!audioContext.value) return

      const ctx = audioContext.value

      // Soft click sound
      soundEffects.value.click = () => {
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()
        const filter = ctx.createBiquadFilter()
        
        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(880, ctx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.2)
        
        filter.type = 'lowpass'
        filter.frequency.setValueAtTime(1200, ctx.currentTime)
        
        gainNode.gain.setValueAtTime(0, ctx.currentTime)
        gainNode.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.02)
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2)
        
        oscillator.connect(filter)
        filter.connect(gainNode)
        gainNode.connect(masterGain.value)
        
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.2)
      }

      // Ethereal hover effect
      soundEffects.value.hover = () => {
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()
        const filter = ctx.createBiquadFilter()
        
        oscillator.type = 'triangle'
        oscillator.frequency.setValueAtTime(220, ctx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.3)
        
        filter.type = 'lowpass'
        filter.frequency.setValueAtTime(800, ctx.currentTime)
        filter.frequency.exponentialRampToValueAtTime(1600, ctx.currentTime + 0.3)
        
        gainNode.gain.setValueAtTime(0, ctx.currentTime)
        gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.05)
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3)
        
        oscillator.connect(filter)
        filter.connect(gainNode)
        gainNode.connect(masterGain.value)
        
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.3)
      }

      // Cosmic typing sound
      soundEffects.value.type = () => {
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()
        const filter = ctx.createBiquadFilter()
        
        const cosmicNotes = [261.63, 293.66, 329.63, 392.00, 440.00] // C major pentatonic
        const freq = cosmicNotes[Math.floor(Math.random() * cosmicNotes.length)]
        
        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(freq, ctx.currentTime)
        
        filter.type = 'lowpass'
        filter.frequency.setValueAtTime(2000, ctx.currentTime)
        filter.Q.setValueAtTime(2, ctx.currentTime)
        
        gainNode.gain.setValueAtTime(0, ctx.currentTime)
        gainNode.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.02)
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15)
        
        oscillator.connect(filter)
        filter.connect(gainNode)
        gainNode.connect(masterGain.value)
        
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.15)
      }

      // Success celestial chord
      soundEffects.value.success = () => {
        const track = tracks[currentTrack.value]
        const chord = track.pads.slice(0, 3) // Use first 3 pad notes
        
        chord.forEach((freq, index) => {
          setTimeout(() => {
            const oscillator = ctx.createOscillator()
            const gainNode = ctx.createGain()
            const filter = ctx.createBiquadFilter()
            
            oscillator.type = 'sine'
            oscillator.frequency.setValueAtTime(freq, ctx.currentTime)
            
            filter.type = 'lowpass'
            filter.frequency.setValueAtTime(1000, ctx.currentTime)
            
            gainNode.gain.setValueAtTime(0, ctx.currentTime)
            gainNode.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.1)
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.0)
            
            oscillator.connect(filter)
            filter.connect(gainNode)
            gainNode.connect(masterGain.value)
            
            oscillator.start(ctx.currentTime)
            oscillator.stop(ctx.currentTime + 1.0)
          }, index * 200)
        })
      }

      // Error void sound
      soundEffects.value.error = () => {
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()
        const filter = ctx.createBiquadFilter()
        
        oscillator.type = 'sawtooth'
        oscillator.frequency.setValueAtTime(80, ctx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.8)
        
        filter.type = 'lowpass'
        filter.frequency.setValueAtTime(200, ctx.currentTime)
        filter.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.8)
        
        gainNode.gain.setValueAtTime(0, ctx.currentTime)
        gainNode.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.05)
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8)
        
        oscillator.connect(filter)
        filter.connect(gainNode)
        gainNode.connect(masterGain.value)
        
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.8)
      }
    }

    // Create cosmic drone layers
    const createDroneLayer = () => {
      if (!audioContext.value || !isEnabled.value) return

      const track = tracks[currentTrack.value]
      const ctx = audioContext.value
      
      track.drones.forEach((freq, index) => {
        const oscillator = ctx.createOscillator()
        const gainNode = ctx.createGain()
        const filter = ctx.createBiquadFilter()
        
        // Different oscillator types for layered drones
        const types = ['sine', 'triangle', 'sawtooth']
        oscillator.type = types[index % types.length]
        oscillator.frequency.setValueAtTime(freq, ctx.currentTime)
        
        // Add slight frequency modulation for organic feel
        const lfo = ctx.createOscillator()
        const lfoGain = ctx.createGain()
        lfo.frequency.setValueAtTime(0.1 + index * 0.05, ctx.currentTime)
        lfoGain.gain.setValueAtTime(0.5 + index * 0.2, ctx.currentTime)
        lfo.connect(lfoGain)
        lfoGain.connect(oscillator.frequency)
        
        filter.type = 'lowpass'
        filter.frequency.setValueAtTime(track.filterSweep.min, ctx.currentTime)
        filter.Q.setValueAtTime(0.5, ctx.currentTime)
        
        const vol = (volume.value / 100) * 0.15 / track.drones.length
        gainNode.gain.setValueAtTime(0, ctx.currentTime)
        gainNode.gain.linearRampToValueAtTime(vol, ctx.currentTime + 3 + index)
        
        oscillator.connect(filter)
        filter.connect(gainNode)
        gainNode.connect(masterGain.value)
        
        oscillator.start(ctx.currentTime)
        lfo.start(ctx.currentTime)
        
        // Store references for cleanup
        if (!bassInterval.value) bassInterval.value = []
        bassInterval.value.push({ oscillator, lfo, gainNode, filter })
      })
      
      // Start filter sweep
      startFilterSweep()
    }

    // Create ethereal pad layers
    const createPadLayer = () => {
      if (!audioContext.value || !isEnabled.value) return

      const track = tracks[currentTrack.value]
      const ctx = audioContext.value
      
      const createPad = (freq, delay) => {
        setTimeout(() => {
          if (!isEnabled.value) return
          
          const oscillator = ctx.createOscillator()
          const gainNode = ctx.createGain()
          const filter = ctx.createBiquadFilter()
          const reverb = createReverb(ctx)
          
          oscillator.type = 'triangle'
          oscillator.frequency.setValueAtTime(freq, ctx.currentTime)
          
          // Add vibrato
          const vibrato = ctx.createOscillator()
          const vibratoGain = ctx.createGain()
          vibrato.frequency.setValueAtTime(2, ctx.currentTime)
          vibratoGain.gain.setValueAtTime(3, ctx.currentTime)
          vibrato.connect(vibratoGain)
          vibratoGain.connect(oscillator.frequency)
          
          filter.type = 'lowpass'
          filter.frequency.setValueAtTime(1200, ctx.currentTime)
          filter.Q.setValueAtTime(1, ctx.currentTime)
          
          const vol = (volume.value / 100) * 0.08
          gainNode.gain.setValueAtTime(0, ctx.currentTime)
          gainNode.gain.linearRampToValueAtTime(vol, ctx.currentTime + 2)
          gainNode.gain.linearRampToValueAtTime(vol * 0.7, ctx.currentTime + 8)
          gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 12)
          
          oscillator.connect(filter)
          filter.connect(reverb.input)
          reverb.output.connect(gainNode)
          gainNode.connect(masterGain.value)
          
          oscillator.start(ctx.currentTime)
          vibrato.start(ctx.currentTime)
          oscillator.stop(ctx.currentTime + 12)
          vibrato.stop(ctx.currentTime + 12)
          
          // Store for cleanup
          if (!melodyInterval.value) melodyInterval.value = []
          melodyInterval.value.push({ oscillator, vibrato, gainNode })
        }, delay)
      }
      
      // Stagger pad entries
      track.pads.forEach((freq, index) => {
        createPad(freq, index * 2000)
      })
      
      // Schedule next pad cycle
      setTimeout(() => {
        if (isEnabled.value) createPadLayer()
      }, 15000)
    }

    // Create spatial effects
    const createSpaceEffects = () => {
      if (!audioContext.value || !isEnabled.value) return

      const track = tracks[currentTrack.value]
      
      track.effectTiming.forEach((timing, index) => {
        setTimeout(() => {
          if (!isEnabled.value) return
          createSpaceEffect(track.effects[index])
        }, timing)
      })
      
      // Schedule next effects cycle
      setTimeout(() => {
        if (isEnabled.value) createSpaceEffects()
      }, Math.max(...track.effectTiming) + 3000)
    }

    // Individual space effect generators
    const createSpaceEffect = (effectType) => {
      const ctx = audioContext.value
      
      switch (effectType) {
        case 'cosmic_wind':
          createCosmicWind(ctx)
          break
        case 'stellar_pulse':
          createStellarPulse(ctx)
          break
        case 'void_echo':
          createVoidEcho(ctx)
          break
        case 'nebula_whisper':
          createNebulaWhisper(ctx)
          break
        case 'crystal_chime':
          createCrystalChime(ctx)
          break
        case 'plasma_flow':
          createPlasmaFlow(ctx)
          break
        case 'void_reverb':
          createVoidReverb(ctx)
          break
        case 'solar_wind':
          createSolarWind(ctx)
          break
        case 'quantum_flutter':
          createQuantumFlutter(ctx)
          break
      }
    }

    const createCosmicWind = (ctx) => {
      const bufferSize = 4096
      const noise = ctx.createScriptProcessor(bufferSize, 1, 1)
      const gainNode = ctx.createGain()
      const filter = ctx.createBiquadFilter()
      
      noise.onaudioprocess = (e) => {
        const output = e.outputBuffer.getChannelData(0)
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.1
        }
      }
      
      filter.type = 'bandpass'
      filter.frequency.setValueAtTime(300, ctx.currentTime)
      filter.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 4)
      filter.Q.setValueAtTime(0.5, ctx.currentTime)
      
      const vol = (volume.value / 100) * 0.03
      gainNode.gain.setValueAtTime(0, ctx.currentTime)
      gainNode.gain.linearRampToValueAtTime(vol, ctx.currentTime + 1)
      gainNode.gain.linearRampToValueAtTime(vol * 0.5, ctx.currentTime + 3)
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 5)
      
      noise.connect(filter)
      filter.connect(gainNode)
      gainNode.connect(masterGain.value)
      
      setTimeout(() => noise.disconnect(), 6000)
    }

    const createStellarPulse = (ctx) => {
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      const filter = ctx.createBiquadFilter()
      
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(110, ctx.currentTime)
      
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(400, ctx.currentTime)
      filter.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 2)
      
      const vol = (volume.value / 100) * 0.06
      gainNode.gain.setValueAtTime(0, ctx.currentTime)
      for (let i = 0; i < 6; i++) {
        const time = ctx.currentTime + i * 0.5
        gainNode.gain.linearRampToValueAtTime(vol, time + 0.1)
        gainNode.gain.exponentialRampToValueAtTime(0.001, time + 0.4)
      }
      
      oscillator.connect(filter)
      filter.connect(gainNode)
      gainNode.connect(masterGain.value)
      
      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + 3)
    }

    const createVoidEcho = (ctx) => {
      const delay = ctx.createDelay(2.0)
      const feedback = ctx.createGain()
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      
      oscillator.type = 'triangle'
      oscillator.frequency.setValueAtTime(220, ctx.currentTime)
      
      delay.delayTime.setValueAtTime(0.7, ctx.currentTime)
      feedback.gain.setValueAtTime(0.4, ctx.currentTime)
      
      const vol = (volume.value / 100) * 0.04
      gainNode.gain.setValueAtTime(0, ctx.currentTime)
      gainNode.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.1)
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 4)
      
      oscillator.connect(gainNode)
      gainNode.connect(delay)
      delay.connect(feedback)
      feedback.connect(delay)
      delay.connect(masterGain.value)
      gainNode.connect(masterGain.value)
      
      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + 0.2)
    }

    const createNebulaWhisper = (ctx) => {
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      const filter = ctx.createBiquadFilter()
      
      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(440, ctx.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 3)
      
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(1500, ctx.currentTime)
      filter.Q.setValueAtTime(8, ctx.currentTime)
      
      const vol = (volume.value / 100) * 0.02
      gainNode.gain.setValueAtTime(0, ctx.currentTime)
      gainNode.gain.linearRampToValueAtTime(vol, ctx.currentTime + 1)
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 4)
      
      oscillator.connect(filter)
      filter.connect(gainNode)
      gainNode.connect(masterGain.value)
      
      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + 4)
    }

    const createCrystalChime = (ctx) => {
      const frequencies = [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6
      
      frequencies.forEach((freq, index) => {
        setTimeout(() => {
          const oscillator = ctx.createOscillator()
          const gainNode = ctx.createGain()
          const filter = ctx.createBiquadFilter()
          
          oscillator.type = 'sine'
          oscillator.frequency.setValueAtTime(freq, ctx.currentTime)
          
          filter.type = 'highpass'
          filter.frequency.setValueAtTime(400, ctx.currentTime)
          
          const vol = (volume.value / 100) * 0.03
          gainNode.gain.setValueAtTime(0, ctx.currentTime)
          gainNode.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.05)
          gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2)
          
          oscillator.connect(filter)
          filter.connect(gainNode)
          gainNode.connect(masterGain.value)
          
          oscillator.start(ctx.currentTime)
          oscillator.stop(ctx.currentTime + 2)
        }, index * 400)
      })
    }

    const createPlasmaFlow = (ctx) => {
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      const filter = ctx.createBiquadFilter()
      
      oscillator.type = 'sawtooth'
      oscillator.frequency.setValueAtTime(55, ctx.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 6)
      
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(200, ctx.currentTime)
      filter.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 6)
      filter.Q.setValueAtTime(3, ctx.currentTime)
      
      const vol = (volume.value / 100) * 0.04
      gainNode.gain.setValueAtTime(0, ctx.currentTime)
      gainNode.gain.linearRampToValueAtTime(vol, ctx.currentTime + 2)
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 7)
      
      oscillator.connect(filter)
      filter.connect(gainNode)
      gainNode.connect(masterGain.value)
      
      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + 7)
    }

    const createVoidReverb = (ctx) => {
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      const reverb = createReverb(ctx, 6.0, 0.8)
      
      oscillator.type = 'triangle'
      oscillator.frequency.setValueAtTime(146.83, ctx.currentTime) // D3
      
      const vol = (volume.value / 100) * 0.05
      gainNode.gain.setValueAtTime(0, ctx.currentTime)
      gainNode.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.1)
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 8)
      
      oscillator.connect(reverb.input)
      reverb.output.connect(gainNode)
      gainNode.connect(masterGain.value)
      
      oscillator.start(ctx.currentTime)
      oscillator.stop(ctx.currentTime + 0.3)
    }

    const createSolarWind = (ctx) => {
      const bufferSize = 2048
      const noise = ctx.createScriptProcessor(bufferSize, 1, 1)
      const gainNode = ctx.createGain()
      const filter = ctx.createBiquadFilter()
      
      noise.onaudioprocess = (e) => {
        const output = e.outputBuffer.getChannelData(0)
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.05 * Math.sin(i * 0.01)
        }
      }
      
      filter.type = 'highpass'
      filter.frequency.setValueAtTime(2000, ctx.currentTime)
      filter.frequency.exponentialRampToValueAtTime(4000, ctx.currentTime + 3)
      
      const vol = (volume.value / 100) * 0.02
      gainNode.gain.setValueAtTime(0, ctx.currentTime)
      gainNode.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.5)
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 4)
      
      noise.connect(filter)
      filter.connect(gainNode)
      gainNode.connect(masterGain.value)
      
      setTimeout(() => noise.disconnect(), 5000)
    }

    const createQuantumFlutter = (ctx) => {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          const oscillator = ctx.createOscillator()
          const gainNode = ctx.createGain()
          
          oscillator.type = 'sine'
          oscillator.frequency.setValueAtTime(1760 + Math.random() * 880, ctx.currentTime)
          
          const vol = (volume.value / 100) * 0.015
          gainNode.gain.setValueAtTime(0, ctx.currentTime)
          gainNode.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.02)
          gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)
          
          oscillator.connect(gainNode)
          gainNode.connect(masterGain.value)
          
          oscillator.start(ctx.currentTime)
          oscillator.stop(ctx.currentTime + 0.1)
        }, i * 100 + Math.random() * 50)
      }
    }

    // Create reverb effect
    const createReverb = (ctx, duration = 3.0, decay = 0.6) => {
      const convolver = ctx.createConvolver()
      const length = ctx.sampleRate * duration
      const impulse = ctx.createBuffer(2, length, ctx.sampleRate)
      
      for (let channel = 0; channel < 2; channel++) {
        const channelData = impulse.getChannelData(channel)
        for (let i = 0; i < length; i++) {
          channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay)
        }
      }
      
      convolver.buffer = impulse
      
      return {
        input: convolver,
        output: convolver
      }
    }

    // Filter sweep for drones
    const startFilterSweep = () => {
      if (!bassInterval.value || !isEnabled.value) return
      
      const track = tracks[currentTrack.value]
      const duration = track.filterSweep.duration
      
      bassInterval.value.forEach(drone => {
        if (drone.filter) {
          drone.filter.frequency.setValueAtTime(track.filterSweep.min, audioContext.value.currentTime)
          drone.filter.frequency.exponentialRampToValueAtTime(track.filterSweep.max, audioContext.value.currentTime + duration / 2000)
          drone.filter.frequency.exponentialRampToValueAtTime(track.filterSweep.min, audioContext.value.currentTime + duration / 1000)
        }
      })
      
      setTimeout(() => {
        if (isEnabled.value) startFilterSweep()
      }, duration)
    }

    const toggleSound = () => {
      if (!audioContext.value) {
        initAudio()
      }

      if (audioContext.value && audioContext.value.state === 'suspended') {
        audioContext.value.resume()
      }

      isEnabled.value = !isEnabled.value
      
      if (isEnabled.value) {
        startMusic()
        // Play activation sound
        if (soundEffects.value.click) {
          soundEffects.value.click()
        }
      } else {
        stopMusic()
      }
    }

    const startMusic = () => {
      const track = tracks[currentTrack.value]
      currentBPM.value = track.bpm
      
      // Start all musical elements
      createDroneLayer()
      setTimeout(() => createPadLayer(), 2000) // Start pad layer after 2 seconds
      setTimeout(() => createSpaceEffects(), 4000) // Start space effects after 4 seconds
    }

    const stopMusic = () => {
      if (beatInterval.value) clearInterval(beatInterval.value)
      if (drumInterval.value) clearInterval(drumInterval.value)
      if (bassInterval.value) {
        // Clean up drone oscillators
        if (Array.isArray(bassInterval.value)) {
          bassInterval.value.forEach(drone => {
            if (drone.oscillator) drone.oscillator.stop()
            if (drone.lfo) drone.lfo.stop()
          })
        }
        bassInterval.value = null
      }
      if (melodyInterval.value) {
        // Clean up pad oscillators
        if (Array.isArray(melodyInterval.value)) {
          melodyInterval.value.forEach(pad => {
            if (pad.oscillator) pad.oscillator.stop()
            if (pad.vibrato) pad.vibrato.stop()
          })
        }
        melodyInterval.value = null
      }
      isBeat.value = false
    }

    const changeTrack = () => {
      if (isEnabled.value) {
        stopMusic()
        setTimeout(() => {
          startMusic()
        }, 100)
        
        // Play track change sound
        if (soundEffects.value.success) {
          soundEffects.value.success()
        }
      }
    }

    const updateVolume = () => {
      if (masterGain.value) {
        masterGain.value.gain.setValueAtTime(
          volume.value / 100, 
          audioContext.value.currentTime
        )
      }
    }

    // Add global sound effects to buttons
    const addSoundEffectsToButtons = () => {
      // Add hover effects to navigation items
      const navItems = document.querySelectorAll('.nav-item, .sound-toggle')
      navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
          if (isEnabled.value && soundEffects.value.hover) {
            soundEffects.value.hover()
          }
        })
        
        item.addEventListener('click', () => {
          if (isEnabled.value && soundEffects.value.click) {
            soundEffects.value.click()
          }
        })
      })

      // Add typing effects to console input
      const consoleInput = document.querySelector('.console-content input')
      if (consoleInput) {
        consoleInput.addEventListener('keypress', () => {
          if (isEnabled.value && soundEffects.value.type) {
            soundEffects.value.type()
          }
        })
      }
    }

    onMounted(() => {
      // Add sound effects after DOM is ready
      setTimeout(addSoundEffectsToButtons, 1000)
    })

    onUnmounted(() => {
      stopMusic()
      if (audioContext.value) {
        audioContext.value.close()
      }
    })

    return {
      isEnabled,
      volume,
      currentTrack,
      currentBPM,
      isBeat,
      toggleSound,
      changeTrack,
      updateVolume
    }
  }
}
</script>

<style lang="scss" scoped>
.cyber-sound-manager {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sound-toggle {
  background: rgba(10, 10, 10, 0.9);
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: var(--matrix-green);
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(0, 255, 65, 0.1);
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
    transform: translateY(-2px);
  }
  
  &.active {
    border-color: var(--cyber-blue);
    color: var(--cyber-blue);
    
    &:hover {
      background: rgba(0, 255, 255, 0.1);
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
    }
  }
}

.sound-controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sound-icon {
  width: 20px;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sound-waves {
  position: relative;
  width: 100%;
  height: 100%;
}

.wave {
  position: absolute;
  border: 1px solid currentColor;
  border-radius: 50%;
  animation: sound-wave 2s ease-in-out infinite;
  
  &.wave-1 {
    width: 6px;
    height: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 0s;
  }
  
  &.wave-2 {
    width: 12px;
    height: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 0.3s;
  }
  
  &.wave-3 {
    width: 18px;
    height: 18px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 0.6s;
  }
}

.sound-off {
  font-size: 1.2rem;
  font-weight: bold;
}

.sound-label {
  font-weight: bold;
  letter-spacing: 1px;
}

.volume-control {
  background: rgba(10, 10, 10, 0.9);
  border: 1px solid var(--cyber-blue);
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
}

.volume-label {
  color: var(--cyber-blue);
  font-weight: bold;
  min-width: 25px;
}

.volume-slider {
  width: 80px;
  height: 4px;
  background: rgba(0, 255, 255, 0.2);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    background: var(--cyber-blue);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 5px var(--cyber-blue);
  }
  
  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: var(--cyber-blue);
    border-radius: 50%;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 5px var(--cyber-blue);
  }
}

.volume-value {
  color: var(--cyber-blue);
  font-weight: bold;
  min-width: 30px;
  text-align: right;
}

.track-selector {
  background: rgba(10, 10, 10, 0.9);
  border: 1px solid var(--neon-pink);
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
}

.track-label {
  color: var(--neon-pink);
  font-weight: bold;
  min-width: 40px;
}

.track-dropdown {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--neon-pink);
  border-radius: 2px;
  color: var(--neon-pink);
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  padding: 0.2rem;
  cursor: pointer;
  min-width: 120px;
  
  option {
    background: rgba(0, 0, 0, 0.9);
    color: var(--neon-pink);
  }
}

.beat-indicator {
  background: rgba(10, 10, 10, 0.9);
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  padding: 0.5rem;
  color: var(--matrix-green);
  font-family: 'Courier New', monospace;
  font-size: 0.7rem;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.1s ease;
  
  &.beat {
    background: rgba(0, 255, 65, 0.2);
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
    transform: scale(1.05);
  }
}

@keyframes sound-wave {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1.5);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .cyber-sound-manager {
    top: 10px;
    right: 10px;
  }
  
  .sound-toggle {
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
  }
  
  .volume-control,
  .track-selector,
  .beat-indicator {
    padding: 0.4rem;
    font-size: 0.6rem;
  }
  
  .volume-slider {
    width: 60px;
  }
  
  .track-dropdown {
    font-size: 0.6rem;
    min-width: 100px;
  }
}
</style> 