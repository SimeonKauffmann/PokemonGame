module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'PokeApp'
      return args
    })
  },
  pwa: {
    manifestOptions: {
      background_color: 'grey'
    },
    name: 'PokeApp',
    themeColor: 'lightblue',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
        }
      ]
    }
  }
}