import { siteConfig } from '../data/site'

/** בונה קישור WhatsApp עם הודעה מקודדת */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(message)}`
}

/** הודעה מוכנה לפי שם פתרון / מוצר */
export function serviceMessage(serviceName: string): string {
  return `${siteConfig.whatsappGreeting}\nאני מעוניין/ת בפתרון ${serviceName} ואשמח לקבל הצעת מחיר.\nסוג פרויקט:\nמיקום:`
}

export function productMessage(productName: string): string {
  return serviceMessage(productName)
}

export function phoneUrl(): string {
  return `tel:+${siteConfig.phoneRaw}`
}
