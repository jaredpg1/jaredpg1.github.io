<template>
  <base-section
    v-if="product"
    id="deal-of-the-day"
  >
    <v-row>
      <v-col
        cols="12"
        md="5"
      >
        <v-lazy :min-height="$vuetify.breakpoint.mdAndUp ? 500 : 150">
          <div class="grey lighten-3">
            <keep-alive>
              <v-fade-transition mode="out-in">
                <v-img
                  :key="src"
                  :height="$vuetify.breakpoint.mdAndUp ? 500 : 150"
                  :src="src"
                  contain
                  width="100%"
                />
              </v-fade-transition>
            </keep-alive>
          </div>
        </v-lazy>
      </v-col>

      <v-col
        class="pa-6"
        cols="12"
        md="7"
      >
        <base-heading>
          Buy It Now
        </base-heading>

        <div
          class="headline font-weight-medium mb-3"
          v-text="product.title"
        />

        <div class="body-1 mb-3 font-weight-medium">
          <del
            class="mr-1"
            v-text="`$${product.compareAt}`"
          />

          <span class="error--text">Now Only ${{ product.price }}</span>
        </div>

        <div
          class="body-2 mb-8"
          v-html="product.descriptionHtml"
        />

        <v-row
          class="mb-8"
          dense
        >
          <v-col
            cols="12"
            md="auto"
          >
            <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              :loading="isAddingToCart"
              class="mb-6 mb-md-0"
              @click="addToCart"
            >
              Add To Cart
            </base-btn>
          </v-col>

          <v-col
            cols="12"
            md="auto"
          >
            <base-btn
              :block="$vuetify.breakpoint.smAndDown"
              :loading="isBuyingItNow"
              color="white"
              @click="buyNow"
            >
              Buy It Now
            </base-btn>
          </v-col>
        </v-row>

        <v-row :justify="$vuetify.breakpoint.smAndDown ? 'center' : undefined">
          <v-col
            v-for="(s, i) in product.images.slice(0, 3)"
            :key="i"
            class="d-flex"
            cols="auto"
          >
            <base-card
              aria-label="Select Image"
              color="grey lighten-3"
              flat
              width="175"
              max-height="175"
              tile
              @click="src = s.src"
            >
              <v-fade-transition mode="out-in">
                <v-img
                  :src="s.src"
                  contain
                  height="175"
                  width="100%"
                />
              </v-fade-transition>
            </base-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  // Utilities
  import {
    call,
    get,
  } from 'vuex-pathify'

  import { addToCart } from '@/util/helpers'

  export default {
    name: 'HomeDealOfTheDay',

    data () {
      const time = new Date()
      time.setHours(time.getHours() + 1)

      return {
        isAddingToCart: false,
        isBuyingItNow: false,
        src: null,
        time: time.getTime(),
      }
    },

    computed: {
      checkout: get('cart/checkout'),
      product: get('products/dealOfTheDay'),
    },

    watch: {
      product: {
        immediate: true,
        handler (val) {
          if (!val) return

          this.src = val.src.src
        },
      },
    },

    methods: {
      ...call('cart/*'),
      async addToCart () {
        this.isAddingToCart = true
        await this.addCurrentItemToCart()

        this.isAddingToCart = false
      },
      async buyNow () {
        this.isBuyingItNow = true

        await this.addCurrentItemToCart()

        this.isBuyingItNow = false

        window.open(this.checkout.webUrl)
      },
      addCurrentItemToCart () {
        return addToCart.call(
          this,
          this.product.variant.id,
          1
        )
      },
    },
  }
</script>

<style lang="sass">
  .v-card--link:before,
  .v-image__image,
  .v-responsive__content
    border-radius: inherit
</style>
