<template>
  <section id="about" class="py-24">
    <div class="container mx-auto px-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Image -->
        <div class="relative" data-aos="fade-right">
          <img src="https://res.cloudinary.com/dxtqkfpmr/image/upload/v1774970364/IMG_8465_oxk8w3.jpg" 
            :alt="t('about.title')"
            class="w-full h-[450px] object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-500" />
          <div class="absolute bottom-6 right-6 bg-[#d4a373] text-white rounded-xl px-6 py-4 text-center shadow-lg" data-aos="zoom-in" data-aos-delay="400">
            <h3 class="text-2xl font-extrabold">{{ locale === 'ar' ? 'بيئة' : 'Inspiring' }}</h3>
            <p class="text-sm font-semibold">{{ locale === 'ar' ? 'ملهمة' : 'Environment' }}</p>
          </div>
        </div>

        <!-- Content -->
        <div data-aos="fade-left">
          <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">{{ t('about.subtitle') }}</h4>
          <h2 class="text-4xl font-extrabold mb-6 leading-snug">
            {{ t('about.title') }}
          </h2>
          <p class="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed italic">
            {{ t('about.p1') }}
          </p>
          <p class="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            {{ t('about.p2') }}
          </p>
          <div class="flex flex-wrap gap-6">
            <div class="flex items-center gap-2 font-semibold hover:text-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="200">
              <i class="fa-solid fa-palette text-[#d4a373] text-xl"></i>
              <span>{{ t('about.features.art') }}</span>
            </div>
            <div class="flex items-center gap-2 font-semibold hover:text-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="300">
              <i class="fa-solid fa-music text-[#d4a373] text-xl"></i>
              <span>{{ t('about.features.music') }}</span>
            </div>
            <div class="flex items-center gap-2 font-semibold hover:text-primary transition-colors duration-300" data-aos="fade-up" data-aos-delay="400">
              <i class="fa-solid fa-laptop text-[#d4a373] text-xl"></i>
              <span>{{ t('about.features.workspace') }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '#imports'

const { t, locale } = useI18n()
</script>