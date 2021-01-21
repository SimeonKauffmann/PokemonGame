<template>
  <div class="about">
    <h1>Welcome back {{ $store.state.username }}</h1>

    <img
      v-for="pokemon in pokemons"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`"
      :key="pokemon"
      alt="no pokemon :("
    />
    <b-nav vertical class="w-25">
      <router-link to="/"
        ><b-nav-item active>Change User</b-nav-item></router-link
      >
      <b-nav-item><router-link to="/pokedex">Pokedex</router-link></b-nav-item>
      <b-nav-item><router-link to="/fight">Fight</router-link></b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  computed: {
    pokemons: {
      get() {
        return this.$store.state.pokemons;
      },
    },
  },
};
</script>



<style lang="scss">
</style>
