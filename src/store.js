import Vue from 'vue'
import Vuex from 'vuex'

/**
 * imports our modules
 */
import { code } from './modules/code/_code'
import { settings } from './modules/settings/_settings'


/**
 * initializes Vuex on Vue
 */
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    code,
    settings
  }
})

/**
 * exports our data store
 */
export { store }
