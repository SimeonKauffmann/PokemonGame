<template>
  <div>
    <b-form @submit="onSubmit">
      <h2>Select Your First Pokemon!</h2>

      <div id="pokemon-container">
        <div class="pokemon-select">
          <b-form-radio v-model="firstPokemon" name="firstPokemon" :value="1"
            >Bulbasaur</b-form-radio
          >
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="Bulbasaur"
          />
        </div>

        <div class="pokemon-select">
          <b-form-radio v-model="firstPokemon" name="firstPokemon" :value="4"
            >Charmander</b-form-radio
          >
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
            alt="Charmander"
          />
        </div>

        <div class="pokemon-select">
          <b-form-radio v-model="firstPokemon" name="firstPokemon" :value="7"
            >Squirtle</b-form-radio
          >
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
            alt="Squirtle"
          />
        </div>
      </div>
      <input v-model="username" id="username" required placeholder="Username" />
      <b-button type="submit" variant="danger">Gotta catch 'em all!</b-button>
    </b-form>
    {{ $store.state.pokemons }}
  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  computed: {
    username: {
      set(username) {
        this.$store.commit("setUsername", username);
      },
      get() {
        return this.$store.state.username;
      },
    },
    firstPokemon: {
      set(firstPokemon) {
        this.$store.commit("setFirstPokemon", firstPokemon);
      },
      get() {
        return this.$store.state.firstPokemon;
      },
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.commit("formSubmit");
      this.$router.push({ path: "/" });
    },
  },
  name: "Register",
  // components: {
  //   HelloWorld,
  // },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 100px;
}
#pokemon-container {
  display: flex;
  width: 60vw;
  justify-content: space-around;
  margin: 20px auto;
  .pokemon-select {
    width: 100px;
  }
}
</style>