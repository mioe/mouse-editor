import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    body: ''
  },

  mutations: {
    changeBody(state, payload) {
      state.body = payload
    }
  },

  actions: {
    importBody({state}, body) {
      state.body = body
    }
  },

  getters: {
    getBody(state) {
      return state.body
    }
  }
})
