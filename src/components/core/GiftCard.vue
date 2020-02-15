<template>
  <v-snackbar
    v-model="snackbar"
    style="margin-top: 75px;"
    color="accent"
    top
    right
    :timeout="0"
  >
    <span class="white--text font-weight-medium subtitle-2">Purchase a gift card <router-link to="/collections/gift-cards">here</router-link> today!</span>
    <v-btn
      color="secondary"
      text
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
  export default {
    name: 'CoreGiftCard',
    data: () => ({
      snackbar: true,
    }),
  }
</script>

<style>
</style>
