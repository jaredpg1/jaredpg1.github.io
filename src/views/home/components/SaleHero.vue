<template>
  <v-container
    id="sale-hero"
    tag="section"
    class="pa-0 my-n3"
    fluid
  >
    <v-row
      class="mx-n3"
      no-gutters
    >
      <v-col>
        <base-hero
          v-for="(item, i) in items"
          :key="i"
          :alt="item.alt"
          :item="item"
          max-height="50vh"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import {
    get,
    sync,
  } from 'vuex-pathify'

  import { random } from '@/util/helpers'

  export default {
    name: 'HomeSaleHero',

    computed: {
      collectionsWithProducts: sync('collections/collectionsWithProducts'),
      ...get('products', [
        'products',
        'productsByNew',
        'productsOnSale',
      ]),
      // Items are randomly generated from
      // available products from initial
      // colelctions
      items () {
        const items = []

        this.onSale && items.push(this.onSale)
        this.newArrival && items.push(this.newArrival)
        this.updated && items.push(this.updated)

        return items
      },
      newArrival () {
        const arrival = this.productsByNew[0]

        if (!arrival) return false

        return {
          ...arrival,
          alt: true,
          heading: 'New Arrival',
          subheading: arrival.title,
          tag: arrival.productType,
          overlay: 'rgba(0, 0, 0, .69)',
          to: {
            name: 'Product',
            params: { handle: arrival.handle },
          },
        }
      },
      onSale () {
        const onSale = this.productsOnSale[random(this.productsOnSale.length)]

        if (!onSale) return false

        return {
          ...onSale,
          alt: false,
          contain: true,
          heading: 'Sale',
          subheading: onSale.productType,
          overlay: 'rgba(0,46,79, .75)',
          tag: `${onSale.discount}%`,
          to: {
            name: 'Product',
            params: { handle: onSale.handle },
          },
        }
      },
      updated () {
        const updated = this.collectionsWithProducts.find(collection => {
          return collection.handle === process.env.VUE_APP_SHOPIFY_FEATURED_COLLECTION
        })

        if (!updated) return false

        return {
          ...updated,
          alt: false,
          contain: true,
          heading: 'Updated',
          subheading: 'New Inventory',
          src: updated.image.src,
          tag: updated.title,
          overlay: 'rgba(90, 185, 245, .75)',
          to: {
            name: 'Collections',
            params: { collection: updated.handle },
          },
        }
      },
    },
  }
</script>
