<template>
  <footer class="bg-neutral text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <div class="text-2xl font-bold mb-6 flex items-center font-heading">
            <Icon name="lucide:shopping-cart" class="text-primary mr-2" />
            <span class="text-primary">GlobalGrab</span>
            <span class="text-xs text-accent font-medium ml-1">Kenya</span>
          </div>
          <p class="text-gray-300 mb-6">
            Your trusted personal shopping partner, bringing the world's best products to your doorstep in Kenya. From tech to custom requests - we fetch it all!
          </p>
          <div class="flex space-x-4">
            <!-- <a href="#" class="text-gray-300 hover:text-primary transition-colors bg-gray-800 rounded-full p-2" aria-label="Facebook">
              <Icon name="lucide:facebook" size="18" />
            </a> -->
            <NuxtLink to="https://tiktok.com/@globalgrabco" target="_blank" class="text-gray-300 hover:text-primary transition-colors bg-gray-800 rounded-full p-2" aria-label="TikTok">
              <TiktokIcon class="h-[18px] w-[18px]" />
            </NuxtLink>
            <NuxtLink to="https://www.instagram.com/globalgrabco" target="_blank" class="text-gray-300 hover:text-primary transition-colors bg-gray-800 rounded-full p-2" aria-label="Instagram">
              <Icon name="lucide:instagram" size="18" />
            </NuxtLink>
            <NuxtLink to="https://wa.me/254711395142" target="_blank" class="text-gray-300 hover:text-primary transition-colors bg-gray-800 rounded-full p-2" aria-label="WhatsApp">
              <Icon name="lucide:message-circle" size="18" />
            </NuxtLink>
            <!-- <a href="#" class="text-gray-300 hover:text-primary transition-colors bg-gray-800 rounded-full p-2" aria-label="LinkedIn">
              <Icon name="lucide:linkedin" size="18" />
            </a> -->
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-bold font-heading mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="/" class="text-gray-300 hover:text-primary transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/services" class="text-gray-300 hover:text-primary transition-colors">Services</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-gray-300 hover:text-primary transition-colors">Products</NuxtLink></li>
            <li><NuxtLink to="/how-it-works" class="text-gray-300 hover:text-primary transition-colors">How It Works</NuxtLink></li>
            <li><NuxtLink to="/testimonials" class="text-gray-300 hover:text-primary transition-colors">Testimonials</NuxtLink></li>
            <li><NuxtLink to="/faq" class="text-gray-300 hover:text-primary transition-colors">FAQ</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-300 hover:text-primary transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-bold font-heading mb-6">Product Categories</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="/products" class="text-gray-300 hover:text-primary transition-colors">New & Refurbished Electronics</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-gray-300 hover:text-primary transition-colors">Fashion</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-gray-300 hover:text-primary transition-colors">Home & Kitchen</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-gray-300 hover:text-primary transition-colors">Beauty & Health</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-gray-300 hover:text-primary transition-colors">Custom Requests</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-bold font-heading mb-6">Contact Information</h3>
          <ul class="space-y-4">
            <!-- <li class="flex items-start">
              <Icon name="lucide:map-pin" class="mt-1 mr-3 text-primary" size="20" />
              <span class="text-gray-300">Westlands Business Park, Nairobi, Kenya</span>
            </li> -->
            <li class="flex items-start">
              <Icon name="lucide:mail" class="mt-1 mr-3 text-primary" size="20" />
              <span class="text-gray-300">hello@globalgrab.co.ke</span>
            </li>
            <li class="flex items-start">
              <Icon name="lucide:phone" class="mt-1 mr-3 text-primary" size="20" />
              <span class="text-gray-300">+254 711 395 142</span>
            </li>
            <li class="flex items-start">
              <Icon name="lucide:clock" class="mt-1 mr-3 text-primary" size="20" />
              <div class="text-gray-300">
                <div>Monday - Friday</div>
                <!-- <div>Saturday: 10am - 3pm</div> -->
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} GlobalGrab Kenya. All rights reserved.</p>
        <div class="flex flex-wrap justify-center space-x-4 mt-4">
          <NuxtLink to="/privacy-policy" class="hover:text-primary transition-colors mb-2">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms-of-service" class="hover:text-primary transition-colors mb-2">Terms of Service</NuxtLink>
          <NuxtLink to="/shipping-policy" class="hover:text-primary transition-colors mb-2">Shipping Policy</NuxtLink>
          <NuxtLink to="/refund-policy" class="hover:text-primary transition-colors mb-2">Refund Policy</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import TiktokIcon from '~/components/icons/TiktokIcon.vue';
</script>

<style scoped>
h3 {
  color: #FFFFFF;
}
</style>