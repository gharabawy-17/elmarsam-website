<template>
  <div :dir="isArabic ? 'rtl' : 'ltr'">
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '../../components/AppHeader.vue'
import AppFooter from '../../components/AppFooter.vue'

const { locale, t } = useI18n()

const isArabic = computed(() => locale.value === 'ar')

watchEffect(() => {
  useHead({
    htmlAttrs: {
      lang: locale.value,
      dir: isArabic.value ? 'rtl' : 'ltr'
    },
    title: t('pageTitle'),
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: t('meta.description')
      },
      {
        name: 'keywords',
        content: t('meta.keywords')
      },
      { property: 'og:title', content: t('pageTitle') },
      {
        property: 'og:description',
        content: t('meta.description')
      },
      { property: 'og:image', content: '/img/hero.avif' },
      { property: 'og:url', content: 'https://al-marsam.com' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      {
        href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap',
        rel: 'stylesheet'
      }
    ]
  })
})
</script>