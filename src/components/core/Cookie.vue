<template>
  <v-expand-transition>
    <v-footer
      v-if="cookie"
      app
      color="rgba(0, 0, 0, .9)"
      class="pa-0 ma-0 d-flex align-center justify-center"
      dark
      fixed
      height="275"
      style="position: fixed !important; /* remove in v2.0.18 */"
    >
      <div class="text-center mt-8">
        <v-responsive
          max-width="600"
          class="mb-6 mx-auto"
        >
          We use cookies to ensure that we give you the best experience on our website.
          By closing this message, you consent to our cookies on this device in accordance with our cookie policy unless you have disabled them.
        </v-responsive>

        <base-btn @click="cookie = false">
          I Agree
        </base-btn>
      </div>
    </v-footer>
  </v-expand-transition>
</template>

<script>
  export default {
    name: 'CoreCookie',

    data: () => ({
      cookie: !localStorage.getItem('vuetify-accepted-cookie-policy'),
    }),

    watch: {
      cookie (val) {
        if (!val) localStorage.setItem('vuetify-accepted-cookie-policy', true)
      },
    },
  }
</script>
