<template>
  <section id="workspace" class="py-24">
    <div class="container mx-auto px-5">
      <div class="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center">

        <!-- Background Image -->
        <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
          alt="Workspace" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/65"></div>

        <!-- Content -->
        <div class="relative z-10 p-12 md:p-20 max-w-2xl" data-aos="fade-right">
          <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-4">{{ t('workspace.subtitle') }}</h4>
          <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {{ t('workspace.title') }}
          </h2>
          <p class="text-white/80 mb-8 leading-relaxed">
            {{ t('workspace.desc') }}
          </p>

          <!-- Features -->
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="flex items-center gap-3 text-white font-semibold" data-aos="fade-up" data-aos-delay="200">
              <i class="fa-solid fa-wifi text-[#d4a373] text-xl w-6"></i>
              <span>{{ t('workspace.features.wifi') }}</span>
            </div>
            <div class="flex items-center gap-3 text-white font-semibold" data-aos="fade-up" data-aos-delay="300">
              <i class="fa-solid fa-mug-hot text-[#d4a373] text-xl w-6"></i>
              <span>{{ t('workspace.features.coffee') }}</span>
            </div>
            <div class="flex items-center gap-3 text-white font-semibold" data-aos="fade-up" data-aos-delay="400">
              <i class="fa-solid fa-couch text-[#d4a373] text-xl w-6"></i>
              <span>{{ t('workspace.features.comfort') }}</span>
            </div>
            <div class="flex items-center gap-3 text-white font-semibold" data-aos="fade-up" data-aos-delay="500">
              <i class="fa-regular fa-calendar-check text-[#d4a373] text-xl w-6"></i>
              <span>{{ t('workspace.features.flexible') }}</span>
            </div>
          </div>

          <button @click="handleReserve"
            data-aos="zoom-in"
            data-aos-delay="600"
            class="inline-block px-8 py-4 bg-[#d4a373] hover:bg-[#b5835a] text-white font-bold rounded-lg transition-all hover:-translate-y-1">
            {{ t('workspace.cta') }}
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '#imports'
import { useContact } from '../../../composables/useContact'

const { t } = useI18n()
const { prefillForm } = useContact()

const handleReserve = () => {
  const message = t('contact.form.whatsapp.workspace')
  prefillForm('workspace', message)
}
</script>