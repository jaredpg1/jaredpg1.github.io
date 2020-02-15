<template>
  <base-products
    id="new-arrivals"
    :products="products"
    heading="New Arrivals"
  />
</template>

<script>
  // Helpers
  import {
    get,
  } from 'vuex-pathify'

  export default {
    name: 'HomeNewArrivals',

    computed: {
      products: get('products/productsByNew'),
    },
  }
</script>
