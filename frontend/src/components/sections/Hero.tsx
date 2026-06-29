import { siteConfig } from '../../data/site'
import { Button } from '../ui/Button'
import { PhoneIcon } from '../ui/PhoneIcon'
import { WhatsAppIcon } from '../ui/WhatsAppIcon'
import { phoneUrl, whatsappUrl } from '../../lib/whatsapp'
import './Hero.css'

const planMessage = `${siteConfig.whatsappGreeting}\nאשמח לבנות תוכנית הגנה לפרויקט שלי.\nסוג פרויקט:\nמיקום:`

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img
          src={siteConfig.heroImage}
          alt=""
          className="hero__bg-img hero__bg-img--desktop"
          aria-hidden="true"
        />
        <img
          src={siteConfig.heroImageMobile}
          alt=""
          className="hero__bg-img hero__bg-img--mobile"
          aria-hidden="true"
        />
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            {siteConfig.heroHeadline}
            <span className="hero__title-accent">{siteConfig.heroHeadlineAccent}</span>
          </h1>

          <p className="hero__subline">{siteConfig.heroSubline}</p>

          <div className="hero__actions">
            <div className="hero__cta-group">
              <Button
                variant="primary"
                href={whatsappUrl(planMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__cta-btn"
              >
                <WhatsAppIcon size={18} />
                {siteConfig.ctaPlanLabel}
              </Button>
            </div>

            <div className="hero__contact">
              <a href={phoneUrl()} className="hero__contact-box hero__contact-box--phone">
                <PhoneIcon size={18} />
                <span className="hero__contact-phone">{siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
