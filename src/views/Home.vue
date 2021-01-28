<template>
  <div class="about">
    <h1>Welcome back {{ $store.state.username }}</h1>

    <img
      v-for="pokemon in pokemons"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`"
      :key="pokemon"
      :alt="pokemon"
    />
    <b-nav vertical class="w-25">
      <b-nav-item><router-link to="/pokedex">Pokedex</router-link></b-nav-item>
      <b-nav-item @click="newUser">New User</b-nav-item>
    </b-nav>
    <p>{{ message }}</p>
    <Catch @caught-it="caughtIt" @skipped-it="skippedIt" />
  </div>
</template>

<script>
import Catch from "@/components/Catch.vue";

export default {
  created() {
    this.$store.commit("startGame");
    if (!this.$store.state.username) this.$router.push("Register");
  },
  data() {
    return {
      message: null,
    };
  },
  computed: {
    pokemons: {
      get() {
        return this.$store.state.pokemons;
      },
    },
  },
  methods: {
    newUser() {
      this.$store.commit("setNewUser");
      this.$router.push("/register");
    },
    caughtIt(pokemonId) {
      const pokemon = this.$store.state.pokemonList.find(
        (pokemon) => pokemon.id === pokemonId
      );
      this.message = `You caught a ${pokemon.name}`;
    },
    skippedIt(pokemonId) {
      const pokemon = this.$store.state.pokemonList.find(
        (pokemon) => pokemon.id === pokemonId
      );
      this.message = `${pokemon.name} ran away`;
    },
  },
  components: { Catch },
  name: "Home",
};
</script>



<style lang="scss">
</style>
