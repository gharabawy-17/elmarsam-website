<template>
  <section id="about" class="py-24">
    <div class="container mx-auto px-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Image -->
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1974&auto=format&fit=crop" alt="About Al-Marsam"
            class="w-full h-[450px] object-cover rounded-2xl shadow-xl" />
          <div class="absolute bottom-6 right-6 bg-[#d4a373] text-white rounded-xl px-6 py-4 text-center shadow-lg">
            <h3 class="text-2xl font-extrabold">بيئة</h3>
            <p class="text-sm font-semibold">ملهمة</p>
          </div>
        </div>

        <!-- Content -->
        <div>
          <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">{{ t('about.subtitle') }}</h4>
          <h2 class="text-4xl font-extrabold mb-6 leading-snug">
            {{ t('about.title') }}
          </h2>
          <p class="text-gray-500 mb-4 leading-relaxed">
            {{ t('about.p1') }}
          </p>
          <p class="text-gray-500 mb-8 leading-relaxed">
            {{ t('about.p2') }}
          </p>
          <div class="flex flex-wrap gap-6">
            <div class="flex items-center gap-2 font-semibold">
              <i class="fa-solid fa-palette text-[#d4a373] text-xl"></i>
              <span>{{ t('about.features.art') }}</span>
            </div>
            <div class="flex items-center gap-2 font-semibold">
              <i class="fa-solid fa-music text-[#d4a373] text-xl"></i>
              <span>{{ t('about.features.music') }}</span>
            </div>
            <div class="flex items-center gap-2 font-semibold">
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

const { t } = useI18n()
</script>