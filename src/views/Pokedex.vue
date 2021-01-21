<template>
  <div>
    <h1>Pokedex</h1>
    <b-table striped hover :pokemon="pokemon"></b-table>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  created() {
    Vue.axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => {
        this.pokemon = response.data;
      });
  },
  data() {
    return {
      pokemon: [{ a: "hi" }],
    };
  },
  name: "Pokedex",
};
</script>