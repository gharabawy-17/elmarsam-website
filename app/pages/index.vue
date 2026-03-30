<template>
   <div>
    <HeroSection />
    <AboutSection />
    <CoursesSection />
    <WorkspaceSection />
    <GallerySection />
    <TestimonialsSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  service: 'course',
  message: ''
})
import HeroSection from '../../components/home/Hero/HeroSection.vue'
import AboutSection from '../../components/home/About/AboutSection.vue'
import CoursesSection from '../../components/home/Courses/CoursesSection.vue'
import WorkspaceSection from '../../components/home/Workspace/WorkspaceSection.vue'
import GallerySection from '../../components/home/Gallery/GallerySection.vue'
import TestimonialsSection from '../../components/home/Testimonials/TestimonialsSection.vue'
import ContactSection from '../../components/home/Contact/ContactSection.vue' 

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = { name: '', email: '', service: 'course', message: '' }
}
</script>