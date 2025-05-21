<template>
  <div 
    class="absolute inset-0"
    aria-hidden="true"
  >
    <NuxtImg
      src="/images/world-map.webp"
      :placeholder="[10, 10, 10, 10]"
      :width="width"
      :height="height"
      class="absolute inset-0 object-cover object-center w-full h-full"
      :style="{ opacity: opacity }"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : 'auto'"
    />
  </div>
</template>

<script setup>
defineProps({
  opacity: {
    type: Number,
    default: 0.07
  },
  width: {
    type: Number,
    default: 1920
  },
  height: {
    type: Number,
    default: 1080
  },
  priority: {
    type: Boolean,
    default: true
  }
});
</script>
