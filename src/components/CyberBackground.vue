<template>
  <div class="cyber-background" :class="{ 'performance-mode': performanceMode }">
    <!-- Floating Particles (Optimized) -->
    <div class="particles-container" v-if="!performanceMode || particlesEnabled">
      <div 
        v-for="n in particleCount" 
        :key="'particle-' + n"
        class="particle"
        :style="getParticleStyle(n)"
      ></div>
    </div>

    <!-- Circuit Board Patterns (Optimized) -->
    <div class="circuit-container" v-if="!performanceMode || circuitsEnabled">
      <svg class="circuit-svg" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#00ff41;stop-opacity:0" />
            <stop offset="50%" style="stop-color:#00ff41;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#00ff41;stop-opacity:0" />
          </linearGradient>
        </defs>
        
        <!-- Circuit Lines (Reduced for performance) -->
        <g class="circuit-lines">
          <path v-for="path in circuitPaths" :key="path.id" :d="path.d" class="circuit-path" :style="{ animationDelay: `${path.delay}s` }" />
        </g>
        
        <!-- Circuit Nodes (Reduced for performance) -->
        <g class="circuit-nodes">
          <circle v-for="node in circuitNodes" :key="node.id" :cx="node.x" :cy="node.y" :r="node.r" class="circuit-node" :style="{ animationDelay: `${node.delay}s` }" />
        </g>
      </svg>
    </div>

    <!-- Data Streams (Optimized) -->
    <div class="data-streams" v-if="!performanceMode || streamsEnabled">
      <div 
        v-for="n in streamCount" 
        :key="'stream-' + n"
        class="data-stream"
        :style="getStreamStyle(n)"
      >
        <span class="data-text">{{ getCachedHexData(n) }}</span>
      </div>
    </div>

    <!-- Energy Waves (Reduced) -->
    <div class="energy-waves" v-if="!performanceMode">
      <div 
        v-for="n in 2" 
        :key="'wave-' + n"
        class="energy-wave"
        :style="{ animationDelay: `${n * 3}s` }"
      ></div>
    </div>

    <!-- Scanning Grid (Optimized) -->
    <div class="scanning-grid" v-if="!performanceMode || gridEnabled">
      <div class="scan-line-vertical"></div>
      <div class="scan-line-horizontal"></div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

export default {
  name: 'CyberBackground',
  setup() {
    const performanceMode = ref(false)
    const particlesEnabled = ref(true)
    const circuitsEnabled = ref(true)
    const streamsEnabled = ref(true)
    const gridEnabled = ref(true)
    
    // Performance-based counts
    const particleCount = computed(() => performanceMode.value ? 15 : 25)
    const streamCount = computed(() => performanceMode.value ? 4 : 6)
    
    // Cached data
    const hexDataCache = ref({})
    const particleStyleCache = ref({})
    const streamStyleCache = ref({})
    
    // Circuit patterns (pre-defined for performance)
    const circuitPaths = ref([
      { id: 1, d: "M0,200 L300,200 L300,400 L600,400", delay: 0 },
      { id: 2, d: "M800,100 L1200,100 L1200,300 L1600,300", delay: 1 },
      { id: 3, d: "M200,600 L500,600 L500,800 L900,800", delay: 2 },
      { id: 4, d: "M1100,500 L1400,500 L1400,700 L1800,700", delay: 0.5 }
    ])
    
    const circuitNodes = ref([
      { id: 1, x: 300, y: 200, r: 3, delay: 0 },
      { id: 2, x: 600, y: 400, r: 3, delay: 0.5 },
      { id: 3, x: 1200, y: 100, r: 3, delay: 1 },
      { id: 4, x: 1600, y: 300, r: 3, delay: 1.5 },
      { id: 5, x: 500, y: 600, r: 3, delay: 2 },
      { id: 6, x: 900, y: 800, r: 3, delay: 2.5 }
    ])
    
    const hexChars = '0123456789ABCDEF'
    
    const generateHexData = () => {
      return Array.from({ length: 12 }, () => 
        hexChars[Math.floor(Math.random() * hexChars.length)]
      ).join('')
    }
    
    const getCachedHexData = (index) => {
      if (!hexDataCache.value[index]) {
        hexDataCache.value[index] = generateHexData()
      }
      return hexDataCache.value[index]
    }

    const getParticleStyle = (index) => {
      if (!particleStyleCache.value[index]) {
        const size = Math.random() * 3 + 1.5
        const left = Math.random() * 100
        const animationDuration = Math.random() * 15 + 8
        const animationDelay = Math.random() * 4
        
        particleStyleCache.value[index] = {
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`
        }
      }
      return particleStyleCache.value[index]
    }

    const getStreamStyle = (index) => {
      if (!streamStyleCache.value[index]) {
        const left = (index * 15) + (Math.random() * 8)
        const animationDuration = Math.random() * 6 + 3
        const animationDelay = Math.random() * 2
        
        streamStyleCache.value[index] = {
          left: `${left}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`
        }
      }
      return streamStyleCache.value[index]
    }
    
    // Performance monitoring
    let performanceCheckInterval
    
    const checkPerformance = () => {
      // Simple performance check based on viewport and connection
      const isLowEnd = window.navigator.hardwareConcurrency <= 4
      const isSlowConnection = navigator.connection && navigator.connection.effectiveType === 'slow-2g'
      const isSmallScreen = window.innerWidth < 768
      
      performanceMode.value = isLowEnd || isSlowConnection || isSmallScreen
      
      // Disable heavy animations on low-end devices
      if (performanceMode.value) {
        particlesEnabled.value = !isSmallScreen
        circuitsEnabled.value = true
        streamsEnabled.value = !isSlowConnection
        gridEnabled.value = true
      }
    }

    onMounted(() => {
      checkPerformance()
      performanceCheckInterval = setInterval(checkPerformance, 5000)
    })
    
    onUnmounted(() => {
      if (performanceCheckInterval) {
        clearInterval(performanceCheckInterval)
      }
    })

    return {
      performanceMode,
      particlesEnabled,
      circuitsEnabled,
      streamsEnabled,
      gridEnabled,
      particleCount,
      streamCount,
      circuitPaths,
      circuitNodes,
      getCachedHexData,
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
  will-change: transform;
  contain: layout style paint;
  
  &.performance-mode {
    .particle {
      animation-duration: 20s !important;
    }
    
    .circuit-path {
      animation: none;
    }
    
    .data-stream {
      animation-duration: 8s !important;
    }
  }
}

/* Optimized Floating Particles */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
  contain: layout style paint;
}

.particle {
  position: absolute;
  background: var(--cyber-blue);
  border-radius: 50%;
  box-shadow: 
    0 0 8px var(--cyber-blue),
    0 0 16px var(--cyber-blue);
  animation: float-particle 12s linear infinite;
  opacity: 0.5;
  will-change: transform, opacity;
  contain: layout style paint;
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.5;
  }
  90% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* Optimized Circuit Board Patterns */
.circuit-container {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  will-change: transform;
  contain: layout style paint;
}

.circuit-svg {
  width: 100%;
  height: 100%;
  will-change: transform;
}

.circuit-path {
  fill: none;
  stroke: var(--matrix-green);
  stroke-width: 1;
  stroke-dasharray: 4, 4;
  animation: circuit-flow 6s linear infinite;
  will-change: stroke-dashoffset;
}

.circuit-node {
  fill: var(--cyber-blue);
  stroke: var(--matrix-green);
  stroke-width: 1;
  animation: node-pulse 3s ease-in-out infinite;
  will-change: transform, opacity;
}

@keyframes circuit-flow {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 20;
  }
}

@keyframes node-pulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}

/* Optimized Data Streams */
.data-streams {
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
  contain: layout style paint;
}

.data-stream {
  position: absolute;
  top: -50px;
  writing-mode: vertical-lr;
  color: var(--matrix-green);
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  opacity: 0.4;
  animation: stream-fall 5s linear infinite;
  will-change: transform, opacity;
  contain: layout style paint;
}

.data-text {
  text-shadow: 0 0 5px var(--matrix-green);
  will-change: transform;
}

@keyframes stream-fall {
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

/* Optimized Energy Waves */
.energy-waves {
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
  contain: layout style paint;
}

.energy-wave {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid var(--cyber-blue);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: energy-expand 4s ease-out infinite;
  will-change: transform, opacity;
}

@keyframes energy-expand {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -50%) scale(30);
    opacity: 0;
  }
}

/* Optimized Scanning Grid */
.scanning-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
  contain: layout style paint;
}

.scan-line-vertical {
  position: absolute;
  top: 0;
  left: 20%;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, 
    transparent 0%, 
    var(--neon-pink) 45%, 
    var(--cyber-blue) 55%, 
    transparent 100%);
  animation: scan-vertical 8s ease-in-out infinite;
  will-change: transform;
}

.scan-line-horizontal {
  position: absolute;
  top: 30%;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, 
    transparent 0%, 
    var(--neon-pink) 45%, 
    var(--cyber-blue) 55%, 
    transparent 100%);
  animation: scan-horizontal 10s ease-in-out infinite;
  will-change: transform;
}

@keyframes scan-vertical {
  0%, 100% {
    left: 10%;
    opacity: 0.3;
  }
  50% {
    left: 80%;
    opacity: 0.8;
  }
}

@keyframes scan-horizontal {
  0%, 100% {
    top: 20%;
    opacity: 0.3;
  }
  50% {
    top: 70%;
    opacity: 0.8;
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .cyber-background {
    .particle {
      animation-duration: 15s;
    }
    
    .circuit-path {
      stroke-width: 0.5;
      animation: none;
    }
    
    .data-stream {
      font-size: 0.7rem;
      animation-duration: 6s;
    }
    
    .energy-wave {
      animation: none;
    }
  }
}

/* High performance mode */
@media (prefers-reduced-motion: reduce) {
  .cyber-background * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style> 