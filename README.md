# 0xDA bit — blog personal

Blog sobre software, IA, diseño hardware, impresión 3D, cosplay y proyectos.
Construido con [Astro](https://astro.build) + Tailwind CSS v4 y publicado en
<https://oxdabit.com> (GitHub Pages con dominio propio, DNS en Cloudflare).

## Desarrollo

Requiere Node ≥ 22.12 (`nvm use` lee `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # ./dist
```

## Contenido

- Posts: `src/content/posts/*.md(x)` — `title, description, pubDate, category, tags`.
  Categorías: `programacion`, `ia`, `hardware`, `impresion-3d`, `cosplay`.
- Proyectos: `src/content/projects/*.md(x)` — `title, description, pubDate, stack, status`.

## Despliegue

Cada push a `master` ejecuta `.github/workflows/deploy.yml`, que construye el
sitio y lo publica en GitHub Pages (*Settings → Pages → Source: GitHub Actions*,
*Custom domain: oxdabit.com*). `public/CNAME` declara el dominio.

DNS (Cloudflare, solo DNS, sin proxy): 4 registros `A` de `oxdabit.com` a las IPs
de GitHub Pages y `www` como `CNAME` a `oxdabit.github.io`.
