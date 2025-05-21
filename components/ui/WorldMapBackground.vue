<template>
  <div 
    ref="mapRef"
    class="absolute inset-0 bg-cover bg-center bg-no-repeat"
    :class="className"
    :style="{
      opacity: !pulse ? opacity : undefined
    }"
    aria-hidden="true"
  >
    <NuxtImg
      :src="imageUrl"
      width="1920"
      height="1080"
      format="webp"
      quality="80"
      :placeholder="[10, 10, 10, 10]"
      class="absolute inset-0 object-cover w-full h-full"
      fetchpriority="high"
      loading="eager"
      @load="handleImageLoad"
      :style="{ opacity: imageLoaded ? 1 : 0 }"
    />
    <div v-if="!imageLoaded" class="absolute inset-0 bg-gray-100/5"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useMotion } from '@vueuse/motion'
import { applySafeMotion } from '~/utils/safeMotion'

const props = defineProps({
  className: {
    type: String,
    default: ''
  },
  animated: {
    type: Boolean,
    default: false
  },
  opacity: {
    type: Number,
    default: 0.07
  },
  pulse: {
    type: Boolean,
    default: false
  },
  drift: {
    type: Boolean,
    default: false
  }
})

const mapRef = ref(null)
const imageLoaded = ref(false)
const imageUrl = '/images/world-map.webp'

// Handle image load event
const handleImageLoad = () => {
  imageLoaded.value = true;
}

// Apply animations only when image is loaded or after a short timeout
const applyAnimations = () => {
  if (!mapRef.value) return;
  
  // Use try/catch to debug animation issues
  try {
    if (props.animated) {
      applySafeMotion(mapRef, {
        initial: { opacity: 0 },
        enter: { 
          opacity: props.opacity,
          transition: { duration: 700 }
        }
      });
    } else if (props.pulse) {
      applySafeMotion(mapRef, {
        initial: { opacity: props.opacity * 0.7 },
        enter: { 
          opacity: [props.opacity * 0.7, props.opacity, props.opacity * 0.7],
          transition: { 
            duration: 4000, 
            repeat: Infinity,
            ease: "easeInOut" 
          }
        }
      });
  } else if (props.drift) {
    applySafeMotion(mapRef, {
      initial: { backgroundPosition: '0% 0%' },
      enter: { 
        backgroundPosition: ['0% 0%', '2% 2%', '0% 0%'],
        transition: { 
          duration: 20000, 
          repeat: Infinity,
          ease: "easeInOut" 
        }
      }
    });
  }
  } catch (error) {
    console.error('Animation error:', error);
  }
};

// Watch for image load to apply animations
watch(imageLoaded, (isLoaded) => {
  if (isLoaded) {
    // Apply animations immediately once image loads
    applyAnimations();
  }
});

onMounted(() => {
  // Start animations sooner with a shorter timeout
  setTimeout(() => {
    if (!imageLoaded.value) {
      // Start animations even if image is still loading
      applyAnimations();
    }
  }, 100);
})
</script>
