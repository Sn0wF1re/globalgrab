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
            Refund Policy
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
            <h2 class="text-xl font-semibold mb-3">1. Returns and Refunds Overview</h2>
            <p>
              At GlobalGrab Kenya, we want you to be completely satisfied with your purchase. This Refund Policy outlines the terms and conditions for returns, exchanges, and refunds.
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.5 } }"
          >
            <h2 class="text-xl font-semibold mb-3">2. Return Eligibility</h2>
            <p class="mb-3">To be eligible for a return, your item must meet the following criteria:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>The return request must be made within 14 days of receiving the product.</li>
              <li>The item must be in its original condition, unused, and with all original packaging.</li>
              <li>All accessories, manuals, and free items that came with the product must be included.</li>
              <li>The product must not have any physical damage beyond what was disclosed in the product description (for refurbished items).</li>
              <li>Proof of purchase (order number or receipt) must be provided.</li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.6 } }"
          >
            <h2 class="text-xl font-semibold mb-3">3. Non-Returnable Items</h2>
            <p class="mb-3">The following items cannot be returned:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Gift cards</li>
              <li>Downloadable software products</li>
              <li>Products with broken seals on software or data storage devices</li>
              <li>Personal items (like headphones) where hygiene could be a concern</li>
              <li>Custom-ordered or personalized products</li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.7 } }"
          >
            <h2 class="text-xl font-semibold mb-3">4. Return Process</h2>
            <p class="mb-3">To initiate a return, please follow these steps:</p>
            <ol class="list-decimal pl-6 space-y-2">
              <li>Contact our customer service team via email or phone to request a return authorization.</li>
              <li>Our team will provide you with a return authorization number and instructions for returning the product.</li>
              <li>Package the item securely with all original components and packaging.</li>
              <li>Include the return authorization number on the outside of the package.</li>
              <li>Ship the package to the address provided by our customer service team.</li>
            </ol>
            <p class="mt-3">
              Return shipping costs are the responsibility of the customer unless the return is due to our error or a defective product.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.8 } }"
          >
            <h2 class="text-xl font-semibold mb-3">5. Refund Process</h2>
            <p class="mb-3">Once your return is received and inspected, we will process your refund according to the following timeline:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>We will notify you via email once we have received and inspected your return.</li>
              <li>If approved, your refund will be processed within 5 business days.</li>
              <li>Refunds will be issued to the original payment method used for the purchase.</li>
              <li>Depending on your bank or payment provider, it may take an additional 5-10 business days for the refund to reflect in your account.</li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.9 } }"
          >
            <h2 class="text-xl font-semibold mb-3">6. Exchanges</h2>
            <p>
              If you need to exchange an item for a different product, please return the original item following our return process and place a new order for the desired product. If the exchange is due to a defective product, please contact our customer service team for assistance.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.0 } }"
          >
            <h2 class="text-xl font-semibold mb-3">7. Damaged or Defective Items</h2>
            <p>
              If you receive a damaged or defective item, please contact our customer service team within 48 hours of receiving the product. Provide photos of the damage and a description of the defect. We will arrange for a return or replacement at no additional cost to you.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.1 } }"
          >
            <h2 class="text-xl font-semibold mb-3">8. Restocking Fees</h2>
            <p>
              A restocking fee of 10% may be applied to returns that are not due to our error or a defective product. This fee covers the cost of inspection, testing, and repackaging of returned items.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.2 } }"
          >
            <h2 class="text-xl font-semibold mb-3">9. Warranty Information</h2>
            <p>
              All refurbished products sold by GlobalGrab Kenya come with a 90-day warranty against manufacturing defects. This warranty does not cover damage resulting from misuse, accidents, or normal wear and tear. For full warranty details, please refer to the warranty information provided with your product.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.3 } }"
          >
            <h2 class="text-xl font-semibold mb-3">10. Contact Us</h2>
            <p>
              If you have any questions about our Refund Policy, please contact us at:
            </p>
            <p class="mt-3">
              <strong>Email:</strong> returns@globalgrab.co.ke<br>
              <strong>Phone:</strong> +254 700 000 000<br>
              <strong>Address:</strong> Global Plaza, Nairobi, Kenya
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
