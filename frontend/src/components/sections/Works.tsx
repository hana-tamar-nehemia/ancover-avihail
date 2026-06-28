import { useState, useCallback, useEffect } from 'react'
import { portfolioItems, portfolioIntro, PORTFOLIO_VISIBLE } from '../../data/portfolio'
import './Works.css'

function useVisibleCount() {
  const [count, setCount] = useState(PORTFOLIO_VISIBLE)

  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(max-width: 600px)').matches) setCount(1)
      else if (window.matchMedia('(max-width: 900px)').matches) setCount(2)
      else setCount(PORTFOLIO_VISIBLE)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return count
}

export function Works() {
  const visibleCount = useVisibleCount()
  const maxIndex = Math.max(0, portfolioItems.length - visibleCount)
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    setStartIndex((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  const visible = portfolioItems.slice(startIndex, startIndex + visibleCount)

  const goPrev = useCallback(() => {
    setStartIndex((prev) => Math.max(0, prev - 1))
  }, [])

  const goNext = useCallback(() => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1))
  }, [maxIndex])

  const totalPages = maxIndex + 1
  const currentPage = startIndex

  return (
    <section id="works" className="section section--alt works">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">{portfolioIntro.eyebrow}</p>
          <h2 className="section__title">{portfolioIntro.title}</h2>
          <p className="section__subtitle">{portfolioIntro.subtitle}</p>
        </header>

        <div className="works__carousel">
          <div
            className="works__track"
            style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}
          >
            {visible.map((item) => (
              <article key={item.id} className="works__card">
                <div className="works__image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="works__image"
                    loading="lazy"
                  />
                  <div className="works__card-overlay">
                    <span className="works__category">{item.category}</span>
                    <h3 className="works__card-title">{item.title}</h3>
                    <p className="works__stats">{item.stats}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="works__nav">
            <div className="works__dots" role="tablist" aria-label="דפדוף פרויקטים">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === currentPage}
                  aria-label={`עמוד ${i + 1} מתוך ${totalPages}`}
                  className={`works__dot ${i === currentPage ? 'works__dot--active' : ''}`}
                  onClick={() => setStartIndex(i)}
                />
              ))}
            </div>

            <div className="works__arrows">
              <button
                type="button"
                className="works__arrow"
                onClick={goPrev}
                disabled={startIndex === 0}
                aria-label="פרויקטים קודמים"
              >
                →
              </button>
              <button
                type="button"
                className="works__arrow"
                onClick={goNext}
                disabled={startIndex >= maxIndex}
                aria-label="פרויקטים הבאים"
              >
                ←
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
