# vipin-gupta-site

Personal profile site for Vipin Gupta, hosted on Vercel at vipin-gupta.com.

It is plain static files (HTML, CSS, JavaScript) with no build step and no backend.

## Structure

```
index.html            page shell (header, tab bar, footer)
css/styles.css        dark theme, layout, responsive rules (palette tokens on :root)
js/content.js         ALL the text and data. Edit this file to change content.
js/main.js            tab routing (URL hash), rendering, keyboard navigation
assets/headshot.jpg   circular headshot (replace with a real photo, square crop works best)
assets/favicon.svg    browser tab icon
documents/            PDFs offered on the Documents tab
vercel.json           security headers and the www to apex redirect
```

## Editing content

1. Open `js/content.js`.
2. Each tab has its own entry (`profile`, `experience`, `publications`, `innovation`, `media`,
   `speaking`, `judging`, `summary`, `awards`, `documents`, `achievements`).
3. Every entry is sample data and is marked "replace with real content".
4. Optional links: set the value to `""` to hide that link.
5. Dates: `YYYY-MM-DD`, or `YYYY` where only the year is known.
6. Publication `type` and `year` drive the Research filters. Patent `status` should be one of
   `Granted`, `Filed`, `Invention disclosure` or `In development`.

Do not add confidential client names or unpublished client work. Describe client engagements generically.

## Documents

Add a PDF to `documents/`, then add an entry to `documents` in `js/content.js` with its `file` path.
The documents folder is empty for now. Only publish PDFs with client names and internal references removed.

## Preview locally

Open `index.html` in a browser, or run a static server from this folder:

```
npx serve .
```

Direct tab URLs work too, for example `/#experience` or `/#research`.

## Deploy

Pushing to the `main` branch on GitHub triggers a redeploy on Vercel.

```
git add -A
git commit -m "Update content"
git push
```

Vercel project settings: Framework preset "Other", no build command, output directory `.` (the root).

## Custom domain DNS

At your domain registrar, add:

| Type  | Host / Name | Value                                         |
|-------|-------------|-----------------------------------------------|
| A     | @           | 76.76.21.21 (confirm in the Vercel dashboard) |
| CNAME | www         | 85b2c86ec9f27f79.vercel-dns-017.com           |

The CNAME target is specific to this Vercel project. Always copy the exact values shown
under Project Settings, then Domains, since Vercel can change them.
