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

## Keeping it current

- `assets/leon-liu-resume.pdf` — swap in a new export when the résumé changes,
  and check the dates and figures in `index.html` still match it.
- `assets/headshot.jpg` — square crop, 416×416. Replace in place to change the
  portrait; no markup change needed.

## Deploying

GitHub Pages serves this as-is: repository **Settings → Pages → Source:
Deploy from a branch**, then pick the branch and the `/ (root)` folder.
