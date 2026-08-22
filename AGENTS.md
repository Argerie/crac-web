# AGENTS.md — Costa Rica Animal Rescue Center

> Instrucciones y observaciones del proyecto para agentes de código (opencode).
> Este documento es la fuente de verdad: leerlo antes de cualquier cambio.

## 1. Project Overview

**Nombre:** Costa Rica Animal Rescue Center (CRARC)

**Visión:** Rescatar y rehabilitar fauna silvestre en estado de vulnerabilidad en Costa Rica. El sitio debe mostrar la organización, sus animales rescatados e información clave para visitar el centro — funciona como vitrina institucional Y como página de destino turístico.

**Objetivo principal:** Convertir tráfico en 3 acciones: (1) reservar/planear visita al centro, (2) donar, (3) conocer los animales y la causa lo suficiente para compartir/recordar la marca.

**Audiencia objetivo:**

- **Turistas extranjeros** (planeando viaje a Costa Rica): necesitan info práctica en inglés — ubicación, horarios, cómo llegar, qué esperar.
- **Público nacional (tico)**: familias buscando actividad de fin de semana, escuelas, donadores locales.
- **Curiosos de redes sociales:** llegan por contenido de animales, conversión secundaria a seguir/compartir.

**Idioma:** Sitio bilingüe ES/EN con selector visible en nav — no negociable dado el peso del turismo extranjero.

**Valor diferencial:** No ser "una página más de ONG" — debe sentirse viva, visual, casi como un sitio de aventura/eco-turismo. Se logra con fotografía/video de gran formato, microinteracciones llamativas (no genéricas), y un tono editorial en vez de institucional. La competencia local usa plantillas estáticas y aburridas; CRARC gana por experiencia.

---

## 2. Design System

### Color Palette

| Nombre | Hex | Uso |
| --- | --- | --- |
| `jungle-900` | `#0D2B1F` | Texto principal, nav, footer — base "selva profunda" |
| `leaf-500` | `#2F9E44` | Color primario de marca, botones secundarios |
| `toucan-400` | `#FF6B35` | CTA primario (visitar/donar) — naranja tropical, alto impacto visual |
| `macaw-300` | `#FFC93C` | Acentos, hover states, badges — amarillo guacamayo |
| `river-200` | `#CFF2E0` | Fondos suaves de sección, alterna con blanco |
| `mist-50` | `#FAFBF6` | Fondo base (blanco cálido, no clínico) |

**Regla de uso:** `toucan-400` y `macaw-300` juntos evocan la fauna local (tucán, guacamayo) — se usan como pareja de acento en botones/badges, nunca como fondo grande (saturan). Máximo 2 acentos vivos visibles por viewport.

### Typography

- **Display** (headlines, nombres de secciones): `Clash Display` (o `Fraunces` como fallback Google Fonts) — geométrica con carácter, moderna, evita el look "folclórico" cliché de sitios de turismo tropical.
- **Body:** `Inter` — legibilidad alta en ES/EN, neutral.
- **Utility** (labels, horarios, tags de especie, nav bilingüe): `Space Mono` — refuerza sensación de "bitácora de campo/expedición".

```css
--font-display: 'Clash Display', 'Fraunces', serif;
--font-body: 'Inter', sans-serif;
--font-utility: 'Space Mono', monospace;
```

### Layout Principles

Imágenes/video full-bleed en Hero y Gallery, secciones alternan fondo `mist-50`/`river-200` para ritmo visual. Grid 12 columnas desktop, stack mobile. Contenido en `max-w-7xl`, excepto Hero y Carousel (full-bleed). Prosa corta, mucho espacio negativo — el sitio respira para no sentirse "cargado" como competidores.

```text
┌───────────────────────────────────────────┐
│ NAV (sticky, ES/EN toggle, transparente→   │
│      sólido on scroll)                     │
├───────────────────────────────────────────┤
│                                             │
│   HERO — video/imagen full-bleed           │
│   headline + subcopy + CTA doble           │
│   (Visítanos / Dona)                       │
│                                             │
├───────────────────────────────────────────┤
│  MISSION STATEMENT (texto grande,          │
│      centrado, fondo river-200)            │
├──────────┬──────────┬──────────┬──────────┤
│  TEAM    │  TEAM    │  TEAM    │  TEAM    │
├───────────────────────────────────────────┤
│  IMAGE/VIDEO CAROUSEL (full-bleed,         │
│      drag-scroll horizontal)               │
├───────────────────────────────────────────┤
│  ANIMAL PROFILES — grid 3-4 col            │
│      hover revela ficha completa           │
├───────────────────────────────────────────┤
│  TESTIMONIAL CAROUSEL (visitantes reales)  │
├───────────────────┬────────────────────────┤
│  VOLUNTEER/VISIT   │   DONATION WIDGET      │
│  FORM              │                        │
├───────────────────────────────────────────┤
│  FAQ (accordion — horarios, cómo llegar,   │
│      precios, qué llevar)                  │
├───────────────────────────────────────────┤
│  FOOTER (mapa embed, redes, newsletter,    │
│      ES/EN)                                │
└───────────────────────────────────────────┘
```

### Signature Element

**"Field Log" Animal Card:** cada animal se presenta como una entrada de bitácora de campo — foto grande, sello circular tipo estampa de pasaporte con la fecha/estado de rescate (`Space Mono`), y al hover la tarjeta se "voltea" (flip 3D con Framer Motion) revelando la historia. El sello estampado es el elemento gráfico repetible que aparece también en badges de FAQ y footer — genera identidad de marca reconocible y memorable, cumpliendo el objetivo de "no ser aburrido".

### Motion Strategy

- **Hero:** video/imagen con leve zoom-out automático al cargar (Ken Burns sutil) + parallax al scroll.
- **Animal cards:** flip 3D on hover/tap (`rotateY`), stagger fade-up al entrar en viewport.
- **Nav:** transición de transparente a sólido con blur backdrop al hacer scroll >80px.
- **Carousels:** drag-to-scroll con inercia, autoplay pausado on-hover/touch.
- **CTA:** scale 1.05 + shadow-lift, color `toucan-400` pulsa levemente (una sola vez, on-mount) para atraer atención al cargar la página — refuerza el "no aburrido" sin ser molesto en scroll repetido.
- **Regla general:** cada animación existe para dirigir atención o revelar info, nunca solo decorativa.

---

## 3. Architecture

- **Stack:** React 18 + TypeScript + Tailwind CSS + Framer Motion
- **Bundler:** Vite
- **i18n:** `react-i18next` (ES/EN)
- **Deployment:** Vercel (preview deployments por PR)
- **Storage:** JSON files en `/src/data/` (Fase 1–3); migrar a CMS headless (Sanity) en Fase 4 si el volumen de animales/blog crece.
- **Integraciones:**
  - **Analytics:** Vercel Analytics o Plausible
  - **Forms:** Formspree/Resend (visita/voluntariado)
  - **Payments:** Stripe Checkout (donación única + recurrente, USD y CRC)
  - **Mapa:** Google Maps embed (cómo llegar)

---

## 4. Page Components

| Componente | Función |
| --- | --- |
| `HeroSection` | Video/imagen full-bleed de un rescate real, headline bilingüe, CTA doble "Visítanos" / "Dona" |
| `MissionStatement` | 2-3 líneas grandes, fondo de color, pausa visual post-Hero |
| `TeamCardsSection` | Sub-equipos (Rescate, Veterinaria, Educación, Voluntariado) con foto y rol |
| `ImageCarouselGallery` | Fotos/clips del centro y del proceso de rescate, scroll horizontal |
| `AnimalProfiles` | Grid de `FieldLogCard` — especie, fecha rescate, estado, historia on-flip |
| `FAQSection` | Accordion: horarios, ubicación, precios, qué llevar, apto para niños |
| `TestimonialCarousel` | Reseñas de visitantes reales (foto + país de origen) |
| `VolunteerFormSection` | Form corto: nombre, email, tipo de interés (visitar/voluntariado/donar) |
| `DonationWidget` | Selector de monto, toggle único/mensual, Stripe, USD/CRC |
| `Footer` | Mapa embed, horario, redes, newsletter, selector ES/EN |

---

## 5. Content Structure

**Orden:** Hero → Mission → Teams → Gallery → Animal Profiles → Testimonials → Visit/Volunteer + Donation → FAQ → Footer.

**Copywriting guidelines:** Tono editorial/aventura, no institucional — segunda persona ("Ven a conocer a..."), datos concretos ("35 especies rehabilitadas"), frases cortas. Todo copy en ES y EN, mismo tono en ambos (no traducción literal robótica).

**Media strategy:** Fotografía y video reales del centro, formato WebP/MP4 comprimido, lazy-load, sin stock genérico — es clave para el diferenciador "no aburrido".

**CTAs explícitos:**

- Hero → "Visítanos" / "Dona ahora"
- Animal Profiles → "Conoce la historia de [nombre]"
- Visit form → "Reserva tu visita"
- Footer → "Síguenos" + newsletter

---

## 6. File Structure

```text
crarc-web/
├── AGENTS.md
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── package.json
├── public/
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── i18n/
│   │   ├── es.json
│   │   └── en.json
│   ├── data/
│   │   ├── animals.json
│   │   ├── team.json
│   │   └── testimonials.json
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── MissionStatement.tsx
│   │   │   ├── TeamCardsSection.tsx
│   │   │   ├── ImageCarouselGallery.tsx
│   │   │   ├── AnimalProfiles.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── TestimonialCarousel.tsx
│   │   │   ├── VolunteerFormSection.tsx
│   │   │   └── DonationWidget.tsx
│   │   └── ui/
│   │       ├── FieldLogCard.tsx
│   │       ├── Button.tsx
│   │       └── Accordion.tsx
│   ├── hooks/
│   │   └── useInView.ts
│   ├── lib/
│   │   ├── stripe.ts
│   │   └── analytics.ts
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       └── index.ts
└── tests/
    └── components/
```

---

## 7. Design Decisions

- **Colores:** verde selva + naranja/amarillo tropical (`toucan-400`, `macaw-300`) referencian directamente la fauna de Costa Rica (tucanes, guacamayos) en vez de la paleta azul-genérica de ONGs — conexión inmediata con "vida silvestre costarricense" reconocible tanto por turistas como locales.
- **Tipografía:** `Clash Display` da un look moderno/editorial que evita el cliché "tropical folclórico" (fuentes con hojas/curvas exageradas) que usa la competencia local — se ve más como marca de aventura premium que como ONG tradicional.
- **Diferenciadores vs. competencia (sitios de refugio genéricos):** (1) bilingüe real desde el diseño, no plugin de traducción; (2) video full-bleed en vez de solo fotos estáticas; (3) `FieldLogCard` con flip 3D — ningún competidor local tiene una interacción de este nivel; (4) tono editorial/aventura en vez de institucional, directamente ligado al objetivo del cliente de "no ser aburrido".

---

## 8. Implementation Roadmap

- **Fase 1 — Core pages:** Hero, MissionStatement, TeamCardsSection, ImageCarouselGallery, Footer, i18n base (ES/EN estático).
- **Fase 2 — Interactivity:** AnimalProfiles con flip cards, VolunteerFormSection (Formspree), DonationWidget (Stripe), TestimonialCarousel, FAQSection.
- **Fase 3 — Optimización:** Lighthouse ≥90, compresión de video/imagen, WCAG AA, meta tags OG/Twitter bilingües, sitemap.xml con hreflang ES/EN.
- **Fase 4 — Features adicionales:** Blog/bitácora de rescates (migrar a Sanity CMS), sistema de reserva de tours con calendario, "adopta simbólicamente" con pago recurrente vinculado a un animal.

---

## 9. Code Examples

**Component structure:**

```ts
// src/types/index.ts
export interface Animal {
  id: string;
  name: string;
  species: { es: string; en: string };
  rescueDate: string;
  status: 'rehabilitating' | 'ready-to-release' | 'permanent-resident';
  story: { es: string; en: string };
  imageUrl: string;
}
```

**Tailwind pattern (FieldLogCard):**

```tsx
<div className="group relative h-80 [perspective:1000px]">
  <div className="relative h-full w-full transition-transform duration-500
                  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    <div className="absolute inset-0 rounded-xl bg-mist-50 shadow-md
                    [backface-visibility:hidden]">
      <span className="absolute top-3 right-3 rounded-full bg-toucan-400
                       px-2 py-1 font-utility text-xs text-mist-50">
        {status}
      </span>
    </div>
    <div className="absolute inset-0 rounded-xl bg-jungle-900 p-5 text-mist-50
                    [backface-visibility:hidden] [transform:rotateY(180deg)]">
      <p className="font-body text-sm">{story.es}</p>
    </div>
  </div>
</div>
```

**Framer Motion (Hero zoom + CTA pulse on-mount):**

```tsx
<motion.section
  initial={{ scale: 1.1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 8, ease: 'easeOut' }}
>
  <motion.button
    initial={{ scale: 1 }}
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 1.2, delay: 1, repeat: 1 }}
    className="bg-toucan-400 text-mist-50"
  >
    {t('cta.donate')}
  </motion.button>
</motion.section>
```

**JSON data (animals.json):**

```json
[
  {
    "id": "milagro-01",
    "name": "Milagro",
    "species": { "es": "Perezoso de dos dedos", "en": "Two-toed Sloth" },
    "rescueDate": "2025-09-14",
    "status": "rehabilitating",
    "story": {
      "es": "Rescatado tras caer de un cableado eléctrico cerca de Puerto Viejo.",
      "en": "Rescued after falling from power lines near Puerto Viejo."
    },
    "imageUrl": "/images/animals/milagro.webp"
  }
]
```

---

## 10. Checklists

**Pre-development:**

- [ ] Copys ES/EN aprobados (mismo tono, no traducción literal)
- [ ] Banco de foto/video real del centro en WebP/MP4 comprimido
- [ ] Cuenta Stripe configurada (USD + CRC, modo test)
- [ ] Ubicación y horarios confirmados para mapa/FAQ

**QA:**

- [ ] Responsive en 375px / 768px / 1440px
- [ ] Selector ES/EN funcional en todas las páginas, sin texto sin traducir
- [ ] Flip cards accesibles por teclado y touch (no solo hover)
- [ ] Contraste `toucan-400`/`macaw-300` sobre fondos cumple WCAG AA
- [ ] Video Hero con fallback de imagen si falla la carga

**Launch:**

- [ ] Lighthouse ≥90 en las 4 métricas
- [ ] Stripe en producción, webhook probado en ambas monedas
- [ ] hreflang ES/EN correcto en sitemap y meta tags
- [ ] Analytics activo y validado en producción
- [ ] Dominio custom + SSL en Vercel
- [ ] Formulario de visita/voluntariado entrega notificación real al equipo
