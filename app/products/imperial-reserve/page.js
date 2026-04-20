import Footer from "../../../components/Footer";
import SiteHeader from "../../../components/SiteHeader";
import { catalogProducts } from "../../../components/ritualData";
import ProductActions from "../_components/ProductActions";

const product = catalogProducts.find((p) => p.slug === "imperial-reserve");

const floatingThumb =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBSPN__6NuPFyeTfVhkMJkTIwOWb11XDdxpBaTSHwrLNqx2H2tvecYoV3KhuRMJrh0-GYy0oLj-kzPoGFVN4Au7-1Jp05UcMMlP4niF8tjpWdTzGPluZb4_SJGLhGvFMrQWH6TuB5waPPnZmnkfcC-RysZ1U68BfvtRw5zLavU1VmsnHc9DeEeWGffXgSgpBXwhiHNghIizKWrNhcfD4LFLSNJFG_FloIi93TZaeAxXVbb-1e8wckaDyWZySOaHagnbQ5GzYsMwPLY";

const ritualSteps = [
  {
    step: "01",
    title: "SIFT",
    text: "Sift 1 tsp of matcha into a warmed bowl. With Imperial Reserve, less is more.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTdYyPaqXKun7O-lYPqq9GxA5ly2H78VGpSqve-ZxgpJ9C8jfPqF8RVv-q8aHZaRO_L1mDx0ThpYz5ExoHn3tL4dHKzIzFWlfQgdoAIywTIqTFcn-IbVDLH3Qz5cT2T0THodRIoV418yQhNkJObP0AGfzQHn6hrFFwW3vMeSe1fzGIM2azqggTEz66XdhJOqaSnRMg3jkDY-kly9jX6mTwGRoN3mLDbA6R0znwQidZp4KykPmtyx6tnH5ch3GiBhbztlyANm3prkg",
  },
  {
    step: "02",
    title: "POUR",
    text: "Add 1.5oz of soft water at 170°F. A cooler pour preserves the subtlety.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDC6u8RwaUS8cYaUPSADVZJ_wDwilA8_llNGNFSTZ9YvbSdh7mB2dP52sH66GtFCbBvLJXrgLxa3VEurs09vsWvRvb-jA2QjKp-fMVREucyWKcfQ5KppHdHZVYlUM4UyzPcg9ZKAg52T4VVmFbtrWkrVRFR9E0n2ZZNUbW7o_TdO2qirpyj8VVEy9d76euzAmpUxhsYI6AoQQm4erAwuYC0xut0UTyT5ggKiAwwRl-K1npF_3VCms44tVAaK_HQuxYvHkUWTuyhvJw",
    offset: true,
  },
  {
    step: "03",
    title: "WHISK",
    text: "Whisk slowly in 'W' motions — this grade deserves unhurried hands.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOoZWiw0mgpqkuokJvZBm5Ux0rSl9-oI0rtvedtR3Z-yZl97MSu_ZfEWrB5EyRLzjb5Mm6d42Qqg21RNKRbWsrDXdsMoh7W_fYbpv2aTcpqUmNJ61Ru36UjnMLiN1pVVPdwJgPqVlNO6lySXnlEtKaINQwystVIKJ4j9H5itziWFRJuMe1M3Y9mqYNyiqHrrCGaCQgSy5ODAtiHiO1C5Bnvh9NxHQyOJWdi-7_aTTiZNR1l0-nI08hCYgaBmGNVwasXdYmzu1xK94",
  },
  {
    step: "04",
    title: "CONTEMPLATE",
    text: "Sit. Breathe. Sip slowly. Imperial Reserve rewards those who pause.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrkf1e2C_4l0ca9OOJerx1uo4FEI49D-GPCP4jC4G00VN_S8QKqXMRe3b-XCSBx8nUnN3neB3G6Og-MvRuAwJORiOd1zjJSFC9zIum_sAOtvZFcJ20KIY4ENRGsF6QMIR2Ww2y9Sina_wFan0I2d_Ush0d3s5Dw4_lLCDJuJziebzyMWqRh1Wz0mOUQKAUvk6dkxu4uy9x0uQZ2cZQcYoAmloBlsUWJmlIE9kS7yex73hOi8wGH1rDMd77kGtBcKl630lxjDC-zIA",
    offset: true,
  },
];

const reviews = [
  {
    name: "Amelia W.",
    date: "APRIL 03, 2024",
    quote:
      "The depth is extraordinary. A quiet umami that unfolds for minutes after the last sip. This is what I've been chasing.",
  },
  {
    name: "David C.",
    date: "MARCH 20, 2024",
    quote:
      "Silken isn't a word I use lightly — but this is silken. A proper connoisseur's matcha. Worth the price and then some.",
  },
];

export const metadata = {
  title: "Imperial Reserve",
  description:
    "Our rarest ceremonial matcha. Silken umami, deep complexity, a long contemplative finish. Single origin, 20g, limited pressing.",
  alternates: { canonical: "/products/imperial-reserve" },
  openGraph: {
    title: "Imperial Reserve | Cristal Matcha",
    description:
      "Our rarest ceremonial matcha. Silken umami, deep complexity, limited pressing.",
    url: "/products/imperial-reserve",
  },
};

export default function ImperialReservePage() {
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
                <img src={floatingThumb} alt="Matcha preparation with whisk" />
              </div>
            </div>

            <div className="product-info-panel">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <a href="/shop">Shop</a>
                <span aria-hidden="true">/</span>
                <a href="/products/imperial-reserve" aria-current="page">
                  Imperial Reserve
                </a>
              </nav>
              <h1>{product.name}</h1>
              <div className="product-price-row">
                <span className="price-highlight">{product.price}</span>
                <span>20g / 0.70 oz · Limited Pressing</span>
              </div>
              <p>
                The pinnacle of our collection. A single-origin, first-harvest
                matcha reserved for the most considered moments. Silken,
                savoury, quietly complex — a cup for the connoisseur.
              </p>

              <ProductActions product={product} />

              <div className="product-trust-list">
                <div>◌ Complimentary delivery on orders over £75</div>
                <div>◌ Limited edition — numbered release</div>
              </div>
            </div>
          </div>
        </section>

        <section className="tonal-band tasting-band">
          <div className="tasting-grid">
            <article>
              <div className="tasting-icon">◌</div>
              <h3>Silken</h3>
              <p>An impossibly smooth texture — weightless on the tongue.</p>
            </article>
            <article>
              <div className="tasting-icon">◔</div>
              <h3>Deep Umami</h3>
              <p>Kombu, porcini, and a savoury base that anchors the cup.</p>
            </article>
            <article>
              <div className="tasting-icon">◎</div>
              <h3>Complex</h3>
              <p>Layered notes that shift over minutes — a meditative finish.</p>
            </article>
          </div>
        </section>

        <section className="ritual-section">
          <div className="section-split prep-header">
            <h2>The Considered Ritual</h2>
            <span className="eyebrow subtle">Guide to Perfection</span>
          </div>
          <div className="prep-grid">
            {ritualSteps.map((step) => (
              <article
                key={step.step}
                className={`prep-card ${step.offset ? "prep-offset" : ""}`}
              >
                <div className="prep-image">
                  <img src={step.image} alt={step.title} loading="lazy" />
                </div>
                <div className="prep-copy">
                  <span>{step.step}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              </article>
            ))}
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
              <p>5.0 based on 184 reviews</p>
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
