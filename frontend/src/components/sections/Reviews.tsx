import { useEffect, useMemo, useState } from 'react'
import { INITIAL_REVIEWS_COUNT, MOBILE_INITIAL_REVIEWS_COUNT, reviews } from '../../data/reviews'
import { Button } from '../ui/Button'
import './Reviews.css'

export function Reviews() {
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

  const visibleReviews = useMemo(
    () => (showAll ? reviews : reviews.slice(0, initialCount)),
    [showAll, initialCount],
  )

  return (
    <section id="reviews" className="section section--dark reviews">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">ביקורות</p>
          <h2 className="section__title">מה אומרים הקבלנים</h2>
          <p className="section__subtitle">חוות דעת מקבלנים, יזמים ומנהלי פרויקטים</p>
        </header>

        <div className="reviews__grid">
          {visibleReviews.map((review) => (
            <blockquote key={review.id} className="reviews__card">
              <div className="stars" aria-label="5 כוכבים">★★★★★</div>
              <p className="reviews__text">&ldquo;{review.text}&rdquo;</p>
              <footer className="reviews__author">
                {review.author} · {review.location}
              </footer>
            </blockquote>
          ))}
        </div>

        {reviews.length > initialCount && (
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
