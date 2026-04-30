# Paleta de Servicios

Esta guía documenta la paleta usada en las subsecciones de servicios y cómo se relaciona con el sistema visual global del proyecto.

## Principio

Las landings de servicios no usan paletas completamente independientes.

La regla aplicada es:

- una sola base visual global para toda la marca
- acentos suaves por servicio para diferenciar contexto
- compatibilidad total con modo claro y modo oscuro

Esto mantiene coherencia de marca y evita que cada landing parezca un producto ajeno al sitio principal.

## Base Global

Los tokens globales viven en `src/styles/global.css`.

### Modo Claro

- `--background`: `#ffffff`
- `--foreground`: `#252525`
- `--card`: `#ffffff`
- `--primary`: `#333333`
- `--secondary`: `#1eaccc`
- `--muted`: `#f1f5f9`
- `--muted-foreground`: `#64748b`
- `--border`: `#e2e8f0`

### Modo Oscuro

- `--background`: `#091017`
- `--foreground`: `#eef4f8`
- `--card`: `#101922`
- `--primary`: `#eef4f8`
- `--secondary`: `#1eaccc`
- `--muted`: `#14212d`
- `--muted-foreground`: `#9eb0bf`
- `--border`: `#223242`

## Regla de Aplicación en Landings

En `src/components/ServiceLanding.astro`:

- fondos principales usan `--background` y `--card`
- textos usan `--foreground`, `--primary` y `--muted-foreground`
- bordes salen de `--border`
- la personalización por servicio entra como `--service-accent`

La personalización no reemplaza la paleta global.
Solo matiza:

- overlays suaves
- bordes tintados
- badges
- íconos
- highlights y glow

## Acento Unico de Marca

Las subsecciones de servicios ya no usan colores distintos por industria.

Se usa un solo acento global de marca:

- `--secondary`: `#1eaccc`

Esto aplica en:

- badges
- íconos destacados
- bordes acentuados
- overlays suaves
- CTA primarios
- sombras de realce

La diferenciación entre subsecciones ahora viene de:

- composición
- jerarquía visual
- orden narrativo
- iconografía
- tono del contenido

## Buenas Prácticas

- no usar fondos completamente distintos por subsección
- no convertir cada landing en una marca visual separada
- usar el acento para contexto, no para dominar toda la interfaz
- priorizar contraste de texto sobre fondos en ambos modos
- mantener CTA primario anclado a la identidad de marca

## Implementación Actual

La implementación actual usa:

- `--service-accent`
- `--service-surface`
- `--service-surface-strong`
- `--service-border-color`
- `--service-shadow`

Estas variables permiten:

- una base consistente entre servicios
- una sola identidad cromática de marca
- adaptación automática a claro/oscuro al apoyarse en los tokens globales

## Archivo Relacionado

- `src/styles/global.css`
- `src/components/ServiceLanding.astro`
