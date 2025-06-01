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
    
    <!-- Optimized Matrix-style background animation -->
    <div class="matrix-bg" :class="{ 'matrix-paused': routeTransitioning }">
      <div v-for="n in matrixLines" :key="n" class="matrix-line" :style="{ 
        animationDelay: `${n * 0.2}s`,
        left: `${(n % 10) * 10}%`,
        animationDuration: `${15 + (n % 5) * 2}s`
      }">
        {{ getMatrixContent(n) }}
      </div>
    </div>

    <!-- Optimized Cyber Navigation -->
    <nav class="cyber-nav" :class="{ 'nav-visible': !isLoading }">
      <div class="nav-content">
        <router-link to="/" class="nav-logo">
          <div class="glitch-wrapper">
            <span class="glitch-text">BaranGezen</span>
          </div>
        </router-link>
        <div class="nav-links">
          <router-link v-for="route in routes" :key="route.path" :to="route.path" class="nav-item">
            <span class="nav-icon">&gt;</span>
            <span class="nav-text">{{ route.name }}</span>
            <div class="nav-progress" v-if="route.path === currentRoute"></div>
          </router-link>
        </div>
      </div>
    </nav>
    
    <!-- Main Content Area with Enhanced Transitions -->
    <main class="main-content" :class="{ 'content-visible': !isLoading }">
      <router-view v-slot="{ Component, route }">
        <transition 
          :name="transitionName"
          mode="out-in"
          @before-leave="beforeLeave"
          @enter="enter"
          @after-enter="afterEnter"
          @leave="leave"
        >
          <keep-alive :include="cachedComponents">
            <component :is="Component" :key="route.path" />
          </keep-alive>
        </transition>
      </router-view>
    </main>

    <!-- Optimized Decorative Elements -->
    <div class="cyber-grid">
      <div v-for="n in 4" :key="'grid-' + n" class="grid-line" :class="`grid-${n}`"></div>
    </div>
    
    <!-- Performance Monitor (dev only) -->
    <div v-if="showPerformanceStats" class="performance-stats">
      <div>FPS: {{ fps }}</div>
      <div>Transition: {{ transitionName }}</div>
    </div>
  </div>
</template>

<script>
import CyberCursor from './components/CyberCursor.vue'
import PageLoader from './components/PageLoader.vue'
import CyberBackground from './components/CyberBackground.vue'
import NeonParticles from './components/NeonParticles.vue'
import CyberSoundManager from './components/CyberSoundManager.vue'
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

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
    const route = useRoute()
    const router = useRouter()
    const isLoading = ref(true)
    const routeTransitioning = ref(false)
    const transitionName = ref('fade')
    const currentRoute = ref(route.path)
    const fps = ref(60)
    const showPerformanceStats = ref(process.env.NODE_ENV === 'development')
    
    // Route definitions for navigation
    const routes = ref([
      { path: '/', name: 'Home' },
      { path: '/experience', name: 'Experience' },
      { path: '/about', name: 'About' },
      { path: '/interests', name: 'Interests' }
    ])
    
    // Components to cache for better performance
    const cachedComponents = ref(['Home', 'Experience', 'About', 'Interests'])
    
    // Optimized matrix lines count based on screen size
    const matrixLines = computed(() => {
      if (typeof window !== 'undefined') {
        return window.innerWidth < 768 ? 15 : 25
      }
      return 25
    })
    
    // Pre-generated matrix content for performance
    const matrixContentCache = ref({})
    
    const getMatrixContent = (index) => {
      if (!matrixContentCache.value[index]) {
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
        const length = Math.random() > 0.7 ? 15 : 20
        matrixContentCache.value[index] = Array.from({ length }, () => 
          Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : Math.random() > 0.5 ? '1' : '0'
        ).join('')
      }
      return matrixContentCache.value[index]
    }

    // Performance monitoring
    let lastTime = performance.now()
    let frameCount = 0
    
    const updateFPS = () => {
      frameCount++
      const currentTime = performance.now()
      if (currentTime >= lastTime + 1000) {
        fps.value = Math.round((frameCount * 1000) / (currentTime - lastTime))
        frameCount = 0
        lastTime = currentTime
      }
      requestAnimationFrame(updateFPS)
    }

    // Enhanced transition logic
    const routeOrder = { '/': 0, '/experience': 1, '/about': 2, '/interests': 3 }
    
    watch(route, (to, from) => {
      currentRoute.value = to.path
      
      if (from && to.path !== from.path) {
        routeTransitioning.value = true
        
        // Determine transition direction
        const toIndex = routeOrder[to.path] || 0
        const fromIndex = routeOrder[from.path] || 0
        
        if (toIndex > fromIndex) {
          transitionName.value = 'slide-left'
        } else if (toIndex < fromIndex) {
          transitionName.value = 'slide-right'
        } else {
          transitionName.value = 'fade'
        }
        
        // Preload route component if not cached
        if (!cachedComponents.value.includes(to.name)) {
          router.resolve(to.path)
        }
      }
    })

    onMounted(async () => {
      // Initialize performance monitoring
      if (showPerformanceStats.value) {
        updateFPS()
      }
      
      // Preload critical routes
      await Promise.all([
        router.resolve('/experience'),
        router.resolve('/about')
      ])
      
      // Reduce loading time
      setTimeout(() => {
        isLoading.value = false
      }, 2000)
    })

    const beforeLeave = (el) => {
      routeTransitioning.value = true
      
      // Add leaving animation class
      el.classList.add('page-leaving')
      
      // Pause heavy animations during transition
      const heavyAnimations = el.querySelectorAll('.matrix-line, .cyber-grid')
      heavyAnimations.forEach(elem => {
        elem.style.animationPlayState = 'paused'
      })
    }

    const leave = (el, done) => {
      const duration = 300
      el.style.transition = `all ${duration}ms ease-out`
      
      nextTick(() => {
        el.style.opacity = '0'
        el.style.transform = 'translateY(-20px) scale(0.95)'
        
        setTimeout(() => {
          done()
        }, duration)
      })
    }

    const enter = (el) => {
      // Reset styles
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px) scale(0.95)'
      el.classList.add('page-entering')
      
      // Stagger animation for child elements
      const sections = el.querySelectorAll('.section, .terminal-window, .interest-card, .experience-item')
      sections.forEach((section, index) => {
        section.style.opacity = '0'
        section.style.transform = 'translateY(30px)'
        section.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        section.style.transitionDelay = `${index * 0.08}s`
      })
    }

    const afterEnter = (el) => {
      routeTransitioning.value = false
      
      // Animate page in
      el.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0) scale(1)'
      
      // Animate sections in
      nextTick(() => {
        const sections = el.querySelectorAll('.section, .terminal-window, .interest-card, .experience-item')
        sections.forEach((section) => {
          section.style.opacity = '1'
          section.style.transform = 'translateY(0)'
        })
        
        // Resume animations
        const heavyAnimations = document.querySelectorAll('.matrix-line, .cyber-grid')
        heavyAnimations.forEach(elem => {
          elem.style.animationPlayState = 'running'
        })
      })
      
      el.classList.remove('page-entering', 'page-leaving')
    }

    return {
      isLoading,
      routeTransitioning,
      transitionName,
      currentRoute,
      routes,
      cachedComponents,
      matrixLines,
      fps,
      showPerformanceStats,
      getMatrixContent,
      beforeLeave,
      leave,
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
  will-change: transform;
}

.matrix-bg.matrix-paused .matrix-line {
  animation-play-state: paused;
}

.matrix-line {
  position: absolute;
  top: -100%;
  color: var(--matrix-green);
  font-size: 14px;
  line-height: 1;
  opacity: 0.3;
  animation: matrix-fall linear infinite;
  white-space: nowrap;
  will-change: transform;
  contain: layout style paint;
  
  @for $i from 1 through 25 {
    &:nth-child(#{$i}) {
      left: #{($i % 10) * 10%};
      animation-delay: #{$i * 0.2}s;
      animation-duration: #{15 + ($i % 5) * 2}s;
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
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  text-decoration: none;
  color: var(--matrix-green);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    color: var(--cyber-blue);
    transform: translateX(5px);
    background: rgba(0, 255, 65, 0.05);
    
    &::before {
      left: 100%;
    }
    
    .nav-icon {
      color: var(--neon-pink);
      transform: scale(1.2);
    }
  }
  
  &.router-link-active {
    color: var(--cyber-blue);
    background: rgba(0, 255, 65, 0.1);
    
    .nav-icon {
      color: var(--neon-pink);
    }
    
    .nav-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background: var(--cyber-blue);
      animation: nav-progress 0.3s ease;
    }
  }
}

.nav-icon {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
  will-change: transform;
}

.grid-line {
  position: absolute;
  background: var(--grid-color);
  will-change: transform;
  
  &.grid-1 {
    top: 20%;
    left: 0;
    right: 0;
    height: 1px;
    animation: grid-pulse 4s ease-in-out infinite;
  }
  
  &.grid-2 {
    top: 60%;
    left: 0;
    right: 0;
    height: 1px;
    animation: grid-pulse 4s ease-in-out infinite reverse;
  }
  
  &.grid-3 {
    top: 0;
    bottom: 0;
    left: 30%;
    width: 1px;
    animation: grid-pulse 6s ease-in-out infinite;
  }
  
  &.grid-4 {
    top: 0;
    bottom: 0;
    right: 30%;
    width: 1px;
    animation: grid-pulse 6s ease-in-out infinite reverse;
  }
}

/* Animations */
@keyframes matrix-fall {
  0% {
    transform: translateY(-100%);
    opacity: 0.3;
  }
  10% {
    opacity: 0.5;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
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

@keyframes grid-pulse {
  0%, 100% {
    opacity: 0.1;
    box-shadow: 0 0 0 rgba(0, 255, 65, 0);
  }
  50% {
    opacity: 0.3;
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
  }
}

@keyframes nav-progress {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes page-enter {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes page-leave {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
}

/* Performance Monitor */
.performance-stats {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: var(--matrix-green);
  padding: 0.5rem 1rem;
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  z-index: 1000;
  
  div {
    margin: 0.2rem 0;
  }
}

/* Page State Classes */
.page-entering {
  animation: page-enter 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.page-leaving {
  animation: page-leave 0.3s ease-out forwards;
}

/* Enhanced Page Transitions */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(50px) scale(0.95);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-50px) scale(1.05);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-50px) scale(0.95);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(50px) scale(1.05);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Initial Load Animations */
.nav-visible {
  animation: slide-down 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.content-visible {
  animation: fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Enhanced Section Animations */
.section, .terminal-window, .interest-card, .experience-item {
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform-style: preserve-3d;
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

  .matrix-line {
    font-size: 12px;
  }
  
  .performance-stats {
    font-size: 0.7rem;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .matrix-line,
  .grid-line {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
  
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active,
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.01ms !important;
  }
}
</style>
