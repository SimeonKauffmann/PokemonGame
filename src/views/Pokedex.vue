<template>
  <div>
    <h1>Pokedex</h1>
    <table class="table-striped table-hover">
      <thead>
        <th>Image</th>
        <th>Name</th>
        <th>Id</th>
      </thead>
      <tbody>
        <tr v-for="pokemon in this.pokemon" :key="pokemon.id">
          <td>
            <img
              v-if="pokemon.image"
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
            />
          </td>
          <td>{{ pokemon.name }}</td>
          <td>{{ pokemon.id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  created() {
    Vue.axios
      .get(" https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
      .then((response) => {
        const pokemon = response.data.results;
        pokemon.forEach((pokemon) => {
          delete pokemon.url;
        });

        pokemon.forEach((pokemon) => {
          pokemon.image = null;
        });

        for (let i = 0; i < pokemon.length; i++) {
          pokemon[i].id = i + 1;
          if (this.$store.state.pokemons.find((pokemon) => pokemon === i)) {
            pokemon[
              i - 1
            ].image = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`;
          }
        }

        this.pokemon = pokemon;
      });
  },
  data() {
    return {
      pokemon: null,
    };
  },
  name: "Pokedex",
};
</script>

<style lang="scss" scoped>
tr {
  height: 50px;
  img {
    height: 50px;
  }
}
</style>