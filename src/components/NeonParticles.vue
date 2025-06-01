<template>
  <canvas 
    ref="canvas" 
    class="neon-particles"
    @mousemove="onMouseMove"
  ></canvas>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'NeonParticles',
  setup() {
    const canvas = ref(null)
    let ctx = null
    let animationFrame = null
    let particles = []
    let mouse = { x: 0, y: 0 }

    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.life = 1
        this.decay = Math.random() * 0.02 + 0.005
        this.size = Math.random() * 3 + 1
        this.color = this.randomColor()
      }

      randomColor() {
        const colors = [
          '0, 255, 255',     // Cyan
          '0, 255, 65',      // Matrix Green
          '255, 20, 147',    // Deep Pink
          '138, 43, 226',    // Blue Violet
          '0, 255, 0'        // Lime
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life -= this.decay
        
        // Attract to mouse
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const force = (100 - distance) / 100
          this.vx += (dx / distance) * force * 0.1
          this.vy += (dy / distance) * force * 0.1
        }
        
        // Add some friction
        this.vx *= 0.99
        this.vy *= 0.99
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.life
        
        // Draw glow effect
        ctx.shadowBlur = 20
        ctx.shadowColor = `rgb(${this.color})`
        
        // Draw particle
        ctx.beginPath()
        ctx.fillStyle = `rgba(${this.color}, ${this.life})`
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.restore()
      }

      isDead() {
        return this.life <= 0
      }
    }

    const createParticle = (x, y) => {
      particles.push(new Particle(x, y))
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]
        particle.update()
        particle.draw()

        if (particle.isDead()) {
          particles.splice(i, 1)
        }
      }

      // Create new particles randomly
      if (Math.random() < 0.1) {
        createParticle(
          Math.random() * canvas.value.width,
          Math.random() * canvas.value.height
        )
      }

      // Create particles near mouse
      if (Math.random() < 0.3) {
        createParticle(
          mouse.x + (Math.random() - 0.5) * 50,
          mouse.y + (Math.random() - 0.5) * 50
        )
      }

      animationFrame = requestAnimationFrame(animate)
    }

    const resizeCanvas = () => {
      if (canvas.value) {
        canvas.value.width = window.innerWidth
        canvas.value.height = window.innerHeight
      }
    }

    const onMouseMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    onMounted(() => {
      ctx = canvas.value.getContext('2d')
      resizeCanvas()
      animate()

      window.addEventListener('resize', resizeCanvas)
    })

    onUnmounted(() => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
      window.removeEventListener('resize', resizeCanvas)
    })

    return {
      canvas,
      onMouseMove
    }
  }
}
</script>

<style lang="scss" scoped>
.neon-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: auto;
  background: transparent;
}
</style> 