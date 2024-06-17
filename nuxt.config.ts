// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  css: ['@/assets/styles.css'],
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
})
