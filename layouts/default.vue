<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
    <div id="modal-root"></div>
    <ClientOnly>
      <ToastProvider />
    </ClientOnly>
  </div>
</template>

<script setup>
// Layout will automatically apply to all pages
</script>