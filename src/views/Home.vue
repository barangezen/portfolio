<!-- Home.vue -->
<template>
  <div class="home">
    <div class="section">
      <h1 class="glitch-text">Welcome to My Portfolio</h1>
      <p class="intro-text">
        Full-Stack Software Engineer with a passion for creating innovative solutions.
      </p>
    </div>
    
    <CodeConsole />
  </div>
</template>

<script>
import CodeConsole from '../components/CodeConsole.vue'

export default {
  name: 'HomeView',
  components: {
    CodeConsole
  }
}
</script>

<style lang="scss" scoped>
:root {
  --neon-green: #0f0;
  --matrix-green: #00ff41;
  --cyber-blue: #0ff;
  --neon-pink: #ff1493;
  --dark-bg: #0a0a0a;
  --terminal-bg: #0c0c0c;
  --terminal-border: #1a1a1a;
  --text-color: #fff;
}

.home {
  min-height: 100vh;
  padding: 2rem;
  color: var(--text-color);
  font-family: 'Courier New', monospace;
}

.section {
  text-align: center;
  margin-bottom: 3rem;
}

h1 {
  font-size: 2.5rem;
  color: var(--cyber-blue);
  margin-bottom: 1rem;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  &::before {
    color: var(--neon-pink);
    z-index: -2;
    animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  }
  
  &::after {
    color: var(--neon-green);
    z-index: -1;
    animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  }
}

.intro-text {
  color: var(--text-color);
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.8;
}

/* Terminal Window Styling */
.terminal-window {
  background: var(--terminal-bg);
  border: 1px solid var(--terminal-border);
  border-radius: 6px;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
}

.terminal-header {
  background: #1a1a1a;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff5f56;
  
  &:nth-child(2) {
    background: #ffbd2e;
  }
  
  &:nth-child(3) {
    background: #27c93f;
  }
}

.social-links {
  position: absolute;
  right: 1rem;
  display: flex;
  gap: 1rem;
  z-index: 10;
  
  .social-link {
    color: var(--matrix-green);
    transition: transform 0.3s ease, color 0.3s ease;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    display: flex;
    align-items: center;
    z-index: 10;
    
    .icon {
      width: 20px;
      height: 20px;
      transition: all 0.3s ease;
    }
    
    &:hover {
      transform: translateY(-2px);
      background: transparent;
      border: none;
      outline: none;
      box-shadow: none;
      
      &.github {
        color: #6e5494;
        .icon {
          filter: drop-shadow(0 0 5px #6e5494);
        }
      }
      
      &.linkedin {
        color: #0077b5;
        .icon {
          filter: drop-shadow(0 0 5px #0077b5);
        }
      }
    }
  }
}

.terminal-title {
  color: var(--matrix-green);
  margin-left: 1rem;
  font-size: 0.9rem;
}

.terminal-content {
  padding: 1.5rem;
}

/* Hero Section */
.hero-section {
  margin-bottom: 3rem;
}

.typing-effect {
  .prompt {
    color: var(--matrix-green);
    margin-right: 0.5rem;
  }

  .command {
    color: var(--cyber-blue);
    &::after {
      content: '_';
      animation: blink 1s infinite;
    }
  }
}

.glitch-text {
  font-size: 2.5rem;
  color: var(--neon-green);
  text-shadow: 0 0 5px var(--neon-green);
  margin: 1rem 0;
  position: relative;
  
  &::before,
  &::after {
    content: 'SOFTWARE ENGINEER';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }

  &::before {
    color: var(--cyber-blue);
    z-index: -2;
    animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  }

  &::after {
    color: var(--neon-pink);
    z-index: -1;
    animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  }
}

.tech-stack {
  margin-top: 1rem;
  
  .tech-category {
    margin-bottom: 0.8rem;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    .category-label {
      color: var(--matrix-green);
      font-family: 'Courier New', monospace;
      margin-right: 0.5rem;
    }
    
    .tech-items {
      color: var(--cyber-blue);
      display: inline;
      font-size: 1.1rem;
      
      &:hover {
        text-shadow: 0 0 8px var(--cyber-blue);
      }
    }
  }
}

/* Stats Section */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.stat-item {
  background: rgba(0, 255, 65, 0.05);
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid var(--matrix-green);
}

.stat-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: var(--matrix-green);
}

.progress-container {
  .progress-bar {
    height: 8px;
    background: rgba(0, 255, 65, 0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .progress {
    height: 100%;
    background: var(--matrix-green);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      animation: progress-shine 2s infinite;
    }
  }

  .value {
    color: var(--cyber-blue);
    font-size: 0.9rem;
  }
}

/* Interests Section */
.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.interest-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);

    .binary-icon {
      color: var(--cyber-blue);
    }
  }
}

.binary-icon {
  color: var(--matrix-green);
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.interest-name {
  color: var(--text-color);
}

/* Animations */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes progress-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }
  
  .glitch-text {
    font-size: 2rem;
  }

  .stats-grid,
  .interests-grid {
    grid-template-columns: 1fr;
  }
  
  .social-links {
    position: static;
    margin-top: 0.5rem;
    justify-content: flex-end;
  }
}
</style> 