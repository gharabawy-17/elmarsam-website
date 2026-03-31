<template>
  <section id="contact" class="py-24">
    <div class="container mx-auto px-5">
      <div class="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10">

        <!-- Info Side -->
        <div class="bg-gray-50 dark:bg-[#161722] p-14 md:p-20">
          <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">{{ t('contact.subtitle') }}</h4>
          <h2 class="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">{{ t('contact.title') }}</h2>
          <p class="text-gray-500 dark:text-gray-300 mb-12 leading-relaxed">
            {{ t('contact.desc') }}
          </p>

          <div class="flex flex-col gap-8">
            <div class="flex items-start gap-5">
              <div class="w-12 h-12 rounded-xl bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#d4a373] flex-shrink-0">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h5 class="text-xs uppercase tracking-widest text-gray-400 mb-1">{{ t('contact.locationLabel') }}</h5>
                <p class="font-semibold text-gray-900 dark:text-white">{{ t('contact.location') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-5">
              <div class="w-12 h-12 rounded-xl bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#d4a373] flex-shrink-0">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div>
                <h5 class="text-xs uppercase tracking-widest text-gray-400 mb-1">{{ t('contact.phoneLabel') }}</h5>
                <p class="font-semibold text-gray-900 dark:text-white" dir="ltr">{{ t('contact.phone') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-5">
              <div class="w-12 h-12 rounded-xl bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#d4a373] flex-shrink-0">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h5 class="text-xs uppercase tracking-widest text-gray-400 mb-1">{{ t('contact.emailLabel') }}</h5>
                <p class="font-semibold text-gray-900 dark:text-white">{{ t('contact.email') }}</p>
              </div>
            </div>
          </div>

          <!-- Social -->
          <div class="flex gap-3 mt-12">
            <a v-for="icon in ['instagram', 'facebook-f', 'x-twitter']" :key="icon" href="#"
              class="w-11 h-11 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center hover:bg-[#d4a373] hover:text-white transition-all">
              <i :class="`fa-brands fa-${icon}`"></i>
            </a>
          </div>
        </div>

        <!-- Form Side -->
        <div class="bg-white dark:bg-[#1c1d29] p-14 md:p-20">
          <h3 class="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white">{{ t('contact.form.title') }}</h3>
          <div class="flex flex-col gap-6">
            <div>
              <label class="block font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">{{ t('contact.form.name') }}</label>
              <input type="text" placeholder="أدخل اسمك"
                class="w-full px-5 py-4 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:outline-none focus:border-[#d4a373] transition-all" />
            </div>
            <div>
              <label class="block font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">{{ t('contact.form.email') }}</label>
              <input type="email" placeholder="أدخل بريدك الإلكتروني"
                class="w-full px-5 py-4 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:outline-none focus:border-[#d4a373] transition-all" />
            </div>
            <div>
              <label class="block font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">{{ t('contact.form.service') }}</label>
              <select class="w-full px-5 py-4 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:outline-none focus:border-[#d4a373] transition-all">
                <option value="course">{{ t('contact.form.options.course') }}</option>
                <option value="workspace">{{ t('contact.form.options.workspace') }}</option>
                <option value="other">{{ t('contact.form.options.other') }}</option>
              </select>
            </div>
            <div>
              <label class="block font-semibold mb-2 text-sm text-gray-800 dark:text-gray-200">{{ t('contact.form.message') }}</label>
              <textarea rows="4" placeholder="اكتب رسالتك هنا..."
                class="w-full px-5 py-4 rounded-lg border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:outline-none focus:border-[#d4a373] transition-all resize-y min-h-28"></textarea>
            </div>
            <button
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

const { t } = useI18n()
</script>