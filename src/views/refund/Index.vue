<template>
  <base-section
    id="privacy-policy-index"
    class="body-1 font-weight-light"
  >
    <v-container>
      <v-row>
        <v-col cols="12">
          <base-heading>RETURNS</base-heading>

          <base-text>
            Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.
          </base-text>

          <base-text>
            To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
          </base-text>

          <base-text>
            Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.
          </base-text>

          <base-text>
            Additional non-returnable items:
          </base-text>

          <ul>
            <li>
              <base-text>Gift Cards</base-text>
            </li>

            <li>
              <base-text>Downloadable software products</base-text>
            </li>

            <li>
              <base-text>Some health and personal care items</base-text>
            </li>
          </ul>

          <base-text>
            To complete your return, we require a receipt or proof of purchase.
          </base-text>

          <base-text>
            Please do not send your purchase back to the manufacturer.
          </base-text>

          <base-text>
            There are certain situations where only partial refunds are granted: (if applicable)
          </base-text>

          <base-text>
            <ul>
              <li>Book with obvious signs of use</li>
              <li>CD, DVD, VHS tape, software, video game, cassette tape, or vinyl record that has been opened.</li>
              <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li>
              <li>Any item that is returned more than 30 days after delivery</li>
            </ul>
          </base-text>

          <base-subheading>Refunds (if applicable)</base-subheading>

          <base-text>
            Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
          </base-text>

          <base-text>
            If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
          </base-text>

          <base-subheading>Late or missing refunds (if applicable)</base-subheading>

          <base-text>
            If you haven’t received a refund yet, first check your bank account again.
            Then contact your credit card company, it may take some time before your refund is officially posted.
            Next contact your bank. There is often some processing time before a refund is posted.
            If you’ve done all of this and you still have not received your refund yet, please contact us at john@vuetifyjs.com.
          </base-text>

          <base-subheading>Sale items (if applicable)</base-subheading>
          <base-text>
            Only regular priced items may be refunded, unfortunately sale items cannot be refunded.
          </base-text>

          <base-subheading>Exchanges (if applicable)</base-subheading>

          <base-text>
            We only replace items if they are defective or damaged.  If you need to exchange it for the same item, send us an email at john@vuetifyjs.com and send your item to: 4555 Summerbrook Circle, Fort Worth, TX, 76137, United States.
          </base-text>

          <base-subheading>Gifts</base-subheading>

          <base-text>
            If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.
          </base-text>

          <base-text>
            If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.
          </base-text>

          <base-subheading>Shipping</base-subheading>
          <base-text>
            To return your product, you should mail your product to: 4555 Summerbrook Circle, Fort Worth, TX, 76137, United States.
          </base-text>

          <base-text>
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
          </base-text>

          <base-text>
            Depending on where you live, the time it may take for your exchanged product to reach you, may vary.
          </base-text>

          <base-text>
            If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.
          </base-text>
        </v-col>

        <v-col
          class="mx-auto text-center"
          cols="12"
        >
          <base-btn @click="$vuetify.goTo(0)">
            Scroll to Top
          </base-btn>
        </v-col>
      </v-row>
    </v-container>

    <base-find-your-answer />
  </base-section>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'
  import { genMetaInfo } from '@/util/helpers'

  export default {
    name: 'RefundPolicy',

    metaInfo: genMetaInfo(
      'Refund Policy',
      'Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.',
      'vuetify refund policy'
    ),

    computed: {
      defaultSrc: sync('app/defaultSrc'),
    },

    created () {
      this.$store.commit('app/SET_HERO', {
        heading: 'Refund Policy',
        src: this.defaultSrc,
      })
    },
  }
</script>
