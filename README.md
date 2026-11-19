# TheTravelFact

Sourced destination sheets for [thetravelfact.com](https://thetravelfact.com). One hundred and twenty-two places are on the site: Mexico, Canada, the United Kingdom, Italy, France, the Dominican Republic, Spain, Germany, Japan, Ireland, Portugal, the Netherlands, Greece, Iceland, Switzerland, Austria, Czechia, Croatia, Hungary, Poland, Turkey, Morocco, Egypt, Costa Rica, Jamaica, the Bahamas, Aruba, Panama, Colombia, Peru, Brazil, Argentina, Chile, Thailand, South Korea, Vietnam, Indonesia, Singapore, Australia, New Zealand, India, South Africa, Maldives, Norway, Belize, Bermuda, Guatemala, China, Fiji, the Philippines, Taiwan, Barbados, Curaçao, Sri Lanka, El Salvador, Tanzania, Malaysia, Finland, Seychelles, Sweden, Mauritius, Hawaii, Puerto Rico, and the US Virgin Islands, the cities inside that list, and Dubai, New York, Miami, Los Angeles, and San Francisco, which have no country sheet.

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

Search is [Pagefind](https://pagefind.app/). `npm run build` runs `astro build` and then `pagefind --site dist`, which writes the static index to `dist/pagefind/`. Only sheet and hub articles (`data-pagefind-body`) are indexed. The search page is `/search/?q=…`; the header and home forms are plain GET forms to it.
