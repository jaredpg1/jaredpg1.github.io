<template>
  <base-section
    id="contact-us"
    :class="`${$vuetify.breakpoint.mdAndUp ? 'mt-n8' : 'mt-0'}`"
  >
    <contact-map />

    <contact-info />
  </base-section>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'
  import { genMetaInfo } from '@/util/helpers'

  export default {
    name: 'Contact',

    metaInfo: genMetaInfo(
      'Contact Us',
      'Please feel free to reach out to us with your questions and comments.',
      'contact vuetify'
    ),

    components: {
      ContactInfo: () => import('./components/Info'),
      ContactMap: () => import('./components/Map'),
    },

    computed: {
      defaultSrc: sync('app/defaultSrc'),
    },

    created () {
      this.$store.commit('app/SET_HERO', {
        heading: null,
        src: null,
      })
    },
  }
</script>
