import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import * as modules from './modules'

Vue.use(Vuex)

const plugins = [pathify.plugin]

export default new Vuex.Store({
  plugins,
  modules,
})
