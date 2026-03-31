// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  i18n: {
    langDir: 'locales',
    lazy: true,
    locales: [
      { code: 'ar', name: 'العربية', iso: 'ar-EG', dir: 'rtl', file: 'ar.json' },
      { code: 'en', name: 'English', iso: 'en-US', dir: 'ltr', file: 'en.json' }
    ],
    defaultLocale: 'ar',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'ar'
    }
  }
})
