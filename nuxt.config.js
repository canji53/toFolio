
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? { router: { base: '/toFolio/' } } : {}
const lang = 'ja'
const siteName = 'toFolio'
const siteDescription = 'Canjiのポートフォリオサイトです。出来ることと成果物をリスティングしています。'

export default {
  ...routerBase,
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: lang
    },
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteDescription }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'ress'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  axios: {},
  build: {
  }
}
