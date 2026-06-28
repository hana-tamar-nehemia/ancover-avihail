import { useEffect, useMemo, useState } from 'react'
import {
  INITIAL_REVIEWS_COUNT,
  MOBILE_INITIAL_REVIEWS_COUNT,
  reviewCategories,
  reviews,
  type ReviewCategory,
} from '../../data/reviews'
import { Button } from '../ui/Button'
import './Reviews.css'

type FilterValue = 'all' | ReviewCategory

export function Reviews() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 600px)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 600px)')
    const onChange = () => setIsMobile(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const initialCount = isMobile ? MOBILE_INITIAL_REVIEWS_COUNT : INITIAL_REVIEWS_COUNT

  const filteredReviews = useMemo(() => {
    if (activeFilter === 'all') {
      return showAll ? reviews : reviews.slice(0, initialCount)
    }
    return reviews.filter((review) => review.categories.includes(activeFilter))
  }, [activeFilter, showAll, initialCount])

  return (
    <section id="reviews" className="section section--dark reviews">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">ביקורות</p>
          <h2 className="section__title">מה אומרים הקבלנים</h2>
          <p className="section__subtitle">חוות דעת מקבלנים, יזמים ומנהלי פרויקטים</p>
        </header>

        <div className="reviews__categories" role="tablist" aria-label="סינון ביקורות">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            className={`reviews__filter ${activeFilter === 'all' ? 'reviews__filter--active' : ''}`}
            onClick={() => { setActiveFilter('all'); setShowAll(false) }}
          >
            הכל
          </button>
          {reviewCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeFilter === cat}
              className={`reviews__filter ${activeFilter === cat ? 'reviews__filter--active' : ''}`}
              onClick={() => { setActiveFilter(cat); setShowAll(false) }}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredReviews.length > 0 ? (
          <div className="reviews__grid">
            {filteredReviews.map((review) => (
              <blockquote key={review.id} className="reviews__card">
                <div className="stars" aria-label="5 כוכבים">★★★★★</div>
                <p className="reviews__text">&ldquo;{review.text}&rdquo;</p>
                <footer className="reviews__author">
                  {review.author} · {review.location}
                </footer>
                {review.categories[0] && (
                  <span className="reviews__tag">{review.categories[0]}</span>
                )}
              </blockquote>
            ))}
          </div>
        ) : (
          <p className="reviews__empty">אין ביקורות בקטגוריה זו כרגע.</p>
        )}

        {activeFilter === 'all' && reviews.length > initialCount && (
          <div className="reviews__toggle">
            <Button variant="outline-cyan" onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? 'הצג פחות' : 'הצג את כל הביקורות'}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
