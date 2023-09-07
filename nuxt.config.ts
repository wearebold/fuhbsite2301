// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
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
  tailwindcss: {
    exposeConfig: true,
  }
})
