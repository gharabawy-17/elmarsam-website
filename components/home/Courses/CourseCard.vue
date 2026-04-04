<template>
  <div class="bg-white dark:bg-[#1f202c] rounded-2xl shadow-xl h-full flex flex-col group overflow-hidden transition-all duration-300 border border-gray-100 dark:border-gray-800">
    
    <div class="relative h-56 overflow-hidden rounded-t-2xl">
      <NuxtLink :to="localePath(`/courses/${id}`)" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
        <img :src="image" :alt="localizedTitle" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </NuxtLink>
      <div class="absolute top-4 left-4 right-4 flex justify-between items-start">
        <span class="bg-primary/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {{ t(`courses.categories.${category}`) }}
        </span>
        <span v-if="isAcademic" class="bg-amber-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          {{ t('courses.details.academic') }}
        </span>
      </div>
    </div>

    <div class="p-6 flex-1 flex flex-col justify-between">
      <div class="">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
          {{ localizedTitle }}
        </h3>
  
        <p class="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">
          {{ localizedDesc }}
        </p>
  
        <div class="space-y-4 mb-6">
          <div v-if="age" class="flex items-center text-xs text-gray-600 dark:text-gray-300">
            <span class="w-20 font-semibold">{{ t('courses.details.age') }}:</span>
            <span>{{ age }} {{ locale === 'ar' ? 'سنة' : 'Years' }}</span>
          </div>
          <div class="flex items-center text-xs text-gray-600 dark:text-gray-300">
            <span class="w-20 font-semibold">{{ t('courses.details.materials') }}:</span>
            <span :class="materialsIncluded ? 'text-green-500' : 'text-amber-500'">
              {{ materialsIncluded ? t('courses.details.included') : t('courses.details.notIncluded') }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-3">
        <NuxtLink 
          :to="localePath(`/courses/${id}`)"
          class="w-full py-3 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-bold transition-colors text-center text-sm"
        >
          {{ locale === 'ar' ? 'عرض التفاصيل' : 'View Details' }}
        </NuxtLink>
        <button @click="handleBookNow" class="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-sm">
          <span>{{ t('common.bookNow') }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n, useLocalePath } from '#imports'
import { useContact } from '../../../composables/useContact'

interface CourseTitle {
  ar: string
  en: string
}

const props = defineProps<{
  id: string
  title: CourseTitle
  description: CourseTitle
  images: string[]
  category: string
  age?: string
  materialsIncluded: boolean
  isAcademic: boolean
  type: string
}>()

const { t, locale } = useI18n()
const localePath = useLocalePath()
const { prefillForm } = useContact()

const localizedTitle = computed(() => props.title?.[locale.value] || props.title?.['ar'])
const localizedDesc = computed(() => props.description?.[locale.value] || props.description?.['ar'])
const image = computed(() => props.images?.[0] || 'https://via.placeholder.com/800x600')

const handleBookNow = () => {
  const message = locale.value === 'ar' 
    ? `أنا مهتم بالتسجيل في كورس: ${localizedTitle.value}`
    : `I am interested in booking the ${localizedTitle.value} course.`
  prefillForm('course', message)
}
</script>