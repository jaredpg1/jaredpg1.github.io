<template>
  <base-section
    id="carousel"
    class="pb-0"
  >
    <v-container class="px-0">
      <v-row>
        <v-col
          cols="12"
          lg="8"
        >
          <v-skeleton-loader
            v-if="!products.length"
            type="image"
            :height="$vuetify.breakpoint.smAndDown ? 300 : 600"
          />

          <base-card
            v-else
            :color="items.length ? undefined : 'grey lighten-2'"
            :max-height="$vuetify.breakpoint.smAndDown ? 300 : 600"
          >
            <v-carousel
              :height="$vuetify.breakpoint.smAndDown ? 300 : 600"
              :show-arrows="items.length !== 1"
              hide-delimiters
            >
              <!-- <v-carousel
              height="100%"
              :show-arrows="items.length !== 1"
              hide-delimiters
            > -->
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                class="carousel-item"
                :gradient="item.dark ? 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)' : ''"
                :src="item.src"
                :position="(item.attrs || {}).position || '-5%'"
                :size="(item.attrs || {}).size"
                v-bind="item.attrs"
              >
                <template v-slot:placeholder>
                  <v-card
                    height="600"
                    color="grey lighten-4"
                  />
                </template>

                <v-container
                  :class="item.dark ? 'white--text': ''"
                  class="fill-height"
                  fluid
                >
                  <v-row
                    justify="end"
                    style="width: 100%; text-align: right; position: absolute; bottom: 0; right: 0;"
                  >
                    <v-col
                      cols="8"
                      md="5"
                      style="width: 100%;"
                    >
                      <!-- <v-responsive
                        class="mx-auto pa-1"
                        max-width="325"
                      > -->
                      <!-- <h2
                          class="display-2 mb-6"
                          v-text="item.subheading"
                        /> -->

                      <!-- <div
                          class="feature-image-text display-3 font-weight-medium font-italic mb-12"
                          v-text="item.subheading"
                        /> -->

                      <v-btn
                        v-if="item.heading || item.subheading"
                        :to="item.to"
                        class="mr-2"
                        color="accent"
                      >
                        Shop Now
                      </v-btn>
                      <!-- </v-responsive> -->
                    </v-col>
                  </v-row>
                </v-container>
              </v-carousel-item>
            </v-carousel>
          </base-card>
        </v-col>

        <v-col
          cols="12"
          lg="4"
          class="d-flex flex-wrap pa-0"
        >
          <v-row
            class="ma-0"
            style="max-width: 100%;"
          >
            <template v-if="!trending.length">
              <v-col
                v-for="n in 2"
                :key="n"
                cols="12"
                md="6"
                lg="12"
              >
                <v-skeleton-loader
                  type="image"
                  height="275"
                />
              </v-col>
            </template>

            <v-col
              v-for="(t, i) in trending"
              v-else
              :key="i"
              class="d-md-flex"
              cols="12"
              md="6"
              lg="12"
            >
              <base-card
                :to="{
                  name: 'Product',
                  params: { handle: t.handle }
                }"
                :class="i === 1 && 'flex-row-reverse'"
                class="d-flex grow align-center flex-wrap"
              >
                <v-col
                  class="mx-auto text-center text-md-left"
                  cols="12"
                  md="7"
                >
                  <div
                    class="title accent--text font-weight-bold pl-2 mb-1"
                    v-text="t.title"
                  />

                  <div class="display-2 accent--text font-italic font-weight-black mb-1">
                    Trending Product
                  </div>

                  <div
                    v-if="t.isOnSale"
                    class="display-1 font-italic font-weight-bold accent--text text-uppercase"
                  >
                    Save {{ t.discount }}%
                  </div>
                </v-col>

                <v-lazy
                  class="mx-auto my-4 d-flex align-center"
                  min-height="200"
                >
                  <v-img
                    :max-width="$vuetify.breakpoint.mdAndUp ? 135 : 200"
                    :src="t.src.src"
                    position="center"
                  />
                </v-lazy>

                <div class="py-6 mx-auto hidden-md-and-up">
                  <base-btn>
                    Shop Now
                  </base-btn>
                </div>
              </base-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  // Utilities
  import {
    get,
  } from 'vuex-pathify'

  export default {
    name: 'HomeCarousel',

    computed: {
      products: get('products/products'),
      items () {
        const items = []

        if (this.item1.src) items.push(this.item1)
        else return items

        if (this.item2.src) items.push(this.item2)
        if (this.item3.src) items.push(this.item3)

        return items
      },
      item1 () {
        return {
          // attrs: {
          //   // contain: true,
          //   size: 'cover',
          // },
          ...this.getProductProperties(process.env.VUE_APP_SHOPIFY_CAROUSEL_1_HANDLE),
        }
      },
      item2 () {
        return {
          // attrs: {
          //   contain: true,
          //   position: '-20% center',
          // },
          // center: true,
          ...this.getProductProperties(process.env.VUE_APP_SHOPIFY_CAROUSEL_2_HANDLE),
        }
      },
      item3 () {
        return {
          // center: true,
          ...this.getProductProperties(process.env.VUE_APP_SHOPIFY_CAROUSEL_3_HANDLE),
        }
      },
      trending () {
        const trending = []

        if (this.trending1) trending.push(this.trending1)
        if (this.trending2) trending.push(this.trending2)

        return trending
      },
      trending1 () {
        return this.findProduct(process.env.VUE_APP_SHOPIFY_TRENDING_1_HANDLE)
      },
      trending2 () {
        return this.findProduct(process.env.VUE_APP_SHOPIFY_TRENDING_2_HANDLE)
      },
    },

    methods: {
      findProduct (handle) {
        return this.products.find(product => {
          return product.handle === handle
        })
      },
      getProductProperties (handle) {
        const product = this.findProduct(handle)

        if (!product) return {}

        return {
          src: product.src.src,
          heading: product.productType,
          subheading: product.title,
          to: {
            name: 'Product',
            params: { handle: product.handle },
          },
        }
      },
    },
  }
</script>

<style scoped>
  @media only screen and (max-width: 600px) {
    .feature-image-text {
      font-size: 2em !important;
    }
  }
</style>
