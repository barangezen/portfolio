<template>
  <div class="portfolio-container">
    <!-- Loading Screen -->
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <div class="loading-logo">
          BG
          <div class="logo-dot"></div>
        </div>
        <div class="loading-bar"></div>
        <div class="loading-text">Loading Portfolio...</div>
      </div>
    </div>

    <!-- Background Elements -->
    <div class="background-elements">
      <div class="floating-orb"></div>
      <div class="floating-orb"></div>
      <div class="floating-orb"></div>
      <div class="gradient-mesh"></div>
    </div>

    <!-- Modern Navigation -->
    <nav class="modern-nav" :class="{ 'nav-visible': !isLoading }">
      <div class="nav-content">
        <router-link to="/" class="nav-logo">
          <div class="logo-container">
            <span class="logo-text">Baran Gezen</span>
            <div class="logo-dot"></div>
          </div>
        </router-link>
        
        <div class="nav-links">
          <router-link 
            v-for="route in routes" 
            :key="route.path" 
            :to="route.path" 
            class="nav-item"
          >
            <span class="nav-text">{{ route.name }}</span>
            <div class="nav-indicator"></div>
          </router-link>
        </div>

        <div class="nav-toggle" @click="toggleMobileNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content" :class="{ 'content-visible': !isLoading }">
      <div class="router-view-container">
        <router-view v-slot="{ Component, route }">
          <transition 
            :name="transitionName"
            mode="out-in"
            @before-leave="beforeLeave"
            @enter="enter"
            @after-enter="afterEnter"
            @after-leave="afterLeave"
          >
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </div>
    </main>

    <!-- Footer -->
    <footer class="modern-footer" :class="{ 'footer-visible': !isLoading }">
      <div class="footer-content">
        <div class="footer-text">
          <span>Created by</span>
          <span class="footer-name">Baran Gezen</span>
          <span>using</span>
          <span class="footer-tech">Vue.js</span>
          <span>and</span>
          <span class="footer-heart">❤️</span>
        </div>
        <div class="footer-year">
          © {{ new Date().getFullYear() }}
        </div>
      </div>
    </footer>

    <!-- Scroll Progress -->
    <div class="scroll-progress">
      <div class="progress-bar" :style="{ width: `${scrollProgress}%` }"></div>
    </div>

    <!-- Custom Cursor -->
    <div class="custom-cursor" ref="cursor">
      <div class="cursor-dot"></div>
      <div class="cursor-ring"></div>
      <div class="cursor-text"></div>
      <div class="cursor-trail"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const currentRouteName = ref('')
    const isLoading = ref(true)
    const progress = ref(0)
    const isNavVisible = ref(false)
    const transitionName = ref('fade')
    const scrollProgress = ref(0)
    const cursor = ref(null)
    const mobileNavOpen = ref(false)
    
    // Route definitions
    const routes = ref([
      { path: '/', name: 'Home' },
      { path: '/about', name: 'About' },
      { path: '/experience', name: 'Experience' },
      { path: '/interests', name: 'Interests' }
    ])

    // Navigation visibility on scroll
    onMounted(() => {
      // Loading sequence
      const loadingTimer = setInterval(() => {
        progress.value += Math.random() * 15
        if (progress.value >= 100) {
          progress.value = 100
          clearInterval(loadingTimer)
          setTimeout(() => {
            isLoading.value = false
            setTimeout(() => {
              isNavVisible.value = true
            }, 300)
          }, 800)
        }
      }, 100)

      // Route change handler
      router.afterEach((to) => {
        currentRouteName.value = to.name
      })

      // Initialize cursor
      if (cursor.value) {
        cursor.value.style.left = '50px'
        cursor.value.style.top = '50px'
      }
    })

    // Scroll progress tracking
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.value = (scrollTop / docHeight) * 100
    }

    // Optimized cursor movement - no delays
    const updateCursor = (e) => {
      if (cursor.value) {
        cursor.value.style.left = e.clientX + 'px'
        cursor.value.style.top = e.clientY + 'px'
      }
    }

    const handleMouseEnter = (e) => {
      if (cursor.value && e.target) {
        const target = e.target
        
        // Ensure target is an element and has matches method
        if (!target.nodeType || target.nodeType !== Node.ELEMENT_NODE) return
        
        // Polyfill for matches method
        const matches = target.matches || target.webkitMatchesSelector || target.mozMatchesSelector || target.msMatchesSelector
        if (!matches) return
        
        const cursorText = cursor.value.querySelector('.cursor-text')
        
        // Reset classes
        cursor.value.className = 'custom-cursor'
        
        // Check element type and add appropriate class
        try {
          if (matches.call(target, 'a, button, .nav-item, .tech-tag, .achievement-tag, .goal-card, .highlight-card, .interest-card, .experience-card, .skill-category')) {
            cursor.value.classList.add('cursor-hover')
          } else if (matches.call(target, '.logo-text, .page-title, .section-title')) {
            cursor.value.classList.add('cursor-text')
            if (cursorText) cursorText.textContent = 'Click'
          } else if (matches.call(target, 'img, .logo-placeholder, .card-icon')) {
            cursor.value.classList.add('cursor-view')
            if (cursorText) cursorText.textContent = 'View'
          } else if (matches.call(target, '.scroll-progress, .loading-progress')) {
            cursor.value.classList.add('cursor-progress')
          }
        } catch (error) {
          // Fallback: check classes manually
          const className = target.className || ''
          const tagName = target.tagName ? target.tagName.toLowerCase() : ''
          
          if (tagName === 'a' || tagName === 'button' || 
              className.includes('nav-item') || className.includes('tech-tag') || 
              className.includes('achievement-tag') || className.includes('goal-card') ||
              className.includes('highlight-card') || className.includes('interest-card') ||
              className.includes('experience-card') || className.includes('skill-category')) {
            cursor.value.classList.add('cursor-hover')
          } else if (className.includes('logo-text') || className.includes('page-title') || className.includes('section-title')) {
            cursor.value.classList.add('cursor-text')
            if (cursorText) cursorText.textContent = 'Click'
          } else if (tagName === 'img' || className.includes('logo-placeholder') || className.includes('card-icon')) {
            cursor.value.classList.add('cursor-view')
            if (cursorText) cursorText.textContent = 'View'
          } else if (className.includes('scroll-progress') || className.includes('loading-progress')) {
            cursor.value.classList.add('cursor-progress')
          }
        }
      }
    }

    const handleMouseLeave = () => {
      if (cursor.value) {
        cursor.value.className = 'custom-cursor'
        const cursorText = cursor.value.querySelector('.cursor-text')
        if (cursorText) cursorText.textContent = ''
      }
    }

    // Route transition logic - simplified and fast
    const isTransitioning = ref(false)
    
    watch(route, (to, from) => {
      if (from && to.path !== from.path && !isTransitioning.value) {
        isTransitioning.value = true
        transitionName.value = 'fade'
        
        // Reset transition flag quickly
        setTimeout(() => {
          isTransitioning.value = false
        }, 400)
      }
    })

    // Mobile navigation toggle
    const toggleMobileNav = () => {
      mobileNavOpen.value = !mobileNavOpen.value
    }

    // Simplified transition handlers - no positioning
    const beforeLeave = () => {
      // Do nothing - let CSS handle everything
    }

    const enter = () => {
      // Do nothing - let CSS handle everything  
    }

    const afterEnter = () => {
      // Just scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const afterLeave = () => {
      // Do nothing - let CSS handle everything
    }

    onMounted(() => {
      window.addEventListener('scroll', updateScrollProgress)
      window.addEventListener('mousemove', updateCursor)
      
      // Add cursor interaction listeners with better event handling
      document.addEventListener('mouseover', handleMouseEnter)
      document.addEventListener('mouseout', handleMouseLeave)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('mousemove', updateCursor)
      
      // Remove cursor interaction listeners
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    })

    return {
      currentRouteName,
      isLoading,
      progress,
      isNavVisible,
      transitionName,
      scrollProgress,
      cursor,
      mobileNavOpen,
      routes,
      isTransitioning,
      toggleMobileNav,
      beforeLeave,
      enter,
      afterEnter,
      afterLeave,
      handleMouseEnter,
      handleMouseLeave
    }
  }
}
</script>

<style lang="scss">
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --bg-tertiary: #1a1a1a;
  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --accent-primary: #10b981;
  --accent-secondary: #06d6a0;
  --accent-tertiary: #59e8c6;
  --accent-warm: #f59e0b;
  --accent-purple: #8b5cf6;
  --border-primary: rgba(255, 255, 255, 0.08);
  --border-secondary: rgba(255, 255, 255, 0.05);
  --glow-primary: rgba(16, 185, 129, 0.3);
  --glow-secondary: rgba(6, 214, 160, 0.2);
  --glass-bg: rgba(255, 255, 255, 0.04);
  --glass-border: rgba(255, 255, 255, 0.08);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  cursor: none;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 4px;
    border: 1px solid var(--border-primary);
    
    &:hover {
      background: linear-gradient(180deg, var(--accent-tertiary), var(--accent-primary));
      box-shadow: 0 0 8px var(--glow-primary);
    }
  }
}

// Ultra-smooth page transitions
.fade-enter-active, 
.fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-enter-from, 
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

// Enhanced Loading Animation
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  
  &.fade-out {
    opacity: 0;
    visibility: hidden;
  }
  
  .loading-content {
    text-align: center;
    
    .loading-logo {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--text-primary);
      margin-bottom: 2rem;
      opacity: 0;
      animation: fadeInUp 1s ease forwards 0.2s;
      
      .logo-dot {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
        border-radius: 50%;
        margin-left: 0.5rem;
        animation: pulse 1.5s infinite;
        box-shadow: 0 0 20px var(--glow-primary);
      }
    }
    
    .loading-bar {
      width: 200px;
      height: 3px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
      overflow: hidden;
      position: relative;
      
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -200px;
        width: 200px;
        height: 100%;
        background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
        animation: loading 1.5s ease-in-out infinite;
        border-radius: 2px;
        box-shadow: 0 0 10px var(--glow-primary);
      }
    }
    
    .loading-text {
      margin-top: 1.5rem;
      color: var(--text-secondary);
      font-size: 0.9rem;
      opacity: 0;
      animation: fadeInUp 1s ease forwards 0.4s;
    }
  }
}

.portfolio-container {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

// Background Elements
.background-elements {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
  
  .floating-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;
    
    &:nth-child(1) {
      width: 300px;
      height: 300px;
      background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
      top: 20%;
      left: 10%;
      animation-delay: 0s;
      animation-duration: 8s;
    }
    
    &:nth-child(2) {
      width: 200px;
      height: 200px;
      background: linear-gradient(135deg, var(--accent-secondary), var(--accent-tertiary));
      top: 60%;
      right: 20%;
      animation-delay: 2s;
      animation-duration: 10s;
    }
    
    &:nth-child(3) {
      width: 150px;
      height: 150px;
      background: linear-gradient(225deg, var(--accent-tertiary), var(--accent-primary));
      bottom: 30%;
      left: 50%;
      animation-delay: 4s;
      animation-duration: 12s;
    }
  }
  
  .gradient-mesh {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(90, 103, 216, 0.03) 0%, transparent 50%);
    opacity: 0.7;
  }
}

// Modern Navigation
.modern-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1000;
  opacity: 0;
  transform: translateY(-100%);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.02) 0%, 
      rgba(255, 255, 255, 0.01) 50%, 
      transparent 100%
    );
    pointer-events: none;
  }
  
  &.nav-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
}

.nav-logo {
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  
  &:hover {
    transform: translateY(-1px);
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem;
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, 
        rgba(16, 185, 129, 0.1) 0%, 
        transparent 70%
      );
      opacity: 0;
      transform: scale(0.8);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    &:hover {
      background: rgba(16, 185, 129, 0.08);
      transform: scale(1.02);
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
      
      &:before {
        opacity: 1;
        transform: scale(1);
      }
      
      .logo-text {
        color: var(--accent-primary);
        letter-spacing: 0.02em;
        text-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
      }
      
      .logo-dot {
        transform: scale(1.3) rotate(180deg);
        background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
        box-shadow: 0 0 25px var(--glow-primary);
      }
    }
    
    .logo-text {
      font-size: 1.5rem;
      font-weight: 800;
      color: #f8fafc;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      letter-spacing: -0.02em;
    }
    
    .logo-dot {
      width: 8px;
      height: 8px;
      background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
      border-radius: 50%;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 0 12px var(--glow-primary);
    }
  }
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
}

.nav-item {
  position: relative;
  text-decoration: none;
  color: #cbd5e1;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.875rem 1.75rem;
  border-radius: 14px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  letter-spacing: 0.01em;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      rgba(16, 185, 129, 0.12) 0%, 
      rgba(6, 214, 160, 0.08) 100%
    );
    opacity: 0;
    transform: scale(0.95) translateY(10px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 14px;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
    transform: translateX(-50%);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 0 8px var(--glow-primary);
  }
  
  &:hover {
    color: var(--accent-primary);
    transform: translateY(-2px);
    background: rgba(16, 185, 129, 0.1);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.2);
    
    &:before {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    
    &:after {
      width: 70%;
    }
    
    .nav-text {
      transform: translateY(-1px);
      text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
    }
  }
  
  &.router-link-active {
    color: var(--accent-primary);
    background: rgba(16, 185, 129, 0.15);
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
    
    &:before {
      opacity: 1;
      transform: scale(1) translateY(0);
      background: linear-gradient(135deg, 
        rgba(16, 185, 129, 0.2) 0%, 
        rgba(6, 214, 160, 0.15) 100%
      );
    }
    
    &:after {
      width: 80%;
      height: 3px;
      background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
      box-shadow: 0 0 15px var(--glow-primary);
    }
    
    .nav-text {
      font-weight: 600;
      text-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
    }
    
    .nav-indicator {
      opacity: 1;
      transform: scaleX(1);
      background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
    }
  }
  
  .nav-text {
    position: relative;
    z-index: 2;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .nav-indicator {
    position: absolute;
    bottom: 6px;
    left: 50%;
    width: 24px;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 1px;
    transform: translateX(-50%) scaleX(0);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 0.875rem;
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: scale(1.05);
    
    span {
      background: #ffffff;
      
      &:nth-child(1) {
        transform: translateX(3px);
      }
      
      &:nth-child(2) {
        transform: scaleX(0.7);
      }
      
      &:nth-child(3) {
        transform: translateX(-3px);
      }
    }
  }
  
  span {
    width: 22px;
    height: 2px;
    background: #cbd5e1;
    border-radius: 1px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: center;
  }
}

// Main Content
.main-content {
  padding-top: 100px;
  min-height: 100vh;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &.content-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

// Scroll Progress
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--bg-secondary);
  z-index: 1001;
  
  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary));
    transition: width 0.1s ease;
    box-shadow: 0 0 10px var(--glow-primary);
  }
}

// Modern Custom Cursor
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transition: none;
  
  .cursor-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--accent-primary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.15s ease;
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.6);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
  
  .cursor-ring {
    position: absolute;
    top: -15px;
    left: -15px;
    width: 30px;
    height: 30px;
    border: 1px solid var(--accent-primary);
    border-radius: 50%;
    opacity: 0.4;
    transition: all 0.15s ease;
    background: rgba(16, 185, 129, 0.05);
  }
  
  .cursor-text {
    position: absolute;
    top: -40px;
    left: -25px;
    padding: 6px 12px;
    background: var(--accent-primary);
    border-radius: 20px;
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
    opacity: 0;
    transform: translateY(10px) scale(0.8);
    transition: all 0.2s ease;
    white-space: nowrap;
    box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);
  }
  
  .cursor-trail {
    display: none;
  }

  // Hover State - Modern Design
  &.cursor-hover {
    .cursor-dot {
      width: 12px;
      height: 12px;
      background: var(--accent-secondary);
      box-shadow: 0 0 25px rgba(6, 214, 160, 0.8);
      border-color: rgba(255, 255, 255, 0.5);
    }
    
    .cursor-ring {
      width: 45px;
      height: 45px;
      top: -22.5px;
      left: -22.5px;
      opacity: 0.7;
      border-color: var(--accent-secondary);
      background: rgba(6, 214, 160, 0.1);
      border-width: 2px;
    }
  }

  // Text Hover State
  &.cursor-text {
    .cursor-dot {
      width: 6px;
      height: 6px;
      background: var(--accent-tertiary);
      box-shadow: 0 0 20px rgba(89, 232, 198, 0.7);
    }
    
    .cursor-ring {
      border-color: var(--accent-tertiary);
      background: rgba(89, 232, 198, 0.08);
      opacity: 0.6;
    }
    
    .cursor-text {
      opacity: 1;
      transform: translateY(0) scale(1);
      background: var(--accent-tertiary);
      box-shadow: 0 4px 20px rgba(89, 232, 198, 0.4);
    }
  }

  // View State
  &.cursor-view {
    .cursor-dot {
      width: 10px;
      height: 10px;
      background: var(--accent-primary);
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.7);
    }
    
    .cursor-ring {
      width: 40px;
      height: 40px;
      top: -20px;
      left: -20px;
      border-style: dashed;
      border-width: 2px;
      opacity: 0.8;
      animation: slowRotate 3s linear infinite;
    }
    
    .cursor-text {
      opacity: 1;
      transform: translateY(0) scale(1);
      background: var(--accent-primary);
    }
  }

  // Progress State
  &.cursor-progress {
    .cursor-dot {
      width: 6px;
      height: 6px;
      background: var(--accent-warm);
      box-shadow: 0 0 15px rgba(245, 158, 11, 0.7);
    }
    
    .cursor-ring {
      width: 25px;
      height: 25px;
      top: -12.5px;
      left: -12.5px;
      border-color: var(--accent-warm);
      opacity: 0.6;
      animation: modernPulse 1.5s ease-in-out infinite;
    }
  }
}

// Cursor Animations
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes cursor-pulse {
  0%, 100% { 
    transform: scale(0.8);
    opacity: 0.6;
  }
  50% { 
    transform: scale(1.2);
    opacity: 1;
  }
}

// Keyframe Animations
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

@keyframes loading {
  0% {
    left: -200px;
  }
  50% {
    left: 0;
  }
  100% {
    left: 200px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px var(--glow-primary);
  }
  50% {
    box-shadow: 0 0 30px var(--glow-primary), 0 0 40px var(--glow-secondary);
  }
}

// Page Transition Container - clean and simple
.router-view-container {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 100px);
  will-change: opacity;
}

// Smooth scroll behavior for internal links
html {
  scroll-behavior: smooth;
}

// Enhanced scroll animations
@media (prefers-reduced-motion: no-preference) {
  * {
    scroll-behavior: smooth;
  }
}

// Custom scrollbar for webkit browsers with enhanced styling
@supports selector(::-webkit-scrollbar) {
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
    border-radius: 5px;
    margin: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 50%, var(--accent-tertiary) 100%);
    border-radius: 5px;
    border: 2px solid var(--bg-secondary);
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, var(--accent-secondary) 0%, var(--accent-tertiary) 50%, var(--accent-primary) 100%);
    border: 2px solid var(--bg-tertiary);
    box-shadow: 
      0 0 15px rgba(99, 102, 241, 0.5),
      inset 0 0 10px rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }

  ::-webkit-scrollbar-thumb:active {
    background: linear-gradient(135deg, var(--accent-tertiary) 0%, var(--accent-primary) 100%);
    box-shadow: 
      0 0 20px rgba(6, 182, 212, 0.7),
      inset 0 0 15px rgba(255, 255, 255, 0.2);
  }

  ::-webkit-scrollbar-corner {
    background: var(--bg-secondary);
    border-radius: 5px;
  }
}

// Enhanced transition wrapper
.transition-wrapper {
  position: relative;
  overflow: hidden;
}

// Responsive Design
@media (max-width: 768px) {
  .modern-nav {
    padding: 1rem;
  }
  
  .main-content {
    padding-top: 80px;
  }
  
  .custom-cursor {
    display: none;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  .scroll-progress {
    height: 2px;
  }
  
  // Mobile transition optimizations
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active,
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .router-view-container {
    min-height: calc(100vh - 80px);
    contain: layout style;
  }
}

// Dark mode enhancements
@media (prefers-color-scheme: dark) {
  ::-webkit-scrollbar-track {
    background: var(--bg-primary);
  }
  
  ::-webkit-scrollbar-thumb {
    border: 2px solid var(--bg-primary);
  }
}

// High contrast mode support
@media (prefers-contrast: high) {
  ::-webkit-scrollbar-thumb {
    background: var(--text-primary);
    border: 1px solid var(--bg-primary);
  }
  
  .scroll-progress .progress-bar {
    background: var(--text-primary);
  }
}

// Modern Cursor Animations
@keyframes slowRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes modernPulse {
  0%, 100% { 
    transform: scale(1);
    opacity: 0.6;
  }
  50% { 
    transform: scale(1.3);
    opacity: 0.9;
  }
}

// Modern Footer
.modern-footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 2rem 0;
  margin-top: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(20px);
  
  &.footer-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 0 1rem;
  }
}

.footer-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.95rem;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  .footer-name {
    color: var(--accent-primary);
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      color: var(--accent-secondary);
      text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
    }
  }
  
  .footer-tech {
    color: var(--accent-secondary);
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      color: var(--accent-primary);
      text-shadow: 0 0 10px rgba(6, 214, 160, 0.5);
    }
  }
  
  .footer-heart {
    color: #e91e63;
    font-size: 1.1rem;
    animation: pulse 2s infinite;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.2);
      filter: drop-shadow(0 0 8px rgba(233, 30, 99, 0.6));
    }
  }
}

.footer-year {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
</style>
