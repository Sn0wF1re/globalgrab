<template>
  <div>
    <JsonLd 
      type="BreadcrumbList" 
      :data="breadcrumbData" />
    <!-- Hero Section -->
    <section class="py-16 md:py-24 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <ScrollAnimation>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">Product Sourcing Service</h1>
            <p class="text-gray-600 text-lg mb-8">
              We can source and deliver high-quality products from international markets to your doorstep in Kenya.
            </p>
          </ScrollAnimation>
          <ScrollAnimation :delay="0.2">
            <div class="flex flex-wrap justify-center gap-4 mb-12">
              <NuxtLink to="/contact">
                <Button variant="ghost" class="px-8 py-3 bg-white !text-[#F97029] hover:bg-gray-100 rounded-full font-bold shadow-md border border-white">
                  Request Any Product
                </Button>
              </NuxtLink>

              <NuxtLink to="/how-it-works">
                <Button class="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium">
                  How It Works
                </Button>
              </NuxtLink>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <ScrollAnimation>
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Products We Can Source For You</h2>
        </ScrollAnimation>

        <div class="mb-8 flex flex-wrap justify-center gap-2">
          <button 
            v-for="(cat, index) in categories" 
            :key="index"
            @click="setActiveCategory(cat)"
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors mx-1 mb-2"
            :class="activeCategory === cat ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'"
          >
            {{ cat }}
          </button>
        </div>

        <ScrollAnimation type="fade" :duration="0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            <div v-for="(product, index) in filteredProducts" :key="index" class="bg-white rounded-xl shadow-md overflow-hidden relative hover:shadow-lg transition-all">
              <div v-if="product.badge" :class="`absolute top-3 left-3 bg-${getBadgeColor(product.badge.color)} text-white text-xs font-bold px-2 py-1 rounded`">
                {{ product.badge.text }}
              </div>
              
              <div class="overflow-hidden product-image-container">
                <NuxtImg 
                  class="product-image w-full object-contain hover:scale-105 transition-transform" 
                  :src="product.image" 
                  :alt="product.name" 
                  loading="lazy" 
                  width="500"
                  height="400"
                  quality="80"
                  format="webp"
                  preset="product"
                  provider="ipx"
                  sizes="sm:300px md:400px lg:500px"
                />
              </div>
              
              <div class="p-6 flex flex-col h-full">
                <h3 class="text-lg font-bold mb-2 text-center text-foreground">{{ product.name }}</h3>
                <div class="mb-4 flex justify-center">
                  <RatingStars :rating="product.rating" />
                </div>
                <div class="text-sm text-gray-500 mb-6 text-center flex-grow">{{ product.description }}</div>
                <div class="flex justify-center mt-auto">
                  <NuxtLink to="/contact">
                    <Button class="flex items-center gap-2 text-sm px-6 py-2 bg-primary text-white hover:bg-primary-dark rounded-full">
                      <span>Request Quote</span>
                      <Icon name="lucide:message-square" class="h-4 w-4" />
                    </Button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <div class="text-center">
          <ScrollAnimation :delay="0.2">
            <NuxtLink to="/contact">
              <Button class="px-8 py-3 bg-primary text-white font-medium rounded-full">
                Request Custom Sourcing
              </Button>
            </NuxtLink>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    <!-- Product Categories Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <ScrollAnimation>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Browse By Category</h2>
            <p class="text-gray-600">
              Explore the categories of products we can source for you from around the world.
            </p>
          </ScrollAnimation>
        </div>

        <ScrollAnimation :delay="0.1">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            <!-- Category Cards -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg">
              <NuxtImg 
                class="h-48 w-full object-cover" 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" 
                alt="Electronics"
                loading="lazy"
                width="800"
                height="400" 
                quality="80"
                format="webp"
                :modifiers="{
                  fit: 'cover',
                  format: 'webp',
                }"
                provider="ipx"
                sizes="sm:100vw md:50vw lg:33vw"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-foreground">Electronics</h3>
                <p class="text-gray-600">Latest gadgets, smartphones, laptops and more</p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg">
              <NuxtImg 
                class="h-48 w-full object-cover" 
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f" 
                alt="Fashion"
                loading="lazy"
                width="800"
                height="400" 
                quality="80"
                format="webp"
                :modifiers="{
                  fit: 'cover',
                  format: 'webp',
                }"
                provider="ipx"
                sizes="sm:100vw md:50vw lg:33vw"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-foreground">Fashion</h3>
                <p class="text-gray-600">Designer clothing, shoes and accessories</p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg">
              <NuxtImg 
                class="h-48 w-full object-cover" 
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101" 
                alt="Home & Kitchen"
                loading="lazy"
                width="800"
                height="400" 
                quality="80"
                format="webp"
                :modifiers="{
                  fit: 'cover',
                  format: 'webp',
                }"
                provider="ipx"
                sizes="sm:100vw md:50vw lg:33vw"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-foreground">Home & Kitchen</h3>
                <p class="text-gray-600">Appliances, decor and furnishings</p>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg">
              <NuxtImg 
                class="h-48 w-full object-cover" 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348" 
                alt="Beauty & Health"
                loading="lazy"
                width="800"
                height="400" 
                quality="80"
                format="webp"
                :modifiers="{
                  fit: 'cover',
                  format: 'webp',
                }"
                provider="ipx"
                sizes="sm:100vw md:50vw lg:33vw"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-foreground">Beauty & Health</h3>
                <p class="text-gray-600">Premium cosmetics, fragrances, and wellness products</p>
              </div>
            </div>

            <!-- <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg">
              <NuxtImg 
                class="h-48 w-full object-cover" 
                src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0" 
                alt="Sporting Goods"
                loading="lazy" 
                format="webp"
                width="800"
                height="400" 
                quality="80"
                :modifiers="{
                  fit: 'cover',
                  format: 'webp',
                }"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Sporting Goods</h3>
                <p class="text-gray-600">Fitness equipment, sportswear and accessories</p>
              </div>
            </div> -->

            <!-- <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg">
              <NuxtImg 
                class="h-48 w-full object-cover" 
                src="https://images.unsplash.com/photo-1632507399981-6c6e43c6ae1b" 
                alt="Gadgets"
                loading="lazy" 
                format="webp"
                width="800"
                height="400" 
                quality="80"
                :modifiers="{
                  fit: 'cover',
                  format: 'webp',
                }"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Gadgets</h3>
                <p class="text-gray-600">Smart devices, wearables and innovative tech</p>
              </div>
            </div> -->
          </div>
        </ScrollAnimation>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <ScrollAnimation>
          <h2 class="text-2xl md:text-3xl font-bold font-heading mb-4">Need Something Not Listed Here?</h2>
          <p class="max-w-2xl mx-auto mb-8">
            Our personal shopping service can source virtually any product from international markets. Just tell us what you're looking for!
          </p>
          <NuxtLink to="/contact">
            <Button variant="ghost" class="px-8 py-3 bg-white !text-[#F97029] hover:bg-gray-100 rounded-full font-bold border border-white shadow-md">
              Request Any Product
            </Button>
          </NuxtLink>
        </ScrollAnimation>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { defineComponent, h } from 'vue';
import { useBreadcrumbs } from '~/composables/useBreadcrumbs';

const { generateBreadcrumbList } = useBreadcrumbs();

const breadcrumbData = generateBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' }
]);

useHead({
  title: 'Products | GlobalGrab Kenya',
  meta: [
    { name: 'description', content: 'Explore our curated range of high-quality products sourced from international markets. GlobalGrab delivers tech, fashion, home goods and more to your doorstep in Kenya.' },
    { property: 'og:title', content: 'Products | GlobalGrab Kenya' },
    { property: 'og:description', content: 'Explore our curated range of products sourced from international markets and delivered to Kenya.' }
  ]
})

// RatingStars component definition
const RatingStars = defineComponent({
  props: {
    rating: {
      type: Number,
      default: 5
    }
  },
  render() {
    const stars = [];
    const fullStars = Math.floor(this.rating);
    const hasHalfStar = this.rating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(h('Icon', { name: 'lucide:star', class: 'h-4 w-4 text-yellow-400' }));
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(h('Icon', { name: 'lucide:star-half', class: 'h-4 w-4 text-yellow-400' }));
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(h('Icon', { name: 'lucide:star', class: 'h-4 w-4 text-gray-300' }));
    }
    
    return h('div', { class: 'flex items-center' }, [
      ...stars,
      h('span', { class: 'ml-1 text-sm text-gray-500' }, `(${this.rating})`)
    ]);
  }
});

// Categories
const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Beauty & Health'];
const activeCategory = ref('All');

const setActiveCategory = (category) => {
  activeCategory.value = category;
};

// Products data
const products = [
  {
    name: 'Apple iPhone 15 Pro',
    description: 'Latest Apple smartphone with premium features and advanced camera system',
    image: 'https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?auto=format&fit=crop&w=500&q=80',
    category: 'Electronics',
    rating: 4.9,
    badge: {
      text: 'NEW',
      color: 'primary'
    }
  },
  {
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Industry-leading noise cancellation with exceptional sound quality',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Electronics',
    rating: 4.8
  },
  {
    name: 'Air Jordan 1',
    description: 'Lifestyle shoes with the first-ever Max Air unit designed specifically for Nike Sportswear',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Fashion',
    rating: 4.7
  },
  {
    name: 'Coco Chanel Perfume',
    description: 'Iconic luxury fragrance with elegant floral notes and timeless sophistication',
    image: 'https://images.unsplash.com/photo-1628001242958-957834454d40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Beauty & Health',
    rating: 4.6,
    badge: {
      text: 'POPULAR',
      color: 'primary'
    }
  },
  {
    name: 'DJI Osmo Pocket 3',
    description: 'Compact 4K stabilized camera with built-in gimbal for smooth cinematic videos on the go',
    image: 'https://images.unsplash.com/photo-1703145204993-d1178bfc3f9f?auto=format&fit=crop&w=500&q=80',
    category: 'Electronics',
    rating: 4.8,
    badge: {
      text: 'POPULAR',
      color: 'primary'
    }
  },
  {
    name: 'Samsung Frame TV (2024)',
    description: 'When turned off, displays art that looks completely natural on your wall',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Home',
    rating: 4.5
  },
  {
    name: 'Macbook Air M3',
    description: 'Ultra-thin laptop with Apple\'s powerful M3 chip for all-day battery life',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Electronics',
    rating: 4.9
  },
  {
    name: 'Bose QuietComfort Earbuds II',
    description: 'Best-in-class noise cancellation with customizable fit for all-day comfort',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    category: 'Electronics',
    rating: 4.7
  },
  {
    name: 'Le Creuset Dutch Oven',
    description: 'Premium cast iron cookware with superior heat retention and distribution',
    image: 'https://images.unsplash.com/photo-1556911820-1238441ed1a7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Home',
    rating: 4.8
  },
  {
    name: 'Canon EOS R5',
    description: 'Professional mirrorless camera with 8K video recording capabilities',
    image: 'https://images.unsplash.com/photo-1613235577937-9ac3eed992fc?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Electronics',
    rating: 4.9,
    badge: {
      text: 'PREMIUM',
      color: 'primary'
    }
  },
  {
    name: 'Peloton Bike+',
    description: 'Premium home exercise bike with rotating touchscreen and automatic resistance',
    image: 'https://images.unsplash.com/photo-1591741535018-d042766c62eb?auto=format&fit=crop&w=500&q=80',
    category: 'Beauty & Health',
    rating: 4.7
  }
];

const filteredProducts = computed(() => {
  if (activeCategory.value === 'All') {
    return products;
  }
  return products.filter(product => product.category === activeCategory.value);
});

// Helper function for badge color
const getBadgeColor = (color) => {
  const colorMap = {
    'green-600': 'green-600',
    'blue-600': 'blue-600',
    'red-600': 'red-600',
    'yellow-600': 'yellow-600',
    'primary': 'primary'
  };
  return colorMap[color] || 'primary';
};
</script>

<style scoped>
.product-image-container {
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.product-image {
  max-height: 100%;
  object-fit: contain;
  width: auto !important;
  max-width: 100%;
}

@media (max-width: 768px) {
  .product-image-container {
    height: 220px;
  }
  
  /* Ensure images are properly scaled on mobile */
  .product-image {
    height: auto !important;
    width: auto !important;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>