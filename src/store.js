import Vue from 'vue'
import Vuex from 'vuex'

/**
 * imports our modules
 */
import { code } from './modules/code/_code'

/**
 * initializes Vuex on Vue
 */
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    code
  }
})

/**
 * exports our data store
 */
export { store }
