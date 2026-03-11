// Simple utility function to handle WhatsApp enquiries
export const openWhatsApp = (
  phoneNumber: string, 
  whatsappMessage: string
) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, '_blank');
};