import { processIntro, processSteps } from '../../data/process'
import './Process.css'

export function Process() {
  return (
    <section id="process" className="section section--dark process">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">{processIntro.eyebrow}</p>
          <h2 className="section__title process__title">{processIntro.title}</h2>
          <p className="process__body">{processIntro.body}</p>
        </header>

        <div className="process__grid">
          {processSteps.map((step) => (
            <article key={step.id} className="process__card">
              <div className="process__step-header">
                <span className="process__step-num">{step.step}</span>
                <span className="process__step-timing">{step.timing}</span>
              </div>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.description}</p>
              <p className="process__step-outcome">
                <span aria-hidden="true">✓</span> {step.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
