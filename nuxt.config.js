
const baseDir = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/toFolio/' : '/'
const routerBase = { router: { base: baseDir } }
// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? { router: { base: '/toFolio/' } } : {}
const lang = 'ja'
const siteName = 'toFolio'
const siteDescription = 'Canjiのポートフォリオサイトです。出来ることと成果物をリスティングしています。'
const siteKeywords = 'portfolio';
const siteAuthor = 'Canji';
const siteThemeColor = '#EDEEF0';

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
      { hid: 'description', name: 'description', content: siteDescription },
      { hid: 'keywords', name: 'keywords', content: siteKeywords },
      { hid: 'author', name: 'author', content: siteAuthor },
      { hid: 'theme-color', name: 'theme-color', content: siteThemeColor}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `${baseDir}favicon.ico` }
    ]
  },
  env: {
    siteName: siteName,
    baseDir: baseDir
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
        icons: ['faImages', 'faCodeBranch', 'faTools']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['faMehBlank']
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
