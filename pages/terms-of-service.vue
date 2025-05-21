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
            class="text-3xl font-bold font-heading mb-6"
          >
            Terms of Service
          </h1>
          <p 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.3 } }"
            class="text-gray-500 mb-6"
          >
            Last Updated: May 21, 2025
          </p>
        </div>

        <div class="space-y-6 text-gray-600">
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.4 } }"
          >
            <h2 class="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using GlobalGrab Kenya ("we", "our", or "us") website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.5 } }"
          >
            <h2 class="text-xl font-semibold mb-3">2. Description of Services</h2>
            <p>
              GlobalGrab operates as a personal shopping and fulfillment service that helps customers in Kenya purchase products from international retailers. We act as an intermediary, facilitating the purchase, international shipping, customs clearance, and delivery of products from verified global marketplaces to your doorstep in Kenya.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.6 } }"
          >
            <h2 class="text-xl font-semibold mb-3">3. Eligibility</h2>
            <p>
              You must be at least 18 years old to use our services. By using our website, you represent and warrant that you have the right, authority, and capacity to enter into these Terms of Service.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.7 } }"
          >
            <h2 class="text-xl font-semibold mb-3">4. Account Registration</h2>
            <p class="mb-3">
              When registering for an account on our website, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account and password.
            </p>
            <p>
              You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.8 } }"
          >
            <h2 class="text-xl font-semibold mb-3">5. Orders and Payments</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li>All orders are subject to product availability and confirmation of the order price.</li>
              <li>We accept various payment methods as indicated on our website. All payments are processed securely through our payment processors.</li>
              <li>Prices for products are subject to change without notice.</li>
              <li>We reserve the right to refuse or cancel any order for any reason at any time.</li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.9 } }"
          >
            <h2 class="text-xl font-semibold mb-3">6. Personal Shopping Agreement</h2>
            <p class="mb-3">
              By using our personal shopping service, you understand and agree to the following:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>You authorize GlobalGrab to make purchases on your behalf from international retailers based on your instructions.</li>
              <li>All final product purchasing decisions are made by you, the client, after reviewing our quotes.</li>
              <li>GlobalGrab will make reasonable efforts to ensure products match your specifications, but we cannot guarantee exact matches in all cases.</li>
              <li>Order modifications or cancellations may not be possible once purchases have been made from retailers.</li>
              <li>We source products only from authenticated retailers and official brand stores to ensure authenticity.</li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.0 } }"
          >
            <h2 class="text-xl font-semibold mb-3">7. Intellectual Property</h2>
            <p>
              The content, organization, graphics, design, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights. Copying, redistribution, use, or publication of any such content or any part of the website is prohibited without our express permission.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.1 } }"
          >
            <h2 class="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
            <p class="mb-3">
              In no event shall GlobalGrab, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages arising from or related to your use of our website or services.
            </p>
            <p class="mb-3">
              As a personal shopping service, we do not manufacture, create, or directly control the products we purchase on your behalf. Therefore:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>GlobalGrab is not liable for product defects, errors, or damages caused by manufacturers or original sellers.</li>
              <li>Any product warranties are provided by the original manufacturer or retailer, not by GlobalGrab.</li>
              <li>We are not responsible for delays, damages, or losses caused by third-party shipping carriers, customs authorities, or other entities outside our direct control.</li>
              <li>While we will assist with warranty claims where possible, we cannot guarantee the outcome of such claims.</li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.2 } }"
          >
            <h2 class="text-xl font-semibold mb-3">9. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law principles.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.3 } }"
          >
            <h2 class="text-xl font-semibold mb-3">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new Terms of Service on this page and updating the "Last Updated" date.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.4 } }"
          >
            <h2 class="text-xl font-semibold mb-3">11. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p class="mt-3">
              <strong>Email:</strong> hello@globalgrab.co.ke<br>
              <strong>Phone/WhatsApp:</strong> +254 711 395 142<br>
              <strong>Address:</strong> Nairobi, Kenya
            </p>
          </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-gray-200">
          <NuxtLink to="/">
            <Button variant="outline" class="text-primary border-primary hover:bg-primary/5">
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
