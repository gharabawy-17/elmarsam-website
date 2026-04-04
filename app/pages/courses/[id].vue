<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#0f111a] transition-colors duration-300">
    <!-- Navbar Spacer -->
    <div class="h-20"></div>

    <div v-if="course" class="container mx-auto px-5 py-12">
      <!-- Breadcrumbs / Back Link -->
      <NuxtLink 
        :to="localePath('/')" 
        class="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold mb-8 group transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>{{ t('courses.details.backToCourses') }}</span>
      </NuxtLink>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Left: Image Slider -->
        <div class="space-y-6">
          <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#161722]">
            <Swiper
              :modules="modules"
              :slides-per-view="1"
              :loop="true"
              :autoplay="{ delay: 4000, disableOnInteraction: false }"
              :pagination="{ clickable: true }"
              :navigation="true"
              class="course-swiper h-[400px] md:h-[500px]"
            >
              <SwiperSlide v-for="(img, idx) in course.images" :key="idx">
                <img :src="img" :alt="localizedTitle" class="w-full h-full object-cover" />
              </SwiperSlide>
            </Swiper>
          </div>
          
          <!-- Thumbnails or Extra info -->
          <div class="grid grid-cols-4 gap-4">
             <div 
              v-for="(img, idx) in course.images" 
              :key="idx"
              class="aspect-square rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-all cursor-pointer shadow-sm"
            >
              <img :src="img" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Right: Course Info -->
        <div class="space-y-8">
          <div>
            <div class="flex flex-wrap gap-3 mb-4">
              <span class="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold border border-primary/20">
                {{ t(`courses.categories.${course.category}`) }}
              </span>
              <span v-if="course.isAcademic" class="bg-amber-500/10 text-amber-500 px-4 py-1 rounded-full text-sm font-bold border border-amber-500/20">
                {{ t('courses.details.academic') }}
              </span>
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              {{ localizedTitle }}
            </h1>
            <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {{ localizedDesc }}
            </p>
          </div>

          <!-- Metadata Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-6 rounded-2xl bg-white dark:bg-[#1b1c28] border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4">
              <div class="p-3 bg-primary/10 rounded-xl text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">{{ t('courses.details.ageRange') }}</p>
                <p class="text-lg font-bold text-gray-900 dark:text-white">{{ course.age || '4+' }} {{ locale === 'ar' ? 'سنة' : 'Years' }}</p>
              </div>
            </div>

            <div class="p-6 rounded-2xl bg-white dark:bg-[#1b1c28] border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-4">
              <div class="p-3 bg-amber-500/10 rounded-xl text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase">{{ t('courses.details.materials') }}</p>
                <p class="text-lg font-bold" :class="course.materialsIncluded ? 'text-green-500' : 'text-amber-500'">
                  {{ course.materialsIncluded ? t('courses.details.included') : t('courses.details.notIncluded') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Description Section -->
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('courses.details.descriptionTitle') }}</h3>
            <div class="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
              <p v-if="locale === 'ar'">
                هذا الكورس مصمم لتعليم الطلاب المهارات الفنية باحترافية تامة، مع التركيز على الجانب التطبيقي والأكاديمي لضمان أفضل النتائج. كما نوفر بيئة مناسبة للإبداع والتركيز.
              </p>
              <p v-else>
                This course is designed to teach students artistic skills with total professionalism, focusing on the practical and academic side to ensure the best results. We also provide an environment suitable for creativity and focus.
              </p>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="pt-6 flex flex-col sm:flex-row gap-4">
            <button 
              @click="handleBookNow"
              class="flex-1 py-4 px-8 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-3"
            >
              <span>{{ t('common.bookNow') }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 404 State -->
    <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-5">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Course Not Found</h2>
      <NuxtLink :to="localePath('/')" class="btn btn-primary">Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useI18n, useLocalePath } from '#imports'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import coursesData from '~/data/courses.json'
import { useContact } from '../../../composables/useContact'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()
const { prefillForm } = useContact()

const modules = [Autoplay, Pagination, Navigation]

const courseId = route.params.id
const course = coursesData.find(c => c.id === courseId)

const localizedTitle = computed(() => course?.title?.[locale.value] || course?.title?.['ar'])
const localizedDesc = computed(() => course?.description?.[locale.value] || course?.description?.['ar'])

useSeoMeta({
  title: `${localizedTitle.value} | Al-Marsam`,
  ogTitle: `${localizedTitle.value} | Al-Marsam`,
  description: localizedDesc.value,
  ogDescription: localizedDesc.value,
  ogImage: course?.images?.[0] || '/img/hero.avif',
  twitterCard: 'summary_large_image',
})

const handleBookNow = () => {
  const message = locale.value === 'ar' 
    ? `أنا مهتم بالتسجيل في كورس: ${localizedTitle.value}`
    : `I am interested in booking the ${localizedTitle.value} course.`
  
  prefillForm('course', message)
  
  // If we're on the details page and not home, navigate to home's contact section
  const contactSection = document.getElementById('contact')
  if (!contactSection) {
    navigateTo(localePath('/#contact'))
  }
}

// Swiper modules (auto-imported in Nuxt if configured, but let's be explicit if needed or rely on auto-imports)
// Swiper, SwiperSlide are auto-imported.
</script>

<style>
.course-swiper .swiper-pagination-bullet-active {
  background: #d4a373;
}
.course-swiper .swiper-button-next,
.course-swiper .swiper-button-prev {
  color: #fff;
  background: rgba(0,0,0,0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  backdrop-filter: blur(4px);
}
.course-swiper .swiper-button-next:after,
.course-swiper .swiper-button-prev:after {
  font-size: 18px;
  font-weight: bold;
}
</style>
