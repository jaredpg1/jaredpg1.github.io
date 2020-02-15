// Utilities
import {
  make,
} from 'vuex-pathify'
import client from '@/plugins/shopify'
import { parseProduct, productSort } from '@/util/helpers'

let collectionsWithProducts = []

if (process.env.NODE_ENV === 'production' && process.env.VUE_APP_BUILDING) {
  collectionsWithProducts = require('@/../data/collections-with-products.json')
}

const state = {
  collections: [],
  collectionsWithProducts,
  fetchedCollections: {},
}

const mutations = make.mutations(state)

const actions = {
  getCollectionProducts: ({ commit, dispatch, state }, handle) => {
    if (
      state.fetchedCollections[handle] ||
      !state.collections.length ||
      process.env.VUE_APP_BUILDING
    ) return

    const collection = state.collections.find(collection => {
      return collection.handle === handle
    })

    if (!collection) {
      console.warn(`No Collection found for ${handle}. Please create a new collection or update your .env file.`)

      return Promise.resolve()
    }

    if (state.fetchedCollections[collection.handle]) {
      return // We already have these products
    } else {
      commit('SET_FETCHED_COLLECTIONS', {
        ...state.fetchedCollections,
        [collection.handle]: true,
      })
    }
    return client.collection.fetchWithProducts(collection.id, { productsFirst: 100 }).then(collection => {
      state.collectionsWithProducts.push({
        ...collection,
        products: collection.products.sort(productSort),
      })
    })
      .catch(e => {
        setTimeout(() => {
          dispatch('getCollectionProducts', handle)
        }, 3000)

        console.warn('Connection throttled, trying again in 3s')
      })
  },
  getCollections: async ({ commit, dispatch }) => {
    const collections = JSON.parse(localStorage.getItem('shopify_collections') || '{}')
    const date = new Date()
    const now = date.getTime()

    if (
      collections &&
      now < collections.update &&
      process.env.NODE_ENV === 'production'
    ) {
      commit('SET_COLLECTIONS', collections.collections)

      return dispatch('getDefaultCollectionProducts')
    }

    // Cache collections for 1 hour
    const update = date.setTime(now + 1000 * 60 * 60 * 1)

    return client.collection.fetchAll().then(async collections => {
      commit('SET_COLLECTIONS', collections)
      localStorage.setItem(
        'store-collections',
        JSON.stringify({ collections, update })
      )
    }).then(() => dispatch('getDefaultCollectionProducts'))
  },
  // Used to set initial data on site
  getDefaultCollectionProducts: ({ dispatch }) => {
    const collections = [
      process.env.VUE_APP_SHOPIFY_DEFAULT_COLLECTION,
      process.env.VUE_APP_SHOPIFY_FEATURED_COLLECTION,
    ]
      .filter(collection => collection)
      .map(collection => dispatch('getCollectionProducts', collection))

    // Promise.all will normally fast-fail
    // Instead we return null so that other
    // promises will complete
    return Promise.all(
      collections.map(p => p.catch(e => {
        console.log(e)

        return null
      }))
    )
  },
}

const getters = {
  currentCollection: (state, getters, rootState) => {
    if (rootState.route.name !== 'Collections') return null

    return state.collections.find(collection => collection.handle === rootState.route.params.collection)
  },
  currentCollectionProducts: (state, getters, rootState) => {
    if (rootState.route.name !== 'Collections') return []

    return getters.productsByCollection[rootState.route.params.collection] || []
  },
  productsByCollection: state => {
    const productsByCollection = {}
    const collections = state.collectionsWithProducts

    for (const collection of collections) {
      productsByCollection[collection.handle] = collection.products.map(parseProduct)
    }

    return productsByCollection
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
