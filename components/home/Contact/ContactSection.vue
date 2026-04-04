<template>
  <section id="contact" class="py-24">
    <div class="container mx-auto px-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10">

        <!-- Info Side -->
        <div class="bg-gray-50 dark:bg-[#161722] p-10 md:p-20" data-aos="fade-right">
          <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">{{ t('contact.subtitle') }}</h4>
          <h2 class="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">{{ t('contact.title') }}</h2>
          <p class="text-gray-500 dark:text-gray-300 mb-12 leading-relaxed">
            {{ t('contact.desc') }}
          </p>

          <div class="flex flex-col gap-8">
            <div class="flex items-start gap-5" data-aos="fade-up" data-aos-delay="100">
              <div class="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#d4a373] flex-shrink-0 shadow-sm">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h5 class="text-xs uppercase tracking-widest text-gray-400 mb-1">{{ t('contact.locationLabel') }}</h5>
                <p class="font-semibold text-gray-900 dark:text-white">{{ t('contact.location') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-5" data-aos="fade-up" data-aos-delay="200">
              <div class="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#d4a373] flex-shrink-0 shadow-sm">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div>
                <h5 class="text-xs uppercase tracking-widest text-gray-400 mb-1">{{ t('contact.phoneLabel') }}</h5>
                <p class="font-semibold text-gray-900 dark:text-white" dir="ltr">{{ t('contact.phone') }}</p>
              </div>
            </div>
          </div>

          <!-- Social Media Icons -->
          <div class="mt-12" data-aos="fade-up" data-aos-delay="300">
            <h5 class="text-xs uppercase tracking-widest text-gray-400 mb-4">{{ t('contact.socialTitle') }}</h5>
            <div class="flex flex-wrap gap-3">
              <a 
                v-for="social in socialLinks" 
                :key="social.name" 
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-11 h-11 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-lg social-icon"
                :style="{ '--hover-bg': social.color }"
                :aria-label="social.name"
              >
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>

          <!-- Direct WhatsApp Button -->
          <div class="mt-10" data-aos="fade-up" data-aos-delay="400">
            <a 
              href="https://wa.me/201270982997"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-2xl transition-all hover:-translate-y-1 shadow-lg group"
            >
              <i class="fa-brands fa-whatsapp text-2xl group-hover:scale-125 transition-transform"></i>
              <span>{{ t('common.bookNow') }} عبر واتساب</span>
            </a>
          </div>
        </div>

        <!-- Form Side -->
        <div class="bg-white dark:bg-[#1c1d29] p-10 md:p-20" data-aos="fade-left">
          <h3 class="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white">{{ t('contact.form.title') }}</h3>
          <div class="flex flex-col gap-6">
            <div data-aos="fade-up" data-aos-delay="100">
              <label class="block font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">{{ t('contact.form.name') }}</label>
              <input v-model="form.name" type="text" :placeholder="t('contact.form.namePlaceholder')"
                class="w-full px-5 py-4 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:outline-none focus:border-[#d4a373] transition-all" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <label class="block font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">{{ t('contact.form.email') }}</label>
              <input v-model="form.email" type="email" :placeholder="t('contact.form.emailPlaceholder')"
                class="w-full px-5 py-4 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:outline-none focus:border-[#d4a373] transition-all" />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <label class="block font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">{{ t('contact.form.service') }}</label>
              <select v-model="form.service" class="w-full px-5 py-4 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:outline-none focus:border-[#d4a373] transition-all">
                <option value="course">{{ t('contact.form.options.course') }}</option>
                <option value="workspace">{{ t('contact.form.options.workspace') }}</option>
                <option value="other">{{ t('contact.form.options.other') }}</option>
              </select>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <label class="block font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">{{ t('contact.form.message') }}</label>
              <textarea v-model="form.message" rows="4" :placeholder="t('contact.form.messagePlaceholder')"
                class="w-full px-5 py-4 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:outline-none focus:border-[#d4a373] transition-all resize-y min-h-28"></textarea>
            </div>
            <button
              @click="submitToWhatsApp"
              data-aos="zoom-in"
              data-aos-delay="500"
              class="w-full py-4 bg-[#d4a373] hover:bg-[#b5835a] text-white font-bold rounded-lg transition-all hover:-translate-y-1 shadow-lg">
              {{ t('contact.form.submit') }}
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '#imports'
import { useWhatsApp } from '../../../composables/useWhatsApp'
import { useContact } from '../../../composables/useContact'
import { useSocialLinks } from '../../../composables/useSocialLinks'

const { t } = useI18n()
const { sendWhatsAppMessage } = useWhatsApp()
const { form } = useContact()
const { socialLinks } = useSocialLinks()

const submitToWhatsApp = () => {
  const services = {
    course: t('contact.form.options.course'),
    workspace: t('contact.form.options.workspace'),
    other: t('contact.form.options.other')
  }

  const messageText = `
*${t('contact.form.title')}*
--------------------------
*${t('contact.form.name')}:* ${form.name}
*${t('contact.form.email')}:* ${form.email}
*${t('contact.form.service')}:* ${services[form.service]}
*${t('contact.form.message')}:*
${form.message}
  `.trim()

  sendWhatsAppMessage(messageText)
}
</script>

<style scoped>
.social-icon:hover {
  background-color: var(--hover-bg) !important;
  border-color: var(--hover-bg) !important;
}
</style>