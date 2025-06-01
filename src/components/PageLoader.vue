<!-- PageLoader.vue -->
<template>
  <div class="loader-container" :class="{ 'fade-out': !isLoading }">
    <div class="cyber-loader">
      <div class="loader-content">
        <!-- Cyberpunk Skull Head -->
        <div class="cyber-skull">
          <!-- Skull Main Structure -->
          <div class="skull-head">
            <!-- Top of skull -->
            <div class="skull-top"></div>
            
            <!-- Eye sockets -->
            <div class="eye-socket left-eye">
              <div class="cyber-eye"></div>
            </div>
            <div class="eye-socket right-eye">
              <div class="cyber-eye"></div>
            </div>
            
            <!-- Nasal cavity -->
            <div class="nasal-cavity"></div>
            
            <!-- Jaw -->
            <div class="skull-jaw">
              <div class="jaw-teeth">
                <div class="tooth" v-for="n in 6" :key="n"></div>
              </div>
            </div>
            
            <!-- Cyber enhancements -->
            <div class="cyber-implant left-implant"></div>
            <div class="cyber-implant right-implant"></div>
            <div class="data-ports">
              <div class="port" v-for="n in 3" :key="n"></div>
            </div>
          </div>
          
          <!-- Glitch effects -->
          <div class="skull-glitch"></div>
          
          <!-- Energy field -->
          <div class="energy-field">
            <div class="energy-ring" v-for="n in 3" :key="n"></div>
          </div>
        </div>
        
        <div class="loader-text">
          <span class="glitch-text" data-text="NEURAL LOADING">NEURAL LOADING</span>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
          </div>
          <div class="loading-status">{{ loadingText }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'PageLoader',
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const progress = ref(0)
    const loadingText = ref('Scanning neural pathways...')
    const loadingMessages = [
      'Scanning neural pathways...',
      'Loading consciousness matrix...',
      'Establishing brain-computer link...',
      'Decrypting memory banks...',
      'Accessing neural networks...'
    ]

    onMounted(() => {
      let messageIndex = 0
      const messageInterval = setInterval(() => {
        messageIndex = (messageIndex + 1) % loadingMessages.length
        loadingText.value = loadingMessages[messageIndex]
      }, 1000)

      const progressInterval = setInterval(() => {
        if (progress.value < 100) {
          progress.value += Math.random() * 15
          if (progress.value > 100) progress.value = 100
        }
      }, 200)

      setTimeout(() => {
        clearInterval(messageInterval)
        clearInterval(progressInterval)
      }, 3000)
    })

    return {
      progress,
      loadingText
    }
  }
}
</script>

<style lang="scss" scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--dark-bg);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease, visibility 0.5s ease;

  &.fade-out {
    opacity: 0;
    visibility: hidden;
  }
}

.cyber-loader {
  position: relative;
  width: 300px;
}

.loader-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

/* Cyberpunk Skull */
.cyber-skull {
  position: relative;
  width: 120px;
  height: 140px;
}

.skull-head {
  position: relative;
  width: 100%;
  height: 100%;
}

.skull-top {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 60px;
  background: #1a1a1a;
  border: 2px solid var(--matrix-green);
  border-radius: 40px 40px 20px 20px;
  box-shadow: 
    0 0 20px var(--matrix-green),
    inset 0 0 10px rgba(0, 255, 65, 0.2);
  animation: skull-glow 2s ease-in-out infinite alternate;
}

.eye-socket {
  position: absolute;
  top: 25px;
  width: 20px;
  height: 25px;
  background: #000;
  border: 1px solid var(--cyber-blue);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow: inset 0 0 10px var(--cyber-blue);
  
  &.left-eye {
    left: 25px;
  }
  
  &.right-eye {
    right: 25px;
  }
}

.cyber-eye {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: var(--neon-pink);
  border-radius: 50%;
  box-shadow: 
    0 0 15px var(--neon-pink),
    0 0 30px var(--neon-pink);
  animation: eye-flicker 1.5s ease-in-out infinite;
}

.nasal-cavity {
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 15px;
  background: #000;
  border: 1px solid var(--matrix-green);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  box-shadow: inset 0 0 5px var(--matrix-green);
}

.skull-jaw {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 25px;
  background: #1a1a1a;
  border: 2px solid var(--matrix-green);
  border-radius: 0 0 35px 35px;
  animation: jaw-move 3s ease-in-out infinite;
  transform-origin: top center;
}

.jaw-teeth {
  position: absolute;
  top: 2px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
}

.tooth {
  width: 3px;
  height: 8px;
  background: #eee;
  border-radius: 0 0 2px 2px;
  box-shadow: 0 0 3px var(--cyber-blue);
}

.cyber-implant {
  position: absolute;
  top: 15px;
  width: 12px;
  height: 12px;
  background: var(--cyber-blue);
  border: 1px solid var(--matrix-green);
  box-shadow: 0 0 10px var(--cyber-blue);
  animation: implant-pulse 1s ease-in-out infinite alternate;
  
  &.left-implant {
    left: 5px;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  }
  
  &.right-implant {
    right: 5px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
  }
}

.data-ports {
  position: absolute;
  bottom: 45px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 3px;
}

.port {
  width: 4px;
  height: 4px;
  background: var(--neon-pink);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--neon-pink);
  animation: port-flicker 0.8s ease-in-out infinite;
  
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
}

.skull-glitch {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--neon-pink) 2%,
    transparent 4%,
    transparent 96%,
    var(--cyber-blue) 98%,
    transparent 100%
  );
  opacity: 0;
  animation: glitch-sweep 4s ease-in-out infinite;
}

.energy-field {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
}

.energy-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--matrix-green);
  border-radius: 50%;
  opacity: 0.3;
  
  &:nth-child(1) {
    width: 120px;
    height: 120px;
    animation: energy-pulse 2s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    width: 160px;
    height: 160px;
    animation: energy-pulse 2s ease-in-out infinite 0.7s;
  }
  
  &:nth-child(3) {
    width: 200px;
    height: 200px;
    animation: energy-pulse 2s ease-in-out infinite 1.4s;
  }
}

.loader-text {
  text-align: center;

  .glitch-text {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--matrix-green);
    position: relative;
    
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
      color: var(--cyber-blue);
      z-index: -1;
      animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
    }
  }
}

.progress-bar {
  width: 250px;
  height: 4px;
  background: rgba(0, 255, 65, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin: 10px 0;
}

.progress-fill {
  height: 100%;
  background: var(--matrix-green);
  position: relative;
  transition: width 0.2s ease;

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
    animation: shine 1s infinite;
  }
}

.loading-status {
  font-size: 0.9rem;
  color: var(--cyber-blue);
  height: 20px;
}

/* Animations */
@keyframes skull-glow {
  0% {
    box-shadow: 
      0 0 20px var(--matrix-green),
      inset 0 0 10px rgba(0, 255, 65, 0.2);
  }
  100% {
    box-shadow: 
      0 0 30px var(--matrix-green),
      0 0 50px var(--matrix-green),
      inset 0 0 15px rgba(0, 255, 65, 0.4);
  }
}

@keyframes eye-flicker {
  0%, 90% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  95% {
    opacity: 0.2;
    transform: translate(-50%, -50%) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes jaw-move {
  0%, 70% {
    transform: translateX(-50%) rotateX(0deg);
  }
  80% {
    transform: translateX(-50%) rotateX(15deg);
  }
  90% {
    transform: translateX(-50%) rotateX(0deg);
  }
  100% {
    transform: translateX(-50%) rotateX(0deg);
  }
}

@keyframes implant-pulse {
  0% {
    box-shadow: 0 0 10px var(--cyber-blue);
    transform: scale(1);
  }
  100% {
    box-shadow: 0 0 20px var(--cyber-blue), 0 0 30px var(--cyber-blue);
    transform: scale(1.1);
  }
}

@keyframes port-flicker {
  0%, 70% {
    opacity: 1;
  }
  75% {
    opacity: 0.3;
  }
  80% {
    opacity: 1;
  }
  85% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes glitch-sweep {
  0%, 80% {
    opacity: 0;
    transform: translateX(-100%);
  }
  85% {
    opacity: 0.8;
    transform: translateX(0%);
  }
  90% {
    opacity: 0.6;
    transform: translateX(50%);
  }
  95% {
    opacity: 0.4;
    transform: translateX(100%);
  }
  100% {
    opacity: 0;
    transform: translateX(150%);
  }
}

@keyframes energy-pulse {
  0% {
    opacity: 0.1;
    transform: translate(-50%, -50%) scale(0.8);
  }
  50% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0.1;
    transform: translate(-50%, -50%) scale(1.2);
  }
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

@keyframes shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@media (max-width: 768px) {
  .cyber-skull {
    width: 100px;
    height: 120px;
  }
  
  .loader-text .glitch-text {
    font-size: 1rem;
  }
  
  .progress-bar {
    width: 200px;
  }
}
</style> 