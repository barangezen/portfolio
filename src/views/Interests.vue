<!-- Interests.vue -->
<template>
  <div class="interests-view">
    <div class="terminal-window">
      <div class="terminal-header">
        <span class="terminal-title">interests.exe</span>
      </div>
      <div class="terminal-content">
        <div class="command-line">
          <span class="prompt">$</span>
          <span class="command">./scan_interests.sh</span>
        </div>

        <div class="interests-grid">
          <div class="interest-card">
            <div class="card-header">
              <div class="status-line">
                <span class="prompt">>></span>
                <span class="status">MOTORCYCLES</span>
              </div>
            </div>
            <div class="card-content">
              <div class="level-info">
                <span class="level-label">ACCESS_LEVEL:</span>
                <span class="level-value">ROAD_WARRIOR</span>
              </div>
              <div class="achievements">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">cat achievements.log</span>
                </div>
                <div class="achievement-tags">
                  <span class="tag">1000+_MILES</span>
                  <span class="tag">MOUNTAIN_ROADS</span>
                  <span class="tag">NIGHT_RIDER</span>
                </div>
              </div>
              <div class="stats-panel">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">./get_stats.sh</span>
                </div>
                <ul class="stats-list">
                  <li><span class="bullet">></span> Experience: 40,000+ km in 4 years</li>
                  <li><span class="bullet">></span> Current Bike: Yamaha MT-07</li>
                  <li><span class="bullet">></span> Status: Still riding and exploring</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="interest-card">
            <div class="card-header">
              <div class="status-line">
                <span class="prompt">>></span>
                <span class="status">CAMPING</span>
              </div>
            </div>
            <div class="card-content">
              <div class="level-info">
                <span class="level-label">ACCESS_LEVEL:</span>
                <span class="level-value">NATURE_EXPLORER</span>
              </div>
              <div class="achievements">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">cat achievements.log</span>
                </div>
                <div class="achievement-tags">
                  <span class="tag">CAMPFIRE_MASTER</span>
                  <span class="tag">STAR_GAZER</span>
                  <span class="tag">TRAIL_FINDER</span>
                </div>
              </div>
              <div class="stats-panel">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">./get_stats.sh</span>
                </div>
                <ul class="stats-list">
                  <li><span class="bullet">></span> Favorite Spots: Karaburun & Foça areas</li>
                  <li><span class="bullet">></span> Best Season: Spring months</li>
                  <li><span class="bullet">></span> Purpose: Mental relaxation & peace</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="interest-card">
            <div class="card-header">
              <div class="status-line">
                <span class="prompt">>></span>
                <span class="status">TRAVELING</span>
              </div>
            </div>
            <div class="card-content">
              <div class="level-info">
                <span class="level-label">ACCESS_LEVEL:</span>
                <span class="level-value">WORLD_EXPLORER</span>
              </div>
              <div class="achievements">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">cat achievements.log</span>
                </div>
                <div class="achievement-tags">
                  <span class="tag">GLOBE_TROTTER</span>
                  <span class="tag">CULTURE_SEEKER</span>
                  <span class="tag">FOOD_EXPLORER</span>
                </div>
              </div>
              <div class="stats-panel">
                <div class="command-line">
                  <span class="prompt">$</span>
                  <span class="command">./get_stats.sh</span>
                </div>
                <ul class="stats-list">
                  <li><span class="bullet">></span> Preference: Historical sites & coastal areas</li>
                  <li><span class="bullet">></span> Focus: Natural landscapes & scenery</li>
                  <li><span class="bullet">></span> Style: Cultural & nature exploration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="map-section">
          <div class="section-header">
            <div class="command-line">
              <span class="prompt">$</span>
              <span class="command">./render_map.sh</span>
            </div>
          </div>
          <div class="map-content">
            <div class="loading-text">[LOADING ADVENTURE MAP...]</div>
            <div class="map-placeholder">
              <div class="grid-lines">
                <div v-for="n in 20" :key="n" class="grid-line"></div>
              </div>
              <div class="map-status">MAP_RENDERING_IN_PROGRESS...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InterestsView'
}
</script>

<style lang="scss" scoped>
.interests-view {
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

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.interest-card {
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  overflow: hidden;
  
  &:hover {
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.2);
    
    .status-line {
      color: var(--cyber-blue);
    }
  }
}

.card-header {
  padding: 1rem;
  border-bottom: 1px solid var(--matrix-green);
  background: rgba(0, 255, 65, 0.1);
}

.status-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--matrix-green);
  font-weight: bold;
}

.card-content {
  padding: 1.5rem;
}

.level-info {
  margin-bottom: 1.5rem;
  
  .level-label {
    color: var(--matrix-green);
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }
  
  .level-value {
    color: var(--cyber-blue);
    font-size: 0.9rem;
  }
}

.achievements {
  margin-bottom: 1.5rem;
}

.achievement-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  
  .tag {
    background: rgba(0, 255, 65, 0.1);
    border: 1px solid var(--matrix-green);
    color: var(--cyber-blue);
    padding: 0.3rem 0.8rem;
    border-radius: 2px;
    font-size: 0.9rem;
    font-family: 'Courier New', monospace;
    
    &:hover {
      background: rgba(0, 255, 65, 0.2);
      border-color: var(--cyber-blue);
      transform: translateY(-2px);
      transition: all 0.3s ease;
    }
  }
}

.stats-panel {
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  padding: 1rem;
}

.stats-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  
  li {
    margin-bottom: 0.5rem;
    display: flex;
    gap: 0.5rem;
    color: var(--text-color);
    font-size: 0.9rem;
    
    .bullet {
      color: var(--matrix-green);
    }
  }
}

.map-section {
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  padding: 1.5rem;
}

.map-content {
  margin-top: 1rem;
  text-align: center;
  
  .loading-text {
    color: var(--cyber-blue);
    margin-bottom: 1rem;
    font-family: 'Courier New', monospace;
  }
}

.map-placeholder {
  position: relative;
  height: 300px;
  background: rgba(0, 255, 65, 0.05);
  border: 1px solid var(--matrix-green);
  border-radius: 4px;
  overflow: hidden;
}

.grid-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  .grid-line {
    position: absolute;
    background: var(--matrix-green);
    opacity: 0.2;
    
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        left: #{$i * 10%};
        top: 0;
        width: 1px;
        height: 100%;
      }
      
      &:nth-child(#{$i + 10}) {
        top: #{$i * 10%};
        left: 0;
        width: 100%;
        height: 1px;
      }
    }
  }
}

.map-status {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--matrix-green);
  font-family: 'Courier New', monospace;
  animation: blink 1s infinite;
}

@keyframes level-shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@media (max-width: 768px) {
  .interests-view {
    padding: 0.5rem;
  }
  
  .interests-grid {
    grid-template-columns: 1fr;
  }
  
  .achievement-tags {
    justify-content: center;
  }
}
</style> 
