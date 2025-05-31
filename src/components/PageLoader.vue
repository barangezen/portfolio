<!-- PageLoader.vue -->
<template>
  <div class="loader-container" :class="{ 'fade-out': !isLoading }">
    <div class="cyber-loader">
      <div class="loader-content">
        <div class="loader-ring"></div>
        <div class="loader-lines">
          <div v-for="n in 5" :key="n" class="loader-line"></div>
        </div>
        <div class="loader-text">
          <span class="glitch-text" data-text="SYSTEM LOADING">SYSTEM LOADING</span>
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
    const loadingText = ref('Initializing systems...')
    const loadingMessages = [
      'Initializing systems...',
      'Loading neural networks...',
      'Establishing secure connection...',
      'Decrypting data streams...',
      'Accessing mainframe...'
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
  gap: 20px;
}

.loader-ring {
  width: 100px;
  height: 100px;
  border: 2px solid transparent;
  border-top-color: var(--matrix-green);
  border-right-color: var(--cyber-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 2px solid transparent;
    border-top-color: var(--neon-pink);
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }
}

.loader-lines {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
}

.loader-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--matrix-green);
  opacity: 0.2;

  @for $i from 1 through 5 {
    &:nth-child(#{$i}) {
      transform: rotate(#{$i * 36}deg);
      animation: pulse #{random(3) + 1}s infinite;
    }
  }
}

.loader-text {
  text-align: center;
  margin-top: 80px;

  .glitch-text {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--matrix-green);
  }
}

.progress-bar {
  width: 200px;
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

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.6; }
}

@keyframes shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style> 