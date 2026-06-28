import { works, worksIntro } from '../../data/works'
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider'
import './Works.css'

export function Works() {
  return (
    <section id="works" className="section">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">פרויקטים</h2>
          <p className="section__subtitle">{worksIntro}</p>
        </header>

        <div className="works__grid">
          {works.map((work) => (
            <article key={work.id} className="works__card card">
              <div className="works__image-wrap">
                <BeforeAfterSlider
                  beforeImage={work.beforeImage}
                  afterImage={work.afterImage}
                  beforeLabel="לפני הגנה"
                  afterLabel="אחרי הגנה"
                  alt={work.title}
                />
              </div>
              <div className="works__body">
                <h3 className="works__title">{work.title}</h3>
                <p className="works__description">{work.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
