
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Vue - Momentum',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Polish Football League standings and team information' }
      ]
    }
  },

  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],

  css: ['~/assets/main.css'],
  
  devtools: { enabled: true },
  compatibilityDate: '2025-03-14',
});