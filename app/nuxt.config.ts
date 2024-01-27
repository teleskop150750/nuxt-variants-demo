// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  debug: true,
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Sample',
    },
  },
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
