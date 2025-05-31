<!-- Experience.vue -->
<template>
  <div class="experience-view">
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-title">experience.exe</span>
      </div>
      <div class="terminal-content">
        <div class="command-line">
          <span class="prompt">$</span>
          <span class="command">cat work_history.log</span>
        </div>

        <div class="timeline">
          <div class="experience-item">
            <div class="experience-header">
              <div class="status-line">
                <span class="prompt">>></span>
                <span class="status active">CURRENT_MISSION</span>
                <span class="date">[SEPTEMBER 2024 - PRESENT]</span>
              </div>
            </div>
            <div class="experience-content">
              <p class="company">HOTELRUNNER</p>
              <p class="role">Frontend Engineer</p>
              <div class="achievements">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">ls achievements/</span>
                </div>
                <ul>
                  <li><span class="bullet">></span> Developing and maintaining the Design System, including version updates and documentation with Storybook.</li>
                  <li><span class="bullet">></span> Developing new projects and implementing features for existing projects.</li>
                  <li><span class="bullet">></span> Fixing bugs and improving code quality in projects.</li>
                  <li><span class="bullet">></span> Creating a reusable table component using Tanstack's headless table for use across all projects.</li>
                  <li><span class="bullet">></span> Working in a microfrontend architecture using Shadow DOM and Web Components.</li>
                </ul>
              </div>
              <div class="tech-stack">
                <span class="tech-badge">React</span>
                <span class="tech-badge">TypeScript</span>
                <span class="tech-badge">Valtio</span>
                <span class="tech-badge">Tanstack Query</span>
                <span class="tech-badge">Headless APIs</span>
                <span class="tech-badge">Storybook</span>
              </div>
            </div>
          </div>

          <div class="experience-item">
            <div class="experience-header">
              <div class="status-line">
                <span class="prompt">>></span>
                <span class="status completed">PREVIOUS_MISSION</span>
                <span class="date">[JAN 2023 - SEPTEMBER 2024]</span>
              </div>
            </div>
            <div class="experience-content">
              <p class="company">SENDEO</p>
              <p class="role">Full-Stack Engineer</p>
              <div class="achievements">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">ls achievements/</span>
                </div>
                <ul>
                  <li><span class="bullet">></span> Rewrote company website using Next.js, implementing component tests and Storybook</li>
                  <li><span class="bullet">></span> Migrated JavaScript projects to TypeScript and updated BFF architecture</li>
                  <li><span class="bullet">></span> Supported backend development with .Net and C# for API updates</li>
                </ul>
              </div>
              <div class="tech-stack">
                <span class="tech-badge">React</span>
                <span class="tech-badge">Next.js</span>
                <span class="tech-badge">TypeScript</span>
                <span class="tech-badge">Redux</span>
                <span class="tech-badge">Storybook</span>
                <span class="tech-badge">.Net</span>
                <span class="tech-badge">C#</span>
                <span class="tech-badge">Sass</span>
                <span class="tech-badge">Tailwind</span>
              </div>
            </div>
          </div>

          <div class="experience-item">
            <div class="experience-header">
              <div class="status-line">
                <span class="prompt">>></span>
                <span class="status completed">PREVIOUS_MISSION</span>
                <span class="date">[APR 2022 - DEC 2022]</span>
              </div>
            </div>
            <div class="experience-content">
              <p class="company">FEATURE/MIND</p>
              <p class="role">Frontend Engineer</p>
              <div class="achievements">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">ls achievements/</span>
                </div>
                <ul>
                  <li><span class="bullet">></span> Updated legacy projects to React PWA Kit for e-commerce platforms</li>
                  <li><span class="bullet">></span> Provided mentorship to junior developers in React and TypeScript</li>
                  <li><span class="bullet">></span> Worked with Salesforce Commerce Cloud ecosystem</li>
                </ul>
              </div>
              <div class="tech-stack">
                <span class="tech-badge">React</span>
                <span class="tech-badge">TypeScript</span>
                <span class="tech-badge">PWA</span>
                <span class="tech-badge">Salesforce</span>
              </div>
            </div>
          </div>

          <div class="experience-item">
            <div class="experience-header">
              <div class="status-line">
                <span class="prompt">>></span>
                <span class="status completed">PREVIOUS_MISSION</span>
                <span class="date">[MAR 2021 - APR 2022]</span>
              </div>
            </div>
            <div class="experience-content">
              <p class="company">VALPROVIA GMBH</p>
              <p class="role">Frontend Engineer</p>
              <div class="achievements">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">ls achievements/</span>
                </div>
                <ul>
                  <li><span class="bullet">></span> Created highly documented and tested code for Microsoft 365 productivity solutions</li>
                  <li><span class="bullet">></span> Mentored developers through code reviews and pair programming</li>
                  <li><span class="bullet">></span> Led architecture decisions for new features</li>
                </ul>
              </div>
              <div class="tech-stack">
                <span class="tech-badge">React</span>
                <span class="tech-badge">TypeScript</span>
                <span class="tech-badge">Storybook</span>
                <span class="tech-badge">Jest</span>
                <span class="tech-badge">Enzyme</span>
                <span class="tech-badge">Fluent UI</span>
              </div>
            </div>
          </div>
        </div>

        <div class="skills-section">
          <div class="command-line">
            <span class="prompt">$</span>
            <span class="command">./analyze_skills.sh</span>
          </div>
          
          <div class="skills-grid">
            <div class="skill-category">
              <div class="skill-header">
                <span class="prompt">>></span>
                <span class="category-name">FRONTEND_SKILLS</span>
              </div>
              <div class="skill-meter">
                <div class="meter-bar">
                  <div class="meter-fill" style="width: 95%"></div>
                </div>
                <span class="meter-value">95%</span>
              </div>
              <ul class="skill-list">
                <li><span class="bullet">></span> JavaScript / TypeScript</li>
                <li><span class="bullet">></span> React / Next.js</li>
                <li><span class="bullet">></span> React Native</li>
                <li><span class="bullet">></span> TypeScript</li>
                <li><span class="bullet">></span> Redux / Zustand / Valtio</li>
                <li><span class="bullet">></span> Tailwind / Sass</li>
              </ul>
            </div>

            <div class="skill-category">
              <div class="skill-header">
                <span class="prompt">>></span>
                <span class="category-name">BACKEND_SKILLS</span>
              </div>
              <div class="skill-meter">
                <div class="meter-bar">
                  <div class="meter-fill" style="width: 85%"></div>
                </div>
                <span class="meter-value">85%</span>
              </div>
              <ul class="skill-list">
                <li><span class="bullet">></span> Node.js / Express</li>
                <li><span class="bullet">></span> .Net / C#</li>
                <li><span class="bullet">></span> SQL</li>
                <li><span class="bullet">></span> Entity Framework</li>
                <li><span class="bullet">></span> Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceView'
}
</script>

<style lang="scss" scoped>
.experience-view {
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

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}

.experience-item {
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  padding: 1.5rem;
  
  &:hover {
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
    
    .status-line {
      color: var(--cyber-blue);
    }
  }
}

.status-line {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--matrix-green);
  
  .status {
    &.active {
      color: var(--neon-pink);
      animation: pulse 2s infinite;
    }
    
    &.completed {
      color: var(--cyber-blue);
    }
  }
  
  .date {
    opacity: 0.7;
  }
}

.experience-content {
  .company {
    color: var(--text-color);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  .role {
    color: var(--cyber-blue);
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
}

.achievements {
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

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-badge {
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid var(--matrix-green);
  color: var(--cyber-blue);
  padding: 0.3rem 0.8rem;
  border-radius: 2px;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(0, 255, 65, 0.2);
    border-color: var(--cyber-blue);
  }
}

.skills-section {
  margin-top: 3rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.skill-category {
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  padding: 1.5rem;
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: var(--matrix-green);
}

.skill-meter {
  margin-bottom: 1rem;
  
  .meter-bar {
    height: 8px;
    background: rgba(0, 255, 65, 0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
    
    .meter-fill {
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
        animation: meter-shine 2s infinite;
      }
    }
  }
  
  .meter-value {
    color: var(--cyber-blue);
    font-size: 0.9rem;
  }
}

.skill-list {
  list-style: none;
  padding: 0;
  
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

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes meter-shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 768px) {
  .experience-view {
    padding: 0.5rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .status-line {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style> 