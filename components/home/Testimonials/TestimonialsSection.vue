<template>
  <section id="testimonials" class="py-24 bg-gray-50 dark:bg-[#161722]">
    <div class="container mx-auto px-5">

      <div class="text-center mb-14">
        <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">{{ t('testimonials.subtitle') }}</h4>
        <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">{{ t('testimonials.title') }}</h2>
      </div>

      <ClientOnly>
        <Swiper
          :modules="[SwiperPagination]"
          :slides-per-view="1"
          :space-between="30"
          :breakpoints="{ 768: { slidesPerView: 2 } }"
          :pagination="{ clickable: true }"
          class="pb-14"
        >
          <SwiperSlide v-for="item in testimonials" :key="item.name">
            <div class="relative bg-white dark:bg-[#1c1d29] rounded-2xl p-10 border border-gray-100 dark:border-white/10 shadow-sm hover:-translate-y-1 transition-all mt-8">
              <!-- Quote icon -->
              <div class="absolute -top-5 right-10 w-14 h-14 rounded-full bg-[#d4a373] flex items-center justify-center text-white text-xl shadow">
                <i class="fa-solid fa-quote-right"></i>
              </div>
              <p class="text-gray-500 dark:text-gray-300 italic leading-relaxed mb-8 mt-4">{{ item.text }}</p>
              <div class="flex items-center gap-4 border-t border-gray-100 dark:border-white/10 pt-6">
                <div class="w-14 h-14 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-2xl font-extrabold text-[#d4a373]">
                  {{ item.avatar }}
                </div>
                <div>
                  <h5 class="font-extrabold text-base text-gray-900 dark:text-white">{{ item.name }}</h5>
                  <span class="text-sm text-gray-400">{{ item.role }}</span>
                </div>
              </div>
            </div>
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
import { Pagination as SwiperPagination } from 'swiper/modules'
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