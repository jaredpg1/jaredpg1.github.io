<template>
  <base-section
    v-if="currentProduct && relatedProducts.length > 0"
    id="product-related-products"
    class="grey lighten-2 mb-n3 mb-md-n12"
  >
    <v-container class="pt-12">
      <base-heading class="text-center">
        You Might Also Like
      </base-heading>

      <v-row>
        <v-col
          v-for="item in relatedProducts"
          :key="item.title"
          cols="12"
          md="6"
          lg="4"
        >
          <base-product-card
            :item="item"
            :height="$vuetify.breakpoint.mdAndUp ? 400 : 250"
            dense
            responsive
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  // Utilities
  import {
    get,
  } from 'vuex-pathify'

  export default {
    name: 'ProductRelatedProducts',

    computed: {
      currentProduct: get('products/currentProduct'),
      productsByCategory: get('products/productsByCategory'),
      relatedProducts () {
        if (!this.currentProduct) return []

        const selected = []
        const categoryProducts = this.productsByCategory[this.currentProduct.productType] || []
        const products = categoryProducts.filter(product => {
          return product.id !== this.currentProduct.id
        })

        if (!products.length) return []
        if (products.length < 4) return products

        for (let i = 0; i < 3; i++) {
          selected.push(
            products.splice(Math.floor(Math.random() * products.length), 1).shift()
          )
        }

        return selected
      },
    },
  }
</script>
