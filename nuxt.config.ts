export default defineNuxtConfig({
  experimental: {
    viewTransition: false
  },
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    }
  },
  ssr: false,
  image: {
    // Your image configuration here if any
  },
  // Router configuration moved to app/router.options.ts
  devtools: { enabled: false },
  colorMode: {
    classSuffix: '',
  },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image-edge'
  ],
  css: ['~/assets/css/colors.css', '~/assets/css/fonts.css', '~/assets/css/main.css'],
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-11-27'
});