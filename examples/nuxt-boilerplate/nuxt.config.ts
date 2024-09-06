// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  experimental: {
    clientNodeCompat: true,
  },
  modules: ['nuxt-security', '@nuxtjs/tailwindcss'],
  security: {
    headers: {
      xFrameOptions: false,
      contentSecurityPolicy: {
        'connect-src': 'https://api.devnet.solana.com/',
      },
    },
  },
  app: {
    rootAttrs: {
      class: 'size-full p-10',
    },
  },
});
