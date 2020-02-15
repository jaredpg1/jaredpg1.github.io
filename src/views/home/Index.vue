<template>
  <base-section
    id="home"
    class="pt-0"
  >
    <v-responsive min-height="100vh">
      <core-banner />
      <v-row class="mx-0">
        <v-col
          v-for="(component, i) in components"
          :key="i"
          cols="12"
        >
          <div :class="component.class">
            <component :is="`home-${component.name}`" />
          </div>
        </v-col>
      </v-row>
    </v-responsive>
  </base-section>
</template>

<script>
  // Utilities
  import { genMetaInfo } from '@/util/helpers'

  export default {
    name: 'Home',

    metaInfo: genMetaInfo(
      'Home',
      'The home page of the Vuetify store. Check out our newest apparel and themes!',
      'store home, vuetify store homepage'
    ),

    components: {
      CoreBanner: () => import('@/components/core/Banner'),
      HomeCarousel: () => import('./components/Carousel'),
      // HomeCustomerReviews: () => import('./components/CustomerReviews'),
      HomeBuyItNow: () => import('./components/BuyItNow'),
      HomeFeaturedProducts: () => import('./components/FeaturedProducts'),
      // HomeHighlights: () => import('./components/Highlights'),
      // HomeLatestFromBlogs: () => import('./components/LatestFromBlogs'),
      HomeNewArrivals: () => import('./components/NewArrivals'),
      // HomeSaleHero: () => import('./components/SaleHero'),
      // HomeSubscribe: () => import('./components/Subscribe'),
    },

    data: () => ({
      components: [
        { name: 'carousel' },
        // { name: 'highlights' },
        { name: 'featured-products' },
        { name: 'buy-it-now', class: 'white' },
        // { name: 'sale-hero' },
        { name: 'new-arrivals' },
        // { name: 'customer-reviews' },
        // { name: 'subscribe' },
        // { name: 'latest-from-blogs' },
      ],
    }),
  }
</script>
