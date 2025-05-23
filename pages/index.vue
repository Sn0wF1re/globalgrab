<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden hero-section">
      <WorldMapBackground :pulse="true" :opacity="0.09" />
      <div class="container mx-auto px-4 relative">
        <div class="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div class="lg:w-1/2 space-y-6 order-2 lg:order-1">
            <ScrollAnimation :delay="0.1" direction="up">
              <div class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-medium text-sm">
                Your Personal Shopper Worldwide
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation :delay="0.2" direction="up">
              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                Welcome to <span class="text-primary">GlobalGrab</span> Kenya
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation :delay="0.3" direction="up">
              <p class="text-lg text-gray-600 max-w-lg">
                We bring the world's best products to your doorstep in Kenya - from refurbished tech to custom shopping requests. Your global gateway to quality at affordable prices.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation :delay="0.4" direction="up">
              <div class="flex flex-col sm:flex-row gap-4 pt-4">
                <NuxtLink to="/products">
                  <Button class="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium text-center transition-all hover:shadow-lg">
                    Explore Products
                  </Button>
                </NuxtLink>
                <NuxtLink to="/how-it-works">
                  <Button variant="outline" class="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/5 rounded-full font-medium text-center transition-all">
                    How It Works
                  </Button>
                </NuxtLink>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation :delay="0.5" direction="up">
              <div class="flex items-center gap-4 pt-4">
                <div class="flex -space-x-2">
                  <div class="w-10 h-10 rounded-full border-2 border-white bg-primary/10 flex items-center justify-center">
                    <Icon name="lucide:user" class="h-5 w-5 text-primary" />
                  </div>
                  <div class="w-10 h-10 rounded-full border-2 border-white bg-secondary/10 flex items-center justify-center">
                    <Icon name="lucide:users" class="h-5 w-5 text-secondary" />
                  </div>
                  <div class="w-10 h-10 rounded-full border-2 border-white bg-accent/10 flex items-center justify-center">
                    <Icon name="lucide:user-check" class="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div class="text-sm">
                  <span class="font-bold">100+ Happy Customers</span>
                  <div class="flex text-yellow-400">
                    <Icon name="lucide:star" class="h-4 w-4" v-for="i in 5" :key="i" />
                    <span class="text-gray-600 ml-1">4.8/5</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div class="lg:w-1/2 relative order-1 lg:order-2">
            <!-- Main container with positioning context -->
            <div class="relative" style="margin-top: 24px; margin-bottom: 24px;">
            
              <!-- Main Image -->
              <div class="relative rounded-2xl shadow-xl overflow-hidden">
                <ScrollAnimation :delay="0.2" type="fade">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Refurbished tech products" 
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <span class="text-white font-medium text-center">Premium products from all over the world</span>
                  </div>
                </ScrollAnimation>
              </div>
              
              <!-- Quality Guarantee Card -->
              <div class="absolute -top-14 -right-6 bg-white shadow-lg rounded-lg p-4 max-w-xs hidden md:block z-30">
                <ScrollAnimation :delay="1.0" type="scale" :once="false">
                  <div class="flex items-center gap-3">
                    <div class="bg-secondary/10 text-secondary p-2 rounded-full">
                      <Icon name="lucide:check-square" class="h-5 w-5" />
                    </div>
                    <div>
                      <p class="font-medium">Quality Guarantee</p>
                      <p class="text-sm text-gray-500">Thoroughly tested products</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
                
              <!-- Fast Delivery Card -->
              <div class="absolute -bottom-14 -left-6 bg-white shadow-lg rounded-lg p-4 max-w-xs hidden md:block z-30">
                <ScrollAnimation :delay="0.8" type="scale" :once="false">
                  <div class="flex items-center gap-3">
                    <div class="bg-accent/10 text-accent p-2 rounded-full">
                      <Icon name="lucide:truck" class="h-5 w-5" />
                    </div>
                    <div>
                      <p class="font-medium">Fast Delivery</p>
                      <p class="text-sm text-gray-500">Within 2-3 weeks guaranteed</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollAnimation>
            <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="bg-primary/10 text-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Icon name="lucide:globe" class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold font-heading mb-3">Global Sourcing</h3>
              <p class="text-gray-600">We source quality products from trusted suppliers worldwide to bring you the best options.</p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation :delay="0.2">
            <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="bg-secondary/10 text-secondary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Icon name="lucide:thumbs-up" class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold font-heading mb-3">Verified Marketplaces</h3>
              <p class="text-gray-600">We source exclusively from authenticated retailers and official brand stores to guarantee product authenticity.</p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation :delay="0.4">
            <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="bg-accent/10 text-accent p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Icon name="lucide:truck" class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold font-heading mb-3">Hassle-Free Delivery</h3>
              <p class="text-gray-600">We handle all the shipping logistics, customs clearance, and delivery to your doorstep.</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 bg-primary/90 text-white">
      <div class="container mx-auto px-4 text-center">
        <ScrollAnimation>
          <h2 class="text-2xl md:text-3xl font-bold font-heading mb-4 text-white drop-shadow-sm">Ready to get quality products at affordable prices?</h2>
        </ScrollAnimation>
        <ScrollAnimation :delay="0.2">
          <p class="max-w-2xl mx-auto mb-8 text-white/90 font-medium">Start your shopping journey with GlobalGrab Kenya today and experience the difference.</p>
        </ScrollAnimation>
        <ScrollAnimation :delay="0.4">
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact">
              <Button variant="ghost" class="px-8 py-3 bg-white !text-[#F97029] hover:bg-gray-100 rounded-full font-bold shadow-md border border-white">
                Contact Us Now
              </Button>
            </NuxtLink>
            <NuxtLink to="/products">
              <Button class="px-8 py-3 bg-primary-dark hover:bg-primary-dark/90 text-white rounded-full font-medium border border-white/30 shadow-md">
                Browse Products
              </Button>
            </NuxtLink>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'GlobalGrab Kenya - Your Personal Shopping Partner',
  meta: [
    { name: 'description', content: 'GlobalGrab Kenya brings the world\'s best products to your doorstep - from refurbished tech to custom shopping requests. Your global gateway to quality at affordable prices.' },
    { property: 'og:title', content: 'GlobalGrab Kenya - Your Personal Shopping Partner' },
    { property: 'og:description', content: 'We bring the world\'s best products to your doorstep in Kenya - your global gateway to quality at affordable prices.' }
  ]
})
</script>

<style scoped>
@media (max-width: 768px) {
  .hero-section {
    background-color: #ffffff !important;
    background-image: none !important;
  }
}
</style>
