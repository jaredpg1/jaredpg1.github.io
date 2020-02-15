<template>
  <base-section
    id="highlights"
    class="py-0 mt-n8"
  >
    <v-container class="px-0">
      <base-card class="v-card--highlights">
        <v-row no-gutters>
          <v-col
            v-for="(highlight, i) in highlights"
            :key="i"
            cols="12"
            md="4"
          >
            <highlight :item="highlight" />
          </v-col>
        </v-row>
      </base-card>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'HomeHighlights',

    components: {
      Highlight: () => import('./Highlight'),
    },

    data: () => ({
      highlights: [
        {
          heading: 'Free Shipping',
          subheading: 'Every Day, Every Item',
          caption: 'On orders over $85',
          src: require('@/assets/shipping.png'),
        },
        {
          heading: 'Dedicated Support',
          subheading: 'Live chat on Discord',
          caption: 'Talk with a Developer',
          src: require('@/assets/support.png'),
        },
        {
          heading: 'Secure',
          subheading: 'Payments through Shopify',
          caption: 'Paypal option available',
          src: require('@/assets/payments.png'),
        },
      ],
    }),
  }
</script>

<style lang="sass">
  .v-card--highlights
    .row > *:not(:first-child)
      border-left: 2px solid #EAEAEA

    @media screen and (max-width: 960px)
      .row > *:not(:first-child)
        border-left: none
        border-top: 2px solid #EAEAEA
</style>
