<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <core-view />

    <core-footer />

    <core-cookie />
  </v-app>
</template>

<script>
  // Utilities
  import {
    call,
  } from 'vuex-pathify'

  export default {
    name: 'App',

    metaInfo () {
      const image = `${window.location.origin}${require('@/assets/vuetify.png')}`

      return {
        title: '',
        titleTemplate: '%s — Goody 2 Shoes',
        htmlAttrs: {
          lang: 'en',
        },
        meta: [
          { charset: 'utf-8' },
          { property: 'og:site_name', content: 'Goody 2 Shoes - Decatur, AL' },
          { property: 'og:image', content: image },
          { property: 'twitter:image', content: image },
          { name: 'twitter:card', content: 'summary' },
        ],
      }
    },

    components: {
      CoreCookie: () => import('@/components/core/Cookie'),
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreView: () => import('@/components/core/View'),
    },

    created () {
      window.onfocus = () => this.getCheckout()

      this.init()
    },

    methods: {
      getCheckout: call('cart/getCheckout'),
      init: call('app/init'),
    },
  }
</script>

<style lang="sass">
  .v-content__wrap section
    padding: 48px 0

    @media screen and (max-width: 960px)
      padding: 12px 0

  .text-decoration-none
    text-decoration: none
</style>
