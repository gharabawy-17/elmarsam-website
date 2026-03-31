<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

    <!-- Video Background -->
    <video
      ref="videoRef"
      class="absolute inset-0 w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    >
      <source src="../../../app/assets/video/IMG_1525.mp4" type="video/mp4" />
      <source src="../../../app/assets/video/IMG_1525.webm" type="video/webm" />
    </video>

    <!-- Overlay — نفس الـ gradient الأصلي -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(135deg, rgba(19,20,31,0.9), rgba(212,163,115,0.3))"
    ></div>

    <!-- Content -->
    <div class="container mx-auto px-5 relative z-10">
      <div class="max-w-3xl mx-auto text-white">
        <h1 class="font-extrabold leading-tight mb-6"
          style="font-size: clamp(2.5rem, 8vw, 4.5rem); text-shadow: 0 4px 20px rgba(0,0,0,0.3)">
          <span class="text-[#d4a373]">{{ t('hero.titlePrefix') }}</span>
          <span> {{ t('hero.brand') }}</span>
        </h1>

        <p class="mb-12 opacity-95 font-light max-w-2xl mx-auto"
          style="font-size: clamp(1.1rem, 4vw, 1.4rem)">
          {{ t('hero.tagline') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#courses"
            class="px-8 py-4 rounded-lg font-bold text-white bg-[#d4a373] hover:bg-[#b5835a] transition-all hover:-translate-y-1 shadow-lg"
            style="box-shadow: 0 4px 15px rgba(212,163,115,0.3)">
            {{ t('hero.btnBookCourse') }}
          </a>
          <a href="#workspace"
            class="px-8 py-4 rounded-lg font-bold text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all hover:-translate-y-1">
            {{ t('hero.btnBookWorkspace') }}
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white text-3xl opacity-80 hover:opacity-100 hover:text-[#d4a373] transition-all"
      style="animation: bounce 2.5s infinite">
      <a href="#about"><i class="fa-solid fa-chevron-down"></i></a>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from '#imports'

const videoRef = ref(null)
const { t } = useI18n()

onMounted(() => {
  // ضمان التشغيل التلقائي حتى لو المتصفح عنده قيود
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      // fallback صامت — بعض المتصفحات بتوقف autoplay
    })
  }
})
</script>

<style scoped>
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
  40%  { transform: translateY(-20px) translateX(-50%); }
  60%  { transform: translateY(-10px) translateX(-50%); }
}
</style>