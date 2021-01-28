<template>
  <div>
    <router-link to="/"><b-button class="btn-home">Home</b-button></router-link>
    <h1>Pokedex</h1>
    <b-button v-if="this.pokemon.length === 1" @click="onBackClick"
      >Back</b-button
    >
    <input v-model="pokeSearch" id="pokeSearch" />
    <b-button @click="onPokeSearch">Search</b-button>
    <table v-if="this.pokemon[0]" class="table-striped table-hover">
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
    <p v-else>No pokemon :'(</p>
  </div>
</template>

<script>
export default {
  created() {
    this.pokemon = this.$store.state.pokemonList;
  },
  computed: {
    pokeName() {
      return this.$route.params.pokeSearch;
    },
    pokemonList() {
      return this.$store.state.pokemonList;
    },
  },
  methods: {
    onPokeSearch() {
      this.$router.push(`/pokedex/${this.pokeSearch}`);
      this.pokeSearch = null;
    },
    onBackClick() {
      this.pokeSearch = null;
      this.$router.push(`/pokedex`);
      this.pokemon = this.pokemonList;
    },
  },
  watch: {
    pokeName: function () {
      if (this.pokeName) {
        let pokeFind = this.pokemonList.find(
          (pokemon) => pokemon.name === this.pokeName
        );
        if (pokeFind) {
          const pokemon = [];
          pokemon.push(pokeFind);
          this.pokemon = pokemon;
        } else {
          this.pokemon = [];
        }
      } else {
        this.pokemon = this.pokemonList;
      }
    },
  },
  data() {
    return {
      pokeSearch: null,
      pokemon: [],
    };
  },
  name: "Pokedex",
};
</script>

<style lang="scss" scoped>
table {
  margin: 3px auto;
  width: 60vw;
}
.btn-home {
  float: left;
}
input {
  margin: 30px;
}
tr {
  height: 50px;
  img {
    height: 50px;
  }
}
</style>