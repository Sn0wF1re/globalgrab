<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <ScrollAnimation>
            <h1 class="text-4xl md:text-5xl font-bold font-heading mb-6">How Our Shopping Service Works</h1>
            <p class="text-gray-600 text-lg mb-8">
              We've simplified the process of getting your desired products from overseas to your doorstep in Kenya.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-16 bg-gray-50 relative overflow-hidden">
      <WorldMapBackground :animated="true" :opacity="0.08" />
      <div class="container mx-auto px-4 relative">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <ScrollAnimation>
            <h2 class="text-3xl md:text-4xl font-bold font-heading mb-4">Our Simple Process</h2>
            <p class="text-gray-600">Getting your desired products from overseas is simple with our streamlined process.</p>
          </ScrollAnimation>
        </div>
        
        <div class="relative">
          <div class="hidden md:block absolute h-1 bg-primary/30 top-1/2 left-0 right-0 transform -translate-y-1/2 z-0"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ScrollAnimation v-for="(step, index) in steps" :key="step.number" :delay="index * 0.15">
              <div class="bg-white rounded-xl p-6 shadow-sm relative z-10 mb-4 hover:shadow-md transition-all duration-300">
                <div class="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4 mx-auto md:mx-0">
                  {{ step.number }}
                </div>
                <h3 class="text-xl font-bold font-heading mb-3 text-center md:text-left">{{ step.title }}</h3>
                <p class="text-gray-600">{{ step.description }}</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <ScrollAnimation>
            <NuxtLink to="/contact">
              <Button class="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium inline-block transition-all hover:shadow-lg">
                Start Your Request
              </Button>
            </NuxtLink>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    <!-- Process Details Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <ScrollAnimation>
            <h2 class="text-3xl font-bold font-heading mb-8 text-center">Detailed Process Explanation</h2>
          </ScrollAnimation>
          
          <div class="space-y-8">
            <ScrollAnimation>
              <div class="bg-gray-50 rounded-xl p-8 border-l-4 border-primary mb-8 hover:shadow-md transition-all duration-300">
                <h3 class="text-xl font-bold font-heading mb-3">1. Request Product</h3>
                <p class="text-gray-600 mb-4">
                  Begin by filling out our detailed product request form on the contact page or reaching out to us directly via phone or email. Provide as many details as possible about the product you're looking for, including specifications, model numbers, and your budget range.
                </p>
                <p class="text-gray-600">
                  If you're unsure about exact specifications, our team can help guide you through options based on your needs and budget constraints.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div class="bg-gray-50 rounded-xl p-8 border-l-4 border-secondary mb-8 hover:shadow-md transition-all duration-300">
                <h3 class="text-xl font-bold font-heading mb-3">2. Get a Quote</h3>
                <p class="text-gray-600 mb-4">
                  Within 24-48 hours of receiving your request, our team will research the best options, availability, and pricing. We'll prepare a detailed quote that includes:
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>Product cost (with screenshots for verification)</li>
                  <li>International shipping fees</li>
                  <li>Import duties and taxes</li>
                  <li>Our service fee</li>
                  <li>Estimated delivery timeframe</li>
                </ul>
                <p class="text-gray-600">
                  We may present multiple options if available, allowing you to choose based on your preferences and budget.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div class="bg-gray-50 rounded-xl p-8 border-l-4 border-accent mb-8 hover:shadow-md transition-all duration-300">
                <h3 class="text-xl font-bold font-heading mb-3">3. Confirm & Pay</h3>
                <p class="text-gray-600 mb-4">
                  Once you review and approve the quote, we'll send you a payment link to complete the transaction. We accept various payment methods including:
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>M-Pesa</li>
                  <li>Bank transfer</li>
                  <li>Credit/debit cards</li>
                  <li>PayPal (for international clients)</li>
                </ul>
                <p class="text-gray-600">
                  After payment confirmation, we'll place the order immediately and provide you with order confirmation details and tracking information once available.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <div class="bg-gray-50 rounded-xl p-8 border-l-4 border-yellow-400 mb-8 hover:shadow-md transition-all duration-300">
                <h3 class="text-xl font-bold font-heading mb-3">4. Receive Product</h3>
                <p class="text-gray-600 mb-4">
                  We handle all the logistics of getting your product to Kenya, including:
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>International shipping coordination</li>
                  <li>Customs clearance and documentation</li>
                  <li>Import duty payment</li>
                  <li>Quality inspection upon arrival</li>
                  <li>Local delivery to your specified address</li>
                </ul>
                <p class="text-gray-600">
                  You'll receive regular updates throughout the shipping process, and once the product arrives in Kenya, we can arrange delivery to your doorstep.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Experience Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <ScrollAnimation>
            <div class="bg-white rounded-xl overflow-hidden shadow-md">
              <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="h-full bg-primary/10 flex items-center justify-center p-10">
                  <div class="flex flex-col items-center justify-center">
                    <div class="w-36 h-36 rounded-full bg-white shadow-lg flex items-center justify-center text-primary mb-6">
                      <Icon name="lucide:code" class="h-20 w-20" />
                    </div>
                    <div class="text-center max-w-xs">
                      <h3 class="text-xl font-semibold text-gray-800 mb-2">Developer Setup</h3>
                      <p class="text-gray-600">Quality tech for programming professionals</p>
                    </div>
                  </div>
                </div>
                <div class="p-8 flex flex-col justify-center">
                  <h3 class="text-2xl font-bold font-heading mb-4">A Seamless Experience</h3>
                  <p class="text-gray-600 mb-6">
                    "I was hesitant about ordering tech from overseas, but GlobalGrab made the process incredibly easy. Their transparent pricing and constant updates gave me peace of mind, and my MacBook arrived in perfect condition and at a price that was 30% less than local options."
                  </p>
                  <div class="flex items-center">
                    <div class="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                      <Icon name="lucide:code" class="h-6 w-6" />
                    </div>
                    <div>
                      <h4 class="font-bold">David Kimani</h4>
                      <p class="text-sm text-gray-500">Software Developer, Nairobi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <ScrollAnimation>
          <h2 class="text-3xl font-bold font-heading mb-6">Ready to Get Started?</h2>
          <p class="max-w-2xl mx-auto mb-8">
            Our personal shopping service is just a click away. Tell us what you're looking for, and we'll handle the rest.
          </p>
          <NuxtLink to="/contact">
            <Button variant="ghost" class="px-8 py-3 bg-white !text-[#F97029] hover:bg-gray-100 rounded-full font-bold transition-colors border border-white shadow-md">
              Submit Your Request Now
            </Button>
          </NuxtLink>
        </ScrollAnimation>
      </div>
    </section>
  </div>
</template>

<script setup>
const steps = [
  {
    number: 1,
    title: "Request Product",
    description: "Tell us what you're looking for through our request form or direct contact."
  },
  {
    number: 2,
    title: "Get a Quote",
    description: "We'll provide a transparent breakdown of product cost, shipping, and our service fee."
  },
  {
    number: 3,
    title: "Confirm & Pay",
    description: "Once you approve the quote, make a payment to initiate the purchase and shipping."
  },
  {
    number: 4,
    title: "Receive Product",
    description: "We handle shipping and customs, and deliver the product to you."
  }
];
</script>
