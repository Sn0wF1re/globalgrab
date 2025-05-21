<script setup>
import { computed } from 'vue'
import { useHead } from '#imports'

const props = defineProps({
  type: {
    type: String,
    default: 'Organization'
  },
  data: {
    type: Object,
    default: () => ({})
  }
})

const defaultOrgData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GlobalGrab Kenya",
  "url": "https://globalgrab.co.ke",
  "logo": "https://globalgrab.co.ke/favicon.svg",
  "sameAs": [
    "https://www.instagram.com/globalgrabco",
    "https://tiktok.com/@globalgrabco",
    "https://wa.me/254711395142"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254 711 395 142",
    "contactType": "customer service",
    "email": "hello@globalgrab.co.ke",
    "availableLanguage": ["English", "Swahili"]
  },
  "description": "Your trusted personal shopping partner, bringing the world's best products to your doorstep in Kenya.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi",
    "addressCountry": "Kenya"
  }
}

const structuredData = computed(() => {
  if (props.type === 'Organization') {
    return JSON.stringify({...defaultOrgData, ...props.data})
  } else if (props.type === 'Service') {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Personal Shopping Service",
      "provider": {
        "@type": "Organization",
        "name": "GlobalGrab Kenya"
      },
      "description": "We help you purchase products from overseas stores and have them delivered to Kenya.",
      "areaServed": {
        "@type": "Country",
        "name": "Kenya"
      },
      ...props.data
    })
  } else if (props.type === 'FAQPage') {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": props.data.questions || []
    })
  } else if (props.type === 'BreadcrumbList') {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": props.data.items || []
    })
  } else {
    return JSON.stringify(props.data)
  }
})

// Use Nuxt's useHead to inject the JSON-LD script into the document head
useHead({
  script: [
    {
      key: `jsonld-${props.type}`, 
      type: 'application/ld+json',
      innerHTML: structuredData.value
    }
  ]
})
</script>

<template>
  <!-- This component doesn't render anything in the DOM -->
</template>
