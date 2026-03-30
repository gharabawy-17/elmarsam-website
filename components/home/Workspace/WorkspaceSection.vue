<template>
  <section id="workspace" class="py-24">
    <div class="container mx-auto px-5">
      <div class="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center">

        <!-- Background Image -->
        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
          alt="Workspace" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/65"></div>

        <!-- Content -->
        <div class="relative z-10 p-12 md:p-20 max-w-2xl">
          <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-4">مساحة عملك المثالية</h4>
          <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            مكان يجمع بين الهدوء والإلهام
          </h2>
          <p class="text-white/80 mb-8 leading-relaxed">
            سواء كنت فناناً يبحث عن زاوية هادئة لتطوير أعماله، أو طالباً يحتاج إلى بيئة تركز على الدراسة، فإن مساحة العمل في المرسم توفر لك مكاتب مريحة وإنترنت عالي السرعة وأجواء تحفز الإبداع.
          </p>

          <!-- Features -->
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="flex items-center gap-3 text-white font-semibold">
              <i class="fa-solid fa-wifi text-[#d4a373] text-xl w-6"></i>
              <span>إنترنت سريع</span>
            </div>
            <div class="flex items-center gap-3 text-white font-semibold">
              <i class="fa-solid fa-mug-hot text-[#d4a373] text-xl w-6"></i>
              <span>مشروبات مجانية</span>
            </div>
            <div class="flex items-center gap-3 text-white font-semibold">
              <i class="fa-solid fa-couch text-[#d4a373] text-xl w-6"></i>
              <span>جلسات مريحة</span>
            </div>
            <div class="flex items-center gap-3 text-white font-semibold">
              <i class="fa-regular fa-calendar-check text-[#d4a373] text-xl w-6"></i>
              <span>حجز مرن (يومي/ساعة)</span>
            </div>
          </div>

          <a href="#contact"
            class="inline-block px-8 py-4 bg-[#d4a373] hover:bg-[#b5835a] text-white font-bold rounded-lg transition-all hover:-translate-y-1">
            احجز مكانك الآن
          </a>
        </div>

      </div>
    </div>
  </section>
</template>