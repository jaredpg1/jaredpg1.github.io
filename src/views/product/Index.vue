<template>
  <base-section id="product">
    <v-responsive min-height="50vh">
      <product-loading v-if="!currentProduct" />

      <product-detail v-else />
    </v-responsive>

    <product-related-products v-if="currentProduct" />
  </base-section>
</template>

<script>
  // Utilities
  import {
    call,
    get,
    sync,
  } from 'vuex-pathify'
  import kebabCase from 'lodash/kebabCase'
  import { genMetaInfo } from '@/util/helpers'

  export default {
    name: 'Product',

    metaInfo () {
      const product = (this.foundProduct || {})
      const title = product.title
      const description = (product.description || '').length < 158
        ? product.description
        : product.description.slice(0, 155) + '...'

      return genMetaInfo(
        (this.foundProduct || {}).title || 'Product',
        description,
        title,
        this.foundProduct && this.foundProduct.src.src
      )
    },

    components: {
      ProductDetail: () => import('./components/Detail'),
      ProductLoading: () => import('./components/Loading'),
      ProductRelatedProducts: () => import('./components/RelatedProducts'),
    },

    computed: {
      ...sync('app', ['hero']),
      ...sync('collections', ['collections']),
      ...sync('products', ['product']),
      ...get('products', ['currentProduct']),
      collection: sync('route/params@collection'),
      foundProduct () {
        return this.currentProduct || this.product
      },
    },

    watch: {
      foundProduct: {
        immediate: true,
        handler (val) {
          if (!val) {
            this.collection && this.getProduct(this.collection)

            return
          }

          const collection = this.collections.find(collection => {
            return collection.handle === kebabCase(val.productType)
          })

          if (!collection || collection.title === this.hero.heading) return

          this.hero = {
            heading: collection.title,
            src: collection.image.src,
          }
        },
      },
    },

    beforeDestroy () {
      this.product = null
    },

    methods: {
      ...call('products', ['getProduct']),
    },
  }
</script>

<style lang="sass">
  #product
    .v-avatar--preview
      cursor: pointer

    table
      border-radius: 2px
      border-collapse: collapse
      border-spacing: 0
      border: 1px solid rgba(#000, .12)
      width: 100%
      max-width: 100%

      p
        margin-bottom: 0

      tbody
        tr:first-child
          background: rgba(#000, .12)

          td
            font-size: 18px

        tr:not(:last-child)
          border-bottom: 1px solid rgba(#000, .12)

        td
          font-weight: 400
          font-size: 13px
          padding: 12px 8px

        .description
          ul, ol
            padding-left: 16px !important

            li
              margin-left: 16px !important

          .product-image
            max-width: 100%

</style>
