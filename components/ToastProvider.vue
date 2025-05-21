<template>
  <div class="relative">
    <TransitionGroup
      tag="div"
      class="fixed top-0 right-0 z-50 max-w-[420px] p-4 space-y-4"
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform opacity-0 translate-y-8"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 translate-y-8"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="relative flex justify-between items-center rounded-md border border-border p-4 pr-8 shadow-lg bg-background text-foreground"
        :class="{ 'bg-destructive text-destructive-foreground': toast.variant === 'destructive' }"
      >
        <div class="grid gap-1">
          <div v-if="toast.title" class="text-sm font-semibold">{{ toast.title }}</div>
          <div v-if="toast.description" class="text-sm opacity-90">{{ toast.description }}</div>
        </div>
        <button 
          class="absolute right-2 top-2 rounded-md p-1 text-foreground/50 hover:text-foreground focus:outline-none focus:ring-2"
          @click="() => dismissToast(toast.id)"
        >
          <Icon name="lucide:x" class="h-4 w-4" />
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useToast } from '~/composables/useToast'
import { computed } from 'vue'

const { toasts, dismiss } = useToast()

const dismissToast = (id) => {
  dismiss(id)
}
</script>