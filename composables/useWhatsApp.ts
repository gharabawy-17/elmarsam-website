import { useI18n } from '#imports'

export const useWhatsApp = () => {
  const { t } = useI18n()

  const sendWhatsAppMessage = (message: string) => {
    const phoneNumber = t('contact.phone').replace(/[^\d]/g, '')
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  return {
    sendWhatsAppMessage
  }
}
