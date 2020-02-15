<template>
  <base-section
    id="categories-products"
    class="pt-0"
  >
    <v-container>
      <v-row justify="center">
        <v-col
          v-for="product in products"
          :key="product.title"
          class="d-flex"
          cols="6"
          sm="6"
          md="4"
          lg="3"
        >
          <base-product-card
            :item="product"
            :height="$vuetify.breakpoint.mdAndUp ? 375 : 250"
            class="grow"
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
    sync,
  } from 'vuex-pathify'

  // Icons
  import {
    mdiChevronRight,
  } from '@mdi/js'

  export default {
    name: 'CategoryProducts',

    data: () => ({
      mdiChevronRight,
    }),

    computed: {
      collection: sync('route/params@collection'),
      currentCollection: get('collections/currentCollection'),
      products: get('collections/currentCollectionProducts'),
      productsByCollection: get('collections/productsByCollection'),
    },
  }
</script>
