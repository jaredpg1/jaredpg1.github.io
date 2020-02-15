<template>
  <v-row v-bind="$attrs">
    <v-col
      class="body-2 text-center"
      cols="12"
      md="auto"
    >
      Find us on social media
    </v-col>

    <v-col
      cols="12"
      md="auto"
    >
      <v-btn
        v-for="(social, i) in socialMedia"
        :key="i"
        :aria-label="`Link to ${social.text}`"
        :href="social.href"
        class="mx-1"
        color="primary"
        fab
        rel="noopener noreferrer"
        small
        target="_blank"
      >
        <v-icon
          size="20"
          v-text="social.icon"
        />
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'ShareOnline',

    computed: {
      socialMedia: sync('app/socialMedia'),
    },
  }
</script>
