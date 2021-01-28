import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
  state() {
    return {
      pokemons: JSON.parse(localStorage.getItem("pokemons") || "[]"),
      username: null,
      firstPokemon: 1,
      pokemonList: []
    }
  },
  mutations: {
    startGame(state) {
      if (JSON.parse(localStorage.getItem("username"))) {
        state.username = JSON.parse(localStorage.getItem("username"))
      }
    },
    setUsername(state, username) {
      state.username = username
    },
    setFirstPokemon(state, firstPokemon) {
      state.firstPokemon = firstPokemon
    },
    formSubmit(state) {
      localStorage.setItem('username', JSON.stringify(state.username))
      state.pokemons.push(state.firstPokemon)
      localStorage.setItem('pokemons', JSON.stringify(state.pokemons))
    },
    pokemonCatch(state, pokemonID) {
      if (state.pokemons.find((pokemon) => pokemon === pokemonID)) return
      state.pokemons.push(pokemonID)
      localStorage.setItem('pokemons', JSON.stringify(state.pokemons))
    },
    setNewUser(state) {
      localStorage.removeItem('pokemons')
      state.pokemons = []
      localStorage.removeItem('username')
    },
    setPokemonList(state, pokemon) {
      state.pokemonList = pokemon
    }
  },
  actions: {
  },
  modules: {
  }
})


