# Seguridad aplicada — Blue Magic V2.0.0

La aplicación es un sitio estático generado con Astro. Las medidas implementadas siguen principios de reducción de superficie de ataque y buenas prácticas OWASP aplicables al alcance del proyecto.

## Cabeceras HTTP

Configuradas en `netlify.toml`:

- Content-Security-Policy con fuentes restringidas.
- Strict-Transport-Security.
- X-Content-Type-Options: nosniff.
- X-Frame-Options: DENY.
- Referrer-Policy.
- Permissions-Policy.
- Cross-Origin-Opener-Policy.
- Cross-Origin-Resource-Policy.
- X-Permitted-Cross-Domain-Policies.

La CSP permite únicamente recursos locales y el iframe de Google Maps.

## Formularios

- Método POST.
- Honeypot de Netlify.
- Campos con `maxlength`.
- Consentimiento explícito de privacidad.
- No se solicitan contraseñas, información bancaria ni documentos sensibles.
- Los datos deben validarse nuevamente en cualquier backend futuro; la validación HTML no sustituye la validación del servidor.

## Enlaces externos

Los enlaces abiertos en una pestaña nueva usan `rel="noopener noreferrer"` para reducir riesgos de tabnabbing.

## Datos de propiedades

La dirección exacta no se publica en el catálogo. Se muestra únicamente distrito y zona referencial.

## Dependencias

Se eliminaron Tailwind y Supabase porque no eran necesarios en esta versión, reduciendo dependencias y superficie de mantenimiento.

## Revisión antes de producción

- Ejecutar `npm audit` y actualizar dependencias de forma controlada.
- Sustituir datos académicos por información validada.
- Revisar legalmente la política de privacidad.
- Configurar un correo y dominio reales.
- Verificar los formularios dentro del panel de Netlify.
- Mantener copias de seguridad del repositorio.
