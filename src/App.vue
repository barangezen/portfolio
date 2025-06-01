<template>
  <div class="cyber-container">
    <PageLoader :is-loading="isLoading" />
    <CyberCursor />
    
    <!-- Cyberpunk Sound System -->
    <CyberSoundManager />
    
    <!-- Interactive Neon Particles -->
    <NeonParticles />
    
    <!-- Enhanced Cyberpunk Background -->
    <CyberBackground />
    
    <!-- Matrix-style background animation -->
    <div class="matrix-bg">
      <div v-for="n in 50" :key="n" class="matrix-line" :style="{ animationDelay: `${n * 0.1}s` }">
        {{ Math.random() > 0.7 ? randomMatrix() : randomBinary() }}
      </div>
    </div>

    <!-- Cyber Navigation -->
    <nav class="cyber-nav" :class="{ 'nav-visible': !isLoading }">
      <div class="nav-content">
        <router-link to="/" class="nav-logo">
          <div class="glitch-wrapper">
            <span class="glitch-text">BaranGezen</span>
          </div>
        </router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-item">
            <span class="nav-icon">&gt;</span>
            <span class="nav-text">Home</span>
          </router-link>
          <router-link to="/experience" class="nav-item">
            <span class="nav-icon">&gt;</span>
            <span class="nav-text">Experience</span>
          </router-link>
          <router-link to="/about" class="nav-item">
            <span class="nav-icon">&gt;</span>
            <span class="nav-text">About</span>
          </router-link>
          <router-link to="/interests" class="nav-item">
            <span class="nav-icon">&gt;</span>
            <span class="nav-text">Interests</span>
          </router-link>
        </div>
      </div>
    </nav>
    
    <!-- Main Content Area -->
    <main class="main-content" :class="{ 'content-visible': !isLoading }">
      <router-view v-slot="{ Component }">
        <transition 
          :name="transitionName"
          mode="out-in"
          @before-leave="beforeLeave"
          @enter="enter"
          @after-enter="afterEnter"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Decorative Elements -->
    <div class="cyber-grid">
      <div v-for="n in 4" :key="'grid-' + n" class="grid-line"></div>
    </div>
  </div>
</template>

<script>
import CyberCursor from './components/CyberCursor.vue'
import PageLoader from './components/PageLoader.vue'
import CyberBackground from './components/CyberBackground.vue'
import NeonParticles from './components/NeonParticles.vue'
import CyberSoundManager from './components/CyberSoundManager.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: {
    CyberCursor,
    PageLoader,
    CyberBackground,
    NeonParticles,
    CyberSoundManager
  },
  setup() {
    const isLoading = ref(true)
    const transitionName = ref('slide-right')
    const route = useRoute()
    let lastPath = route.path

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false
      }, 3000)
    })

    const beforeLeave = () => {
      const direction = lastPath < route.path ? 'right' : 'left'
      transitionName.value = `slide-${direction}`
      lastPath = route.path
    }

    const enter = (el) => {
      const sections = el.querySelectorAll('.section, .terminal-window, .interest-card')
      sections.forEach((section, index) => {
        section.style.opacity = '0'
        section.style.transform = `translateX(${index % 2 === 0 ? '-' : ''}50px)`
        section.style.transition = 'all 0.5s ease'
        section.style.transitionDelay = `${index * 0.1}s`
      })
    }

    const afterEnter = (el) => {
      const sections = el.querySelectorAll('.section, .terminal-window, .interest-card')
      sections.forEach((section) => {
        section.style.opacity = '1'
        section.style.transform = 'translateX(0)'
      })
    }

    const randomBinary = () => Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')
    
    const randomMatrix = () => {
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
      return Array.from({ length: 15 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    }

    return {
      isLoading,
      transitionName,
      randomBinary,
      randomMatrix,
      beforeLeave,
      enter,
      afterEnter
    }
  }
}
</script>

<style lang="scss">
:root {
  --neon-green: #0f0;
  --matrix-green: #00ff41;
  --cyber-blue: #0ff;
  --neon-pink: #ff1493;
  --dark-bg: #0a0a0a;
  --terminal-bg: #0c0c0c;
  --terminal-border: #1a1a1a;
  --text-color: #fff;
  --grid-color: rgba(0, 255, 65, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--dark-bg);
  color: var(--text-color);
  font-family: 'Courier New', monospace;
  line-height: 1.6;
}

.cyber-container {
  min-height: 100vh;
  position: relative;
}

/* Matrix Background */
.matrix-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
}

.matrix-line {
  position: absolute;
  top: -100%;
  color: var(--matrix-green);
  font-size: 14px;
  line-height: 1;
  opacity: 0.3;
  animation: matrix-fall 20s linear infinite;
  white-space: nowrap;
  
  @for $i from 1 through 50 {
    &:nth-child(#{$i}) {
      left: #{random(100)}vw;
      animation-duration: #{random(15) + 5}s;
    }
  }
}

/* Navigation */
.cyber-nav {
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--matrix-green);
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--cyber-blue),
      transparent
    );
    animation: scan-line 2s linear infinite;
  }
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  text-decoration: none;
  
  .glitch-text {
    color: var(--cyber-blue);
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    
    &::before,
    &::after {
      content: 'BaranGezen';
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
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-item {
  text-decoration: none;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  .nav-icon {
    color: var(--matrix-green);
    font-weight: bold;
  }
  
  &:hover {
    color: var(--cyber-blue);
    transform: translateX(5px);
    
    .nav-icon {
      color: var(--neon-pink);
    }
  }
  
  &.router-link-active {
    color: var(--cyber-blue);
    
    .nav-icon {
      color: var(--neon-pink);
    }
  }
}

/* Main Content */
.main-content {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
}

/* Grid Background */
.cyber-grid {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
}

.grid-line {
  position: absolute;
  background: var(--grid-color);
  
  &:nth-child(1) {
    top: 20%;
    left: 0;
    right: 0;
    height: 1px;
  }
  
  &:nth-child(2) {
    top: 60%;
    left: 0;
    right: 0;
    height: 1px;
  }
  
  &:nth-child(3) {
    top: 0;
    bottom: 0;
    left: 30%;
    width: 1px;
  }
  
  &:nth-child(4) {
    top: 0;
    bottom: 0;
    right: 30%;
    width: 1px;
  }
}

/* Animations */
@keyframes matrix-fall {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
}

@keyframes scan-line {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
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

/* Page Transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

/* Initial Load Animations */
.nav-visible {
  animation: slide-down 0.5s ease forwards;
}

.content-visible {
  animation: fade-in 0.5s ease forwards;
}

@keyframes slide-down {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Section Animations */
.section, .terminal-window, .interest-card {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.5s ease;
  
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-item {
    width: 100%;
    justify-content: center;
  }
}
</style>
