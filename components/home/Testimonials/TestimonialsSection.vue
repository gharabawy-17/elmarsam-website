<template>
  <section id="testimonials" class="py-24 bg-gray-50 dark:bg-[#161722]">
    <div class="container mx-auto px-5">

      <div class="text-center mb-14">
        <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">آراء</h4>
        <h2 class="text-4xl font-extrabold">ماذا يقولون عنا؟</h2>
      </div>

      <Swiper
        :modules="[SwiperPagination]"
        :slides-per-view="1"
        :space-between="30"
        :breakpoints="{ 768: { slidesPerView: 2 } }"
        :pagination="{ clickable: true }"
        class="pb-14"
      >
        <SwiperSlide v-for="t in testimonials" :key="t.name">
          <div class="relative bg-white dark:bg-[#1c1d29] rounded-2xl p-10 border border-gray-100 dark:border-white/10 shadow-sm hover:-translate-y-1 transition-all mt-8">
            <!-- Quote icon -->
            <div class="absolute -top-5 right-10 w-14 h-14 rounded-full bg-[#d4a373] flex items-center justify-center text-white text-xl shadow">
              <i class="fa-solid fa-quote-right"></i>
            </div>
            <p class="text-gray-500 italic leading-relaxed mb-8 mt-4">{{ t.review }}</p>
            <div class="flex items-center gap-4 border-t border-gray-100 dark:border-white/10 pt-6">
              <div class="w-14 h-14 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-2xl font-extrabold text-[#d4a373]">
                {{ t.avatar }}
              </div>
              <div>
                <h5 class="font-extrabold text-base">{{ t.name }}</h5>
                <span class="text-sm text-gray-400">{{ t.role }}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    avatar: 'س',
    name: 'سارة محمود',
    role: 'متدربة دورة الرسم',
    review: 'أفضل مكان للرسم والتركيز! البيئة ملهمة جداً والمدربون يهتمون بكل التفاصيل. استطعت تطوير مهاراتي في الرسم الزيتي بشكل ملحوظ خلال أسابيع قليلة.'
  },
  {
    avatar: 'أ',
    name: 'أحمد كمال',
    role: 'مستقل (Freelancer)',
    review: 'مساحة العمل مثالية للإنجاز. الهدوء والجو العام المحاط بالفن يجعل العمل هنا ممتعاً. أحجز مكاني ثلاث مرات بالأسبوع لإنجاز مشاريعي في جو مليء بالطاقة الإيجابية.'
  }
]
</script>