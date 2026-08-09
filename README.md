# Costa Rica Animal Rescue Center (CRARC)

Sitio web para un centro de rescate y rehabilitación de fauna silvestre en Costa Rica. Muestra la organización, los animales rescatados e información práctica para visitantes nacionales y extranjeros.

Ver [CLAUDE.md](CLAUDE.md) para el diseño completo del proyecto: paleta de colores, tipografía, arquitectura de componentes, roadmap y decisiones de diseño.

## Stack

- React 18 + TypeScript
- Tailwind CSS v4
- Framer Motion
- Vite

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Levanta el servidor de desarrollo |
| `npm run build` | Compila TypeScript y genera el build de producción |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run lint` | Corre el linter (oxlint) |

## Estado actual

Estructura y componentes principales implementados con **contenido y fotografía placeholder** (picsum.photos, textos de ejemplo). Pendiente reemplazar por:

- Fotografía y video real del centro
- Datos reales de animales, equipo y testimonios (`src/data/*.json`)
- Integración de Stripe para donaciones
- Integración de formulario de contacto/voluntariado

## Estructura

```text
src/
├── components/
│   ├── layout/     # Nav, Footer
│   ├── sections/   # Secciones de página (Hero, FAQ, etc.)
│   └── ui/         # Componentes reutilizables (Button, FieldLogCard, Accordion)
├── data/           # Contenido en JSON (animales, equipo, testimonios)
└── types/          # Interfaces TypeScript
```
