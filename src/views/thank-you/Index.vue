<template>
  <base-section
    id="thank-you"
    class="pt-0"
  >
    <base-card
      max-width="800"
      class="mb-3 mx-auto mt-n12 text-center"
    >
      <v-card-title class="justify-center">
        For you for supporting Open Source Software
      </v-card-title>

      <v-divider class="my-3" />

      <v-card-text>
        Your purchases help support the continued maintenance<br>and development of Vuetify.
      </v-card-text>

      <v-img
        :src="require('@/assets/vuetify.svg')"
        class="mx-auto my-8"
        width="125"
      />

      <share-online
        align="center"
        class="mx-auto flex-column"
        justify="center"
      />

      <v-card-actions class="justify-center py-12">
        <base-btn
          :to="{ name: 'Home' }"
          x-large
        >
          Continue Shopping
        </base-btn>
      </v-card-actions>
    </base-card>
  </base-section>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'
  import { genMetaInfo } from '@/util/helpers'

  export default {
    name: 'ThankYou',

    metaInfo: genMetaInfo(
      'Thank You',
      'Your purchases help support the continued maintenance and development of Vuetify.',
      'thank you from vuetify'
    ),

    components: {
      ShareOnline: () => import('@/components/ShareOnline'),
    },

    computed: {
      defaultSrc: sync('app/defaultSrc'),
    },

    created () {
      this.$store.commit('app/SET_HERO', {
        heading: 'Thank you',
        src: this.defaultSrc,
      })
    },
  }
</script>
