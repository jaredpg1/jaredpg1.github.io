<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card
        ref="card"
        :loading="isAddingToCart"
        :to="{
          name: 'Product',
          params: { handle: item.handle }
        }"
        :width="responsive ? undefined : 250"
        style="white-space: normal;"
      >
        <!-- <v-img
          :contain="$vuetify.breakpoint.mdAndUp"
          :src="item.images && item.images.length ? item.images[0].src : undefined"
          class="grey lighten-4"
          :min-height="height"
          :max-height="height"
        /> -->
        <v-img
          :src="item.images && item.images.length && item.images[0].src ? item.images[0].src : undefined"
          :height="height"
        />

        <div
          class="px-5 pb-2 pt-8"
          style="position: relative;"
        >
          <v-btn
            v-if="item.availableForSale"
            :ripple="false"
            :style="{
              transform: hover ? 'translateY(-50%)' : undefined,
              zIndex: 1,
            }"
            absolute
            aria-label="Add to Cart"
            class="transition-swing"
            color="accent"
            fab
            right
            top
            @click.prevent="addToCart"
          >
            <v-icon v-text="mdiCart" />
          </v-btn>

          <v-sheet
            :min-height="dense ? 32 : 64"
            :class="$vuetify.breakpoint.smAndDown ? 'subtitle-2' : 'title'"
            class="font-weight-bold mb-3"
            color="transparent"
            v-text="item.title"
          />

          <div
            v-if="item.variants && item.variants.length"
            class="d-flex justify-space-between align-center"
          >
            <del
              v-if="item.isOnSale"
              class="grey--text"
              v-text="`$${item.variants[0].compareAtPrice}`"
            />
            <v-col cols="12">
              <v-row
                justify="center"
              >
                <!-- <v-col cols="auto"> -->
                <div
                  :class="$vuetify.breakpoint.smAndDown ? 'body-2' : 'subtitle-1'"
                  class="subtitle-1 font-weight-medium error--text"
                >
                  ${{ item.variants[0].price }}
                </div>
              </v-row>
              <!-- </v-col> -->
              <!-- <v-col cols="auto"> -->
              <v-row justify="center">
                <v-btn
                  :disabled="!item.availableForSale"
                  class="mr-n3"
                  text
                  @click.prevent.stop="addToCart"
                >
                  <span
                    class="primary--text font-weight-bold"
                    :class="$vuetify.breakpoint.smAndDown ? 'overline' : 'subtitle-1'"
                  >{{ item.availableForSale ? 'Add to Cart' : 'More Info' }}</span>
                </v-btn>
              </v-row>
            </v-col>
          </div>
        </div>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
  // Utilities
  import {
    call,
  } from 'vuex-pathify'
  import { addToCart } from '@/util/helpers'

  // Icons
  import {
    mdiCart,
    mdiHeart,
    mdiStar,
  } from '@mdi/js'

  export default {
    name: 'BaseProductCard',

    props: {
      dense: {
        type: Boolean,
        default: false,
      },
      height: {
        type: [Number, String],
        default: 250,
      },
      item: {
        type: Object,
        default: () => ({
          images: [],
          rating: 0,
          title: '',
          variants: [],
        }),
      },
      responsive: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      isAddingToCart: false,
      mdiCart,
      mdiHeart,
      mdiStar,
    }),

    methods: {
      ...call('cart/*'),
      async addToCart () {
        this.isAddingToCart = true

        await addToCart.call(this, this.item.variant.id, 1)

        this.isAddingToCart = false
      },
    },
  }
</script>
