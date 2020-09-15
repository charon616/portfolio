
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "KIHO Karin",
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#6332f6" },
      { hid: "description", name: "description", content: "my-portfolio" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }
    ],
    script: [
      {
        src: "https://use.typekit.net/kcu2jmj.js", defer: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  /*
   ** Global CSS
   */
  css: ["~/assets/scss/main.scss", "swiper/dist/css/swiper.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~plugins/vue-awesome-swiper",
      ssr: false
    },
    {
      src: "~plugins/vue-scrollto"
    },
    {
      src: '~plugins/menu-control.js',
      ssr: false
    },
    {
      src: '~plugins/vue2-touch-events.js',
      ssr: false
    },
    {
      src: '~plugins/lazyload',
      ssr: false
    },
    {
      src: '~plugins/custom-scroll.js',
    },
    {
      src: '~plugins/size.js',
      ssr: false
    },
    {
      src: "~plugins/persistedstate.js",
      ssr: false
    },
    {
      src: "~plugins/color.js",
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-webfontloader", "nuxt-fontawesome", '@nuxtjs/style-resources', '@nuxtjs/device'],
  webfontloader: {
    google: {
      families: ["Lato:400,700"]
    }
  },
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["fab"]
      }
    ]
  },
  /*
   ** load settings
   */
  loadingIndicator: {
    name: 'cube-grid',
    color: '#fff',
    background: '#6332f6'
  },
  loading: {
    color: '#6332f6'
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    }
  },
  styleResources: {
    stylus: [
      '~assets/stylus/_variables.styl',
      '~assets/stylus/main.styl'
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
