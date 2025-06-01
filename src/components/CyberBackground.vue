<template>
  <div class="cyber-background">
    <!-- Floating Particles -->
    <div class="particles-container">
      <div 
        v-for="n in 30" 
        :key="'particle-' + n"
        class="particle"
        :style="getParticleStyle(n)"
      ></div>
    </div>

    <!-- Circuit Board Patterns -->
    <div class="circuit-container">
      <svg class="circuit-svg" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#00ff41;stop-opacity:0" />
            <stop offset="50%" style="stop-color:#00ff41;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#00ff41;stop-opacity:0" />
          </linearGradient>
        </defs>
        
        <!-- Circuit Lines -->
        <g class="circuit-lines">
          <path d="M0,200 L300,200 L300,400 L600,400" class="circuit-path" />
          <path d="M800,100 L1200,100 L1200,300 L1600,300" class="circuit-path" />
          <path d="M200,600 L500,600 L500,800 L900,800" class="circuit-path" />
          <path d="M1100,500 L1400,500 L1400,700 L1800,700" class="circuit-path" />
          <path d="M0,900 L400,900 L400,1000 L800,1000" class="circuit-path" />
        </g>
        
        <!-- Circuit Nodes -->
        <g class="circuit-nodes">
          <circle cx="300" cy="200" r="3" class="circuit-node" />
          <circle cx="600" cy="400" r="3" class="circuit-node" />
          <circle cx="1200" cy="100" r="3" class="circuit-node" />
          <circle cx="1600" cy="300" r="3" class="circuit-node" />
          <circle cx="500" cy="600" r="3" class="circuit-node" />
          <circle cx="900" cy="800" r="3" class="circuit-node" />
          <circle cx="1400" cy="500" r="3" class="circuit-node" />
          <circle cx="1800" cy="700" r="3" class="circuit-node" />
        </g>
      </svg>
    </div>

    <!-- Data Streams -->
    <div class="data-streams">
      <div 
        v-for="n in 8" 
        :key="'stream-' + n"
        class="data-stream"
        :style="getStreamStyle(n)"
      >
        <span class="data-text">{{ generateHexData() }}</span>
      </div>
    </div>

    <!-- Energy Waves -->
    <div class="energy-waves">
      <div 
        v-for="n in 3" 
        :key="'wave-' + n"
        class="energy-wave"
        :style="{ animationDelay: `${n * 2}s` }"
      ></div>
    </div>

    <!-- Scanning Grid -->
    <div class="scanning-grid">
      <div class="scan-line-vertical"></div>
      <div class="scan-line-horizontal"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CyberBackground',
  setup() {
    const hexChars = '0123456789ABCDEF'
    
    const generateHexData = () => {
      return Array.from({ length: 16 }, () => 
        hexChars[Math.floor(Math.random() * hexChars.length)]
      ).join('')
    }

    const getParticleStyle = () => {
      const size = Math.random() * 4 + 2
      const left = Math.random() * 100
      const animationDuration = Math.random() * 20 + 10
      const animationDelay = Math.random() * 5
      
      return {
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${animationDelay}s`
      }
    }

    const getStreamStyle = (index) => {
      const left = (index * 12.5) + (Math.random() * 5)
      const animationDuration = Math.random() * 8 + 4
      const animationDelay = Math.random() * 3
      
      return {
        left: `${left}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${animationDelay}s`
      }
    }

    return {
      generateHexData,
      getParticleStyle,
      getStreamStyle
    }
  }
}
</script>

<style lang="scss" scoped>
.cyber-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  pointer-events: none;
}

/* Floating Particles */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  background: var(--cyber-blue);
  border-radius: 50%;
  box-shadow: 
    0 0 10px var(--cyber-blue),
    0 0 20px var(--cyber-blue),
    0 0 30px var(--cyber-blue);
  animation: float-particle 15s linear infinite;
  opacity: 0.6;
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* Circuit Board Patterns */
.circuit-container {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

.circuit-svg {
  width: 100%;
  height: 100%;
}

.circuit-path {
  fill: none;
  stroke: var(--matrix-green);
  stroke-width: 1;
  stroke-dasharray: 5, 5;
  animation: circuit-flow 4s linear infinite;
}

.circuit-node {
  fill: var(--cyber-blue);
  stroke: var(--matrix-green);
  stroke-width: 1;
  animation: node-pulse 2s ease-in-out infinite;
}

@keyframes circuit-flow {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -20;
  }
}

@keyframes node-pulse {
  0%, 100% {
    r: 3;
    fill-opacity: 0.8;
  }
  50% {
    r: 5;
    fill-opacity: 1;
  }
}

/* Data Streams */
.data-streams {
  position: absolute;
  width: 100%;
  height: 100%;
}

.data-stream {
  position: absolute;
  top: -50px;
  writing-mode: vertical-rl;
  animation: data-flow 6s linear infinite;
}

.data-text {
  color: var(--matrix-green);
  font-family: 'Courier New', monospace;
  font-size: 12px;
  opacity: 0.4;
  text-shadow: 0 0 5px var(--matrix-green);
  letter-spacing: 2px;
}

@keyframes data-flow {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  10% {
    opacity: 0.4;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

/* Energy Waves */
.energy-waves {
  position: absolute;
  width: 100%;
  height: 100%;
}

.energy-wave {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  border: 2px solid var(--neon-pink);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: energy-pulse 6s ease-out infinite;
}

@keyframes energy-pulse {
  0% {
    width: 100px;
    height: 100px;
    opacity: 1;
  }
  100% {
    width: 1000px;
    height: 1000px;
    opacity: 0;
  }
}

/* Scanning Grid */
.scanning-grid {
  position: absolute;
  width: 100%;
  height: 100%;
}

.scan-line-vertical {
  position: absolute;
  width: 2px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--cyber-blue),
    transparent
  );
  animation: scan-vertical 8s linear infinite;
}

.scan-line-horizontal {
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    var(--neon-pink),
    transparent
  );
  animation: scan-horizontal 6s linear infinite;
}

@keyframes scan-vertical {
  0% {
    left: -2px;
  }
  100% {
    left: 100%;
  }
}

@keyframes scan-horizontal {
  0% {
    top: -2px;
  }
  100% {
    top: 100%;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .particle {
    width: 2px !important;
    height: 2px !important;
  }
  
  .data-text {
    font-size: 10px;
  }
  
  .energy-wave {
    width: 50px;
    height: 50px;
  }
  
  @keyframes energy-pulse {
    0% {
      width: 50px;
      height: 50px;
      opacity: 1;
    }
    100% {
      width: 500px;
      height: 500px;
      opacity: 0;
    }
  }
}
</style> 