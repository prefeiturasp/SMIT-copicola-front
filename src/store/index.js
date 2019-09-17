import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

import Root from '@/store/root.js'
import Novidades from '@/store/novidades.js'

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    rootCSS: Root,
    Novidades
  }
})

export default store
