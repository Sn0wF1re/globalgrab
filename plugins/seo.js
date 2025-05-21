export default defineNuxtPlugin(() => {
  // This plugin provides default SEO settings for all pages
  const defaultSeo = {
    title: 'GlobalGrab Kenya - Personal Shopping & Fulfillment Services',
    description: 'Your trusted personal shopping partner, bringing the world\'s best products to your doorstep in Kenya. From tech to custom requests - we fetch it all!',
    ogImage: 'https://globalgrab.co.ke/images/og-image.jpg',
    twitterImage: 'https://globalgrab.co.ke/images/twitter-card.jpg',
    baseUrl: 'https://globalgrab.co.ke',
    keywords: 'personal shopping, Kenya shopping, global products, international shopping service, product sourcing Kenya'
  }
  
  // Provide a composable for pages to use
  return {
    provide: {
      defaultSeo
    }
  }
});
