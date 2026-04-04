<template>
  <footer class="bg-gray-50 dark:bg-[#0f101a] py-16 border-t border-gray-100 dark:border-white/5">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center">
        <!-- Logo -->
        <div class="logo mb-6">
          <NuxtLink to="/" class="flex items-center justify-center">
             <img src="../app/assets/img/logo.png" alt="Logo" class="w-16 dark:bg-[#d4a373] rounded-md" />
          </NuxtLink>
        </div>

        <!-- Social Links Title -->
        <h3 class="text-gray-900 dark:text-white font-bold mb-6 text-lg tracking-wide uppercase">
          {{ t('footer.socialTitle') }}
        </h3>

        <!-- Social Links Icons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl overflow-hidden"
            :aria-label="social.name"
          >
            <i :class="social.icon" class="text-xl z-20"></i>
            
            <!-- Tooltip -->
            <span class="absolute -top-10 scale-0 group-hover:scale-100 px-3 py-1 bg-gray-900 text-white text-xs rounded-md transition-all duration-200 pointer-events-none whitespace-nowrap z-30">
              {{ social.name }}
            </span>

            <!-- Hover Background Effect -->
            <div 
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
              :style="{ backgroundColor: social.color }"
            ></div>
          </a>
        </div>

        <!-- Divider -->
        <div class="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent mb-12"></div>

        <!-- Footer Bottom -->
        <div class="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-6 text-sm text-gray-500 dark:text-gray-400">
          <p>{{ t('footer.copyright') }}</p>

          <!-- Developers Section -->
          <div class="flex flex-wrap justify-center gap-6 items-center">
            <span class="font-medium text-gray-400">{{ t('footer.developedBy') }}:</span>
            <div class="flex gap-4">
              <div v-for="dev in developers" :key="dev.name" class="flex items-center gap-2 group">
                <span class="dark:text-gray-300 group-hover:text-[#d4a373] transition-colors">{{ dev.name }}</span>
                <a
                  :href="dev.whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  class="w-7 h-7 flex items-center justify-center rounded-full bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white transition-all transform hover:scale-110"
                >
                  <i class="fa-brands fa-whatsapp text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
import { useSocialLinks } from '../composables/useSocialLinks'

const { t } = useI18n()
const { socialLinks, developers } = useSocialLinks()
</script>

<style scoped>
/* Tooltip styles */
.group:hover span {
  animation: tooltip-bounce 0.3s ease-out forwards;
}

@keyframes tooltip-bounce {
  0% { transform: scale(0) translateY(0); }
  70% { transform: scale(1.1) translateY(-5px); }
  100% { transform: scale(1) translateY(-2px); }
}
</style>