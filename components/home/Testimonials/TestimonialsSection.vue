<template>
  <section id="testimonials" class="py-24 bg-white dark:bg-[#0f101a] overflow-hidden relative">
    <!-- Floating Background Elements -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-[#d4a373]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#d4a373]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

    <div class="container mx-auto px-5 relative z-10">
      <div class="text-center mb-16" data-aos="fade-up">
        <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3 text-sm">{{ t('testimonials.subtitle') }}</h4>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          {{ t('testimonials.title') }}
        </h2>
        <div class="w-20 h-1.5 bg-[#d4a373] mx-auto mt-6 rounded-full"></div>
      </div>

      <ClientOnly>
        <Swiper
          :modules="[SwiperPagination, SwiperAutoplay]"
          :slides-per-view="1.2"
          :space-between="20"
          :centered-slides="true"
          :loop="true"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :breakpoints="{ 
            640: { slidesPerView: 1.5, spaceBetween: 30 },
            1024: { slidesPerView: 2.5, spaceBetween: 40, centeredSlides: false } 
          }"
          :pagination="{ clickable: true }"
          class="!pb-24 testimonials-swiper"
        >
          <SwiperSlide v-for="(item, index) in testimonials" :key="item.name">
            <ReviewCard :item="item" :index="index" />
          </SwiperSlide>
        </Swiper>
      </ClientOnly>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '#imports'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination as SwiperPagination, Autoplay as SwiperAutoplay } from 'swiper/modules'
import ReviewCard from './ReviewCard.vue'
import 'swiper/css'
import 'swiper/css/pagination'

const { t } = useI18n()

// We create 3 simple testimonials, relying completely on fixed i18n keys to ensure stability.
const testimonials = computed(() => {
  return [0, 1, 2].map(index => {
    const nameStr = t(`testimonials.reviews.${index}.name`)
    return {
      text: t(`testimonials.reviews.${index}.text`),
      name: nameStr,
      role: t(`testimonials.reviews.${index}.role`),
      avatar: nameStr ? nameStr.charAt(0) : ''
    }
  })
})
</script>

<style>
.testimonials-swiper .swiper-pagination-bullet {
  @apply w-3 h-3 bg-gray-300 dark:bg-white/20 opacity-100 transition-all duration-300 !important;
}

.testimonials-swiper .swiper-pagination-bullet-active {
  @apply w-10 bg-[#d4a373] rounded-full !important;
}
</style>