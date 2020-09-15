
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
  env: {
    siteName: siteName
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
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    'vue-scrollto/nuxt',
    'nuxt-webfontloader'
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss',
      '@/assets/scss/_media-queries.scss',
      '@/assets/scss/_global-styles.scss',
    ]
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faTwitter', 'faInstagram']
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faHome']
      }
    ]
  },
  webfontloader: {
    google: {
      families: ['Rubik']
    }
  },
  axios: {},
  build: {
  }
}
