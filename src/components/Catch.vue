<template>
  <div>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`"
      :alt="pokemonId"
    />
    <b-button @click="onCatch" variant="danger">Catch</b-button>
    <b-button @click="onSkip">Skip</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemonId: Math.ceil(Math.random() * 150),
    };
  },

  methods: {
    onCatch() {
      this.$store.commit("pokemonCatch", this.pokemonId);
      this.$emit("caught-it", this.pokemonId);
      this.pokemonId = Math.ceil(Math.random() * 150);
    },
    onSkip() {
      this.$emit("skipped-it", this.pokemonId);
      this.pokemonId = Math.ceil(Math.random() * 150);
    },
  },
  name: "Catch",
};
</script>