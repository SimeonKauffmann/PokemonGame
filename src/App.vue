<template>
  <div id="app">
    <b-modal ref="my-modal" title="Install PokeApp!" hide-footer>
      <p>Would you like to install the desktop version of PokeApp?</p>
      <b-button @click="install" variant="danger" :style="{ float: 'right' }"
        >Install</b-button
      >
    </b-modal>
    <vue-online-offline>
      <div slot="online" id="online">Online</div>
      <div slot="offline" id="offline">Offline, images may not load</div>
    </vue-online-offline>
    <router-view />
    <Copyright copyright="Copyright Diamond Pants AB" :year="2021" />
  </div>
</template>

<script>
import Vue from "vue";
import VueOnlineOffline from "vue-online-offline";
import Copyright from "@/components/Copyright.vue";

export default {
  created() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.$refs["my-modal"].show();
    });

    Vue.axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
      .then((response) => {
        const pokemon = response.data.results;
        pokemon.forEach((pokemon) => {
          delete pokemon.url;
        });

        for (let i = 0; i < pokemon.length; i++) {
          pokemon[i].id = i + 1;
          if (this.$store.state.pokemons.find((pokemon) => pokemon === i + 1)) {
            pokemon[
              i
            ].image = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`;
          } else {
            pokemon[i].image = null;
          }
        }
        this.$store.commit("setPokemonList", pokemon);
      });
  },
  methods: {
    async install() {
      this.deferredPrompt.prompt();
    },
  },
  data() {
    return {
      deferredPrompt: null,
    };
  },
  computed: {
    online: {
      get() {
        return navigator.onLine;
      },
    },
  },
  components: { Copyright, VueOnlineOffline },
};
</script>


<style>
#app {
  margin: 50px 100px;
  padding: 30px;
  border: 3px solid orange;
  border-radius: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#offline {
  background-color: indianred;
  float: right;
}

#online {
  background-color: greenyellow;
  float: right;
}
</style>
