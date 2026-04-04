<template>
  <section id="gallery" class="py-24 bg-gray-50 dark:bg-[#161722]">
    <div class="container mx-auto px-5">

      <!-- Header -->
      <div class="text-center mb-14" data-aos="fade-up">
        <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">{{ t('gallery.subtitle') }}</h4>
        <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">
          {{ t('gallery.title') }}
        </h2>
      </div>

      <!-- Swiper -->
      <ClientOnly>
        <Swiper
          effect="coverflow"
          :grab-cursor="true"
          :centered-slides="true"
          slides-per-view="auto"
          :loop="true"
          :coverflow-effect="{
            rotate: 0,
            stretch: -20,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }"
          :autoplay="{
            delay: 1000,
            disableOnInteraction: false,
          }"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="modules"
          class="gallery-slider pb-20  mx-auto"
        >
          <SwiperSlide
            v-for="(img, i) in images"
            :key="i"
            class="!w-auto"
          >
            <div
              class="rounded-xl overflow-hidden h-[350px] w-[250px] lg:h-[600px] lg:w-[500px] cursor-pointer gallery-item group backdrop-blur-sm"
              @click="openModal(img.src)"
            >
              <img
                :src="img.src"
                :alt="img.alt"
                class="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-110"
              />
              <!-- Overlay -->
              <div class="gallery-overlay absolute inset-0 flex items-center justify-center text-white text-4xl opacity-0 transition-all duration-300"
                style="background: rgba(212,163,115,0.6)">
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>

    </div>

    <!-- Modal -->
    <Transition name="modal-fade">
      <div
        v-if="modalSrc"
        class="fixed inset-0 z-[3000] flex items-center justify-center pt-24"
        style="background: rgba(0,0,0,0.9); backdrop-filter: blur(5px)"
        @click="closeModal"
      >
        <span
          class="absolute top-8 right-10 text-white text-5xl cursor-pointer hover:text-[#d4a373] transition-colors leading-none"
          @click="closeModal"
        >
          <i class="fa-solid fa-xmark"></i>
        </span>
        <img
          :src="modalSrc"
          class="max-w-[90%] max-h-[80vh] object-contain rounded-xl animate-zoom"
          @click.stop
        />
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '#imports'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules'
import assetsData from '../../../app/data/assets.json'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [EffectCoverflow, Autoplay, Pagination, Navigation]
const { t, locale } = useI18n()

const modalSrc = ref(null)
const openModal = (src) => {
  modalSrc.value = src
  document.body.style.overflow = 'hidden'
}
const closeModal = () => {
  modalSrc.value = null
  document.body.style.overflow = ''
}

const images = computed(() => {
  return assetsData.items.map(item => ({
    src: item.image,
    alt: locale.value === 'ar' ? `صورة من المعرض ${item.id}` : `Gallery Image ${item.id}`
  }))
})
</script>

<style scoped>
.gallery-item {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover {
  border-color: rgba(212, 163, 115, 0.4);
}


.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  background: linear-gradient(to top, rgba(212, 163, 115, 0.8), transparent);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1 !important;
}

/* Glassmorphism navigation buttons */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px border rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #d4a373;
  transition: all 0.3s ease;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: #d4a373;
  color: white;
  transform: scale(1.1);
}

:deep(.swiper-button-after) {
  font-size: 1.2rem !important;
  font-weight: bold;
}

:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 1;
  transition: all 0.3s ease;
  padding: 5px;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  width: 40px;
  border-radius: 10px;
  border: 1px solid white;
  background: #d4a373;
}

/* Modal animation */
@keyframes zoom {
  from { transform: scale(0.9); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}
.animate-zoom {
  animation: zoom 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>