<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md mx-4 bg-white rounded-xl shadow-sm p-6">
      <div class="flex mb-4 gap-2">
        <AlertCircle class="h-8 w-8 text-red-500" />
        <h1 class="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
      </div>

      <p class="mt-4 text-sm text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <NuxtLink to="/">
        <Button class="w-full bg-[#F97029] text-white font-bold hover:bg-[#E35A14]">Go to Home</Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { AlertCircle } from 'lucide-vue-next';
</script>
