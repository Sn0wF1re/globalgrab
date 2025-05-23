<template>
  <div>
    <JsonLd type="FAQPage" :data="{ questions: faqSchemaData }" />
    <!-- Header Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <ScrollAnimation>
            <h1 class="text-4xl md:text-5xl font-bold font-heading mb-6">Frequently Asked Questions</h1>
            <p class="text-gray-600 text-lg mb-8">
              Get answers to the most common questions about our service.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    <!-- FAQ Categories -->
    <section class="py-8 bg-gray-50 border-b border-gray-200">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="setCategory(cat.id)"
            :class="[
              'px-4 py-2 rounded-md font-medium',
              category === cat.id ? 'bg-primary text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            ]"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <ScrollAnimation type="fade" :duration="0.5">
          <div class="max-w-3xl mx-auto">
            <div class="space-y-6">
              <ScrollAnimation 
                v-for="(faq, index) in filteredFaqs" 
                :key="faq.id" 
                :delay="index * 0.1"
              >
                <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border-l-4 border-primary mb-4">
                  <div 
                    class="px-5 py-4 text-lg font-bold font-heading text-left flex justify-between items-center cursor-pointer text-gray-900"
                    @click="toggleFaq(faq.id)"
                  >
                    {{ faq.question }}
                    <Icon 
                      :name="openFaqs.includes(faq.id) ? 'lucide:chevron-up' : 'lucide:chevron-down'" 
                      class="h-5 w-5 shrink-0 transition-transform duration-200"
                      :class="{ 'text-primary': openFaqs.includes(faq.id) }"
                    />
                  </div>
                  <div 
                    v-if="openFaqs.includes(faq.id)" 
                    class="px-5 pb-4 pt-2 text-gray-600 border-t border-gray-100"
                  >
                    {{ faq.answer }}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>

    <!-- Still Have Questions Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 class="text-3xl font-bold font-heading mb-6 text-foreground">Still Have Questions?</h2>
            <p class="text-gray-600 mb-8 text-lg">
              We're here to help! If you can't find the answer to your question, feel free to contact us directly.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact">
                <Button class="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full">
                  Contact Us
                </Button>
              </NuxtLink>
              <a href="mailto:hello@globalgrab.co.ke">
                <Button variant="outline" class="px-8 py-3 border-2 border-primary text-primary bg-white hover:bg-primary/5 rounded-full">
                  Email Us
                </Button>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const category = ref('all')
const openFaqs = ref([])

const setCategory = (id) => {
  category.value = id
}

const toggleFaq = (id) => {
  if (openFaqs.value.includes(id)) {
    openFaqs.value = openFaqs.value.filter(faqId => faqId !== id)
  } else {
    openFaqs.value.push(id)
  }
}

const faqs = [
  {
    id: "q1",
    question: "What does GlobalGrab do?",
    answer: "GlobalGrab is a personal shopping and fulfillment service. We help you purchase products from overseas stores and have them delivered to Kenya. You choose the exact item and store, and we handle the logistics, payment, and shipping on your behalf.",
    category: "products"
  },
  {
    id: "q2",
    question: "Can you help me choose what to buy?",
    answer: "Yes, we can research and find reputable overseas stores and send you different options to choose from. We provide information on pricing, specifications, and availability, but the final selection of which item to purchase is always yours.",
    category: "products"
  },
  {
    id: "q3",
    question: "Do you offer warranties or guarantees on products?",
    answer: "No, we do not provide warranties, guarantees, or indemnity on any products. All items are purchased from third-party overseas stores as per your instructions. Any manufacturer warranty or store policy is between you and the original seller.",
    category: "products"
  },
  {
    id: "q4",
    question: "Can I return a product if I change my mind or if it’s not as expected?",
    answer: "Returns are only possible if the overseas store you purchased from allows returns, and you are responsible for any return shipping costs and processes. We can assist with the logistics if the store accepts returns, but we do not offer returns or exchanges ourselves.",
    category: "returns"
  },
  {
    id: "q5",
    question: "What payment methods do you accept?",
    answer: "We accept M-Pesa, bank transfers, and credit/debit cards for payments in Kenya. For international clients, PayPal is also accepted. All payments are processed securely.",
    category: "payment"
  },
  {
    id: "q6",
    question: "How long does shipping take?",
    answer: "Shipping times vary depending on the overseas store and shipping method you choose. Typically, delivery to Kenya takes 5-20 business days after your order is placed and confirmed.",
    category: "shipping"
  },
  {
    id: "q7",
    question: "Do I need to pay import duties or taxes?",
    answer: "Yes, all applicable import duties and taxes are included in your final quote. We handle customs clearance for you, so there are no surprise fees upon arrival.",
    category: "pricing"
  },
  {
    id: "q8",
    question: "How can I track my order?",
    answer: "Once your order is shipped, we’ll provide you with regular updates on your shipment’s status until it arrives in Kenya.",
    category: "shipping"
  },
  {
    id: "q9",
    question: "Can you source any type of product?",
    answer: "We can help you purchase almost any legal item from overseas stores, including electronics, fashion, beauty, and more. However, we do not handle prohibited or restricted items under Kenyan law.",
    category: "products"
  }
]

const categories = [
  { id: "all", name: "All Questions" },
  { id: "products", name: "Products" },
  { id: "shipping", name: "Shipping" },
  { id: "pricing", name: "Pricing" },
  { id: "payment", name: "Payment" },
  { id: "returns", name: "Returns & Warranty" }
]

const filteredFaqs = computed(() => {
  return category.value === "all"
    ? faqs
    : faqs.filter(faq => faq.category === category.value)
})

// Prepare the structured data for FAQs in Schema.org format
const faqSchemaData = computed(() => {
  return faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  })).filter(item => item.name && item.acceptedAnswer.text)
})

// SEO metadata
useHead({
  title: 'Frequently Asked Questions - GlobalGrab Kenya',
  meta: [
    { name: 'description', content: 'Get answers to common questions about GlobalGrab Kenya\'s personal shopping and fulfillment services, shipping, payment, and more.' },
    { property: 'og:title', content: 'Frequently Asked Questions - GlobalGrab Kenya' },
    { property: 'og:description', content: 'Common questions about our personal shopping service and how it works.' }
  ]
})
</script>
