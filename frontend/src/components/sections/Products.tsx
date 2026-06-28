import { protectionProducts, productsIntro } from '../../data/products'
import { productMessage, whatsappUrl } from '../../lib/whatsapp'
import './Products.css'

export function Products() {
  return (
    <section id="services" className="section">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">{productsIntro.eyebrow}</p>
          <h2 className="section__title">{productsIntro.title}</h2>
          <p className="section__subtitle">{productsIntro.subtitle}</p>
        </header>

        <div className="products__grid">
          {protectionProducts.map((product) => (
            <a
              key={product.id}
              href={whatsappUrl(productMessage(product.title))}
              target="_blank"
              rel="noopener noreferrer"
              className="products__card"
            >
              <div className="products__image-wrap">
                <img
                  src={product.image}
                  alt={product.title}
                  className="products__image"
                  loading="lazy"
                />
              </div>
              <div className="products__body">
                <h3 className="products__title">{product.title}</h3>
                <p className="products__desc">{product.description}</p>
                <ul className="products__surfaces">
                  {product.surfaces.map((s) => (
                    <li key={s} className="products__surface-tag">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
