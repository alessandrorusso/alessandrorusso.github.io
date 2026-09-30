# T.A.A.G. — Sito statico (HTML puro)

Nessun build, nessuna dipendenza. Apri `index.html` con doppio click.

## Struttura
```
sito/
├─ index.html            Home
├─ chi-siamo.html
├─ iniziative.html
├─ contatti.html
└─ assets/
   ├─ css/
   │  ├─ taag-base.css   layout (sostituisce core/tema WP) + header + footer
   │  └─ taag-style.css  aspetto (identico alla versione WordPress)
   ├─ js/menu.js         menu mobile
   └─ img/               logo, favicon, placeholder.svg
```

## Modifiche frequenti
- **Menu / footer**: copiati in tutte e 4 le pagine → modificare in ognuna.
- **Immagini**: metti foto in `assets/img/`, aggiorna `src` (oggi `placeholder.svg`). Consigliato: JPG/WebP ≤ 1600px lato lungo, ≤ 300 KB.
- **Nuova iniziativa** (`iniziative.html`, griglia `taag-grid`): duplica un `<figure class="wp-block-image size-large taag-card">…</figure>`; cambia `src`, `alt`, `<figcaption>`.
- **Scheda cliccabile**: avvolgi `<img>` in `<a href="…">…</a>` dentro la `<figure>`.

## Pubblicazione (gratuita)
- **Netlify / Cloudflare Pages**: trascina cartella `sito/` nel pannello (drag & drop) → URL pubblico. Dominio personalizzato da impostazioni.
- **GitHub Pages**: repository con contenuto di `sito/` in root → Settings > Pages > branch `main`.

## Ritorno a WordPress
Classi `wp-block-*` mantenute: contenuto di `<main>` resta compatibile con i file in `../pagine/`.
