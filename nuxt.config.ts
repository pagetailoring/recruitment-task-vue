export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Vue - Momentum',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Polish Football League standings and team information' },
      ],
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/html-validator',
    '@pinia/nuxt',
    'nuxt-svgo',
    '@vueuse/nuxt',
  ],

  imports: {
    dirs: ['./stores', './stores/forms', './stores/stats', './stores/app'],
  },

  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  svgo: {
    defaultImport: 'component',
  },

  devtools: { enabled: true },
  compatibilityDate: '2025-03-14',
});
