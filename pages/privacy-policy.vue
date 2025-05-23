<template>
  <div class="pt-24 pb-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
        <div class="mb-8">
          <NuxtLink to="/">
            <Button variant="ghost" class="mb-4 text-gray-600 hover:text-primary">
              <ArrowLeft class="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </NuxtLink>
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.2 } }"
            class="text-3xl text-foreground font-bold font-heading mb-6"
          >
            Privacy Policy
          </h1>
          <p 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.3 } }"
            class="text-gray-500 mb-6"
          >
            Last Updated: March 25, 2025
          </p>
        </div>

        <div class="space-y-6 text-gray-600">
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.4 } }"
          >
            <h2 class="text-xl font-semibold mb-3">1. Introduction</h2>
            <p>
              GlobalGrab Kenya ("we", "our", or "us") is committed to protecting the privacy of our customers. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.5 } }"
          >
            <h2 class="text-xl font-semibold mb-3">2. Information We Collect</h2>
            <p class="mb-3">We may collect several types of information from and about users of our website, including:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Personal information such as name, email address, telephone number, and delivery address.</li>
              <li>Payment information (processed securely through our payment processors).</li>
              <li>Browsing information and device information.</li>
              <li>Information about your preferences and interests.</li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.6 } }"
          >
            <h2 class="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p class="mb-3">We may use the information we collect about you for various purposes, including:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>To process and fulfill your orders.</li>
              <li>To communicate with you about products, services, and promotions.</li>
              <li>To improve our website, products, and customer service.</li>
              <li>To personalize your experience and deliver content relevant to your interests.</li>
              <li>To comply with legal obligations and resolve any disputes.</li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.7 } }"
          >
            <h2 class="text-xl font-semibold mb-3">4. Disclosure of Your Information</h2>
            <p class="mb-3">We may disclose your personal information to:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Service providers and business partners who assist us in operating our business.</li>
              <li>Governmental bodies when required by law.</li>
              <li>In connection with a business transaction such as a merger or sale of assets.</li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.8 } }"
          >
            <h2 class="text-xl font-semibold mb-3">5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.9 } }"
          >
            <h2 class="text-xl font-semibold mb-3">6. Your Rights</h2>
            <p class="mb-3">You have certain rights regarding your personal information, including:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>The right to access and receive a copy of your personal information.</li>
              <li>The right to rectify or update your personal information.</li>
              <li>The right to request deletion of your personal information.</li>
              <li>The right to restrict or object to processing of your personal information.</li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.0 } }"
          >
            <h2 class="text-xl font-semibold mb-3">7. Changes to Our Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.1 } }"
          >
            <h2 class="text-xl font-semibold mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p class="mt-3">
              <strong>Email:</strong> privacy@globalgrab.co.ke<br>
              <strong>Phone:</strong> +254 711 395 142<br>
              <strong>Address:</strong> Nairobi, Kenya
            </p>
          </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-gray-200">
          <NuxtLink to="/">
            <Button variant="outline" class="text-primary border-primary bg-white hover:bg-primary/5">
              <ArrowLeft class="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next';
</script>
