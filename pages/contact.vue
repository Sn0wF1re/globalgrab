<template>
  <div>
    <!-- Header Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <ScrollAnimation>
            <h1 class="text-4xl md:text-5xl font-bold font-heading mb-6">Get in Touch</h1>
            <p class="text-gray-600 text-lg mb-8">
              Have questions or ready to start your shopping journey? We're here to help!
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <ScrollAnimation>
              <h2 class="text-3xl md:text-4xl font-bold font-heading mb-6">Let's Get Started</h2>
              <p class="text-gray-600 mb-8">Ready to find your perfect product or have questions? Fill out the form and we'll get back to you within 24 hours.</p>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      id="name"
                      v-model="formData.name"
                      type="text"
                      placeholder="Your name"
                      class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      :class="{'border-red-500': errors.name}"
                    />
                    <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
                  </div>
                  
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      id="email"
                      v-model="formData.email"
                      type="email"
                      placeholder="Your email"
                      class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      :class="{'border-red-500': errors.email}"
                    />
                    <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
                  </div>
                </div>
                
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select 
                    id="subject"
                    v-model="formData.subject"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    :class="{'border-red-500': errors.subject}"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="custom-order">Custom Order Request</option>
                    <option value="pricing">Pricing Question</option>
                    <option value="shipping">Shipping Information</option>
                    <option value="other">Other</option>
                  </select>
                  <p v-if="errors.subject" class="mt-1 text-sm text-red-500">{{ errors.subject }}</p>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message"
                    v-model="formData.message"
                    placeholder="Describe your request or question..."
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    :class="{'border-red-500': errors.message}"
                    rows="4"
                  ></textarea>
                  <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
                </div>
                
                <button 
                  type="submit" 
                  class="w-full px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-all hover:shadow-lg"
                  :disabled="submitting"
                >
                  {{ submitting ? 'Sending...' : 'Send Message' }}
                </button>
              </form>
            </ScrollAnimation>
          </div>
          
          <div class="order-1 lg:order-2">
            <ScrollAnimation>
              <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1667215116176-f367d624c72e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Workspace with laptop and phone" 
                  class="w-full h-64 object-cover"
                />
                <div class="p-8">
                  <h3 class="text-2xl font-bold font-heading mb-4">Connect With Us</h3>
                  <div class="space-y-4">
                    <div class="flex items-start space-x-4">
                      <div class="text-primary mt-1">
                        <Icon name="lucide:map-pin" />
                      </div>
                      <div>
                        <h4 class="font-bold">Location</h4>
                        <p class="text-gray-600">Nairobi, Kenya</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                      <div class="text-primary mt-1">
                        <Icon name="lucide:mail" />
                      </div>
                      <div>
                        <h4 class="font-bold">Email</h4>
                        <p class="text-gray-600">hello@globalgrab.co.ke</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                      <div class="text-primary mt-1">
                        <Icon name="lucide:phone" />
                      </div>
                      <div>
                        <h4 class="font-bold">Phone</h4>
                        <p class="text-gray-600">+254 711 395 142</p>
                      </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                      <div class="text-primary mt-1">
                        <Icon name="lucide:clock" />
                      </div>
                      <div>
                        <h4 class="font-bold">Business Hours</h4>
                        <p class="text-gray-600">Monday - Friday</p>
                        <!-- <p class="text-gray-600">Saturday: 10am - 3pm</p> -->
                      </div>
                    </div>
                  </div>
                  
                  <div class="mt-6">
                    <h4 class="font-bold mb-3">Follow Us / Chat</h4>
                    <div class="flex space-x-4">
                      <!-- <a href="#" class="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Facebook">
                        <Icon name="lucide:facebook" size="20" />
                      </a> -->
                      <!-- <a href="#" class="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Twitter">
                        <Icon name="lucide:twitter" size="20" />
                      </a> -->
                      <NuxtLink to="https://tiktok.com/@globalgrabco" target="_blank" class="hover:text-primary transition-colors bg-gray rounded-full p-2" aria-label="TikTok">
                        <TiktokIcon class="h-[18px] w-[18px]" />
                      </NuxtLink>
                      <NuxtLink to="https://www.instagram.com/globalgrabco" target="_blank" class="hover:text-primary transition-colors bg-gray rounded-full p-2" aria-label="Instagram">
                        <Icon name="lucide:instagram" size="18" />
                      </NuxtLink>
                      <NuxtLink to="https://wa.me/254711395142" target="_blank" class="hover:text-primary transition-colors bg-gray rounded-full p-2" aria-label="WhatsApp">
                        <Icon name="lucide:message-circle" size="18" />
                      </NuxtLink>
                      <!-- <a href="#" class="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="LinkedIn">
                        <Icon name="lucide:linkedin" size="20" />
                      </a> -->
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <ScrollAnimation>
            <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-md p-6">
              <h3 class="text-2xl font-bold font-heading mb-4 text-center">Find Us</h3>
              <div class="rounded-xl overflow-hidden h-[400px] border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.422577678!2d36.78673237431642!3d-1.2833104999999918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1716192634445!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  allowfullscreen="false"
                  loading="lazy"
                  title="GlobalGrab Kenya Location"
                ></iframe>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useToast } from '~/composables/useToast'

const { toast } = useToast()

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitting = ref(false)

const validateForm = () => {
  let valid = true
  
  // Reset errors
  errors.name = ''
  errors.email = ''
  errors.subject = ''
  errors.message = ''
  
  // Validate name
  if (!formData.name || formData.name.length < 2) {
    errors.name = 'Name must be at least 2 characters long'
    valid = false
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address'
    valid = false
  }
  
  // Validate subject
  if (!formData.subject) {
    errors.subject = 'Please select a subject'
    valid = false
  }
  
  // Validate message
  if (!formData.message || formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long'
    valid = false
  }
  
  return valid
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }
  
  submitting.value = true
  
  try {
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Success notification
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll respond within 24 hours.",
    })
    
    // Reset form
    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''
  } catch (error) {
    // Error notification
    toast({
      title: "Error Sending Message",
      description: "Please try again later.",
      variant: "destructive"
    })
  } finally {
    submitting.value = false
  }
}
</script>
