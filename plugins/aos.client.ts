import AOS from 'aos'
import 'aos/dist/aos.css'
import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: false,
        mirror: true,
        offset: 50
      })
    })
  }

  return {
    provide: {
      aos: AOS
    }
  }
})
