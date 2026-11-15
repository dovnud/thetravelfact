# TheTravelFact

Sourced destination sheets for [thetravelfact.com](https://thetravelfact.com). Sixty places are on the site: Mexico, Canada, the United Kingdom, Italy, France, the Dominican Republic, Spain, Germany, Japan, Ireland, Portugal, the Netherlands, Greece, Iceland, Switzerland, Austria, Czechia, and Croatia, and the cities inside that list.

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

Black, white, and a signal red. Masthead, photograph, then timetable tables. Type is Barlow, Barlow Condensed, and IBM Plex Mono (SIL Open Font License), self-hosted under `public/fonts/`. Photographs in `public/photos/` are Wikimedia Commons files; credits live in `src/data/photos.ts`.

## Data

Structured sheets live in `src/data/destinations/`. One template renders all of them. Affiliate IDs for Viator, Expedia, Booking.com, and Travelpayouts are empty in `src/config/affiliates.ts`. The Amazon adapter link uses tag `thetravelfact-20`.
