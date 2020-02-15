<template>
  <base-hero
    class="mb-n12"
    gradient="to right bottom, rgba(0, 46, 79, .9), rgba(0, 46, 79, .9)"
    max-height="30vh"
    :item="{
      tag: 'Do You Still Have questions?',
      src: require('@/assets/find-your-answer.png')
    }"
  >
    <v-responsive
      class="mt-8 mx-auto text-none"
      max-width="400"
    >
      <base-text>
        If your are unable to find an answer, please reach out to us by email
      </base-text>

      <base-btn
        x-large
        :to="{
          name: 'Contact',
          hash: '#write-to-us'
        }"
      >
        Contact Us
      </base-btn>
    </v-responsive>
  </base-hero>
</template>

<script>
  export default {
    name: 'BaseFindYourAnswer',
  }
</script>
