
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "KIHO Karin",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "my-portfolio" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "apple-touch-icon",
        type: "180x180",
        href: "/apple-touch-icon.png"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css"
      }
    ],
    script: [
      {
        src: "https://use.typekit.net/kcu2jmj.js"
      },
      {
        src: "https://code.createjs.com/1.0.0/createjs.min.js"
      },
      {
        src: "/common.js"
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
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-webfontloader", "nuxt-fontawesome"],
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
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    }
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
