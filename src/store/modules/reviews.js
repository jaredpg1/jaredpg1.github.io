import { make } from 'vuex-pathify'

const reviews = [
  {
    src: require('@/assets/derek.jpg'),
    name: 'Barbara Milligan',
    review: 'This shop has classy, modern, well-made clothing at affordable prices. You won\'t see yourself coming because there are not too many there per style. The manager and buyer is friendly and personable and has a good eye for style. It is a pleasure to shop at Goody 2 Shoes, Decatur, AL.',
    title: 'CTO, Big Spire Networks',
  },
  {
    src: require('@/assets/cindy.jpg'),
    name: 'Donna Smith',
    review: 'It’s a fantastic boutique with a flair for the different styles and textures and colors of clothing and accessories. The atmosphere is pleasant and welcoming and always is beautifully decorated.The sales staff is there to help if you need them but do not cling over your shoulder!',
    title: 'CEO, SentryBlock LLC',
  },
  {
    src: require('@/assets/manuel.jpg'),
    name: 'Tonya Smith-Adkins',
    review: 'Great place and great people. Good prices and even better sales.',
    title: 'Developer, Fast Forward Lessons LLC',
  },
]

const state = {
  reviews: [],
}

const mutations = make.mutations(state)

const actions = {
  getReviews ({ commit }) {
    return new Promise(resolve => {
      commit('SET_REVIEWS', reviews)

      resolve()
    })
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
