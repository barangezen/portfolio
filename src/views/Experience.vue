<!-- Experience.vue -->
<template>
  <div class="experience-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="page-title">Professional Experience</h1>
          <p class="page-subtitle">
            My journey through different companies and technologies, building scalable solutions and growing as a developer
          </p>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
      <div class="timeline-header">
        <h2 class="section-title">Career Timeline</h2>
        <div class="timeline-line"></div>
      </div>

      <div class="timeline">
        <!-- Current Position -->
        <div class="timeline-item current">
          <div class="timeline-marker">
            <div class="marker-dot current-dot"></div>
            <div class="marker-pulse"></div>
          </div>
          
          <div class="experience-card">
            <div class="card-header">
              <div class="position-info">
                <h3 class="company-name">HOTELRUNNER</h3>
                <p class="role-title">Frontend Engineer</p>
                <div class="duration">
                  <span class="status-badge current">Current Position</span>
                  <span class="date-range">September 2024 - Present</span>
                </div>
              </div>
              <div class="company-logo">
                <div class="logo-placeholder">HR</div>
              </div>
            </div>

            <div class="card-content">
              <div class="achievements-section">
                <h4>Key Achievements</h4>
                <ul class="achievements-list">
                  <li>Developing and maintaining the Design System, including version updates and documentation with Storybook</li>
                  <li>Developing new projects and implementing features for existing projects</li>
                  <li>Fixing bugs and improving code quality in projects</li>
                  <li>Creating a reusable table component using Tanstack's headless table for use across all projects</li>
                  <li>Working in a microfrontend architecture using Shadow DOM and Web Components</li>
                </ul>
              </div>

              <div class="tech-stack">
                <h4>Technologies Used</h4>
                <div class="tech-tags">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">TypeScript</span>
                  <span class="tech-tag">Valtio</span>
                  <span class="tech-tag">Tanstack Query</span>
                  <span class="tech-tag">Headless APIs</span>
                  <span class="tech-tag">Web Components</span>
                  <span class="tech-tag">Storybook</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Previous Positions -->
        <div class="timeline-item">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>
          
          <div class="experience-card">
            <div class="card-header">
              <div class="position-info">
                <h3 class="company-name">SENDEO</h3>
                <p class="role-title">Full-Stack Engineer</p>
                <div class="duration">
                  <span class="date-range">January 2023 - September 2024</span>
                </div>
              </div>
              <div class="company-logo">
                <div class="logo-placeholder">SE</div>
              </div>
            </div>

            <div class="card-content">
              <div class="achievements-section">
                <h4>Key Achievements</h4>
                <ul class="achievements-list">
                  <li>Rewrote company website using Next.js, implementing component tests and Storybook</li>
                  <li>Migrated JavaScript projects to TypeScript and updated BFF architecture</li>
                  <li>Supported backend development with .Net and C# for API updates</li>
                </ul>
              </div>

              <div class="tech-stack">
                <h4>Technologies Used</h4>
                <div class="tech-tags">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">Next.js</span>
                  <span class="tech-tag">TypeScript</span>
                  <span class="tech-tag">Redux</span>
                  <span class="tech-tag">Storybook</span>
                  <span class="tech-tag">.Net</span>
                  <span class="tech-tag">C#</span>
                  <span class="tech-tag">Sass</span>
                  <span class="tech-tag">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>
          
          <div class="experience-card">
            <div class="card-header">
              <div class="position-info">
                <h3 class="company-name">FEATURE/MIND</h3>
                <p class="role-title">Frontend Engineer</p>
                <div class="duration">
                  <span class="date-range">April 2022 - December 2022</span>
                </div>
              </div>
              <div class="company-logo">
                <div class="logo-placeholder">FM</div>
              </div>
            </div>

            <div class="card-content">
              <div class="achievements-section">
                <h4>Key Achievements</h4>
                <ul class="achievements-list">
                  <li>Updated legacy projects to React PWA Kit for e-commerce platforms</li>
                  <li>Provided mentorship to junior developers in React and TypeScript</li>
                  <li>Worked with Salesforce Commerce Cloud ecosystem</li>
                </ul>
              </div>

              <div class="tech-stack">
                <h4>Technologies Used</h4>
                <div class="tech-tags">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">TypeScript</span>
                  <span class="tech-tag">PWA</span>
                  <span class="tech-tag">Salesforce</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>
          
          <div class="experience-card">
            <div class="card-header">
              <div class="position-info">
                <h3 class="company-name">VALPROVIA GMBH</h3>
                <p class="role-title">Frontend Engineer</p>
                <div class="duration">
                  <span class="date-range">March 2021 - April 2022</span>
                </div>
              </div>
              <div class="company-logo">
                <div class="logo-placeholder">VG</div>
              </div>
            </div>

            <div class="card-content">
              <div class="achievements-section">
                <h4>Key Achievements</h4>
                <ul class="achievements-list">
                  <li>Created highly documented and tested code for Microsoft 365 productivity solutions</li>
                  <li>Mentored developers through code reviews and pair programming</li>
                  <li>Led architecture decisions for new features</li>
                </ul>
              </div>

              <div class="tech-stack">
                <h4>Technologies Used</h4>
                <div class="tech-tags">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">TypeScript</span>
                  <span class="tech-tag">Storybook</span>
                  <span class="tech-tag">Jest</span>
                  <span class="tech-tag">Enzyme</span>
                  <span class="tech-tag">Fluent UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="section-header">
        <h2 class="section-title">Technical Expertise</h2>
        <p class="section-subtitle">Technologies and tools I work with daily</p>
      </div>

      <div class="skills-grid">
        <div class="skill-category frontend">
          <div class="category-header">
            <div class="category-icon">⚛️</div>
            <h3>Frontend Development</h3>
          </div>
          <div class="skills-list">
            <div class="skill-tag expert">
              <span class="skill-name">JavaScript / TypeScript</span>
            </div>
            <div class="skill-tag expert">
              <span class="skill-name">React / Next.js</span>
            </div>
            <div class="skill-tag advanced">
              <span class="skill-name">React Native</span>
            </div>
            <div class="skill-tag expert">
              <span class="skill-name">Tailwind / Sass</span>
            </div>
          </div>
        </div>

        <div class="skill-category backend">
          <div class="category-header">
            <div class="category-icon">⚙️</div>
            <h3>Backend Development</h3>
          </div>
          <div class="skills-list">
            <div class="skill-tag expert">
              <span class="skill-name">Node.js / Express</span>
            </div>
            <div class="skill-tag advanced">
              <span class="skill-name">.Net / C#</span>
            </div>
            <div class="skill-tag advanced">
              <span class="skill-name">SQL</span>
            </div>
            <div class="skill-tag advanced">
              <span class="skill-name">NO SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Highlights -->
    <section class="highlights-section">
      <div class="section-header">
        <h2 class="section-title">Career Highlights</h2>
        <p class="section-subtitle">Notable achievements throughout my journey</p>
      </div>

      <div class="highlights-grid">
        <div class="highlight-card">
          <div class="highlight-icon">🏗️</div>
          <h3>Design Systems</h3>
          <p>Built and maintained comprehensive design systems with Storybook documentation, improving development efficiency across teams.</p>
        </div>

        <div class="highlight-card">
          <div class="highlight-icon">🧩</div>
          <h3>Microfrontend Architecture</h3>
          <p>Implemented scalable microfrontend solutions using Shadow DOM and Web Components for better team autonomy.</p>
        </div>

        <div class="highlight-card">
          <div class="highlight-icon">👥</div>
          <h3>Mentorship</h3>
          <p>Mentored junior developers through code reviews, pair programming, and knowledge sharing sessions.</p>
        </div>

        <div class="highlight-card">
          <div class="highlight-icon">🔧</div>
          <h3>Legacy Migration</h3>
          <p>Successfully migrated JavaScript projects to TypeScript and updated architecture for better maintainability.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'ExperienceView',
  setup() {
    onMounted(() => {
      // Animate elements on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      }, observerOptions)
      
      // Observe all animatable elements
      document.querySelectorAll('.timeline-item, .skill-category, .highlight-card').forEach(el => {
        observer.observe(el)
      })
    })

    return {}
  }
}
</script>

<style lang="scss" scoped>
.experience-view {
  padding: 2rem;
  color: var(--text-primary);
  max-width: 1400px;
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
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
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
    max-width: 600px;
  }
}

.experience-summary {
  .summary-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(20px);
    display: flex;
    gap: 2rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }
  
  .summary-stat {
    text-align: center;
    
    .stat-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--accent-primary);
      margin-bottom: 0.25rem;
    }
    
    .stat-label {
      color: var(--text-secondary);
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
}

// Timeline Section
.timeline-section {
  margin-bottom: 4rem;
}

.timeline-header {
  position: relative;
  margin-bottom: 3rem;
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--text-primary);
  }
  
  .timeline-line {
    position: absolute;
    left: 1.5rem;
    top: 4rem;
    bottom: -2rem;
    width: 2px;
    background: linear-gradient(to bottom, var(--accent-primary), transparent);
    
    @media (max-width: 768px) {
      left: 1rem;
    }
  }
}

.timeline {
  position: relative;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
  
  &.animate-in {
    opacity: 1;
    transform: translateX(0);
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
}

.timeline-marker {
  position: absolute;
  left: -0.5rem;
  top: 2rem;
  
  @media (max-width: 768px) {
    left: -1rem;
  }
  
  .marker-dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--bg-primary);
    border: 3px solid var(--accent-primary);
    position: relative;
    z-index: 2;
    
    &.current-dot {
      background: var(--accent-primary);
      box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    }
  }
  
  .marker-pulse {
    position: absolute;
    top: -8px;
    left: -8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid var(--accent-primary);
    animation: pulse-ring 2s infinite;
    opacity: 0;
  }
}

.experience-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem;
  margin-left: 3rem;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    margin-left: 2rem;
    padding: 1.5rem;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: var(--accent-primary);
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.position-info {
  .company-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }
  
  .role-title {
    font-size: 1.1rem;
    color: var(--accent-primary);
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .duration {
    display: flex;
    align-items: center;
    gap: 1rem;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }
  
  .status-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    
    &.current {
      background: rgba(76, 175, 80, 0.1);
      color: #4caf50;
      border: 1px solid #4caf50;
    }
  }
  
  .date-range {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
}

.company-logo {
  .logo-placeholder {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--accent-primary), #8b5cf6);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: white;
    font-size: 1.2rem;
  }
}

.card-content {
  .achievements-section {
    margin-bottom: 2rem;
    
    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }
  }
  
  .achievements-list {
    list-style: none;
    padding: 0;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;
      color: var(--text-secondary);
      line-height: 1.6;
      
      &:before {
        content: '→';
        position: absolute;
        left: 0;
        color: var(--accent-primary);
        font-weight: bold;
      }
    }
  }
  
  .tech-stack {
    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }
  }
  
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tech-tag {
    padding: 0.25rem 0.75rem;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid var(--accent-primary);
    border-radius: 20px;
    font-size: 0.8rem;
    color: var(--accent-primary);
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(99, 102, 241, 0.2);
      transform: translateY(-1px);
    }
  }
}

// Skills Section
.skills-section {
  margin-bottom: 4rem;
}

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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.skill-category {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover {
    border-color: var(--accent-primary);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  .category-icon {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-primary);
  }
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  .skill-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: var(--accent-primary);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(16, 185, 129, 0.1);
    }
    
    &.expert {
      border-left: 4px solid var(--accent-primary);
    }
    
    &.advanced {
      border-left: 4px solid var(--accent-secondary);
    }
    
    &.intermediate {
      border-left: 4px solid var(--accent-warm);
    }
    
    .skill-name {
      font-weight: 600;
      color: var(--text-primary);
      font-size: 0.95rem;
    }
  }
}

// Highlights Section
.highlights-section {
  margin-bottom: 4rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.highlight-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
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
  
  .highlight-icon {
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

// Animations
@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.4;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

// Responsive Design
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
  }
  
  .timeline-line {
    left: 1rem;
  }
  
  .timeline-marker {
    left: -1rem;
  }
  
  .experience-card {
    margin-left: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style> 