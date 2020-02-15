<template>
  <base-products
    id="featured-products"
    :products="products"
    heading="Featured Products"
  />
</template>

<script>
  // Utilities
  import {
    get,
  } from 'vuex-pathify'

  export default {
    name: 'HomeFeaturedProducts',

    computed: {
      products: get('products/productsFeatured'),
    },
  }
</script>
