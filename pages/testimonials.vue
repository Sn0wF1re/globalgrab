<template>
  <div class="testimonials-page">
    <!-- Header Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto">
          <ScrollAnimation>
            <h1 class="text-4xl md:text-5xl font-bold font-heading mb-6">What Our Customers Say</h1>
            <p class="text-gray-600 text-lg mb-8">
              Don't just take our word for it. Here's what some of our happy customers have to say about their experience with GlobalGrab Kenya.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    <!-- Featured Testimonial -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <ScrollAnimation>
            <div class="bg-white rounded-2xl shadow-md overflow-hidden">
              <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="p-6 md:p-10 flex flex-col justify-center">
                  <div class="flex text-yellow-400 mb-6">
                    <Star v-for="i in 5" :key="i" class="fill-current" :size="24" />
                  </div>
                  
                  <ScrollAnimation :delay="0.3" direction="up">
                    <h2 class="text-2xl font-bold font-heading mb-6">
                      Exceptional Service From Start to Finish
                    </h2>
                  </ScrollAnimation>
                  
                  <ScrollAnimation :delay="0.5" direction="up">
                    <p class="text-gray-600 text-lg italic mb-8">
                      "I had been searching for a high-spec laptop that wasn't available in Kenya. GlobalGrab not only found exactly what I was looking for, but their communication throughout the entire process was outstanding. The laptop arrived well-packaged and in perfect condition. I saved almost 35% compared to what I would have paid for a new one locally. I've already recommended their service to all my colleagues!"
                    </p>
                  </ScrollAnimation>
                  
                  <ScrollAnimation :delay="0.7" direction="left">
                    <div class="flex items-center">
                      <div class="w-16 h-16 rounded-full mr-5 flex items-center justify-center bg-primary/10 text-primary">
                        <Icon name="lucide:briefcase" class="h-8 w-8" />
                      </div>
                      <div>
                        <h4 class="text-xl font-bold">James Mwangi</h4>
                        <p class="text-gray-600">Business Owner, Nakuru</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div class="bg-primary/10 flex items-center justify-center p-10">
                  <ScrollAnimation :delay="0.3" type="scale">
                    <div class="flex flex-col items-center justify-center h-full w-full">
                      <div class="w-48 h-48 rounded-full bg-white shadow-lg flex items-center justify-center text-primary mb-6">
                        <Icon name="lucide:briefcase" class="h-24 w-24" />
                      </div>
                      <div class="text-center">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Business Solutions</h3>
                        <p class="text-gray-600">Professional tech procurement for businesses</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    <!-- Testimonial Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <ScrollAnimation>
            <h2 class="text-3xl md:text-4xl font-bold font-heading mb-4">More Customer Stories</h2>
            <p class="text-gray-600">See what our clients have to say about their experiences with GlobalGrab Kenya.</p>
          </ScrollAnimation>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            v-for="(testimonial, index) in testimonials" 
            :key="testimonial.id" 
            :testimonial="testimonial" 
            :index="index" 
          />
        </div>
      </div>
    </section>

    <!-- Customer Success Stats -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <ScrollAnimation type="fade" direction="up">
              <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div class="text-4xl font-bold text-primary mb-2">100+</div>
                <div class="text-lg font-semibold text-gray-700">Happy Customers</div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation :delay="0.2" type="fade" direction="up">
              <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div class="text-4xl font-bold text-primary mb-2">98%</div>
                <div class="text-lg font-semibold text-gray-700">Satisfaction Rate</div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation :delay="0.4" type="fade" direction="up">
              <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div class="text-4xl font-bold text-primary mb-2">30%</div>
                <div class="text-lg font-semibold text-gray-700">Average Savings</div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation :delay="0.6" type="fade" direction="up">
              <div class="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div class="text-4xl font-bold text-primary mb-2">14</div>
                <div class="text-lg font-semibold text-gray-700">Days Avg. Delivery</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <ScrollAnimation>
          <h2 class="text-2xl md:text-3xl font-bold font-heading mb-4">Ready to Experience Our Service?</h2>
          <p class="max-w-2xl mx-auto mb-8">
            Join our growing list of satisfied customers and let us help you find the perfect tech products at amazing prices.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact">
              <Button variant="ghost" class="px-8 py-3 bg-white !text-[#F97029] hover:bg-gray-100 rounded-full font-bold border border-white shadow-md">
                Contact Us Now
              </Button>
            </NuxtLink>
            <NuxtLink to="/products">
              <Button class="px-8 py-3 bg-primary-dark hover:bg-primary-dark/90 text-white rounded-full font-medium border border-white/30">
                Browse Products
              </Button>
            </NuxtLink>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineComponent, h, resolveComponent } from 'vue';
import { Star } from 'lucide-vue-next';

const testimonials = [
  {
    id: 1,
    name: "David Kimani",
    position: "Software Developer",
    location: "Nairobi",
    quote: "I was skeptical at first, but GlobalGrab delivered my refurbished MacBook Pro in perfect condition and at a price that was 30% less than what I would have paid locally. The process was smooth and transparent.",
    rating: 5,
    icon: "lucide:code"
  },
  {
    id: 2,
    name: "Sarah Odhiambo",
    position: "Photographer",
    location: "Mombasa",
    quote: "I needed a specific camera model that wasn't available in Kenya. GlobalGrab not only found it for me at a great price, but they also handled all the import paperwork. Will definitely use their service again!",
    rating: 4.5,
    icon: "lucide:camera"
  },
  {
    id: 3,
    name: "James Mwangi",
    position: "Business Owner",
    location: "Nakuru",
    quote: "As a small business owner, I needed to purchase 5 refurbished laptops for my team. GlobalGrab provided excellent options within my budget and delivered everything on time. The quality was outstanding!",
    rating: 5,
    icon: "lucide:briefcase"
  },
  {
    id: 4,
    name: "Grace Wanjiku",
    position: "University Student",
    location: "Eldoret",
    quote: "Being a student, I was on a tight budget but needed a reliable laptop. GlobalGrab found me a refurbished MacBook Air that was perfect for my needs and saved me over Ksh 40,000. The delivery was faster than expected too!",
    rating: 5,
    icon: "lucide:graduation-cap"
  },
  {
    id: 5,
    name: "Daniel Otieno",
    position: "IT Manager",
    location: "Kisumu",
    quote: "Our company needed to upgrade our tech equipment, and GlobalGrab made the process hassle-free. The quality of the refurbished products was excellent, and their customer service was top-notch throughout the entire process.",
    rating: 4,
    icon: "lucide:server"
  },
  {
    id: 6,
    name: "Faith Njeri",
    position: "Content Creator",
    location: "Nairobi",
    quote: "I ordered a high-spec refurbished iPad Pro and editing accessories through GlobalGrab. The products arrived in pristine condition, and I saved a significant amount compared to buying new. Highly recommend their service!",
    rating: 5,
    icon: "lucide:video"
  }
];

// TestimonialCard component
const TestimonialCard = defineComponent({
  name: 'TestimonialCard',
  props: {
    testimonial: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    getIconForOccupation(occupation) {
      const iconMap = {
        'Software Developer': 'lucide:code',
        'Developer': 'lucide:code',
        'Photographer': 'lucide:camera',
        'Business Owner': 'lucide:briefcase',
        'Student': 'lucide:book-open',
        'University Student': 'lucide:graduation-cap',
        'IT Manager': 'lucide:server',
        'Content Creator': 'lucide:video',
        'Teacher': 'lucide:book',
        'Doctor': 'lucide:stethoscope',
        'Engineer': 'lucide:tool',
        'Designer': 'lucide:pen-tool'
      };
      
      // Try to match exact occupation
      if (iconMap[occupation]) {
        return iconMap[occupation];
      }
      
      // Check if any key in the map is a substring of the occupation
      for (const [key, value] of Object.entries(iconMap)) {
        if (occupation.toLowerCase().includes(key.toLowerCase())) {
          return value;
        }
      }
      
      // Default icon
      return 'lucide:user';
    }
  },
  render() {
    return h(resolveComponent('ScrollAnimation'), 
      { 
        delay: this.index * 0.1,
        type: 'fade',
        direction: this.index % 3 === 0 ? 'left' : this.index % 3 === 1 ? 'up' : 'right'
      }, 
      {
        default: () => h('div', { 
          class: 'bg-white rounded-xl p-6 border border-gray-100 h-full flex flex-col hover:shadow-md transition-all duration-300 transform hover:-translate-y-1'
        }, [
          // Profile first (at top)
          h('div', { class: 'flex items-center mb-4' }, [
            h('div', {
              class: 'w-16 h-16 rounded-full mr-4 bg-primary/10 text-primary flex items-center justify-center shadow-sm'
            }, [
              h(resolveComponent('Icon'), { 
                name: this.testimonial.icon || this.getIconForOccupation(this.testimonial.position), 
                class: 'h-8 w-8'
              })
            ]),
            h('div', {}, [
              h('h4', { class: 'font-bold text-lg' }, this.testimonial.name),
              h('p', { class: 'text-sm text-gray-500' }, `${this.testimonial.position}, ${this.testimonial.location}`)
            ])
          ]),
          
          // Stars
          h('div', { class: 'flex text-yellow-400 mb-4' }, [
            ...Array(Math.floor(this.testimonial.rating)).fill().map((_, i) => 
              h(Star, { key: `full-${i}`, class: 'fill-current', size: 18 })
            ),
            this.testimonial.rating % 1 !== 0 ? h('svg', {
              xmlns: 'http://www.w3.org/2000/svg',
              class: 'h-[18px] w-[18px]',
              viewBox: '0 0 20 20',
              fill: 'currentColor'
            }, [
              h('path', {
                d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
                fill: 'currentColor',
                clipRule: 'evenodd',
                fillRule: 'evenodd'
              })
            ]) : null
          ]),
          
          // Quote
          h('p', { class: 'text-gray-600 mb-4 italic flex-grow text-center' }, `"${this.testimonial.quote}"`)
        ])
      }
    );
  }
});
</script>

<style scoped>
.testimonials-page {
  max-width: 100%;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  /* Fix for container overflow on mobile */
  .container {
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    max-width: 100%;
  }
  
  /* Reduce padding on mobile for better fit */
  .p-10 {
    padding: 1.5rem !important;
  }
}
</style>
