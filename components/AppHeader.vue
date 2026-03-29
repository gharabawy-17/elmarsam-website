<template>
  <header class="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm transition-all duration-300">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="logo">
          <NuxtLink to="/" class="text-2xl font-bold text-primary">
            المرسم <span class="text-primary">.</span>
          </NuxtLink>
        </div>

        <nav class="hidden md:flex space-x-8 rtl:space-x-reverse">
          <NuxtLink
            v-for="item in navItems"
            :key="item.key"
            :to="item.path"
            class="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
          >
            {{ $t(`nav.${item.key}`) }}
          </NuxtLink>
        </nav>

        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle Theme"
          >
            <i :class="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" class="text-gray-700"></i>
          </button>

          <button
            @click="switchLocale"
            class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i class="fa-solid fa-globe text-gray-700"></i>
            <span class="ml-2 text-sm">{{ $i18n.locale === 'ar' ? 'EN' : 'عر' }}</span>
          </button>

          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i class="fa-solid fa-bars text-gray-700"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden bg-white border-t shadow-lg"
    >
      <nav class="container mx-auto px-4 py-4">
        <ul class="space-y-4">
          <li v-for="item in navItems" :key="item.key">
            <NuxtLink
              :to="item.path"
              @click="closeMobileMenu"
              class="block py-2 text-gray-700 hover:text-primary transition-colors"
            >
              {{ $t(`nav.${item.key}`) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { key: 'about', path: '#about' },
  { key: 'courses', path: '#courses' },
  { key: 'workspace', path: '#workspace' },
  { key: 'gallery', path: '#gallery' },
  { key: 'reviews', path: '#testimonials' },
  { key: 'contact', path: '#contact' }
]

const mobileMenuOpen = ref(false)
const isDark = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  // Implement theme switching logic
}

const switchLocale = () => {
  const newLocale = $i18n.locale === 'ar' ? 'en' : 'ar'
  $i18n.setLocale(newLocale)
}
</script>