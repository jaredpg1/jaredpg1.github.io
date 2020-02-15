<template>
  <base-section id="products">
    <v-responsive
      v-if="currentCollectionProducts.length"
      min-height="50vh"
    >
      <collections-products />
    </v-responsive>

    <collections-loading v-else-if="collection" />

    <collections-collections />
  </base-section>
</template>

<script>
  // Mixins
  import GetCollectionProducts from '@/mixins/get-collection-products'

  // Utilities
  import {
    call,
    get,
    sync,
  } from 'vuex-pathify'
  import { genMetaInfo } from '@/util/helpers'

  export default {
    name: 'Collections',

    components: {
      CollectionsCollections: () => import('./components/Collections'),
      CollectionsLoading: () => import('./components/Loading'),
      CollectionsProducts: () => import('./components/Products'),
    },

    mixins: [GetCollectionProducts],

    metaInfo () {
      const currentCollection = this.currentCollection || {}
      const title = currentCollection.title || 'Product Collections'
      const image = (currentCollection.image || {}).src || `${window.location.origin}${require('@/assets/vuetify.png')}`
      // eslint-disable-next-line quotes
      const description = currentCollection.description || `'A high level view of all the available collections on our store. Click one to see more information.'`
      const keywords = 'product collections'

      return genMetaInfo(
        title,
        description,
        keywords,
        image
      )
    },

    data: () => ({
      collectionhandle: null,
    }),

    computed: {
      collection: sync('route/params@collection'),
      defaultSrc: sync('app/defaultSrc'),
      ...get('collections', [
        'currentCollection',
        'currentCollectionProducts',
        'productsByCollection',
      ]),
    },

    watch: {
      collection (val) {
        if (!val) return

        this.collectionHandle = val
      },
      currentCollection: {
        immediate: true,
        handler (val) {
          val = val || {}
          let heading
          let src

          // eslint-disable-next-line prefer-const
          heading = val.title || 'Product Collections'
          // eslint-disable-next-line prefer-const
          src = (val.image || {}).src || this.defaultSrc
          this.collectionHandle = this.collection

          this.$store.commit('app/SET_HERO', {
            heading,
            src,
          })
        },
      },
    },

    updated () {
      window.scrollTo(0, 0)
    },

    methods: {
      ...call('collections', ['getCollectionProducts']),
    },
  }
</script>
