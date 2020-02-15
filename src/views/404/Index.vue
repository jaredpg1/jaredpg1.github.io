<template>
  <base-section id="404-page">
    <v-container class="text-center">
      <div class="title mb-8">
        Sorry, we couldn't find what you were looking for.
      </div>

      <base-btn :to="{ name: 'Home' }">
        Go to Home
      </base-btn>
    </v-container>
  </base-section>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'FourOfFour',

    computed: {
      defaultSrc: sync('app/defaultSrc'),
    },

    created () {
      this.$store.commit('app/SET_HERO', {
        heading: '404 Not Found',
        src: this.defaultSrc,
      })
    },
  }
</script>
