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
            Shipping Policy
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
            <h2 class="text-xl font-semibold mb-3">1. Shipping Information</h2>
            <p>
              GlobalGrab Kenya is committed to delivering your orders promptly and securely. This Shipping Policy explains our shipping procedures, timeframes, and responsibilities.
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.5 } }"
          >
            <h2 class="text-xl font-semibold mb-3">2. Processing Time</h2>
            <p class="mb-3">
              As a personal shopping and fulfillment service, our processing timeline involves several stages:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Quote Confirmation:</strong> We will process your quote request within 1-2 business days.</li>
              <li><strong>Purchase from Retailer:</strong> Once you approve a quote and payment is received, we will place your order with the international retailer within 1-2 business days.</li>
              <li><strong>Retailer Processing:</strong> The international retailer's own processing time varies (typically 1-7 business days) and is outside our direct control.</li>
              <li><strong>International Shipping:</strong> After the retailer ships your order, it may take 5-21 days to reach our processing facility depending on the origin country and shipping method.</li>
              <li><strong>Customs Clearance:</strong> This process typically takes 2-5 business days but can be longer for certain products.</li>
              <li><strong>Local Delivery:</strong> Once cleared through customs, local delivery usually takes 1-3 business days within Kenya.</li>
            </ul>
            <p class="mt-3">
              We will provide updates throughout this process so you can track your order's progress through each stage.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.6 } }"
          >
            <h2 class="text-xl font-semibold mb-3">3. Shipping Methods and Timeframes</h2>
            <p class="mb-3">Our shipping process involves both international and local legs:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>International Shipping:</strong> We use various international shipping methods depending on the product type, origin, and priority level:
                <ul class="list-circle pl-6 mt-2">
                  <li><strong>Standard International:</strong> 10-21 business days from retailer to Kenya</li>
                  <li><strong>Express International:</strong> 5-10 business days from retailer to Kenya</li>
                  <li><strong>Premium Express:</strong> 3-7 business days from retailer to Kenya (available for select countries only)</li>
                </ul>
              </li>
              <li><strong>Local Delivery (After Customs):</strong>
                <ul class="list-circle pl-6 mt-2">
                  <li><strong>Standard Delivery:</strong> 2-3 business days within Nairobi, and 3-5 business days for other locations in Kenya</li>
                  <li><strong>Express Delivery:</strong> Next-day delivery within Nairobi, and 1-2 business days for other major cities</li>
                </ul>
              </li>
            </ul>
            <p class="mt-3">
              The shipping method used for the international leg will depend on your preference indicated during quote acceptance, though some options may not be available for all products or retailers.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.7 } }"
          >
            <h2 class="text-xl font-semibold mb-3">4. Shipping Costs</h2>
            <p class="mb-3">Shipping costs are calculated based on the following factors:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Delivery location</li>
              <li>Package weight and dimensions</li>
              <li>Selected shipping method</li>
            </ul>
            <p class="mt-3">
              Shipping costs will be displayed during checkout before you complete your purchase. We may offer free shipping promotions on qualifying orders from time to time.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.8 } }"
          >
            <h2 class="text-xl font-semibold mb-3">5. Order Tracking</h2>
            <p>
              Once your order has been shipped, you will receive a confirmation email with a tracking number and instructions on how to track your package. You can also track your order by logging into your account on our website.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.9 } }"
          >
            <h2 class="text-xl font-semibold mb-3">6. Delivery and Pickup</h2>
            <p class="mb-3">
              We offer two options for receiving your products:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Home/Office Delivery:</strong> Our courier partner will deliver your order to the address provided during checkout.</li>
              <li><strong>Pickup Points:</strong> You may choose to pick up your order from one of our designated pickup points in Nairobi and other major cities.</li>
            </ul>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.0 } }"
          >
            <h2 class="text-xl font-semibold mb-3">7. Shipping Delays</h2>
            <p>
              While we strive to deliver all orders within the estimated timeframes, delays may occur due to factors beyond our control, including but not limited to weather conditions, customs clearance for international orders, and logistical challenges. We will notify you of any significant delays and provide updates on your order status.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.1 } }"
          >
            <h2 class="text-xl font-semibold mb-3">8. Missing or Damaged Packages</h2>
            <p>
              If your package is damaged upon receipt or does not arrive within the expected timeframe, please contact our customer service team immediately. We recommend inspecting all packages upon delivery and before signing for receipt.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.2 } }"
          >
            <h2 class="text-xl font-semibold mb-3">9. Customs Clearance and Import Duties</h2>
            <p class="mb-3">
              As a full-service import facilitator, GlobalGrab handles the customs clearance process for all orders. Our quotes typically include:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Import Duties:</strong> Government-mandated taxes based on product category and value</li>
              <li><strong>VAT:</strong> Value Added Tax as per Kenyan regulations</li>
              <li><strong>Customs Processing Fees:</strong> Administrative charges for customs declaration and processing</li>
              <li><strong>Customs Clearance Handling:</strong> Our service fee for managing the customs process</li>
            </ul>
            <p class="mt-3">
              We strive to provide accurate estimates of these costs in our quotes. However, customs authorities may occasionally assess different duty rates or require additional documentation. In such cases, we will notify you promptly of any significant changes to the expected import costs.
            </p>
            <p class="mt-3">
              For certain restricted or regulated items, additional permits or clearances may be required, which could affect processing time and cost. We will inform you of such requirements during the quotation process whenever possible.
            </p>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1.3 } }"
          >
            <h2 class="text-xl font-semibold mb-3">10. Contact Us</h2>
            <p>
              If you have any questions about our Shipping Policy, please contact us at:
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
