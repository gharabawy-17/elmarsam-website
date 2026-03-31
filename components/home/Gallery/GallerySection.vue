<template>
  <section id="gallery" class="py-24 bg-gray-50 dark:bg-[#161722]">
    <div class="container mx-auto px-5">

      <!-- Header -->
      <div class="text-center mb-14">
        <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">{{ t('gallery.subtitle') }}</h4>
        <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">
          {{ t('gallery.title') }}
        </h2>
      </div>

      <!-- Swiper -->
      <Swiper
        effect="coverflow"
        :grab-cursor="true"
        :centered-slides="true"
        slides-per-view="auto"
        :loop="true"
        :coverflow-effect="{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :pagination="{ clickable: true }"
        :navigation="true"
        :breakpoints="{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        :modules="modules"
        class="gallery-slider pb-20 max-w-[900px] mx-auto"
      >
        <SwiperSlide
          v-for="(img, i) in images"
          :key="i"
          class="!w-auto"
        >
          <div
            class="relative rounded-[20px] overflow-hidden h-[400px] w-[300px] cursor-pointer gallery-item"
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
import { ref } from 'vue'
import { useI18n } from '#imports'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [EffectCoverflow, Autoplay, Pagination, Navigation]
const { t } = useI18n()

const modalSrc = ref(null)
const openModal = (src) => {
  modalSrc.value = src
  document.body.style.overflow = 'hidden'
}
const closeModal = () => {
  modalSrc.value = null
  document.body.style.overflow = ''
}

const images = [
  { src: 'https://i.pinimg.com/1200x/39/87/13/3987139406a39295c222d13a7d373ee3.jpg', alt: 'Art 1' },
  { src: 'https://i.pinimg.com/736x/41/0d/d0/410dd0b0670e1a360cd4a23b6daf3719.jpg',  alt: 'Art 2' },
  { src: 'https://i.pinimg.com/1200x/70/43/89/704389eafa135477153b84694a71da77.jpg', alt: 'Art 3' },
  { src: 'https://i.pinimg.com/736x/b6/52/01/b6520151c239a6d732bc02a3ea99c262.jpg',  alt: 'Art 4' },
  { src: 'https://i.pinimg.com/736x/84/0c/10/840c102bb78646dc9bb02e2bb17a5830.jpg',  alt: 'Art 5' },
  { src: 'https://i.pinimg.com/736x/69/0f/b0/690fb0ad94dfe6ffd4230a19920176f1.jpg',  alt: 'Art 6' },
]
</script>

<style scoped>
/* Hover effect على الـ overlay */
.gallery-item:hover img {
  transform: scale(1.1);
}
.gallery-item:hover .gallery-overlay {
  opacity: 1 !important;
}

/* Swiper colors */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #d4a373;
  transform: scale(0.7);
}

:deep(.swiper-pagination-bullet) {
  background: #d4a373;
  opacity: 0.3;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  width: 25px;
  border-radius: 5px;
  background: #d4a373;
  transition: all 0.4s ease;
}

/* Modal animation */
@keyframes zoom {
  from { transform: scale(0.8); }
  to   { transform: scale(1); }
}
.animate-zoom {
  animation: zoom 0.3s ease;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>