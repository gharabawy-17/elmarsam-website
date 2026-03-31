<template>
  <section id="products" class="py-24 bg-white dark:bg-[#111320] section-fade-in">
    <div class="container mx-auto px-5">
      <div class="text-center mb-14">
        <h4 class="text-primary font-bold uppercase tracking-widest mb-3">{{ t('products.subtitle') }}</h4>
        <h2 class="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">{{ t('products.title') }}</h2>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {{ t('products.desc') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
import ProductCard from './ProductCard.vue'
import products from '~/data/products.json'

const { t } = useI18n()
</script>
