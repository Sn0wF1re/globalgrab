<template>
  <div class="services-page">
    <!-- Header Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <ScrollAnimation>
            <h1 class="text-4xl md:text-5xl font-bold font-heading mb-6">Our Shopping Services</h1>
            <p class="text-gray-600 text-lg">From refurbished tech to personalized shopping, we've got you covered with our range of services.</p>
          </ScrollAnimation>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-8 order-2 md:order-1">
            <ScrollAnimation>
              <div class="bg-gray-50 rounded-xl p-6 shadow-sm border-l-4 border-primary mb-8">
                <h3 class="text-xl font-bold font-heading mb-2">Tech Procurement</h3>
                <p class="text-gray-600">We source quality refurbished laptops, smartphones, tablets, and other electronics at the best prices.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation :delay="0.2">
              <div class="bg-gray-50 rounded-xl p-6 shadow-sm border-l-4 border-secondary mb-8">
                <h3 class="text-xl font-bold font-heading mb-2">Personal Shopping</h3>
                <p class="text-gray-600">Need something specific from overseas? We'll find it, purchase it, and deliver it to you with complete transparency.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation :delay="0.4">
              <div class="bg-gray-50 rounded-xl p-6 shadow-sm border-l-4 border-accent mb-8">
                <h3 class="text-xl font-bold font-heading mb-2">Bulk Orders</h3>
                <p class="text-gray-600">For businesses or groups looking to purchase multiple items, we offer special rates and expedited processing.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation :delay="0.6">
              <div class="bg-gray-50 rounded-xl p-6 shadow-sm border-l-4 border-yellow-400 mb-8">
                <h3 class="text-xl font-bold font-heading mb-2">Consultation Services</h3>
                <p class="text-gray-600">Not sure what to get? Our experts can help you make the right choice based on your needs and budget.</p>
              </div>
            </ScrollAnimation>
          </div>
          
          <div class="relative order-1 md:order-2">
            <ScrollAnimation>
              <img 
                src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Refurbished tech devices" 
                class="rounded-2xl shadow-lg object-cover"
              />
              <div class="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-lg p-4 hidden md:block">
                <div class="flex items-center gap-3">
                  <div class="bg-primary/10 text-primary p-2 rounded-full">
                    <Icon name="lucide:help-circle" class="h-5 w-5" />
                  </div>
                  <div>
                    <p class="font-medium">Save up to 50%</p>
                    <p class="text-sm text-gray-500">on refurbished tech</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <ScrollAnimation>
            <h2 class="text-3xl md:text-4xl font-bold font-heading mb-4">Our Pricing Structure</h2>
            <p class="text-gray-600">We believe in complete transparency. Here's how our pricing works.</p>
          </ScrollAnimation>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollAnimation>
            <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary mb-8">
              <div class="text-primary text-4xl mb-4">
                <Icon name="lucide:tag" class="h-10 w-10" />
              </div>
              <h3 class="text-xl font-bold font-heading mb-3">Product Cost</h3>
              <p class="text-gray-600 mb-4">The actual price we pay for your product. We provide a screenshot of the purchase for complete transparency.</p>
              <div class="bg-gray-50 rounded-lg p-4">
                <span class="font-bold">Example:</span> A laptop that costs $800 overseas = KSh 104,000
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation :delay="0.2">
            <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-secondary mb-8">
              <div class="text-secondary text-4xl mb-4">
                <Icon name="lucide:check" class="h-10 w-10" />
              </div>
              <h3 class="text-xl font-bold font-heading mb-3">Shipping & Customs</h3>
              <p class="text-gray-600 mb-4">International shipping costs, insurance, and any import duties or taxes required to bring the item to Kenya.</p>
              <div class="bg-gray-50 rounded-lg p-4">
                <span class="font-bold">Example:</span> Shipping, insurance & import duties = KSh 15,000-25,000
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation :delay="0.4">
            <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-accent mb-8">
              <div class="text-accent text-4xl mb-4">
                <Icon name="lucide:dollar-sign" class="h-10 w-10" />
              </div>
              <h3 class="text-xl font-bold font-heading mb-3">Service Fee</h3>
              <p class="text-gray-600 mb-4">Our facilitation fee for sourcing, verifying quality, handling logistics, and ensuring safe delivery.</p>
              <div class="bg-gray-50 rounded-lg p-4">
                <span class="font-bold">Example:</span> 10-15% of product cost, depending on complexity
              </div>
            </div>
          </ScrollAnimation>
        </div>
        
        <ScrollAnimation :delay="0.6">
          <div class="mt-12 bg-white rounded-xl p-8 shadow-sm border-l-4 border-yellow-400 max-w-4xl mx-auto">
            <div class="flex flex-col md:flex-row items-start gap-6">
              <div class="text-yellow-400 text-4xl">
                <Icon name="lucide:lightbulb" class="h-10 w-10" />
              </div>
              <div>
                <h3 class="text-xl font-bold font-heading mb-3">Why Choose Our Service?</h3>
                <p class="text-gray-600 mb-4">Even with our service fee, you'll typically save 20-40% compared to buying similar products locally in Kenya. We provide access to a wider selection, better quality, and the peace of mind that comes with a trusted shopping partner.</p>
                <NuxtLink to="/contact" class="text-primary font-medium hover:underline inline-flex items-center">
                  Get a custom quote 
                  <Icon name="lucide:arrow-right" class="h-4 w-4 ml-1" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-4xl">
        <ScrollAnimation>
          <div class="bg-primary/5 rounded-2xl p-10 text-center">
            <h2 class="text-3xl font-bold font-heading mb-4">Ready to experience our services?</h2>
            <p class="text-gray-600 mb-8 max-w-xl mx-auto">Get in touch with us today and let us help you find the perfect products at the best prices.</p>
            <NuxtLink to="/contact">
              <Button class="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full">
                Contact Us Today
              </Button>
            </NuxtLink>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </div>
</template>

<style scoped>
.services-page {
  max-width: 100%;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  /* Enhance text contrast on mobile */
  .text-gray-600 {
    color: #333333 !important;
    font-weight: 500;
  }
  
  /* Add background to text cards to improve visibility */
  .bg-gray-50 {
    background-color: #f5f5f5 !important;
    border-width: 2px !important;
  }
}
</style>
