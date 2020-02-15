<template>
  <base-section
    id="product-detail"
    class="pt-0"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-row
            class="ma-n3"
            justify="center"
          >
            <v-col
              class="d-flex d-md-block justify-space-between"
              cols="12"
              md="auto"
            >
              <v-avatar
                v-for="(image, i) in (currentProduct.images || []).slice(0, $vuetify.breakpoint.smAndDown ? 5 : undefined)"
                :key="i"
                class="d-md-block mb-md-6 v-avatar--preview"
                color="grey lighten-2"
                tile
                @click="src = image.src"
              >
                <v-img
                  :src="image.src"
                  height="48"
                  min-height="100%"
                />
              </v-avatar>
            </v-col>

            <v-col
              cols="12"
              md="9"
            >
              <div class="mx-auto grey lighten-2">
                <keep-alive>
                  <v-fade-transition mode="out-in">
                    <!-- <v-img
                      :key="currentSrc"
                      :contain="$vuetify.breakpoint.mdAndUp"
                      :height="$vuetify.breakpoint.mdAndUp ? 500 : 150"
                      :src="currentSrc"
                      width="100%"
                    /> -->
                    <v-img
                      :key="currentSrc"
                      :src="currentSrc"
                      width="100%"
                    />
                  </v-fade-transition>
                </keep-alive>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <router-link
            :to="{ name: 'Home' }"
            class="text--primary body-2 mb-3 d-block"
          >
            Back to Shop
          </router-link>

          <base-heading
            class="mb-6"
            tag="h1"
            v-text="currentProduct.title"
          />

          <div class="mb-6">
            <del
              v-if="currentProduct.isOnSale"
              class="display-1 grey--text"
              v-text="`$${option.compareAtPrice}`"
            />

            <span
              class="font-weight-medium display-1 accent--text"
              v-text="`$${option.price}`"
            />
          </div>

          <div>
            <div>
              <strong>Availability</strong> : {{ currentProduct.availableForSale ? 'In Stock' : 'Unavailable' }}
            </div>

            <!-- <div>
              <strong>Product Code</strong> : {{ currentProduct.shortId }}
            </div> -->
          </div>

          <v-container class="px-0">
            <v-row>
              <!-- <v-col
                cols="12"
                md="4"
              >
                <v-select
                  v-model="size"
                  :items="currentProduct.options[0].values"
                  label="Size"
                  item-text="id"
                  item-value="id"
                  return-object
                />
                <v-select
                  v-if="currentProduct.options[1] != undefined"
                  v-model="color"
                  :items="currentProduct.options[1].values"
                  label="Color"
                  item-text="value"
                  item-value="id"
                  return-object
                />
              </v-col> -->
              <v-col
                v-if="currentProduct.variants.length > 1"
                cols="12"
                md="4"
              >
                <!-- <v-select
                  v-for="(o, i) in currentProduct.options"
                  :key="i"
                  v-model="option"
                  :items="currentProduct.variants"
                  :label="o.name"
                  item-text="title"
                  item-value="id"
                  return-object
                /> -->
                <v-select
                  v-model="option"
                  :items="currentProduct.variants"
                  :label="name"
                  item-text="title"
                  item-value="id"
                  return-object
                />
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-select
                  v-model.number="quantity"
                  :disabled="!currentProduct.availableForSale"
                  :items="quantities"
                  label="Quantity"
                />
              </v-col>
            </v-row>
          </v-container>

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
                :disabled="!currentProduct.availableForSale"
                :loading="isAddingToCart"
                class="mb-6 mb-md-0"
                min-width="160"
                x-large
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
                :disabled="!currentProduct.availableForSale"
                :loading="isBuyingItNow"
                color="white"
                min-width="160"
                x-large
                @click="buyNow"
              >
                Buy It Now
              </base-btn>
            </v-col>
          </v-row>

          <div
            class="mb-6"
            v-html="currentProduct.descriptionHtml"
          />

          <share-online align="center" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  // Mixins
  import GetCollectionProducts from '@/mixins/get-collection-products'

  // Utilities
  import kebabCase from 'lodash/kebabCase'
  import {
    call,
    get,
    sync,
  } from 'vuex-pathify'
  import { addToCart } from '@/util/helpers'

  export default {
    name: 'ProductDetail',

    components: {
      ShareOnline: () => import('@/components/ShareOnline'),
    },

    mixins: [GetCollectionProducts],

    data: () => ({
      collectionHandle: null,
      isAddingToCart: false,
      isBuyingItNow: false,
      option: {},
      quantities: Array.from({ length: 10 }, (i, k) => k + 1),
      quantity: 1,
      src: null,
    }),

    computed: {
      checkout: sync('cart/checkout'),
      currentProduct: get('products/currentProduct'),
      product: sync('route/params@handle'),
      currentSrc: {
        get () {
          return this.src
            ? this.src
            : (((this.currentProduct || {}).images || [])[0] || {}).src
        },
        set (val) {
          this.src = val
        },
      },
    },

    watch: {
      currentProduct: {
        immediate: true,
        handler (val) {
          this.currentSrc = (val.images[0] || {}).src

          this.collectionHandle = kebabCase(val.productType)
          this.setOption()
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
          this.option.id,
          this.quantity
        )
      },
      setOption () {
        if (!this.currentProduct ||
          !this.currentProduct.variants.length
        ) return
        this.option = this.currentProduct.variants[0]
      },
    },
  }
</script>
