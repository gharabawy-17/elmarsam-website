<template>
  <article class="group h-full rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 bg-white dark:bg-[#1c1d29] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div class="overflow-hidden">
      <img
        :src="product.image"
        :alt="localizedTitle"
        class="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div class="p-6 flex flex-col h-[calc(100%-13rem)]">
      <h3 class="text-xl font-extrabold mb-2 text-gray-900 dark:text-white">{{ localizedTitle }}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">{{ localizedDescription }}</p>
      <div class="flex items-center justify-between gap-3">
        <span class="text-lg font-bold text-primary">{{ product.price }} {{ t('common.currency') }}</span>
        <button @click="handleBuyNow" class="btn btn-primary px-5 py-2.5 text-sm">
          {{ t('common.buyNow') }}
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useContact } from '../../../composables/useContact'

interface LocalizedText {
  ar: string
  en: string
}

interface Product {
  id: number
  image: string
  title: LocalizedText
  description: LocalizedText
  price: number
}

const props = defineProps<{ product: Product }>()
const { locale, t } = useI18n()
const { prefillForm } = useContact()

const localizedTitle = computed(() => props.product.title[locale.value as 'ar' | 'en'] || props.product.title.ar)
const localizedDescription = computed(() => props.product.description[locale.value as 'ar' | 'en'] || props.product.description.ar)

const handleBuyNow = () => {
  const message = t('contact.form.whatsapp.product', { 
    title: localizedTitle.value, 
    price: props.product.price 
  })
  prefillForm('other', message)
}
</script>
