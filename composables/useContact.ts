import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  service: 'course',
  message: ''
})

export const useContact = () => {
  const prefillForm = (service: 'course' | 'workspace' | 'other', messageText: string) => {
    form.service = service
    form.message = messageText
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return {
    form,
    prefillForm
  }
}
