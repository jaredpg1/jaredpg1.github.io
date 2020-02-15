<template>
  <v-banner
    v-model="banner"
    sticky
    style="text-align: center;"
  >
    <span style="letter-spacing: 2px"><strong>FREE</strong> SHIPPING ON ORDERS OVER $99</span>

    <!-- <template v-slot:actions>
      <v-btn
        text
        @click="banner = false"
      >
        Dismiss
      </v-btn>

      <v-btn
        color="primary"
        href="https://store.vuetifyjs.com/product/shopify-e-commerce-theme"
        rel="noopener noreferrer"
        target="_blank"
        text
        @click="banner = false"
      >
        Shop Now

        <v-icon
          right
          v-text="mdiShopping"
        />
      </v-btn>
    </template> -->
  </v-banner>
</template>

<script>
  // Icons
  import {
    mdiShopping,
  } from '@mdi/js'

  export default {
    name: 'CoreBanner',

    data: () => ({
      banner: true,
      mdiShopping,
    }),

    watch: {
      banner (val) {
        localStorage.setItem('vuetify_store_banner_ecommerce', true)
      },
    },

    // beforeMount () {
    //   const hasDismissedBanner = Boolean(localStorage.getItem('vuetify_store_banner_ecommerce'))

    //   this.banner = !hasDismissedBanner
    // },
  }
</script>

<style>
  .v-banner__text {
    width: 100%;
    text-align: center !important;
  }
</style>
