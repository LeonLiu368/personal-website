# personal-website

Personal site for Leon Liu. Static HTML, CSS, and a few lines of JavaScript —
no build step, no dependencies.

```
index.html   page content
style.css    styling and light/dark themes
script.js    theme toggle
assets/      portrait, favicon, résumé PDF
```

## Running locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Before publishing

- `index.html` — replace `YOUR-LINKEDIN-HANDLE` in the LinkedIn link.
- `assets/headshot.svg` — placeholder portrait. Drop in a real photo and point
  the `<img>` in `index.html` at it.
- `assets/leon-liu-resume.pdf` — replace with the current résumé when it changes.

## Deploying

GitHub Pages serves this as-is: repository **Settings → Pages → Source:
Deploy from a branch**, then pick the branch and the `/ (root)` folder.
