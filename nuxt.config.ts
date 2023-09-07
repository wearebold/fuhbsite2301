// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  pages: true,
  nitro: {
    static: true,
    preset: 'netlify', 
    prerender: {
      crawlLinks: true
    }     
 }, 
  build: {
    transpile: ['gsap'],
  },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxt/image', '@nuxt/content', '@nuxtjs/tailwindcss'],
  image: {
    provider: 'netlify'
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      },
    }
  },
  app: {
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            // <meta name="viewport" content="width=device-width, initial-scale=1">
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        script: [
            // <script src="https://myawesome-lib.js"></script>
            // { src: 'https://awesome-lib.js' }
        ],
        link: [
            // <link rel="stylesheet" href="https://myawesome-lib.css">
            // { rel: 'preload', href: 'https://use.typekit.net/zix8cwn.css', as: 'style'},
            // { rel: 'stylesheet', href: 'https://use.typekit.net/zix8cwn.css' }
        ],
    }
},
  tailwindcss: {
    exposeConfig: true,
  }
})
