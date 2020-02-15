<template>
  <v-container
    class="products px-0"
    tag="section"
  >
    <div class="text-center">
      <base-heading v-text="heading" />

      <base-subheading v-if="!products.length">
        No {{ heading }}
      </base-subheading>
    </div>

    <v-row v-if="products.length">
      <v-col cols="12">
        <div class="py-6 hidden-sm-and-down" />

        <v-item-group
          v-if="categories.length > 0"
          v-model="internalValue"
          class="text-center mb-6"
          mandatory
        >
          <v-item
            v-for="(category, i) in categories"
            :key="i"
            :value="category"
          >
            <template v-slot="{ active, toggle }">
              <v-btn
                ref="btn"
                :color="active ? 'white' : undefined"
                :depressed="!active"
                :text="!active"
                class="mx-1"
                @click="toggle(), $refs.btn[i].$el.blur()"
              >
                {{ category }}
              </v-btn>
            </template>
          </v-item>
        </v-item-group>

        <v-slide-group
          class="pa-0"
          mobile-break-point="960"
          show-arrows
        >
          <v-slide-item
            v-for="(product, i) in products"
            :key="`slide-item-${i}`"
          >
            <div>
              <!-- <base-product-card
                :height="$vuetify.breakpoint.mdAndUp ? undefined : 100"
                :item="product"
                class="mx-4 my-1"
              /> -->
              <base-product-card
                :item="product"
                class="mx-4 my-1"
              />
            </div>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Proxyable from 'vuetify/lib/mixins/proxyable'

  export default {
    name: 'BaseProducts',

    mixins: [Proxyable],

    props: {
      categories: {
        type: Array,
        default: () => ([]),
      },
      heading: {
        type: String,
        default: '',
      },
      products: {
        type: Array,
        default: () => ([]),
      },
    },
  }
</script>

<style lang="sass">
  .products
    .v-slide-group__content
      justify-content: center

    .v-slide-group
      &__prev
        justify-content: flex-start
      &__next
        justify-content: flex-end
</style>
