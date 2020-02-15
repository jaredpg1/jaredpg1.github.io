import { make } from 'vuex-pathify'
import {
  mdiContactMail,
  mdiFacebook,
  mdiInstagram,
  mdiShopping,
  mdiStorefront,
  mdiInformation,
  mdiWalletGiftcard,
} from '@mdi/js'

const state = {
  defaultSrc: 'https://cdn.vuetifyjs.com/images/backgrounds/bg.jpg',
  drawer: null,
  hero: {
    src: '',
    heading: '',
  },
  items: [
    {
      icon: mdiStorefront,
      text: 'Home',
      to: {
        name: 'Home',
      },
    },
    {
      icon: mdiShopping,
      text: 'Collections',
      to: {
        name: 'Collections',
      },
    },
    {
      icon: mdiContactMail,
      text: 'Contact Us',
      to: {
        name: 'Contact',
      },
    },
    {
      icon: mdiInformation,
      text: 'About',
      to: {
        name: 'About',
      },
    },
  ],
  socialMedia: [
    { href: 'https://www.facebook.com/Goody2ShoesDecatur/', icon: mdiFacebook, text: 'Facebook' },
    { href: 'https://www.instagram.com/goody2shoesdecatur/?hl=en', icon: mdiInstagram, text: 'Instagram' },
  ],
}

const mutations = make.mutations(state)

const actions = {
  init: ({ dispatch }) => {
    dispatch('cart/getCheckout', null, { root: true })
    dispatch('collections/getCollections', null, { root: true })
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
