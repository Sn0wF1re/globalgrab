# GlobalGrab Kenya - Your Personal Shopping Partner

![GlobalGrab Logo](public/favicon.svg)

## 🚀 Overview

GlobalGrab Kenya is a personal shopping and fulfillment service that helps Kenyans purchase and receive products from international retailers. The platform connects Kenyan shoppers with global marketplaces, handling payment, shipping, customs, and delivery.

## 📋 Features

## 🛠️ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/) (Vue 3)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Icons**: [Lucide](https://lucide.dev/)
- **Image Optimization**: [Nuxt Image](https://image.nuxtjs.org/)
- **Animations**: [Vue Motion](https://motion.vueuse.org/)
- **Form Validation**: Vue custom validators
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **i18n**: Built-in internationalization support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
nuxt-version/
├── app.vue              # Main application entry point
├── assets/              # Uncompiled assets like CSS and images
├── components/          # Vue components used throughout the application
│   ├── icons/           # Custom icon components
│   └── ui/              # Reusable UI components
├── composables/         # Reusable Vue composables
├── layouts/             # Layout components
├── middleware/          # Route middleware
├── pages/               # Application pages and routes
├── plugins/             # Vue plugins
├── public/              # Static assets served at root path
├── server/              # Server API routes and middleware
├── stores/              # Pinia stores for state management
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── nuxt.config.ts       # Nuxt configuration
├── tailwind.config.js   # TailwindCSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 📝 Key Pages

- **Home (`/`)**: Introduction to GlobalGrab services
- **Products (`/products`)**: Browse product categories and featured items
- **Services (`/services`)**: Details about personal shopping services
- **How It Works (`/how-it-works`)**: Step-by-step guide to the shopping process
- **Testimonials (`/testimonials`)**: Customer reviews and success stories
- **FAQ (`/faq`)**: Frequently asked questions
- **About Us (`/about`)**: Team information and company story
- **Contact (`/contact`)**: Contact form and details

## 🎨 Customization

### Colors

The primary color scheme is defined in `tailwind.config.js` and `assets/css/main.css`. The main colors are:

- Primary: `#F97029` (Orange)
- Secondary: `hsl(200, 70%, 40%)` (Blue)
- Accent: `hsl(160, 70%, 40%)` (Green)
- Neutral: `bg-gray-800` (Dark gray)

### Adding New Pages

Create a new Vue file in the `pages` directory. Nuxt will automatically create a route based on the filename.

```vue
<!-- pages/new-page.vue -->
<template>
  <div>
    <h1>New Page</h1>
  </div>
</template>

<script setup>
useHead({
  title: 'New Page - GlobalGrab Kenya',
  meta: [
    { name: 'description', content: 'Description of the new page' }
  ]
})
</script>
```

## 🔍 SEO Implementation

The site uses several SEO techniques:

1. **Meta Tags**: Every page has proper meta tags via `useHead()` composable
2. **Structured Data**: JSON-LD for rich results in search engines
3. **Sitemap**: XML sitemap at `/sitemap.xml`
4. **Robots.txt**: Proper robots configuration
5. **Image Optimization**: All images use the `<NuxtImg>` component
6. **Performance**: Fast loading times and good performance metrics

## 🔄 API Integration

The contact form submits to the `/api/submit` endpoint provided by a server route in the `server/api` directory. This can be customized to integrate with your preferred backend or API service.

## 📱 Social Media Integration

Social media links are integrated in the footer, connecting to:
- TikTok
- Instagram
- WhatsApp

## 📈 Analytics Integration

Google Analytics can be enabled by adding your measurement ID in the `nuxt.config.ts` file under the `googleAnalytics` section.

## 📦 Deployment

The application is ready for deployment on services like Vercel, Netlify, or any platform that supports Nuxt 3. Simply connect your repository and deploy.

```bash
# Build the application
npm run build

# Generate static files (if using static hosting)
npm run generate

# Start production server (if using SSR)
npm run start
```

## 🧪 Testing

Run the included tests to ensure everything is working correctly:

```bash
# Run unit tests
npm run test

# Run end-to-end tests
npm run test:e2e
```

## 📝 License

MIT License

## 📞 Contact

For questions or support regarding the GlobalGrab platform, contact:

- **Email**: support@globalgrab.co.ke
- **WhatsApp**: +254711395142
- **TikTok**: @globalgrabco
- **Instagram**: @globalgrabco

---

Built with ❤️ for Kenyan shoppers looking to access global marketplaces.
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)
