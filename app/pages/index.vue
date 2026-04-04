<template>
   <div>
    <HeroSection />
    <div data-aos="fade-up">
      <AboutSection />
    </div>
    <div data-aos="fade-up" data-aos-delay="100">
      <CoursesSection />
    </div>
    <div data-aos="fade-up" data-aos-delay="200">
      <ProductsSection />
    </div>
    <div data-aos="fade-up">
      <WorkspaceSection />
    </div>
    <div data-aos="zoom-in">
      <GallerySection />
    </div>
    <div data-aos="fade-up">
      <TestimonialsSection />
    </div>
    <div data-aos="slide-up">
      <ContactSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n, useSeoMeta } from '#imports'
import HeroSection from '../../components/home/Hero/HeroSection.vue'
import AboutSection from '../../components/home/About/AboutSection.vue'
import CoursesSection from '../../components/home/Courses/CoursesSection.vue'
import ProductsSection from '../../components/home/Products/ProductsSection.vue'
import WorkspaceSection from '../../components/home/Workspace/WorkspaceSection.vue'
import GallerySection from '../../components/home/Gallery/GallerySection.vue'
import TestimonialsSection from '../../components/home/Testimonials/TestimonialsSection.vue'
import ContactSection from '../../components/home/Contact/ContactSection.vue' 

const { t } = useI18n()

useSeoMeta({
  title: t('pageTitle'),
  ogTitle: t('pageTitle'),
  description: t('meta.description'),
  ogDescription: t('meta.description'),
  ogImage: '/img/hero.avif',
  twitterCard: 'summary_large_image',
})
</script>