<!-- CyberCursor.vue -->
<template>
  <div>
    <div class="cyber-cursor" :style="cursorStyle"></div>
    <div class="cyber-cursor-dot" :style="dotStyle"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'CyberCursor',
  setup() {
    const cursorStyle = ref({
      left: '0px',
      top: '0px',
      transform: 'translate(-50%, -50%)'
    })
    
    const dotStyle = ref({
      left: '0px',
      top: '0px',
      transform: 'translate(-50%, -50%)'
    })

    // Current and target positions
    const current = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }
    const dot = { x: 0, y: 0 }
    
    // Spring physics parameters
    const spring = {
      tension: 0.2, // Spring strength
      friction: 0.5, // Damping
      velocity: { x: 0, y: 0 } // Current velocity
    }

    let animationFrame

    const updatePosition = () => {
      // Update dot position directly
      dot.x = target.x
      dot.y = target.y
      dotStyle.value = {
        left: `${dot.x}px`,
        top: `${dot.y}px`,
        transform: 'translate(-50%, -50%)'
      }

      // Calculate spring force for cursor
      const dx = target.x - current.x
      const dy = target.y - current.y

      // Apply spring physics
      spring.velocity.x += dx * spring.tension
      spring.velocity.y += dy * spring.tension

      // Apply friction
      spring.velocity.x *= (1 - spring.friction)
      spring.velocity.y *= (1 - spring.friction)

      // Update current position
      current.x += spring.velocity.x
      current.y += spring.velocity.y

      // Update cursor style
      cursorStyle.value = {
        left: `${current.x}px`,
        top: `${current.y}px`,
        transform: 'translate(-50%, -50%)'
      }

      // Continue animation
      animationFrame = requestAnimationFrame(updatePosition)
    }

    const onMouseMove = (e) => {
      // Update target position
      target.x = e.clientX
      target.y = e.clientY
    }
    
    const onMouseDown = () => {
      // Add click effect
      document.documentElement.style.setProperty('--matrix-green', 'var(--cyber-blue)')
      // Increase spring tension temporarily for snappier response
      spring.tension = 0.4
    }
    
    const onMouseUp = () => {
      document.documentElement.style.setProperty('--matrix-green', '#00ff41')
      // Reset spring tension
      spring.tension = 0.2
    }

    // Handle cursor visibility
    const onMouseLeave = () => {
      cursorStyle.value.opacity = '0'
      dotStyle.value.opacity = '0'
    }

    const onMouseEnter = () => {
      cursorStyle.value.opacity = '1'
      dotStyle.value.opacity = '1'
    }
    
    onMounted(() => {
      // Initialize cursor position
      const { clientX, clientY } = new MouseEvent('mousemove')
      current.x = clientX
      current.y = clientY
      target.x = clientX
      target.y = clientY

      // Start animation loop
      animationFrame = requestAnimationFrame(updatePosition)

      // Add event listeners
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mousedown', onMouseDown)
      window.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mouseleave', onMouseLeave)
      document.addEventListener('mouseenter', onMouseEnter)
    })
    
    onUnmounted(() => {
      // Clean up
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      cancelAnimationFrame(animationFrame)
    })
    
    return {
      cursorStyle,
      dotStyle
    }
  }
}
</script>

<style scoped>
.cyber-cursor {
  opacity: 1;
  transition: opacity 0.3s ease;
}

.cyber-cursor-dot {
  opacity: 1;
  transition: opacity 0.3s ease;
}
</style> 