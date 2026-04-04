<template>
  <section id="courses" class="py-24 bg-gray-50 dark:bg-[#161722] transition-colors duration-300">
    <div class="container mx-auto px-5">

      <div class="text-center mb-16">
        <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3" data-aos="fade-up">{{ t('courses.subtitle') }}</h4>
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white" data-aos="fade-up">{{ t('courses.title') }}</h2>
        <p class="text-gray-500 dark:text-gray-300 max-w-2xl mx-auto text-lg" data-aos="fade-up">
          {{ t('courses.desc') }}
        </p>
      </div>

      <!-- Categories Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          class="px-6 py-3 rounded-full font-bold text-sm transition-all duration-300"
          :class="activeCategory === cat 
            ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' 
            : 'bg-white dark:bg-[#1f202c] text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'"
        >
          {{ t(`courses.categories.${cat}`) }}
        </button>
      </div>

      <!-- Courses Grid -->
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <TransitionGroup 
          name="list" 
          tag="div" 
          class="contents"
        >
          <CourseCard 
            v-for="course in visibleCourses" 
            :key="course.id" 
            v-bind="course" 
          />
        </TransitionGroup>
      </div>

      <!-- Load More Button -->
      <div v-if="hasMore" class="text-center mt-16" data-aos="fade-up" border-t border-gray-100 dark:border-gray-800 pt-10>
        <button 
          @click="loadMore"
          class="px-10 py-4 bg-white dark:bg-[#1f202c] border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-primary/30 flex items-center gap-3 mx-auto group"
        >
          <span>{{ t('common.seeMore') }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <!-- No Results State -->
      <div v-if="filteredCourses.length === 0" class="text-center py-20 text-gray-500">
        {{ locale === 'ar' ? 'لا توجد كورسات في هذه الفئة حالياً.' : 'No courses found in this category.' }}
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import CourseCard from './CourseCard.vue'
import { useI18n } from '#imports'
import coursesData from '~/data/courses.json'

const { t, locale } = useI18n()

const categories = ['all', 'drawing', 'arts_crafts', 'music', 'handmade', 'workshops']
const activeCategory = ref('all')
const visibleCount = ref(3)

const filteredCourses = computed(() => {
  if (activeCategory.value === 'all') return coursesData
  return coursesData.filter(course => course.category === activeCategory.value)
})

const visibleCourses = computed(() => {
  return filteredCourses.value.slice(0, visibleCount.value)
})

const hasMore = computed(() => {
  return visibleCount.value < filteredCourses.value.length
})

const loadMore = () => {
  visibleCount.value += 3
}

// Reset visible count when category changes
watch(activeCategory, () => {
  visibleCount.value = 3
})
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>