<template>
  <div 
    class="group relative transition-all duration-500 hover:-translate-y-2 mt-16 h-full min-h-[350px]"
    :data-aos="'fade-up'"
    :data-aos-delay="index * 100"
  >
    <!-- Background Shape Wrapper (Flat Top, Tilted Bottom 75%) -->
    <div 
      class="absolute inset-0 bg-gray-50/50 dark:bg-white/5 backdrop-blur-2xl rounded-t-[3rem] rounded-br-[3rem] border border-gray-100 dark:border-white/10 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#d4a373]/15 transition-all duration-500"
      style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);"
    >
      <!-- Subtle Glow Effect -->
      <div class="absolute -inset-10 bg-gradient-to-br from-[#d4a373]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>

    <!-- Quote icon (Vertically Centered on the Left Edge) -->
    <div 
      class="absolute top-1/3 -translate-y-1/2 -left-8 w-16 h-16 rounded-[1.5rem] bg-[#d4a373] flex items-center justify-center text-white text-2xl shadow-xl rotate-[-12deg] group-hover:rotate-0 transition-all duration-500 group-hover:scale-110 z-20"
    >
      <i class="fa-solid fa-quote-right"></i>
    </div>

    <!-- Content Wrapper -->
    <div class="relative p-10 md:p-14 md:pb-24 h-full flex flex-col z-10">
      <!-- Star Rating -->
      <div class="flex gap-1.5 mb-6">
        <i v-for="n in 5" :key="n" class="fa-solid fa-star text-[#d4a373] text-[10px]"></i>
      </div>

      <!-- Testimonial Text -->
      <p class="text-gray-600 dark:text-gray-300 italic leading-relaxed mb-8 text-lg flex-grow tracking-wide">
        "{{ item.text }}"
      </p>

      <!-- Footer Info -->
      <div class="flex items-center gap-5 mt-auto pt-6 border-t border-gray-200 dark:border-white/10">
        <div class="relative group/avatar">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4a373] to-[#b5835a] flex items-center justify-center text-2xl font-black text-white shadow-lg overflow-hidden transition-transform duration-500 group-hover/avatar:scale-105">
            {{ item.avatar }}
            <div class="absolute inset-0 bg-black/5"></div>
          </div>
          <!-- Online status dot -->
          <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white dark:border-[#1c1d29] rounded-full shadow-sm"></div>
        </div>
        
        <div class="flex flex-col">
          <h5 class="font-black text-lg text-gray-900 dark:text-white mb-0.5 tracking-tight group-hover:text-[#d4a373] transition-colors duration-300">
            {{ item.name }}
          </h5>
          <span class="text-[11px] font-bold text-[#d4a373]/80 uppercase tracking-[0.2em]">
            {{ item.role }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TestimonialItem {
  text: string
  name: string
  role: string
  avatar: string
}

const props = defineProps<{
  item: TestimonialItem
  index: number
}>()
</script>

<style scoped>
/* Standard transition configurations */
.group {
  perspective: 1000px;
}
</style>
