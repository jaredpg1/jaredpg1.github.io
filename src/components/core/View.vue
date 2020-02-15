<template>
  <v-content id="content">
    <core-hero />
    <!-- <core-banner /> -->
    <core-gift-card />
    <router-view />
  </v-content>
</template>

<script>
  // Icons
  import {
    mdiShopping,
  } from '@mdi/js'

  export default {
    name: 'CoreView',

    components: {
      // CoreBanner: () => import('@/components/core/Banner'),
      CoreGiftCard: () => import('@/components/core/GiftCard'),
      CoreHero: () => import('@/components/core/Hero'),
    },

    data: () => ({
      banner: true,
      mdiShopping,
    }),
  }
</script>
