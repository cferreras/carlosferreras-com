# carlosferreras.com

Web personal: CV en la portada y blog en `/blog/`. Astro estático, sin JavaScript
de cliente salvo unas líneas en línea: el menú que marca la sección visible y el
selector de tema.

## Comandos

```bash
npm run dev       # servidor de desarrollo
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

## Escribir una entrada

Crea un `.md` en `src/content/blog/`. El nombre del archivo es la URL:
`src/content/blog/mi-entrada.md` → `/blog/mi-entrada/`.

```markdown
---
title: Título de la entrada
description: Una frase; se usa en el <meta description>, en Open Graph y en el RSS.
publishedAt: 2026-09-06
draft: false          # opcional; si es true solo se ve en dev
---

El cuerpo, en Markdown.
```

El listado de `/blog/`, el RSS y el sitemap se actualizan solos, ordenados por `publishedAt`.

## Editar el CV

Todo el contenido de la portada (experiencia, proyectos, formación, habilidades y
enlaces de contacto) está en `src/data/cv.ts`. El texto de presentación está en `src/pages/index.astro`.

El botón «Descargar CV» solo aparece si existe `public/cv.pdf`.

## Estructura

```
src/
  content/blog/       entradas en Markdown
  data/cv.ts          contenido del CV
  components/
    Nav.astro         menú flotante
    Icon.astro        iconos de línea
    ThemeSwitcher.astro  botón flotante de tema
  layouts/Base.astro  shell: menú, columna, pie, <head> y metadatos
  pages/
    index.astro       portada: el CV
    blog/index.astro  listado de entradas
    blog/[...slug]    página de entrada y estilos de la prosa
    rss.xml.ts        feed
    404.astro
  styles/global.css   tipografías, tokens de color y base
public/fonts/         Geist Pixel + Be Vietnam Pro (subconjunto latin, self-hosted)
public/og.png         imagen de Open Graph
```

## Diseño

Una sola columna de lectura centrada y un menú flotante arriba, en forma de
píldora, con «Carlos» (vuelve a la portada), las secciones del CV y el blog. En
la portada, el menú marca la sección que se está leyendo. En móvil el enlace al
blog sale del menú y queda en el pie. Titulares en **Geist Pixel**, texto en
**Be Vietnam Pro**, ambas servidas desde el propio dominio (~60 KB en total, sin
peticiones a Google).

Tema claro y oscuro, definidos una sola vez en `global.css` con `light-dark()`.
Por defecto se sigue el tema del sistema; el botón flotante de abajo a la
derecha permite elegir Sistema, Claro u Oscuro, y la elección se guarda en
`localStorage`.

Para regenerar `public/og.png` tras cambiar la marca: hay que renderizar la
composición con las fuentes reales; se hizo con una captura de Playwright a
1200×630 sobre el propio sitio.

## Despliegue

Salida estática en `dist/`. Cualquier hosting estático sirve. `site` está fijado
a `https://carlosferreras.com` en `astro.config.mjs`: es lo que usan las URLs
canónicas, el RSS y el sitemap, así que hay que cambiarlo si cambia el dominio.
