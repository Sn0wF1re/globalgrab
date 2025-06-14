// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxtjs/sitemap',
    '@zadigetvoltaire/nuxt-gtm'
  ],
  gtm: {
    id: 'GTM-5GZ3SLV5'
  },
  components: [
    {
      path: '~/components/ui',
      pathPrefix: false,
    },
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  css: ['~/assets/css/main.css',],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~/tailwind.config.ts',
  },
  colorMode: {
    classSuffix: '',
  },
  app: {
    head: {
      title: 'GlobalGrab Kenya - Personal Shopping & Fulfillment Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'GlobalGrab Kenya - Your trusted personal shopping partner, bringing the world\'s best products to your doorstep. From tech to custom requests - we fetch it all!' },
        { name: 'keywords', content: 'GlobalGrab, global grab, global grab kenya, shopping, iphone, phone, fragrance, personal shopping, shopping, shop, cosmetics, shoes, shirts, dresses, refurb, refurbished, backmarket, asos, shein, reebelo, laptops, laptop' },
        { name: 'author', content: 'GlobalGrab Kenya' },
        { name: 'format-detection', content: 'telephone=yes' },
        { property: 'og:title', content: 'GlobalGrab Kenya - Personal Shopping & Fulfillment Services' },
        { property: 'og:description', content: 'Your trusted personal shopping partner, bringing global products to Kenya.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://globalgrab.co.ke' },
        { property: 'og:image', content: 'https://globalgrab.co.ke/images/og-global-grab.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'GlobalGrab Kenya - Personal Shopping & Fulfillment' },
        { name: 'twitter:description', content: 'Your trusted personal shopping partner in Kenya.' },
        { name: 'twitter:image', content: 'https://globalgrab.co.ke/images/og-global-grab.png' },
        { name: 'theme-color', content: '#F97029' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://globalgrab.co.ke' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'preload', as: 'image', href: '/images/world-map.webp', fetchpriority: 'high' }
      ]
    }
  },
  image: {
    quality: 80,
    format: ['webp', 'avif', 'png', 'jpg', 'jpeg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    providers: {
      ipx: {
        options: {
          modifiers: {
            format: 'webp',
            quality: '80',
            background: 'white',
            fit: 'cover',
          }
        }
      }
    },
    presets: {
      product: {
        modifiers: {
          fit: 'contain',
          format: 'webp',
          quality: '80',
          background: 'white',
        }
      }
    }
  },
  sitemap: {
    hostname: 'https://globalgrab.co.ke',
    routes: [
      '/',
      '/services',
      '/how-it-works',
      '/contact',
      '/products',
      '/faq',
      '/testimonials',
    ],
  },
  typescript: {
    strict: true
  }
})
