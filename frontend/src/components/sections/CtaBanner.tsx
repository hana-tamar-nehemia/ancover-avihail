import { siteConfig } from '../../data/site'
import { Button } from '../ui/Button'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'
import { phoneUrl, whatsappUrl } from '../../lib/whatsapp'
import './CtaBanner.css'

const message = `${siteConfig.whatsappGreeting}\nאשמח לקבל הצעת מחיר לפתרונות הגנה בפרויקט.`

export function CtaBanner() {
  return (
    <section className="cta-banner" aria-label="קריאה לפעולה">
      <div className="container cta-banner__inner">
        <div className="cta-banner__text">
          <h2 className="cta-banner__title">מגינים על הפרויקט שלכם</h2>
          <p className="cta-banner__subtitle">
            שלחו פרטי פרויקט ב-WhatsApp או התקשרו — נחזור עם הצעת מחיר
          </p>
        </div>
        <div className="cta-banner__actions">
          <Button
            variant="lime"
            href={whatsappUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={20} />
            WhatsApp
          </Button>
          <Button variant="outline-light" href={phoneUrl()}>
            📞 {siteConfig.phone}
          </Button>
        </div>
      </div>
    </section>
  )
}
