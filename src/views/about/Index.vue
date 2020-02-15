<template>
  <base-section id="about">
    <about-intro />

    <!-- <about-highlights /> -->

    <!-- <about-author /> -->

    <!-- <about-team /> -->

    <about-write />
  </base-section>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'About',

    metaInfo: {
      title: 'About',
      meta: [
        { name: 'description', content: 'The About Page' },
        { name: 'keywords', content: 'about' },
      ],
    },

    components: {
      // AboutAuthor: () => import('./components/Author'),
      AboutIntro: () => import('./components/Intro'),
      // AboutTeam: () => import('./components/Team'),
      // AboutHighlights: () => import('./components/Highlights'),
      AboutWrite: () => import('./components/Write'),
    },

    computed: {
      defaultSrc: sync('app/defaultSrc'),
    },

    created () {
      this.$store.commit('app/SET_HERO', {
        heading: 'About Us',
        src: this.defaultSrc,
      })
    },
  }
</script>
