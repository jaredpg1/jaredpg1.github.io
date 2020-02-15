  // Utilities
import {
  call,
  sync,
} from 'vuex-pathify'

export default {
  data: () => ({
    collectionHandle: null,
  }),

  computed: {
    ...sync('collections', ['collections']),
  },

  watch: {
    collections: {
      immediate: true,
      handler (val) {
        if (!val.length || !this.collectionHandle) return

        this.getCollectionProducts(this.collectionHandle)
      },
    },
    collectionHandle (val) {
      if (!val) return

      this.getCollectionProducts(val)
    },
  },

  methods: {
    ...call('collections', ['getCollectionProducts']),
  },
}
