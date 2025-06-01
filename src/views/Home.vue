<!-- Home.vue -->
<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <div class="greeting" data-text="Hello, I'm">
            <span class="greeting-text">Hello, I'm</span>
          </div>
          <h1 class="hero-title">
            <span class="title-main">Baran Gezen</span>
            <span class="title-subtitle">Full-Stack Software Engineer</span>
          </h1>
          <p class="hero-description">
            Passionate about creating innovative solutions with modern technologies.
            I build beautiful, functional applications that make a difference.
          </p>
          
          <div class="hero-actions">
            <router-link to="/about" class="cta-button primary">
              <span>Explore My Work</span>
              <div class="button-effect"></div>
            </router-link>
            <router-link to="/experience" class="cta-button secondary">
              <span>View Experience</span>
            </router-link>
          </div>

          <div class="social-links">
            <a href="https://github.com/barangezen" target="_blank" class="social-link github">
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/baran-gezen" target="_blank" class="social-link linkedin">
              <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="visual-container">
            <div class="code-window">
              <div class="window-header">
                <div class="window-controls">
                  <span class="control close"></span>
                  <span class="control minimize"></span>
                  <span class="control maximize"></span>
                </div>
                <span class="window-title">developer.js</span>
              </div>
              <div class="window-content">
                <div class="code-line">
                  <span class="line-number">1</span>
                  <span class="code">
                    <span class="keyword">const</span> 
                    <span class="variable">developer</span> 
                    <span class="operator">=</span> 
                    <span class="punctuation">{</span>
                  </span>
                </div>
                <div class="code-line">
                  <span class="line-number">2</span>
                  <span class="code">
                    <span class="property">name</span>
                    <span class="punctuation">:</span> 
                    <span class="string">"Baran Gezen"</span>
                    <span class="punctuation">,</span>
                  </span>
                </div>
                <div class="code-line">
                  <span class="line-number">3</span>
                  <span class="code">
                    <span class="property">role</span>
                    <span class="punctuation">:</span> 
                    <span class="string">"Full-Stack Engineer"</span>
                    <span class="punctuation">,</span>
                  </span>
                </div>
                <div class="code-line">
                  <span class="line-number">4</span>
                  <span class="code">
                    <span class="property">skills</span>
                    <span class="punctuation">:</span> 
                    <span class="punctuation">[</span>
                    <span class="string">"React"</span>
                    <span class="punctuation">,</span> 
                    <span class="string">"Node.js"</span>
                    <span class="punctuation">]</span>
                    <span class="punctuation">,</span>
                  </span>
                </div>
                <div class="code-line">
                  <span class="line-number">5</span>
                  <span class="code">
                    <span class="property">passion</span>
                    <span class="punctuation">:</span> 
                    <span class="string">"Building amazing things"</span>
                  </span>
                </div>
                <div class="code-line">
                  <span class="line-number">6</span>
                  <span class="code">
                    <span class="punctuation">}</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div class="floating-elements">
              <div class="element react" data-tech="React">⚛️</div>
              <div class="element node" data-tech="Node.js">🟢</div>
              <div class="element ts" data-tech="TypeScript">🔷</div>
              <div class="element vue" data-tech="Vue.js">💚</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="stats-grid">
        <div class="stat-item" data-number="3+">
          <div class="stat-number">3+</div>
          <div class="stat-label">Years of Experience</div>
        </div>
        <div class="stat-item" data-number="50+">
          <div class="stat-number">50+</div>
          <div class="stat-label">Projects Completed</div>
        </div>
        <div class="stat-item" data-number="100%">
          <div class="stat-number">100%</div>
          <div class="stat-label">Client Satisfaction</div>
        </div>
        <div class="stat-item" data-number="∞">
          <div class="stat-number">∞</div>
          <div class="stat-label">Coffee Consumed</div>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="quick-links">
      <div class="links-grid">
        <router-link to="/about" class="link-card">
          <div class="card-icon">👨‍💻</div>
          <h3>About Me</h3>
          <p>Learn more about my background and skills</p>
          <div class="card-arrow">→</div>
        </router-link>
        
        <router-link to="/experience" class="link-card">
          <div class="card-icon">💼</div>
          <h3>Experience</h3>
          <p>Explore my professional journey and projects</p>
          <div class="card-arrow">→</div>
        </router-link>
        
        <router-link to="/interests" class="link-card">
          <div class="card-icon">🏍️</div>
          <h3>Interests</h3>
          <p>Discover my hobbies and personal interests</p>
          <div class="card-arrow">→</div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    let animationFrame

    const startFloatingAnimation = () => {
      const elements = document.querySelectorAll('.floating-elements .element')
      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.5}s`
      })
    }

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = document.querySelector('.hero-visual')
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.1}px)`
      }
    }

    onMounted(() => {
      startFloatingAnimation()
      window.addEventListener('scroll', handleScroll)
      
      // Animate stats on scroll
      const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      }
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      }, observerOptions)
      
      document.querySelectorAll('.stat-item').forEach(item => {
        observer.observe(item)
      })
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    })

    return {}
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

.home-view {
  min-height: 100vh;
  color: var(--text-primary);
}

// Hero Section
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
}

.hero-text {
  .greeting {
    font-size: 1.2rem;
    color: var(--accent-primary);
    margin-bottom: 1rem;
    opacity: 0;
    animation: slideUp 0.8s ease 0.2s forwards;
    
    .greeting-text {
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--accent-primary);
        transform: scaleX(0);
        animation: scaleIn 0.6s ease 0.8s forwards;
      }
    }
  }
  
  .hero-title {
    margin-bottom: 1.5rem;
    
    .title-main {
      display: block;
      font-size: clamp(2.5rem, 6vw, 4rem);
      font-weight: 800;
      background: linear-gradient(135deg, var(--text-primary), var(--accent-primary));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0;
      animation: slideUp 0.8s ease 0.4s forwards;
    }
    
    .title-subtitle {
      display: block;
      font-size: clamp(1.1rem, 3vw, 1.5rem);
      font-weight: 400;
      color: var(--text-secondary);
      margin-top: 0.5rem;
      opacity: 0;
      animation: slideUp 0.8s ease 0.6s forwards;
    }
  }
  
  .hero-description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
    max-width: 500px;
    opacity: 0;
    animation: slideUp 0.8s ease 0.8s forwards;
  }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  opacity: 0;
  animation: slideUp 0.8s ease 1s forwards;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &.primary {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    color: white;
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
      
      .button-effect {
        opacity: 1;
        transform: translateX(100%);
      }
    }
    
    .button-effect {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      opacity: 0;
      transition: all 0.6s ease;
    }
  }
  
  &.secondary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(10px);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--accent-primary);
      transform: translateY(-2px);
    }
  }
}

.social-links {
  display: flex;
  gap: 1rem;
  opacity: 0;
  animation: slideUp 0.8s ease 1.2s forwards;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  .icon {
    width: 20px;
    height: 20px;
  }
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
    
    &.github {
      color: #6e5494;
      box-shadow: 0 10px 30px rgba(110, 84, 148, 0.3);
    }
    
    &.linkedin {
      color: #0077b5;
      box-shadow: 0 10px 30px rgba(0, 119, 181, 0.3);
    }
  }
}

// Hero Visual
.hero-visual {
  position: relative;
  opacity: 0;
  animation: slideUp 0.8s ease 1.4s forwards;
}

.visual-container {
  position: relative;
  transform-style: preserve-3d;
}

.code-window {
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  backdrop-filter: blur(20px);
}

.window-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--bg-tertiary);
  border-bottom: 1px solid var(--border-color);
}

.window-controls {
  display: flex;
  gap: 0.5rem;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  
  &.close { background: #ff5f57; }
  &.minimize { background: #ffbd2e; }
  &.maximize { background: #28ca42; }
}

.window-title {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.window-content {
  padding: 1.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}

.code-line {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  
  .line-number {
    width: 30px;
    color: var(--text-muted);
    user-select: none;
    margin-right: 1rem;
  }
  
  .keyword { color: #ff7b72; }
  .variable { color: #79c0ff; }
  .operator { color: #ff7b72; }
  .property { color: #ffa657; }
  .string { color: #a5d6ff; }
  .punctuation { color: var(--text-secondary); }
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  
  .element {
    position: absolute;
    font-size: 2rem;
    animation: float 6s ease-in-out infinite;
    filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
    
    &.react {
      top: 20%;
      right: -10%;
      animation-delay: 0s;
    }
    
    &.node {
      top: 60%;
      right: 10%;
      animation-delay: 1.5s;
    }
    
    &.ts {
      top: 80%;
      left: -5%;
      animation-delay: 3s;
    }
    
    &.vue {
      top: 10%;
      left: -10%;
      animation-delay: 4.5s;
    }
  }
}

// Stats Section
.stats-section {
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
}

.stats-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  
  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--accent-primary);
  }
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent-primary);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

// Quick Links
.quick-links {
  padding: 4rem 2rem;
}

.links-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.link-card {
  padding: 2rem;
  border-radius: 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent-primary);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    
    .card-arrow {
      transform: translateX(5px);
    }
  }
  
  .card-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .card-arrow {
    color: var(--accent-primary);
    font-size: 1.2rem;
    font-weight: bold;
    transition: transform 0.3s ease;
  }
}

// Animations
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
  }
  25% { 
    transform: translateY(-20px) rotate(90deg); 
  }
  50% { 
    transform: translateY(0) rotate(180deg); 
  }
  75% { 
    transform: translateY(20px) rotate(270deg); 
  }
}

// Responsive Design
@media (max-width: 768px) {
  .hero-section {
    padding: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .links-grid {
    grid-template-columns: 1fr;
  }
  
  .floating-elements {
    display: none;
  }
}
</style> 