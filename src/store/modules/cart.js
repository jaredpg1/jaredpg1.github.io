import { make } from 'vuex-pathify'
import client from '@/plugins/shopify'

const state = {
  isLoading: false,
  checkout: {
    lineItems: [],
  },
}

const mutations = make.mutations(state)

const getters = {
  itemCount: state => {
    return state.checkout
      ? state.checkout.lineItems.length
      : 0
  },
  hasItems: (state, getters) => {
    return getters.itemCount > 0
  },
}

const actions = {
  // Add a discount to a shopping cart
  addDiscount: ({ commit }, discount) =>
    new Promise((resolve, reject) => {
      client
        .checkout
        .addDiscount(state.checkout.id, discount)
        .then(res => {
          commit('SET_CHECKOUT', res)
          resolve(res)
        })
        .catch(reject)
    }),
  // Add an item to a shopping cart
  addItem: ({ commit, state }, { variantId, quantity }) =>
    new Promise((resolve, reject) => {
      client
        .checkout
        .addLineItems(
          state.checkout.id,
          [{ variantId, quantity }]
        )
        .then(res => {
          commit('SET_CHECKOUT', res)
          resolve(res)
        })
        .catch(reject)
    }),
  // Get a checkout by id
  getCheckout: ({ commit, dispatch }, fresh = false) =>
    new Promise((resolve, reject) => {
      let checkout
      const checkoutId = localStorage.getItem('shopify_checkout_id')

      if (!fresh && checkoutId) {
        checkout = client.checkout.fetch(checkoutId)
      } else {
        checkout = client.checkout.create()
      }

      checkout.then(checkout => {
        if (!checkout || checkout.completedAt != null) {
          return dispatch('getCheckout', true)
            .then(resolve)
            .catch(reject)
        }

        commit('SET_CHECKOUT', checkout)
        localStorage.setItem('shopify_checkout_id', checkout.id)
        resolve(checkout)
      }).catch(reject)
    }),
  // Remove a discount from a shopping cart
  removeDiscount: ({ commit }) =>
      new Promise((resolve, reject) => {
        client
          .checkout
          .removeDiscount(state.checkout.id)
          .then(res => {
            commit('SET_CHECKOUT', res)
            resolve(res)
          })
          .catch(reject)
      }),
  // Remove an item from a shopping cart
  removeItem: ({ commit, state }, item) =>
    new Promise((resolve, reject) => {
      client
        .checkout
        .removeLineItems(state.checkout.id, item.id)
        .then(res => {
          commit('SET_CHECKOUT', res)
          resolve(res)
        })
        .catch(reject)
    }),
  // Update an item in a shopping cart
  updateItem: ({ commit, state }, item) =>
    new Promise((resolve, reject) => {
      client
        .checkout
        .updateLineItems(state.checkout.id, item)
        .then(res => {
          commit('SET_CHECKOUT', res)
          resolve(res)
        })
        .catch(reject)
    }),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
