import { navItems, siteConfig, footerStats, serviceAreas } from '../../data/site'
import './Footer.css'

const productLinks = [
  'הגנת דלתות',
  'הגנת חלונות',
  'הגנת ריצוף',
  'הגנת לובי',
  'הגנה חיצונית',
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <img src={siteConfig.logo} alt={siteConfig.businessName} width={36} height={36} />
            <span>
              <span className="footer__logo-name">{siteConfig.headerBrand}</span>
              <span className="footer__logo-sub">{siteConfig.headerSubbrand}</span>
            </span>
          </a>
          <p className="footer__desc">{siteConfig.description}</p>
          <div className="footer__contact">
            <a href={`tel:+${siteConfig.phoneRaw}`}>{siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">שירותים</h3>
          <ul>
            {productLinks.map((link) => (
              <li key={link}>
                <a href="#services">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">חברה</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">אזורי שירות</h3>
          <ul>
            {serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer__stats">
          {footerStats.map((stat) => (
            <span key={stat} className="footer__stat-pill">{stat}</span>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} כל הזכויות שמורות ל-tamar nehemia</p>
          <p>{serviceAreas.join(' · ')}</p>
        </div>
      </div>
    </footer>
  )
}
