<template>
  <b-container>
    <b-row>
      <b-form-group id="username" label="Your User Name:" label-for="username">
        <b-form-input id="username" v-model="username" required></b-form-input>
      </b-form-group>
    </b-row>
    <b-row>
      <b-form-group label="Select Your First Pokemon!">
        <div class="pokemon-select">
          <b-form-radio v-model="firstPokemon" name="firstPokemon" value="1"
            >Bulbasaur</b-form-radio
          >
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`"
            alt="Bulbasaur"
          />
        </div>

        <div class="pokemon-select">
          <b-form-radio v-model="firstPokemon" name="firstPokemon" value="4"
            >Charmander</b-form-radio
          >
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`"
            alt="Charmander"
          />
        </div>
        <div class="pokemon-select">
          <b-form-radio v-model="firstPokemon" name="firstPokemon" value="7"
            >Squirtle</b-form-radio
          >
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png`"
            alt="Squirtle"
          />
        </div>
      </b-form-group>
    </b-row>
    <b-button variant="danger">Gotta catch 'em all!</b-button>
  </b-container>
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
  },
  name: "Register",
  // components: {
  //   HelloWorld,
  // },
};
</script>

<style lang="scss">
.pokemon-select {
  width: 100px;
}
</style>