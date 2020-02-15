<template>
  <base-section id="customer-reviews">
    <base-heading class="text-center mb-12">
      Customer Reviews
    </base-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(review, i) in reviews"
          :key="i"
          cols="12"
          md="4"
        >
          <base-review-card :item="review" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  // Utilities
  import {
    call,
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'HomeCustomerReviews',

    computed: {
      reviews: sync('reviews/reviews'),
    },

    created () {
      this.getReviews()
    },

    methods: {
      getReviews: call('reviews/getReviews'),
    },
  }
</script>
