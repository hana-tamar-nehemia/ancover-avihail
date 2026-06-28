import { riskSection, riskStats } from '../../data/risk'
import { siteConfig } from '../../data/site'
import { Button } from '../ui/Button'
import { phoneUrl } from '../../lib/whatsapp'
import './Risk.css'

export function Risk() {
  return (
    <section className="section risk">
      <div className="container">
        <div className="risk__layout">
          <div className="risk__content">
            <p className="section__eyebrow">{riskSection.eyebrow}</p>
            <h2 className="risk__title">{riskSection.title}</h2>
            <p className="risk__lead">{riskSection.lead}</p>
            <p className="risk__body">{riskSection.body}</p>
            <div className="risk__actions">
              <Button variant="primary" href="#products">
                לכל המוצרים
              </Button>
              <Button variant="outline-cyan" href={phoneUrl()}>
                {siteConfig.phone}
              </Button>
            </div>
          </div>

          <div className="risk__card">
            <h3 className="risk__card-title">{riskSection.cardTitle}</h3>
            <ul className="risk__stats">
              {riskStats.map((stat) => (
                <li key={stat.id} className="risk__stat">
                  <span className="risk__stat-icon" aria-hidden="true">⚠</span>
                  <div className="risk__stat-content">
                    <span className="risk__stat-name">{stat.title}</span>
                    <span className="risk__stat-value">{stat.value}</span>
                    <span className="risk__stat-desc">{stat.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
