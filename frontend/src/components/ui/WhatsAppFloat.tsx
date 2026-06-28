import { siteConfig } from '../../data/site'
import { whatsappUrl } from '../../lib/whatsapp'
import { WhatsAppIcon } from './WhatsAppIcon'
import './WhatsAppFloat.css'

const floatMessage = `${siteConfig.whatsappGreeting}\nאשמח ליצור קשר לגבי פתרונות הגנה.`

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(floatMessage)}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`שלח הודעת WhatsApp ל-${siteConfig.phone}`}
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
