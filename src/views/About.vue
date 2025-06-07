<!-- About.vue -->
<template>
  <div class="about-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="page-title">About Me</h1>
          <p class="page-subtitle">
            Get to know more about my background, skills, and passion for technology
          </p>
        </div>
        <div class="profile-card">
          <div class="profile-avatar">
            <img 
              src="/baran-gezen.jpg" 
              alt="Baran Gezen" 
              class="avatar-image" 
              @click="openImageModal"
            />
            <div class="status-indicator"></div>
          </div>
          <div class="profile-info">
            <h3>Baran Gezen</h3>
            <p>Full-Stack Software Engineer</p>
            <div class="availability">
              <span class="status-dot"></span>
              Available for new opportunities
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="education-section">
      <div class="section-header">
        <h2 class="section-title">Education</h2>
        <p class="section-subtitle">My academic journey</p>
      </div>
      
      <div class="education-card">
        <div class="card-icon">🎓</div>
        <div class="card-content">
          <div class="institution">
            <h3>Celal Bayar University</h3>
            <span class="duration">2017 - 2022</span>
          </div>
          <div class="degree">
            <h4>Bachelor of Science in Computer Engineering</h4>
            <div class="grade">
              <span class="label">GPA:</span>
              <span class="value">3.42/4.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="tech-section">
      <div class="section-header">
        <h2 class="section-title">Tech Stack</h2>
        <p class="section-subtitle">Technologies I work with</p>
      </div>

      <div class="tech-grid">
        <div class="tech-category">
          <div class="category-header">
            <div class="category-icon">⚛️</div>
            <h3>Frontend</h3>
          </div>
          <div class="tech-list">
            <span class="tech-tag react">React</span>
            <span class="tech-tag">React Native</span>
            <span class="tech-tag">Next.js</span>
            <span class="tech-tag">Web Components</span>
            <span class="tech-tag">Remix</span>
            <span class="tech-tag">React Query</span>
            <span class="tech-tag">Tailwind</span>
            <span class="tech-tag">Sass</span>
          </div>
        </div>

        <div class="tech-category">
          <div class="category-header">
            <div class="category-icon">🔧</div>
            <h3>Backend</h3>
          </div>
          <div class="tech-list">
            <span class="tech-tag node">Node.js</span>
            <span class="tech-tag">Express</span>
            <span class="tech-tag">.NET</span>
            <span class="tech-tag">SQL</span>
            <span class="tech-tag">NO SQL</span>
          </div>
        </div>

        <div class="tech-category">
          <div class="category-header">
            <div class="category-icon">💻</div>
            <h3>Languages</h3>
          </div>
          <div class="tech-list">
            <span class="tech-tag typescript">TypeScript</span>
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">C#</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="section-header">
        <h2 class="section-title">Professional Skills</h2>
        <p class="section-subtitle">What I bring to the table</p>
      </div>

      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-icon">⚡</div>
          <h3>Full-Stack Development</h3>
          <p>End-to-end application development with modern technologies and best practices.</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">💻</div>
          <h3>Remote Work Specialist</h3>
          <p>Experienced in remote collaboration, communication, and productivity optimization.</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">🔧</div>
          <h3>Modern Tech Stack Expert</h3>
          <p>Proficient in cutting-edge frameworks, tools, and development methodologies.</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">📱</div>
          <h3>Cross-Platform Development</h3>
          <p>Building applications that work seamlessly across web and mobile platforms.</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">🎨</div>
          <h3>UI/UX Implementation</h3>
          <p>Translating designs into pixel-perfect, interactive user interfaces.</p>
        </div>

        <div class="skill-card">
          <div class="skill-icon">🚀</div>
          <h3>Performance Optimization</h3>
          <p>Optimizing applications for speed, efficiency, and exceptional user experience.</p>
        </div>
      </div>
    </section>

    <!-- Personal Info Section -->
    <section class="personal-section">
      <div class="section-header">
        <h2 class="section-title">Personal Touch</h2>
        <p class="section-subtitle">A bit more about who I am</p>
      </div>

      <div class="personal-grid">
        <div class="personal-card">
          <div class="card-content">
            <h3>🌍 Location</h3>
            <p>Based in Turkey, working remotely with global teams</p>
          </div>
        </div>

        <div class="personal-card">
          <div class="card-content">
            <h3>💡 Passion</h3>
            <p>Creating innovative solutions that make a real difference</p>
          </div>
        </div>

        <div class="personal-card">
          <div class="card-content">
            <h3>🎯 Goal</h3>
            <p>Building products that users love and businesses need</p>
          </div>
        </div>

        <div class="personal-card">
          <div class="card-content">
            <h3>📚 Learning</h3>
            <p>Always exploring new technologies and best practices</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Image Modal -->
  <teleport to="body">
    <div 
      v-if="showImageModal" 
      class="image-modal" 
      @click="closeImageModal"
    >
      <div class="modal-backdrop"></div>
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeImageModal">
          <span></span>
          <span></span>
        </button>
        <div class="modal-image-container">
          <img 
            src="/baran-gezen.jpg" 
            alt="Baran Gezen - Full Size" 
            class="modal-image"
          />
          <div class="image-info">
            <h3>Baran Gezen</h3>
            <p>Full-Stack Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'AboutView',
  setup() {
    const showImageModal = ref(false)

    const openImageModal = () => {
      showImageModal.value = true
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    const closeImageModal = () => {
      showImageModal.value = false
      // Restore body scroll
      document.body.style.overflow = ''
    }

    // Handle ESC key to close modal
    const handleKeydown = (e) => {
      if (e.key === 'Escape' && showImageModal.value) {
        closeImageModal()
      }
    }

    onMounted(() => {
      // Animate cards on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      }, observerOptions)

      // Observe all cards
      const cards = document.querySelectorAll('.education-card, .tech-category, .skill-card, .personal-card, .profile-card')
      cards.forEach(card => {
        card.style.opacity = '0'
        card.style.transform = 'translateY(30px)'
        card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        observer.observe(card)
      })

      // Add keyboard event listener
      window.addEventListener('keydown', handleKeydown)
    })

    return {
      showImageModal,
      openImageModal,
      closeImageModal
    }
  }
}
</script>

<style lang="scss" scoped>
.about-view {
  padding: 2rem;
  color: var(--text-primary);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
}

// Hero Section
.hero-section {
  margin-bottom: 4rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.hero-text {
  .page-title {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--text-primary), var(--accent-primary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .page-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 500px;
  }
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  backdrop-filter: blur(20px);
  
  .profile-avatar {
    position: relative;
    
    .avatar-image {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--accent-primary);
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
      
      &:hover {
        transform: scale(1.2);
        box-shadow: 
          0 0 40px rgba(16, 185, 129, 0.6),
          0 0 80px rgba(16, 185, 129, 0.3);
        border-color: var(--accent-secondary);
        border-width: 4px;
        z-index: 10;
      }
    }
    
    .status-indicator {
      position: absolute;
      bottom: 5px;
      right: 5px;
      width: 16px;
      height: 16px;
      background: #28ca42;
      border: 3px solid var(--bg-secondary);
      border-radius: 50%;
      animation: pulse 2s infinite;
      box-shadow: 0 0 10px rgba(40, 202, 66, 0.5);
    }
  }
  
  .profile-info {
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    
    p {
      color: var(--text-secondary);
      margin-bottom: 0.75rem;
    }
    
    .availability {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      color: var(--accent-primary);
      font-weight: 600;
      padding: 0.75rem 1rem;
      background: rgba(16, 185, 129, 0.1);
      border-radius: 12px;
      border: 1px solid rgba(16, 185, 129, 0.2);
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba(16, 185, 129, 0.15);
        border-color: var(--accent-primary);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
      }
      
      .status-dot {
        width: 8px;
        height: 8px;
        background: #28ca42;
        border-radius: 50%;
        animation: pulse 2s infinite;
        box-shadow: 0 0 8px rgba(40, 202, 66, 0.6);
      }
    }
  }
}

// Section Styling
.section-header {
  margin-bottom: 3rem;
  text-align: center;
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }
  
  .section-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
  }
}

// Education Section
.education-section {
  margin-bottom: 4rem;
}

.education-card {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2.5rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover {
    border-color: var(--accent-primary);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  .card-icon {
    font-size: 3rem;
    min-width: 80px;
    text-align: center;
  }
  
  .card-content {
    flex: 1;
    
    .institution {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      
      @media (max-width: 640px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
      
      h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-primary);
      }
      
      .duration {
        color: var(--accent-primary);
        font-weight: 500;
        padding: 0.5rem 1rem;
        background: rgba(99, 102, 241, 0.1);
        border-radius: 8px;
      }
    }
    
    .degree {
      h4 {
        font-size: 1.2rem;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
      }
      
      .grade {
        display: flex;
        gap: 0.5rem;
        
        .label {
          color: var(--text-muted);
        }
        
        .value {
          color: var(--accent-primary);
          font-weight: 600;
        }
      }
    }
  }
}

// Tech Section
.tech-section {
  margin-bottom: 4rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tech-category {
  padding: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover {
    border-color: var(--accent-primary);
    transform: translateY(-5px);
  }
  
  .category-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    
    .category-icon {
      font-size: 2rem;
    }
    
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
    }
  }
  
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  
  .tech-tag {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 0.9rem;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--accent-primary);
      color: var(--text-primary);
      transform: translateY(-2px);
    }
    
    &.react {
      border-color: #61dafb;
      color: #61dafb;
      
      &:hover {
        background: rgba(97, 218, 251, 0.1);
        box-shadow: 0 5px 15px rgba(97, 218, 251, 0.3);
      }
    }
    
    &.node {
      border-color: #68a063;
      color: #68a063;
      
      &:hover {
        background: rgba(104, 160, 99, 0.1);
        box-shadow: 0 5px 15px rgba(104, 160, 99, 0.3);
      }
    }
    
    &.typescript {
      border-color: #3178c6;
      color: #3178c6;
      
      &:hover {
        background: rgba(49, 120, 198, 0.1);
        box-shadow: 0 5px 15px rgba(49, 120, 198, 0.3);
      }
    }
  }
}

// Skills Section
.skills-section {
  margin-bottom: 4rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-card {
  padding: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover {
    border-color: var(--accent-primary);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  .skill-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
}

// Personal Section
.personal-section {
  margin-bottom: 4rem;
}

.personal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.personal-card {
  padding: 2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover {
    border-color: var(--accent-primary);
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.02);
  }
  
  .card-content {
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: var(--text-primary);
    }
    
    p {
      color: var(--text-secondary);
      line-height: 1.6;
      font-size: 0.95rem;
    }
  }
}

// Animations
@keyframes pulse {
  0%, 100% { 
    opacity: 0.8; 
    transform: scale(1); 
  }
  50% { 
    opacity: 1; 
    transform: scale(1.1); 
  }
}

// Responsive Design
@media (max-width: 768px) {
  .education-card {
    flex-direction: column;
    text-align: center;
    
    .card-icon {
      min-width: auto;
    }
  }
  
  .tech-grid,
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .personal-grid {
    grid-template-columns: repeat(2, 1fr);
    
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
}

// Profile card cursor style
.avatar-image {
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
}

// Image Modal Styles
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99998;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: modalFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  
  .modal-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px) saturate(180%);
    animation: backdropFadeIn 0.4s ease-out;
  }
  
  .modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 2rem;
    box-shadow: 
      0 24px 48px rgba(0, 0, 0, 0.5),
      0 0 100px rgba(16, 185, 129, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    animation: modalSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    
    @media (max-width: 768px) {
      padding: 1.5rem;
      max-width: 95vw;
      max-height: 95vh;
    }
  }
  
  .modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 10;
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
    
    &:active {
      transform: scale(0.95);
    }
    
    span {
      position: absolute;
      width: 14px;
      height: 1.5px;
      background: var(--text-primary);
      border-radius: 1px;
      transition: all 0.3s ease;
      
      &:first-child {
        transform: rotate(45deg);
      }
      
      &:last-child {
        transform: rotate(-45deg);
      }
    }
    
    &:hover span {
      background: #ffffff;
      width: 16px;
      height: 2px;
    }
  }
  
  .modal-image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    
    .modal-image {
      max-width: 100%;
      max-height: 70vh;
      width: auto;
      height: auto;
      border-radius: 16px;
      border: 2px solid rgba(255, 255, 255, 0.1);
      box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.3),
        0 0 60px rgba(16, 185, 129, 0.2);
      transition: all 0.3s ease;
      
      @media (max-width: 768px) {
        max-height: 60vh;
        border-radius: 12px;
      }
    }
    
    .image-info {
      text-align: center;
      
      h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
        background: linear-gradient(135deg, var(--text-primary), var(--accent-primary));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      p {
        color: var(--text-secondary);
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
}

// Modal Animations
@keyframes modalFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes backdropFadeIn {
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(20px) saturate(180%);
  }
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style> 