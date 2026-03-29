# Cristal Matcha — Status Projektu

## Live
- **cristalmatcha.com** — produkcja (Vercel)
- **GitHub:** github.com/cbrgeezer/cristalmatcha2
- **Stack:** Next.js 15.3 · React 18 · JavaScript · Vercel

---

## Co jest gotowe

### Strony
- [x] **Landing page** (`/`) — poziomy scroll (horizontal), 6 paneli: Brand, Hero, Produkty, Story, Reviews, Newsletter
- [x] **Shop** (`/shop`) — katalog produktów z filtrowaniem po typie i pochodzeniu
- [x] **Cart** (`/cart`) — koszyk z zarządzaniem ilościami, podsumowanie zamówienia
- [x] **Produkt** (`/products/ceremonial-grade`) — szczegółowa strona produktu z sekcją rituału, degustacji i recenzji

### Funkcjonalność
- [x] Koszyk — dodawanie, usuwanie, zmiana ilości (React Context, localStorage)
- [x] Filtrowanie produktów w sklepie (grade, origin)
- [x] Formularz newslettera (mock — bez backendu)
- [x] Responsywność mobilna — hamburger menu, poziomy scroll wyłączony na mobile
- [x] Favicon (szklanka matchy)
- [x] SEO metadata na każdej stronie
- [x] Domena cristalmatcha.com podłączona do Vercel
- [x] British English w całej aplikacji

### Design
- [x] Ciemny luksusowy motyw (inspirowany Taittingerem)
- [x] Typografia: Cormorant Garamond (serif) + Montserrat (sans)
- [x] Panel brand — CRISTAL MATCHA wycentrowany między eyebrow a location
- [x] Hover efekty na linkach (strzałka + przejście na Cormorant)
- [x] Sekcja tasting notes, ritual steps, reviews na stronie produktu

---

## Co jeszcze trzeba zrobić

### Priorytet wysoki
- [ ] **Pozostałe strony produktów** — są tylko dane dla `ceremonial-grade`, brakuje osobnych stron dla: Morning Ritual, Heritage Harvest, Imperial Reserve, Artisan Whisk, Essentials Kit. Każdy produkt w katalogu powinien linkować do swojej strony.
- [ ] **Płatności** — integracja Stripe (koszyk istnieje ale nie można zapłacić)
- [ ] **Newsletter backend** — podłączenie formularza do Mailchimp / Klaviyo / innego
- [ ] **Checkout flow** — strona zamówienia, adres dostawy, potwierdzenie

### Priorytet średni
- [ ] **cristalmatcha.co.uk** — domena .co.uk była na starym projekcie, trzeba ją przenieść tak samo jak .com (lub przekierować na .com)
- [ ] **Strona "Our Story"** — link w menu istnieje ale prowadzi do sekcji `#story` na landing page, rozważyć osobną podstronę `/story`
- [ ] **404 strona** — brak custom error page
- [ ] **Lazy loading obrazów** — produkty na landing page nie mają `loading="lazy"`
- [ ] **OG Image** — brak social share image (Open Graph)

### Priorytet niski
- [ ] **Animacje** — scroll-triggered animations przy wejściu w sekcje
- [ ] **Wyszukiwarka** w sklepie
- [ ] **Recenzje** — prawdziwe recenzje zamiast mockowanych danych
- [ ] **Internacjonalizacja** — ceny w PLN / EUR obok GBP

---

## Struktura projektu (skrót)

```
app/
  page.js                          # Landing page (horizontal scroll)
  HomeHorizontal.jsx               # Komponent landing page
  HPageWrapper.jsx                 # Wrapper poziomego scrolla
  shop/page.js + ShopClient.jsx    # Katalog
  cart/page.js + CartClient.jsx    # Koszyk
  products/ceremonial-grade/       # Jedyna gotowa strona produktu
  context/CartContext.js           # Stan koszyka (localStorage)
components/
  ritualData.js                    # Dane produktów (landingProducts, catalogProducts)
  SiteHeader.jsx                   # Nawigacja dla podstron
  Footer.jsx
```
