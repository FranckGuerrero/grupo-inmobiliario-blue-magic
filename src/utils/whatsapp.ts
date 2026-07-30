import { siteConfig } from '@data/site';

export function buildWhatsAppUrl(message?: string): string {
  const cleanMessage = message?.trim() || siteConfig.whatsappBaseMessage;
  return `https://wa.me/${siteConfig.phoneWhatsApp}?text=${encodeURIComponent(cleanMessage)}`;
}

export function propertyWhatsAppMessage(code: string, propertyTitle: string, district: string): string {
  return `Hola, deseo información sobre la propiedad ${code}: ${propertyTitle}, ubicada referencialmente en ${district}. ¿Continúa disponible?`;
}
