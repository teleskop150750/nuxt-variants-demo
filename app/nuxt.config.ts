// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: true,
  devtools: { enabled: true },
  modules: [
    [
      '~/modules/component-variants', {
        components: {
          header: 'V1',
        }
      }
    ]
  ],
  components: [
    {
      path: '~/widgets/header/ui',
      pathPrefix: false,
      extensions: ['.vue'],
    },
  ]
})
