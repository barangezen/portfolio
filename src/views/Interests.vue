<!-- Interests.vue -->
<template>
  <div class="interests-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="page-title">My Interests</h1>
          <p class="page-subtitle">
            Beyond coding, these are the passions that fuel my creativity and keep me balanced
          </p>
        </div>
        <div class="hero-visual">
          <div class="interest-preview">
            <div class="preview-icons">
              <div class="icon-item motorcycle">🏍️</div>
              <div class="icon-item camping">🏕️</div>
              <div class="icon-item travel">✈️</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Interests -->
    <section class="main-interests">
      <div class="interests-grid">
        <!-- Motorcycles -->
        <div class="interest-card motorcycle-card">
          <div class="card-header">
            <div class="icon-wrapper">
              <div class="card-icon">🏍️</div>
            </div>
            <div class="card-title">
              <h2>Motorcycles</h2>
              <span class="card-subtitle">Road Warrior</span>
            </div>
          </div>
          
          <div class="card-content">
            <div class="stats-row">
              <div class="stat">
                <span class="stat-number">40,000+</span>
                <span class="stat-label">Kilometers</span>
              </div>
              <div class="stat">
                <span class="stat-number">4</span>
                <span class="stat-label">Years</span>
              </div>
            </div>
            
            <div class="detail-section">
              <h4>Current Ride</h4>
              <p>Yamaha MT-07 - The perfect balance of power and agility for both city rides and mountain adventures.</p>
            </div>
            
            <div class="achievements">
              <div class="achievement-tag">Mountain Roads</div>
              <div class="achievement-tag">Night Rider</div>
              <div class="achievement-tag">40000+ Kilometers</div>
            </div>
            
            <div class="status">
              <span class="status-dot active"></span>
              <span>Still riding and exploring</span>
            </div>
          </div>
        </div>

        <!-- Camping -->
        <div class="interest-card camping-card">
          <div class="card-header">
            <div class="icon-wrapper">
              <div class="card-icon">🏕️</div>
            </div>
            <div class="card-title">
              <h2>Camping</h2>
              <span class="card-subtitle">Nature Explorer</span>
            </div>
          </div>
          
          <div class="card-content">
            <div class="detail-section">
              <h4>Favorite Spots</h4>
              <p>Karaburun and Foça areas offer the perfect blend of coastal beauty and peaceful nature.</p>
            </div>
            
            <div class="season-info">
              <div class="season-item">
                <span class="season-icon">🌸</span>
                <div>
                  <strong>Best Season</strong>
                  <p>Spring months for perfect weather</p>
                </div>
              </div>
            </div>
            
            <div class="achievements">
              <div class="achievement-tag">Campfire Master</div>
              <div class="achievement-tag">Star Gazer</div>
              <div class="achievement-tag">Trail Finder</div>
            </div>
            
            <div class="purpose">
              <h4>Why I Camp</h4>
              <p>Mental relaxation and finding peace away from the digital world.</p>
            </div>
          </div>
        </div>

        <!-- Traveling -->
        <div class="interest-card travel-card">
          <div class="card-header">
            <div class="icon-wrapper">
              <div class="card-icon">✈️</div>
            </div>
            <div class="card-title">
              <h2>Traveling</h2>
              <span class="card-subtitle">World Explorer</span>
            </div>
          </div>
          
          <div class="card-content">
            <div class="travel-focus">
              <div class="focus-item">
                <span class="focus-icon">🏛️</span>
                <div>
                  <strong>Historical Sites</strong>
                  <p>Exploring ancient civilizations and cultural heritage</p>
                </div>
              </div>
              
              <div class="focus-item">
                <span class="focus-icon">🏖️</span>
                <div>
                  <strong>Coastal Areas</strong>
                  <p>Beautiful shores and Mediterranean landscapes</p>
                </div>
              </div>
            </div>
            
            <div class="achievements">
              <div class="achievement-tag">Culture Seeker</div>
              <div class="achievement-tag">Food Explorer</div>
            </div>
            
            <div class="travel-style">
              <h4>Travel Style</h4>
              <p>Cultural exploration combined with natural landscape photography and local cuisine discovery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Adventure Map Section -->
    <section class="adventure-map">
      <div class="section-header">
        <h2 class="section-title">Adventure Map</h2>
        <p class="section-subtitle">Tracking my journeys and future destinations</p>
      </div>
      
      <div class="map-container">
        <div class="map-placeholder">
          <div class="map-grid">
            <div v-for="n in 12" :key="n" class="grid-line" :class="`line-${n}`"></div>
          </div>
          <div class="map-content">
            <div class="location-pin turkey">
              <div class="pin-icon">📍</div>
              <span>Turkey - Home Base</span>
            </div>
            <div class="location-pin exploration">
              <div class="pin-icon">🗺️</div>
              <span>Exploration Routes</span>
            </div>
            <div class="map-status">
              <div class="status-indicator"></div>
              <span>Adventure map loading...</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Goals Section -->
    <section class="goals-section">
      <div class="section-header">
        <h2 class="section-title">Adventure Goals</h2>
        <p class="section-subtitle">What's next on my journey</p>
      </div>
      
      <div class="goals-grid">
        <div class="goal-card">
          <div class="goal-icon">🏔️</div>
          <h3>Mountain Expeditions</h3>
          <p>Explore more challenging mountain routes and scenic highways across Turkey and Europe.</p>
        </div>
        
        <div class="goal-card">
          <div class="goal-icon">🌍</div>
          <h3>International Tours</h3>
          <p>Plan motorcycle tours to neighboring countries, combining travel with my love for riding.</p>
        </div>
        
        <div class="goal-card">
          <div class="goal-icon">📸</div>
          <h3>Photography Projects</h3>
          <p>Document my adventures through photography, capturing both landscapes and cultural moments.</p>
        </div>
        
        <div class="goal-card">
          <div class="goal-icon">🤝</div>
          <h3>Community Building</h3>
          <p>Connect with fellow riders and outdoor enthusiasts to share experiences and plan group adventures.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'InterestsView',
  setup() {
    onMounted(() => {
      // Animate cards on scroll
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
      document.querySelectorAll('.interest-card, .goal-card, .map-container').forEach(el => {
        observer.observe(el)
      })

      // Animate preview icons
      const previewIcons = document.querySelectorAll('.icon-item')
      previewIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`
      })
    })

    return {}
  }
}
</script>

<style lang="scss" scoped>
.interests-view {
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
    max-width: 500px;
  }
}

.hero-visual {
  .interest-preview {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(20px);
    
    .preview-icons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
    }
    
    .icon-item {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-color);
      animation: float 3s ease-in-out infinite;
      
      &.motorcycle {
        animation-delay: 0s;
      }
      
      &.camping {
        animation-delay: 1s;
      }
      
      &.travel {
        animation-delay: 2s;
      }
    }
  }
}

// Main Interests
.main-interests {
  margin-bottom: 4rem;
}

.interests-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: 1fr;
  }
}

.interest-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  position: relative;
  overflow: hidden;
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  
  &.motorcycle-card {
    &:hover {
      border-color: #ff6b35;
      box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
    }
  }
  
  &.camping-card {
    &:hover {
      border-color: #4caf50;
      box-shadow: 0 20px 40px rgba(76, 175, 80, 0.2);
    }
  }
  
  &.travel-card {
    &:hover {
      border-color: #2196f3;
      box-shadow: 0 20px 40px rgba(33, 150, 243, 0.2);
    }
  }
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  .icon-wrapper {
    position: relative;
    
    .card-icon {
      font-size: 3rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      display: block;
    }
  }
  
  .card-title {
    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
      color: var(--text-primary);
    }
    
    .card-subtitle {
      color: var(--accent-primary);
      font-weight: 500;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
}

.card-content {
  .stats-row {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    
    .stat {
      text-align: center;
      
      .stat-number {
        display: block;
        font-size: 2rem;
        font-weight: 800;
        color: var(--accent-primary);
        margin-bottom: 0.25rem;
      }
      
      .stat-label {
        color: var(--text-secondary);
        font-size: 0.9rem;
      }
    }
  }
  
  .detail-section {
    margin-bottom: 2rem;
    
    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }
    
    p {
      color: var(--text-secondary);
      line-height: 1.6;
    }
  }
  
  .achievements {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  
  .achievement-tag {
    padding: 0.25rem 0.75rem;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid var(--accent-primary);
    border-radius: 20px;
    font-size: 0.8rem;
    color: var(--accent-primary);
    font-weight: 500;
  }
  
  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
    
    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #4caf50;
      
      &.active {
        animation: pulse 2s infinite;
      }
    }
  }
  
  .season-info, .travel-focus {
    margin-bottom: 2rem;
  }
  
  .season-item, .focus-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
    
    .season-icon, .focus-icon {
      font-size: 1.5rem;
      min-width: 40px;
      text-align: center;
    }
    
    strong {
      color: var(--text-primary);
      font-weight: 600;
      display: block;
      margin-bottom: 0.25rem;
    }
    
    p {
      color: var(--text-secondary);
      margin: 0;
      font-size: 0.9rem;
    }
  }
  
  .purpose, .travel-style {
    h4 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
    }
    
    p {
      color: var(--text-secondary);
      line-height: 1.6;
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

// Adventure Map
.adventure-map {
  margin-bottom: 4rem;
}

.map-container {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
}

.map-placeholder {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 3rem;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  
  .map-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    .grid-line {
      position: absolute;
      background: var(--border-color);
      opacity: 0.3;
      
      &:nth-child(odd) {
        width: 1px;
        height: 100%;
        left: calc(var(--line-index) * 8.33%);
      }
      
      &:nth-child(even) {
        height: 1px;
        width: 100%;
        top: calc(var(--line-index) * 16.66%);
      }
    }
  }
  
  .map-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 2rem;
  }
  
  .location-pin {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid var(--accent-primary);
    border-radius: 25px;
    color: var(--accent-primary);
    font-weight: 500;
    
    .pin-icon {
      font-size: 1.2rem;
    }
  }
  
  .map-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
    
    .status-indicator {
      width: 8px;
      height: 8px;
      background: var(--accent-primary);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
  }
}

// Goals Section
.goals-section {
  margin-bottom: 4rem;
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.goal-card {
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
  
  .goal-icon {
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

@keyframes float {
  0%, 100% { 
    transform: translateY(0); 
  }
  50% { 
    transform: translateY(-10px); 
  }
}

// Responsive Design
@media (max-width: 768px) {
  .interests-grid {
    grid-template-columns: 1fr;
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .stats-row {
    justify-content: center;
  }
  
  .goals-grid {
    grid-template-columns: 1fr;
  }
  
  .map-placeholder {
    padding: 2rem;
  }
}
</style> 
