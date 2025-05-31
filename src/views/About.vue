<!-- About.vue -->
<template>
  <div class="about-view">
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-title">about.exe</span>
      </div>
      <div class="terminal-content">
        <div class="command-line">
          <span class="prompt">$</span>
          <span class="command">cat profile.json</span>
        </div>

        <div class="about-sections">
          <div class="section">
            <div class="section-header">
              <span class="prompt">>></span>
              <span class="section-title">EDUCATION</span>
            </div>
            <div class="content">
              <div class="command-line">
                <span class="prompt">$</span>
                <span class="command">cat education.log</span>
              </div>
              <div class="education-info">
                <div class="university">
                  <span class="name">Celal Bayar University</span>
                  <span class="year">[2017-2022]</span>
                </div>
                <div class="department-degree">
                  <span class="degree">B.S. in Computer Engineering</span>
                </div>
                <div class="stats">
                  <span class="gpa">GPA: 3.42/4.00</span>
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-header">
              <span class="prompt">>></span>
              <span class="section-title">TECH_STACK</span>
            </div>
            <div class="content">
              <div class="command-line">
                <span class="prompt">$</span>
                <span class="command">ls tech/</span>
              </div>
              <div class="tech-categories">
                <div class="tech-category">
                  <h3 class="category-title">> Frontend</h3>
                  <div class="tech-tags">
                    <span class="tag">React</span>
                    <span class="tag">React_Native</span>
                    <span class="tag">NextJS</span>
                    <span class="tag">Web Components</span>
                    <span class="tag">Remix</span>
                    <span class="tag">React_Query</span>
                    <span class="tag">Redux / Zustand / Valtio</span>
                    <span class="tag">Tailwind</span>
                    <span class="tag">Bootstrap</span>
                    <span class="tag">Sass</span>
                  </div>
                </div>
                <div class="tech-category">
                  <h3 class="category-title">> Backend</h3>
                  <div class="tech-tags">
                    <span class="tag">NodeJS</span>
                    <span class="tag">Express</span>
                    <span class="tag">Mongoose</span>
                    <span class="tag">.Net</span>
                    <span class="tag">SQL</span>
                    <span class="tag">Entity_Framework</span>
                  </div>
                </div>
                <div class="tech-category">
                  <h3 class="category-title">> Languages</h3>
                  <div class="tech-tags">
                    <span class="tag">TypeScript</span>
                    <span class="tag">JavaScript</span>
                    <span class="tag">C#</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-header">
              <span class="prompt">>></span>
              <span class="section-title">SYSTEM_INFO</span>
            </div>
            <div class="content">
              <div class="command-line">
                <span class="prompt">$</span>
                <span class="command">neofetch</span>
              </div>
              <div class="system-info">
                <div class="info-item">
                  <span class="info-icon">[⚡]</span>
                  <span class="info-text">Full-Stack Developer</span>
                </div>
                <div class="info-item">
                  <span class="info-icon">[💻]</span>
                  <span class="info-text">Remote Work Specialist</span>
                </div>
                <div class="info-item">
                  <span class="info-icon">[🔧]</span>
                  <span class="info-text">Modern Tech Stack Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style lang="scss" scoped>
.about-view {
  padding: 1rem;
}

.terminal-window {
  background: var(--terminal-bg);
  border: 1px solid var(--terminal-border);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.2);
}

.terminal-header {
  background: #1a1a1a;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--terminal-border);
  
  .terminal-title {
    color: var(--matrix-green);
    font-size: 0.9rem;
  }
}

.terminal-content {
  padding: 1.5rem;
}

.command-line {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  
  .prompt {
    color: var(--matrix-green);
  }
  
  .command {
    color: var(--cyber-blue);
  }
}

.about-sections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section {
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  padding: 1.5rem;
  
  &:hover {
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
    
    .section-header {
      color: var(--cyber-blue);
    }
  }
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: var(--matrix-green);
  font-weight: bold;
}

.content {
  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    
    li {
      margin-bottom: 0.5rem;
      display: flex;
      gap: 0.5rem;
      color: var(--text-color);
      
      .bullet {
        color: var(--matrix-green);
      }
    }
  }
}

.education-info {
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  padding: 1rem;
  margin-top: 1rem;

  .university {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    .name {
      color: var(--cyber-blue);
      font-size: 1.1rem;
    }

    .year {
      color: var(--matrix-green);
      font-size: 0.9rem;
    }
  }

  .department-degree {
    margin-bottom: 0.5rem;
  }

  .degree {
    color: var(--cyber-blue);
    font-size: 0.9rem;
  }

  .stats {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
}

.tech-categories {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.tech-category {
  .category-title {
    color: var(--matrix-green);
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: normal;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}

.tag {
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid var(--matrix-green);
  color: var(--cyber-blue);
  padding: 0.3rem 0.8rem;
  border-radius: 2px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 65, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 255, 65, 0.2);
  }
}

.system-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  
  &:hover {
    background: rgba(0, 255, 65, 0.1);
    transform: translateX(5px);
    transition: all 0.3s ease;
    
    .info-icon {
      color: var(--cyber-blue);
    }
  }
  
  .info-icon {
    color: var(--matrix-green);
    font-size: 1.2rem;
  }
  
  .info-text {
    color: var(--text-color);
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .about-view {
    padding: 0.5rem;
  }
  
  .system-info {
    grid-template-columns: 1fr;
  }
  
  .tech-categories {
    gap: 1rem;
  }
  
  .tech-tags {
    justify-content: center;
  }
  
  .education-info {
    .university {
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
    }
  }
}
</style> 