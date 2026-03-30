<template>
  <section id="courses" class="py-24 bg-gray-50 dark:bg-[#161722]">
    <div class="container mx-auto px-5">

      <div class="text-center mb-14">
        <h4 class="text-[#d4a373] font-bold uppercase tracking-widest mb-3">تعلم معنا</h4>
        <h2 class="text-4xl font-extrabold mb-4">اكتشف مواهبك ومهاراتك</h2>
        <p class="text-gray-500 max-w-xl mx-auto">
          نقدم مجموعة مختارة من الدورات الفنية والموسيقية تناسب جميع المستويات، تحت إشراف نخبة من المحترفين.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <CourseCard v-for="course in courses" :key="course.title" v-bind="course" />
      </div>

    </div>
  </section>
</template>

<script setup>
import CourseCard from './CourseCard.vue'

const courses = [
  {
    image: 'https://i.pinimg.com/1200x/b1/ce/a8/b1cea80291897e2898ec130ce60d7738.jpg',
    tag: 'فنون بصرية',
    title: 'دورات ومبادئ الرسم',
    description: 'تعلم أساسيات الرسم والتلوين (رصاص، فحم، زيتي، وألوان مائية) في دورات متخصصة تؤسسك كفنان محترف.',
    level: 'مبتدئ إلى متقدم',
    duration: 'شهر واحد (8 حصص)',
  },
  {
    image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=2070&auto=format&fit=crop',
    tag: 'موسيقى',
    title: 'دروس العزف على البيانو',
    description: 'اكتشف شغفك الموسيقي من خلال جلسات فردية أو جماعية تركز على قراءة النوتة والمقاطع الكلاسيكية والمعاصرة.',
    level: 'جميع المستويات',
    duration: 'حسب الباقة المرادة',
  },
]
</script>