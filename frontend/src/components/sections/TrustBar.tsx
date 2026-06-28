import { trustBarItems } from '../../data/site'
import './TrustBar.css'

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="לקוחות ושותפים">
      <div className="container trust-bar__inner">
        <span className="trust-bar__label">עובדים עם:</span>
        <span className="trust-bar__items">{trustBarItems.join(' · ')}</span>
      </div>
    </section>
  )
}
