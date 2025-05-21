// Motion plugin for Nuxt using @vueuse/motion
import { MotionPlugin } from '@vueuse/motion'

export default defineNuxtPlugin((nuxtApp) => {
  // Only run on client side
  if (process.client) {
    try {
      // Register the plugin
      nuxtApp.vueApp.use(MotionPlugin)
      
      // Add a fallback for motion directive failures
      const vMotion = nuxtApp.vueApp.directive('motion')
    
      if (vMotion) {
        const originalMounted = vMotion.mounted
        
      // Override the mounted hook to add error handling
      vMotion.mounted = (el, binding, vnode) => {
        try {
          if (originalMounted) {
            originalMounted(el, binding, vnode)
          }
        } catch (error) {
          console.warn('Motion directive error:', error)
          // Apply fallback animation if motion fails
          el.style.transition = 'opacity 0.5s ease'
          el.style.opacity = '1'
        }
      }
    }
  } catch (error) {
    console.error('Error initializing motion plugin:', error)
    
    // Register a fallback directive that does nothing but doesn't crash
    nuxtApp.vueApp.directive('motion', {
      mounted(el) {
        // Simple fallback animation
        el.style.transition = 'opacity 0.5s ease'
        el.style.opacity = '1'
      }
    })
  }
  } else {
    // SSR environment - register an empty directive 
    nuxtApp.vueApp.directive('motion', {})
  }
})
