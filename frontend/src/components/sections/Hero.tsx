import { siteConfig } from '../../data/site'
import { Button } from '../ui/Button'
import { phoneUrl, whatsappUrl } from '../../lib/whatsapp'
import './Hero.css'

const planMessage = `${siteConfig.whatsappGreeting}\nאשמח לבנות תוכנית הגנה לפרויקט שלי.\nסוג פרויקט:\nמיקום:`

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img
          src="/images/hero-bg.svg"
          alt=""
          className="hero__bg-img"
          aria-hidden="true"
        />
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{siteConfig.heroEyebrow}</p>

          <h1 className="hero__title">
            {siteConfig.heroHeadline}
            <span className="hero__title-accent">{siteConfig.heroHeadlineAccent}</span>
          </h1>

          <p className="hero__subline">{siteConfig.heroSubline}</p>
          <p className="hero__tagline">{siteConfig.heroTagline}</p>

          <div className="hero__actions">
            <div className="hero__cta-group">
              <Button
                variant="primary"
                href={whatsappUrl(planMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__cta-btn"
              >
                {siteConfig.ctaPlanLabel}
              </Button>
              <span className="hero__cta-hint">{siteConfig.ctaPlanHint}</span>
            </div>

            <div className="hero__contact">
              <span className="hero__contact-label">עבדו איתנו</span>
              <a href={phoneUrl()} className="hero__contact-phone">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hero__contact-email">
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
