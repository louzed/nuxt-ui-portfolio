<template>
  <canvas ref="canvasRef" class="particle-canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const canvasRef = ref(null);
let ctx = null;
let particles = [];
let animationFrameId = null;
let resizeTimeout = null;

// --- Configuration ---
// Instead of a fixed count, define density (particles per 10,000 pixels)
const particleDensity = 0.5; // Adjust this value to get desired density
const particleColor = '#05df72';
const minParticleSize = 0.1;
const maxParticleSize = 1;
const minSpeedY = 0.1;
const maxSpeedY = 0.5;
const resizeDebounceTime = 150; // ms to wait after resize stops before recalculating
// ---------------------

// Simple debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}


class Particle {
  // Store canvas dimensions within the particle for reset logic
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.reset();
  }

  reset(newWidth = this.canvasWidth, newHeight = this.canvasHeight) {
    this.canvasWidth = newWidth;   // Update internal dimensions
    this.canvasHeight = newHeight; // Update internal dimensions
    this.x = Math.random() * this.canvasWidth;
    // Start further down to ensure they enter smoothly on resize/init
    this.y = this.canvasHeight + Math.random() * (this.canvasHeight * 0.5);
    this.radius = Math.random() * (maxParticleSize - minParticleSize) + minParticleSize;
    this.speedY = Math.random() * (maxSpeedY - minSpeedY) + minSpeedY;
  }

  update() {
    this.y -= this.speedY;
    // Reset particle if it goes off screen (top)
    // Use its internally stored canvasHeight for the reset position
    if (this.y + this.radius < 0) {
       // Pass current canvas dimensions to reset method
       // This isn't strictly necessary if updateDimensions handles it,
       // but good practice. Resetting below handles the dimensions.
       this.reset(this.canvasWidth, this.canvasHeight);
    }
  }

   // Method to update dimensions if canvas resizes
  updateDimensions(newWidth, newHeight) {
    // Only update if necessary (might already be handled by reset)
    this.canvasWidth = newWidth;
    this.canvasHeight = newHeight;
     // Optional: Clamp position if particle is outside new bounds immediately
    this.x = Math.min(this.x, newWidth);
    // Y position update isn't usually needed as it resets from bottom
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = particleColor;
    context.fill();
    context.closePath();
  }
}

const calculateParticleCount = (width, height) => {
  const area = width * height;
  // Calculate count based on density (per 10k pixels)
  return Math.max(10, Math.floor((area / 10000) * particleDensity)); // Ensure minimum count
};

const handleResize = () => {
  const canvas = canvasRef.value;
   if (!canvas || !ctx) return;

   const currentWidth = window.innerWidth;
   const currentHeight = window.innerHeight;

   canvas.width = currentWidth;
   canvas.height = currentHeight;

   const targetParticleCount = calculateParticleCount(currentWidth, currentHeight);
   const currentParticleCount = particles.length;

   // Add particles if needed
   if (targetParticleCount > currentParticleCount) {
       for (let i = 0; i < targetParticleCount - currentParticleCount; i++) {
           particles.push(new Particle(currentWidth, currentHeight));
       }
   }
   // Remove particles if needed
   else if (targetParticleCount < currentParticleCount) {
       particles.splice(targetParticleCount); // Remove excess from the end
   }

   // Update dimensions for all remaining/new particles
   particles.forEach(p => p.updateDimensions(currentWidth, currentHeight));

   // Optional: If canvas was previously empty, restart animation
   if (!animationFrameId) {
     animateParticles();
   }
};

// Debounced version of the resize handler
const debouncedResizeHandler = debounce(handleResize, resizeDebounceTime);


const initCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  ctx = canvas.getContext('2d');
  if (!ctx) {
      console.error("Could not get 2D context");
      return;
  }

  // Initial setup using the resize handler logic
  handleResize(); // Run once immediately to set initial size and particles

  animateParticles();

  window.addEventListener('resize', debouncedResizeHandler);
};

const animateParticles = () => {
  if (!ctx || !canvasRef.value) {
      // If context or canvas is lost, stop animation
      if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
      }
      return;
  }

  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);

  particles.forEach(particle => {
    particle.update();
    particle.draw(ctx);
  });

  animationFrameId = requestAnimationFrame(animateParticles);
};

onMounted(() => {
  // Ensure the DOM is ready before initializing
  nextTick(initCanvas);
});

onUnmounted(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null; // Clear the ID
  }
  // Make sure to remove the *debounced* handler
  window.removeEventListener('resize', debouncedResizeHandler);
  // Clear any pending debounce timeout
  clearTimeout(resizeTimeout);
});
</script>

<style scoped>
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  display: block;
}
</style>