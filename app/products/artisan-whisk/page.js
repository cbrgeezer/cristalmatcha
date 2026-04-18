import Footer from "../../../components/Footer";
import SiteHeader from "../../../components/SiteHeader";
import { catalogProducts } from "../../../components/ritualData";
import ProductActions from "../_components/ProductActions";

const product = catalogProducts.find((p) => p.slug === "artisan-whisk");

const floatingThumb =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAOoZWiw0mgpqkuokJvZBm5Ux0rSl9-oI0rtvedtR3Z-yZl97MSu_ZfEWrB5EyRLzjb5Mm6d42Qqg21RNKRbWsrDXdsMoh7W_fYbpv2aTcpqUmNJ61Ru36UjnMLiN1pVVPdwJgPqVlNO6lySXnlEtKaINQwystVIKJ4j9H5itziWFRJuMe1M3Y9mqYNyiqHrrCGaCQgSy5ODAtiHiO1C5Bnvh9NxHQyOJWdi-7_aTTiZNR1l0-nI08hCYgaBmGNVwasXdYmzu1xK94";

const reviews = [
  {
    name: "Rosa M.",
    date: "APRIL 10, 2024",
    quote:
      "The prongs are delicate but the whisk is strong. It builds a dense, stable froth in seconds. You can feel the quality in your hand.",
  },
  {
    name: "Kenji I.",
    date: "MARCH 15, 2024",
    quote:
      "A beautifully made chasen. Cared for properly, it will last a year of daily use. The bamboo has a lovely pale sheen.",
  },
];

export const metadata = {
  title: "The Artisan Whisk",
  description:
    "Hand-carved Takayama bamboo chasen with 100 fine prongs. Built to fold air into matcha with precision. The heart of every ritual.",
  alternates: { canonical: "/products/artisan-whisk" },
  openGraph: {
    title: "The Artisan Whisk | Cristal Matcha",
    description:
      "Hand-carved Takayama bamboo chasen. 100 prongs. The heart of every ritual.",
    url: "/products/artisan-whisk",
  },
};

export default function ArtisanWhiskPage() {
  return (
    <>
      <SiteHeader active="shop" />
      <main className="product-page">
        <section className="product-hero">
          <div className="product-grid">
            <div className="product-gallery">
              <div className="product-gallery-main">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="floating-thumb">
                <img src={floatingThumb} alt="Whisking matcha in a bowl" />
              </div>
            </div>

            <div className="product-info-panel">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <a href="/shop">Shop</a>
                <span aria-hidden="true">/</span>
                <a href="/products/artisan-whisk" aria-current="page">
                  The Artisan Whisk
                </a>
              </nav>
              <h1>{product.name}</h1>
              <div className="product-price-row">
                <span className="price-highlight">{product.price}</span>
                <span>100-prong · Takayama bamboo</span>
              </div>
              <p>
                Carved from a single piece of aged bamboo by a master in
                Takayama, the historical home of the chasen. One hundred fine
                prongs, balanced to fold air into matcha without ever
                scratching the bowl.
              </p>

              <ProductActions product={product} />

              <div className="product-trust-list">
                <div>◌ Complimentary delivery on orders over £75</div>
                <div>◌ Hand-made in Takayama, Japan</div>
              </div>
            </div>
          </div>
        </section>

        <section className="tonal-band tasting-band">
          <div className="tasting-grid">
            <article>
              <div className="tasting-icon">◌</div>
              <h3>Crafted</h3>
              <p>Cut from a single stalk of aged bamboo. No glue, no joinery.</p>
            </article>
            <article>
              <div className="tasting-icon">◔</div>
              <h3>Precise</h3>
              <p>One hundred prongs, each shaped by hand for a dense froth.</p>
            </article>
            <article>
              <div className="tasting-icon">◎</div>
              <h3>Enduring</h3>
              <p>With gentle care, a whisk that quietly outlasts the season.</p>
            </article>
          </div>
        </section>

        <section className="reviews-band tonal-band">
          <div className="reviews-wrap">
            <div className="reviews-header">
              <h2>
                Shared <i>Experiences</i>
              </h2>
              <div className="stars-line" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p>4.9 based on 267 reviews</p>
            </div>
            <div className="review-list">
              {reviews.map((review) => (
                <article key={review.name} className="review-card">
                  <div className="review-top">
                    <div>
                      <h4>{review.name}</h4>
                      <p>Verified Purchase</p>
                    </div>
                    <span>{review.date}</span>
                  </div>
                  <p>{review.quote}</p>
                </article>
              ))}
            </div>
            <div className="reviews-button-wrap">
              <a href="/#reviews" className="link-button">
                Read all reviews
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="detail" />
    </>
  );
}
