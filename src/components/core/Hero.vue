<template>
  <v-fade-transition hide-on-leave>
    <base-hero
      v-show="!['Home', 'Contact'].includes(name)"
      :item="hero"
      :min-height="$vuetify.breakpoint.mdAndUp ? '20vh' : '5vh'"
      :max-height="$vuetify.breakpoint.mdAndUp ? '300' : '150'"
    />
  </v-fade-transition>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'CoreHero',

    computed: {
      hero: sync('app/hero'),
      name: sync('route/name'),
    },
  }
</script>
