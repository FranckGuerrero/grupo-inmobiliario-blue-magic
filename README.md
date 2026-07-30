# Grupo Inmobiliario Blue Magic — V2.0.0

Refactorización corporativa del proyecto inmobiliario original. La versión 2.0.0 transforma la marca personal en una web profesional para **Grupo Inmobiliario Blue Magic**, con catálogo de propiedades, formularios segmentados, WhatsApp contextual, guía inmobiliaria y ubicación en San Borja.

## Tecnologías

- Astro 5
- TypeScript en modo estricto
- CSS propio responsive
- Netlify Forms
- Netlify para despliegue y cabeceras de seguridad

## Requisitos

- Node.js 22.12.0 o compatible
- npm 10 o superior
- Visual Studio Code

## Ejecutar en Visual Studio Code

```bash
npm install
npm run dev
```

Abre la dirección que muestre Astro, normalmente:

```text
http://localhost:4321
```

## Comprobar antes de publicar

```bash
npm run check
npm run build
npm run preview
```

La carpeta de publicación se genera en `dist/`.

## Estructura principal

```text
public/images/blue-magic/
├── hero/
├── propiedades/
│   └── miniaturas/
├── servicios/
└── guia-inmobiliaria/
    └── miniaturas/

src/
├── components/
├── data/
├── layouts/
├── pages/
├── styles/
├── types/
└── utils/
```

## Contenido editable

- Datos corporativos, teléfono, dirección, mapa y cobertura: `src/data/site.ts`
- Propiedades: `src/data/properties.ts`
- Artículos de la guía: `src/data/blog.ts`
- Preguntas frecuentes: `src/data/faqs.ts`

## Formularios

Los formularios están configurados para Netlify Forms e incluyen:

- Campo honeypot contra bots.
- Límites de longitud en los campos.
- Consentimiento obligatorio de privacidad.
- Advertencia para no enviar información sensible.
- Campos separados para compradores, propietarios y contacto general.

Para que Netlify registre los envíos, despliega el proyecto en Netlify y realiza un nuevo build.

## Seguridad

`netlify.toml` incluye CSP, HSTS, protección contra MIME sniffing, política de permisos, protección contra framing y caché de recursos estáticos. Consulta `docs/SEGURIDAD.md`.

## Datos académicos

La historia corporativa, métricas, precios, características y disponibilidad de propiedades son datos demostrativos creados para fines académicos. Deben reemplazarse o validarse antes de utilizar la web comercialmente.

## Dominio

El dominio configurado en `astro.config.mjs` es provisional:

```text
https://grupo-inmobiliario-blue-magic.netlify.app
```

Cuando exista un dominio definitivo, actualiza también:

- `astro.config.mjs`
- `public/robots.txt`
- Configuración del dominio en Netlify
