import { make } from 'vuex-pathify'

const articles = [
  {
    src: 'https://cdn-images-1.medium.com/max/400/1*laE6Py14vSpoU6ScC_n2Zw.png',
    title: 'Productivity in Vue — Part 2',
    text: `The new vue-cli-3 library has removed the need to maintain complex build patterns and configs. Instead, it allows the developer to focus on creating.`,
    user: 'John Leider',
    date: 'Feb 1, 2019',
    href: 'https://medium.com/vuetify/productivity-in-vue-part-2-1dc209062cae',
  },
  {
    src: 'https://cdn-images-1.medium.com/max/400/1*IlNTNowHmoeHIHuyhusPFA.png',
    title: 'Productivity in Vue — Part 1',
    text: `How often do you perform the same task every day? I’m willing to bet it’s more than you think. Performing simple actions such as creating properties, watchers or new methods are done over and over again as you build your application.`,
    user: 'John Leider',
    date: 'Dec 20, 2018',
    href: 'https://medium.com/vuetify/productivity-in-vue-part-1-de56e9c1d97d',
  },
  {
    src: 'https://cdn-images-1.medium.com/max/400/1*zj5V26kqQ4s2Yp-D1d6YjA.jpeg',
    title: 'Our Point of Vue: Evolving through Innovation at Veoci',
    text: `Veoci has evolved rapidly over the past 7 years from a bootstrapped startup into an established “no-code” platform. This is a story about our hard-learned lessons.`,
    user: 'Geoff Baum',
    date: 'Jul 16, 2018',
    href: 'https://medium.com/vuetify/our-point-of-vue-evolving-through-innovation-at-veoci-6cf4a47a08ca',
  },
]

const state = {
  articles: [],
}

const mutations = make.mutations(state)

const actions = {
  getArticles ({ commit }) {
    return new Promise(resolve => {
      commit('SET_ARTICLES', articles)

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
