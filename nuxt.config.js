
const siteName = 'toFolio'
const siteDescription = 'Canjiのポートフォリオサイトです。出来ることと成果物をリスティングしています。'

export default {
  ssr: false,
  target: 'static',
  head: {
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
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {},
  build: {
  }
}
