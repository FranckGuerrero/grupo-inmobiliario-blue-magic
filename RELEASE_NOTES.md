# Notas de versión — 2.0.0

## Transformación de marca

- Juan Benavides fue reemplazado por **Grupo Inmobiliario Blue Magic** en identidad, textos, SEO, formularios y WhatsApp.
- La página “Quién soy” se convirtió en “Nosotros”.
- Se añadió una historia corporativa académica creada desde cero, cobertura en Lima, valores y métricas demostrativas.
- Se configuró la dirección **Av. San Borja Sur 599, San Borja, Lima** y el mapa proporcionado.

## Propiedades

- El catálogo quedó reducido a cuatro propiedades, una imagen por propiedad.
- Se inventaron fichas comerciales completas y coherentes con las fotografías disponibles.
- Cada propiedad incluye código, operación, estado, precio, distrito, áreas, dormitorios, baños y cocheras.
- Se añadió consulta contextual por WhatsApp y filtros funcionales de venta/alquiler.
- Las direcciones exactas no se publican por seguridad.

## Imágenes

- Se integraron las 12 imágenes optimizadas en WebP.
- Se generó una variante móvil del Hero.
- Se generaron ocho miniaturas para tarjetas de propiedades y artículos.
- Las páginas de detalle usan la imagen completa y los listados usan miniaturas.

## Responsive

- Header fijo en todo el sitio.
- Menú hamburguesa funcional y accesible.
- Menú móvil de altura completa con desplazamiento interno.
- Corrección del desplazamiento horizontal en pantallas estrechas.
- Pruebas de maquetación realizadas en anchos de 320, 344, 375, 768, 1024 y 1280 px.

## Seguridad

- CSP, HSTS, protección contra framing, MIME sniffing y políticas de permisos.
- Enlaces externos protegidos con `noopener noreferrer`.
- Honeypot, límites de longitud y consentimiento de privacidad en formularios.
- Eliminación de dependencias que no se utilizaban: Tailwind y Supabase.
- Aviso para no enviar contraseñas, datos bancarios ni documentación sensible.

## Validaciones realizadas

- Validación TypeScript de datos, tipos y utilidades.
- Verificación de sintaxis de frontmatter y scripts de 24 archivos Astro.
- Verificación de imports, rutas, slugs e imágenes.
- Análisis sintáctico del CSS sin errores.
- Prueba del header y menú en navegador a 344 px, sin desbordamiento horizontal.

## Nota del entorno

No fue posible ejecutar `npm install` ni el build completo dentro del entorno de preparación porque el registro npm está bloqueado. En un equipo con acceso normal a npm, ejecutar:

```bash
npm install
npm run build
npm run dev
```
