<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../../components/AppHeader.vue'
import AppFooter from '../../components/AppFooter.vue'
useHead({
  htmlAttrs: {
    lang: 'ar',
    dir: 'rtl'
  },
  title: 'المرسم | مساحة للفن والإبداع',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'المرسم إبداع يجمع بين تعلم الفن والموسيقى، وتوفير بيئة هادئة للعمل المستقل والتركيز.' },
    { name: 'keywords', content: 'فن, رسم, موسيقى, دورات, مساحة عمل, إبداع' },
    { property: 'og:title', content: 'المرسم | مساحة للفن والإبداع' },
    { property: 'og:description', content: 'المرسم إبداع يجمع بين تعلم الفن والموسيقى، وتوفير بيئة هادئة للعمل المستقل والتركيز.' },
    { property: 'og:image', content: '/img/hero.avif' },
    { property: 'og:url', content: 'https://al-marsam.com' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap', rel: 'stylesheet' }
  ]
})
</script>