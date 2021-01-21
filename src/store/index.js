import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 1,
    pokemons: [1, 60, 35, 20],
    username: 'User Name',
    ditto: 'DITTTO!'
  },
  mutations: {
    setUsername(state, username) {
      state.username = username
    }
  },
  actions: {
  },
  modules: {
  }
})
