<template>
  <div ref="animationRef">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, useAttrs, computed, nextTick } from 'vue'
// Import only the safe motion utility
import { applySafeMotion } from '~/utils/safeMotion'

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  },
  direction: {
    type: String,
    default: 'up',
    validator: (value) => ['up', 'down', 'left', 'right', 'none'].includes(value)
  },
  type: {
    type: String,
    default: 'fade',
    validator: (value) => ['fade', 'slide', 'scale', 'rotate'].includes(value)
  },
  duration: {
    type: Number,
    default: 0.7
  },
  once: {
    type: Boolean,
    default: true
  }
})

const animationRef = ref(null)
const attrs = useAttrs()

const getInitialPosition = computed(() => {
  const distance = 50;
  switch (props.direction) {
    case 'up': return { y: distance };
    case 'down': return { y: -distance };
    case 'left': return { x: -distance };
    case 'right': return { x: distance };
    default: return {};
  }
});

const getInitialState = computed(() => {
  let initial = { opacity: 0 };
  
  switch (props.type) {
    case 'fade':
      return { ...initial, ...getInitialPosition.value };
    case 'scale':
      return { ...initial, scale: 0.9 };
    case 'rotate':
      return { ...initial, rotate: props.direction === 'left' ? -10 : 10 };
    case 'slide':
      return getInitialPosition.value;
    default:
      return initial;
  }
});

const applyAnimation = () => {
  if (animationRef.value) {
    try {
      const animationOptions = {
        initial: getInitialState.value,
        enter: {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: {
            type: 'spring',
            stiffness: 80,
            damping: 20,
            duration: props.duration * 1000,
            delay: props.delay * 1000,
            ease: [0.25, 0.1, 0.25, 1.0] // cubic-bezier ease-out
          }
        }
      };

      // If once is true, use visibleOnce instead of enter
      if (props.once) {
        animationOptions.visibleOnce = animationOptions.enter;
        delete animationOptions.enter;
      }

      // Use our safe motion utility instead of direct useMotion
      applySafeMotion(animationRef, animationOptions);
    } catch (error) {
      console.error('Error applying motion to element:', error);
    }
  }
};

onMounted(() => {
  // Ensure component is mounted before applying animations
  setTimeout(() => {
    nextTick(() => {
      applyAnimation();
    });
  }, 0);
})
</script>
