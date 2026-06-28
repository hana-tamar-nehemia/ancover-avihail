import { siteConfig } from '../../data/site'
import { Button } from '../ui/Button'
import { phoneUrl, whatsappUrl } from '../../lib/whatsapp'
import './CtaBanner.css'

const planMessage = `${siteConfig.whatsappGreeting}\nאשמח לתאם הגנה לפרויקט שלי.\nסוג פרויקט:\nמיקום:`

export function CtaBanner() {
  return (
    <section className="cta-banner" aria-label="קריאה לפעולה">
      <div className="container">
        <div className="cta-banner__inner">
          <div className="cta-banner__icon" aria-hidden="true">⏱</div>
          <div className="cta-banner__text">
            <h2 className="cta-banner__title">כל יום בלי הגנה — זה סיכון</h2>
            <p className="cta-banner__subtitle">
              נזק לגימורים יוקרתיים עלול לגרום לעיכובים של שבועות ועלויות של עשרות אלפי שקלים.
              התחילו את תוכנית ההגנה היום.
            </p>
          </div>
          <div className="cta-banner__actions">
            <Button
              variant="primary"
              href={whatsappUrl(planMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              תאמו הגנה עכשיו
            </Button>
            <Button variant="outline-cyan" href={phoneUrl()}>
              {siteConfig.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
