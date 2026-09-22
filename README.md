# 康城生活圈 · Lohas Life

Hyperlocal lifestyle forum MVP for **LOHAS Park / 日出康城** residents.

- Live (GitHub Pages): https://hujhkukkyjkuy.github.io/lohas-life-forum/
- Rates: https://hujhkukkyjkuy.github.io/lohas-life-forum/#/rates
- Stack: Vite + React + TypeScript (static)
- Docs: `PRODUCT.md`, `MONETIZATION.md`, `docs/LAUNCH_CHECKLIST.md`, `docs/OPS_PLAYBOOK.md`, `docs/VIDEO_PLAYBOOK.md`

## Dev

```bash
npm install
npm run dev
```

## Build & deploy (gh-pages)

```bash
npm run build
# force-push dist to gh-pages (from repo root)
git subtree split --prefix dist -b gh-pages-deploy 2>/dev/null || true
```

Or: build, then `git checkout --orphan` / push `dist` contents to `gh-pages`.

`base` is `/lohas-life-forum/` for GitHub Pages. Routing uses `HashRouter`.

## Merchant contact

Set `CONTACT_WHATSAPP` in `src/config/site.ts` before going live. Empty → UI shows「请先设定联络 WhatsApp」+ copyable inquiry text.

## Note

「易租」rental product is paused — this repo does not touch `yizu.grok.me`.
