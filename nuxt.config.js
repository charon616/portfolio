
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
    script: [{ src: "common.js" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [{ rel: "apple-touch-icon", type: "180x180", href: "/apple-touch-icon.png" }],
    link: [
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/scss/main.scss", 'swiper/dist/css/swiper.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~plugins/vue-awesome-swiper',
      ssr: false
    },
    {
      src: '~plugins/vue-scrollto',
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-webfontloader"],
  webfontloader: {
    google: {
      families: ["Lato:400,700"],
      families: ["M+PLUS+1p"],
      families: ["Nothing+You+Could+Do"],
      families: ["Caveat"],
      families: ["Amatic+SC"]
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  }
};