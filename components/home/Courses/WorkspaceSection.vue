<template>
  <div class="container mx-auto px-5 mt-20">

    <!-- Header -->
    <div class="text-center mb-12">
      <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">فعاليات قادمة</h4>
      <h2 class="text-4xl font-extrabold">ورش العمل</h2>
    </div>

    <!-- Workshops List -->
    <div class="flex flex-col gap-5 max-w-3xl mx-auto">
      <div v-for="ws in workshops" :key="ws.title"
        class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-[#1c1d29] rounded-2xl px-7 py-6 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">

        <!-- Date Badge -->
        <div class="flex items-center gap-5">
          <div class="w-14 h-14 rounded-xl bg-[#d4a373]/10 flex flex-col items-center justify-center flex-shrink-0">
            <span class="text-[#d4a373] font-extrabold text-lg leading-none">{{ ws.day }}</span>
            <span class="text-[#d4a373] text-xs font-semibold">{{ ws.month }}</span>
          </div>
          <div>
            <h3 class="font-extrabold text-base mb-1">{{ ws.title }}</h3>
            <div class="flex flex-wrap gap-3 text-xs text-gray-400">
              <span class="flex items-center gap-1">
                <i class="fa-regular fa-clock"></i> {{ ws.time }}
              </span>
              <span class="flex items-center gap-1">
                <i class="fa-solid fa-location-dot"></i> {{ ws.location }}
              </span>
              <span class="flex items-center gap-1">
                <i class="fa-solid fa-users"></i> {{ ws.seats }} مقعد متاح
              </span>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <a href="#contact"
          class="flex-shrink-0 px-6 py-2.5 rounded-lg border-2 border-[#d4a373] text-[#d4a373] text-sm font-bold hover:bg-[#d4a373] hover:text-white transition-all whitespace-nowrap">
          احجز مكانك
        </a>
      </div>
    </div>

  </div>
</template>

<script setup>
const workshops = [
  {
    day: '12',
    month: 'أبر',
    title: 'ورشة الرسم بالألوان المائية',
    time: '4:00 - 7:00 م',
    location: 'المرسم - القاعة الرئيسية',
    seats: 8,
  },
  {
    day: '19',
    month: 'أبر',
    title: 'ورشة تصميم الجرافيك للمبتدئين',
    time: '5:00 - 8:00 م',
    location: 'المرسم - استوديو الرقمي',
    seats: 5,
  },
  {
    day: '26',
    month: 'أبر',
    title: 'ليلة العزف الحر على البيانو',
    time: '7:00 - 9:00 م',
    location: 'المرسم - الصالة الموسيقية',
    seats: 12,
  },
]
</script>
