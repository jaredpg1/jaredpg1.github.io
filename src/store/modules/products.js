import client from '@/plugins/shopify'
import { parseProduct, productSort } from '@/util/helpers'
import { make } from 'vuex-pathify'

const state = {
  product: null,
}

const mutations = make.mutations(state)

const actions = {
  getProduct ({ commit }, handle) {
    return client.product.fetchByHandle(handle).then(product => {
      commit('SET_PRODUCT', parseProduct(product))
    })
  },
}

const getters = {
  categories: (state, getters) => {
    const categories = []

    for (const product of getters.products) {
      const { productType } = product

      if (categories.includes(productType)) continue

      categories.push(productType)
    }

    return categories
  },
  currentProduct: (state, getters, rootState) => {
    if (rootState.route.name !== 'Product') return null
    console.log('Products', getters.products.find(product => product.handle === rootState.route.params.handle) || state.product)
    return getters.products.find(product => product.handle === rootState.route.params.handle) || state.product
  },
  dealOfTheDay: (state, getters) => {
    return getters.productsOnSale.length
      ? getters.productsOnSale[0]
      : null
  },
  products: (state, getters, rootState, rootGetters) => {
    const set = new Set()
    const collections = rootGetters['collections/productsByCollection']
    const products = []

    for (const key in collections) {
      for (const product of collections[key]) {
        if (set.has(product.handle)) continue
        else set.add(product.handle)

        products.push(product)
      }
    }

    return products.sort(productSort)
  },
  productsByCategory: (state, getters) => {
    const categories = {}

    for (const category of getters.categories) {
      categories[category] = getters.products.filter(product => {
        return product.productType === category
      })
    }

    return categories
  },
  productsByNew: (state, getters) => {
    // return getters.products.slice().sort((a, b) => {
    //   if (a.isNewProduct) return -1
    //   else if (b.isNewProduct) return 1
    //   else return 0
    // }).slice(0, 20)
    return getters.products.slice().sort((a, b) => {
      if (a.isNewProduct) return -1
      else if (b.isNewProduct) return 1
      else return 0
    })
  },
  productsFeatured: (state, getters, rootState, rootGetters) => {
    const productsByCollection = rootGetters['collections/productsByCollection']

    return (
      productsByCollection[process.env.VUE_APP_SHOPIFY_FEATURED_COLLECTION] ||
      []
    ).sort(productSort)
  },
  productsOnSale: (state, getters) => {
    return getters.products.filter(product => product.isOnSale && product.availableForSale)
  },
  storeSale: (state, getters) => {
    const totalOnSale = getters.productsOnSale.length

    if (totalOnSale > 4) {
      return 'mdi-tag-multiple'
    } else if (totalOnSale > 2) {
      return 'mdi-tag'
    } else if (totalOnSale) {
      return 'mdi-tag-outline'
    } else return false
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
