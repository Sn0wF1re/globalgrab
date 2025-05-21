<template>
  <header 
    :class="[
      'fixed w-full z-50 transition-all duration-300', 
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    ]"
  >
    <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <NuxtLink to="/" class="text-3xl font-bold text-primary flex items-center font-heading">
          <ScrollAnimation type="rotate" :duration="1.5" :delay="1.0">
            <div class="mr-2">
              <Icon name="lucide:shopping-cart" class="text-primary" />
            </div>
          </ScrollAnimation>
          <span>GlobalGrab</span>
          <span class="text-sm text-secondary font-medium ml-1 mt-1">Kenya</span>
        </NuxtLink>
      </div>
      
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path"
          :class="[
            'font-medium hover:text-primary transition-colors', 
            route.path === item.path ? 'text-primary' : ''
          ]"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      
      <div class="flex items-center space-x-4">
        <NuxtLink to="/contact">
          <button class="hidden md:block px-5 py-2 bg-primary hover:bg-primary-dark text-white rounded-full">
            Contact Us
          </button>
        </NuxtLink>
        <button 
          @click="toggleMobileMenu"
          class="md:hidden text-neutral text-2xl"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <Icon v-if="isMobileMenuOpen" name="lucide:x" size="24" />
          <Icon v-else name="lucide:menu" size="24" />
        </button>
      </div>
    </nav>
    
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-md">
        <div class="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <template v-for="(item, index) in navItems" :key="item.path">
            <ScrollAnimation :delay="index * 0.05" direction="left" :duration="0.3">
              <div>
                <NuxtLink 
                  :to="item.path"
                  :class="[
                    'font-medium py-2 hover:text-primary transition-colors block', 
                    route.path === item.path ? 'text-primary' : ''
                  ]"
                  @click="closeMobileMenu"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
            </ScrollAnimation>
          </template>
          
          <ScrollAnimation :delay="0.3" direction="up" :duration="0.3">
            <div>
              <NuxtLink to="/contact" @click="closeMobileMenu">
                <button class="w-full py-2 px-4 bg-primary text-white rounded-full">
                  Contact Us
                </button>
              </NuxtLink>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

// Navigation items
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Products', path: '/products' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'FAQ', path: '/faq' }
]

// Mobile menu state
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Handle scroll effect
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>