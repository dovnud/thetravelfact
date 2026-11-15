# TheTravelFact

Sourced destination sheets for [thetravelfact.com](https://thetravelfact.com). Phase 1 is 20 places: Mexico, Canada, the United Kingdom, and Italy, and the cities inside that launch list.

Each sheet is one URL. A country is `/mexico/`. A city is `/mexico/cancun/`. The page has a named 1991–2020 climate station, then plugs and voltage, driving side, tipping, tap water, currency, time zone, and a link to the official entry page. Numbers without a source are left off and listed in [GAPS.md](GAPS.md).

## Run locally

```bash
npm install
npm run dev
```

The dev server in this repo is started on port 4471.

## Cloudflare Pages

Do not deploy from this repository's setup notes. When you connect the project:

- Build command: `npm run build`
- Output directory: `dist`

The site is a static Astro build (`trailingSlash: always`). `public/_headers` is the Pages headers file. Canonical URLs use `https://thetravelfact.com`.

## Design

The editorial layout is adapted from [Quiet Pages](https://github.com/xocothemes/quietpages) by Andrei Alba (MIT). Newsreader and Geist are self-hosted with their license files under `public/fonts/`.

## Data

Structured sheets live in `src/data/destinations/`. One template renders all of them. Affiliate IDs for Viator, Expedia, Booking.com, and Travelpayouts are empty in `src/config/affiliates.ts`. The Amazon adapter link uses tag `thetravelfact-20`.
