# thetravelfact.com SEO content roadmap

Research only. No live pages were changed. This note ranks demand and winnability for destination sheets, fact hubs, later single-fact URLs, content gaps, and Phase 2 airport and baggage pages.

## How to read these numbers

- **Market:** United States (`location_code` 2840), English, Google.
- **Pulled:** 15 November 2026, morning, America/Los_Angeles. The last API call finished at 8:42 AM PT.
- **Volume, CPC, competition, and keyword difficulty** come from DataForSEO Labs `POST /v3/dataforseo_labs/google/keyword_overview/live`, which is based on the Google Ads keyword database. Each row’s `keyword_info.last_updated_time` is in the CSVs under `research/data/` (most fall between mid-September and mid-November 2026, UTC). Figures below are those Labs values, not a new Google Ads pull.
- **Related keyword ideas** come from `POST /v3/dataforseo_labs/google/keyword_suggestions/live` (same Labs database).
- **People Also Ask and related searches** come from `POST /v3/serp/google/organic/live/advanced`, pulled the same morning.
- **Keyword difficulty (KD)** is DataForSEO’s 0–100 organic-difficulty score. In this dataset it is often 0, including on some high-volume travel queries such as “best time to visit Italy” (14,800 volume, KD 0). Treat KD as directional only. A 0 does **not** mean the SERP is easy. When KD was 10 or higher, it was used as a soft penalty in the opportunity score; otherwise the score equals travel demand.
- **Do not treat “{place} weather” or “{place} time zone” as travel demand.** Those queries are dominated by local forecasts and clock lookups (for example “Chicago weather” is 1,500,000). They are in the CSVs but are excluded from the travel score.
- **Currency volume is mixed.** “Currency in India” is 74,000, which includes forex and business intent, not just travelers asking what to take. Currency is included in the supporting-facts total but should not be the only reason to build a sheet.
- Close variants of the same question (for example “plug type X” and “what plug does X use”) are counted as the **maximum**, not the sum, so volume is not double-counted.
- A blank or “not in database” means DataForSEO had no record for that exact phrase. That is not a zero, and it is not an invented number.

## Spend

- Starting balance: **$31.330428**
- Ending balance: **$29.632788**
- **Spend: $1.69764** (under the $5 cap). The ledger sum matches the balance drop.
- By endpoint: keyword overview $1.08828; keyword suggestions $0.56136; SERP advanced $0.04800 (includes one $0.002 retry after a parser error on the first Paris SERP call).
- Balance checks used the free `GET /v3/appendix/user_data` endpoint.

## Plain-language recommendations

1. **Finish the first 100, in demand order where it helps.** Many places still in the queue have more “best time to visit” demand than almost anything beyond the list: Ireland and Iceland 18,100 each, Costa Rica 14,800, Portugal 12,100, Greece, Thailand, Switzerland, Aruba, and Bali 9,900 each. Those volumes are from keyword overview, US English, pulled 15 November 2026.
2. **After that, Puerto Rico is the clearest new sheet.** “Best time to visit Puerto Rico” is 14,800 (KD 10, CPC $0.80) — the same head-term demand as Italy or Costa Rica, and the highest among the 271 candidates we scored. Maldives (8,100), Bermuda, Norway, and Belize (5,400 each) follow.
3. **Build a Hawaii sheet, even though Honolulu and Maui are already planned.** Keyword suggestions in the same Labs database show “best time to visit Hawaii” at 22,200 (KD 0, CPC $1.15; metric last updated 12 November 2026, 1:35 AM PT). That is higher than every candidate except the already-planned Japan/Ireland/Iceland group, and we would have missed it if we had only scored the named first-100 cities.
4. **Use the names people type.** “Best time to visit New York” is 8,100; “New York City” is only 880. “Czechia” is 10; “Czech Republic” is 140. “United Arab Emirates” and “UAE” are 50 each, while Dubai is 2,900 — so the UAE slot should be a Dubai (and maybe Abu Dhabi) city sheet, not a country name people don’t search.
5. **Build 12 “best places to visit in {month}” hubs once enough sheets exist to back them up.** That phrasing is the demand: 4,400 to 12,100 a month, peaking in February and November at 12,100 each. “Where is warm in {month}” is much smaller (10 to 880) and should be a section on those hubs, not 12 thin pages. Approximate unique-intent demand across the 12 months is about 117,370 US searches a month if the different phrasings are not double-counted.
6. **Build a “which side of the road” list and a euro-countries list. Skip thin plug-type and tap-water country lists for now.** “Countries that drive on the left” and “on the right” are 8,100 each (KD 11). Euro queries are 2,900–6,600 but harder (KD 30–42). “Type G plug countries” is only 110. “Countries with safe tap water” is 110, and the exact phrase “countries where tap water is safe” was not in the database. “Tipping by country” is only 90; keep tipping on the destination sheet, with a possible later “tipping in Europe” page at 480.
7. **Do not split most facts onto their own URLs yet.** Use a starting threshold of **1,000 US monthly searches** for a *distinct* travel-fact query that a section on the destination sheet cannot reasonably capture, and only after Search Console shows the sheet is not already taking that query. Until then, month weather, tipping, plugs, and tap water belong on the sheet (with jump links). Do not build timezone or currency-converter pages. Time-zone and generic weather volume is large but is mostly utility intent, and converters are out of scope.
8. **Add a few new fact *sections* people already ask about, only where an official source exists.** Across 15 sample destinations, “is {place} safe” totaled 46,130 raw monthly searches (Cancún 9,900). Vaccinations (Thailand 1,300), emergency numbers (Japan 1,300), public holidays, and eSIM (Japan 5,400) also show up. Safety can be a dated State Department sentence; vaccinations a CDC sentence; emergency numbers a government figure. eSIM demand is real but the facts change often and there is no single official global source — treat it carefully. Do not invent daily budgets or “cheapest month” prices.
9. **Phase 2 baggage pages have clear, specific demand. Airport *name* queries do not.** “Carry on bag size” is 165,000 (KD 45) and airline-specific queries are large: Southwest baggage allowance 135,000 (KD 13), American carry-on size 110,000 (KD 7), Frontier checked-bag fee 33,100. Those are useful, sourceable, dated rule pages. By contrast, “Los Angeles International Airport” at 1,220,000 is a navigational query for the official airport site. Gateway airport pages should support the destination sheet (codes, official links, quoted published facts), not try to win the airport’s own name.
10. **Put a search bar and in-page jump links in before most new URL types.** The demand is already on the destination sheet (best time, month weather, tipping, plugs). Hubs and later fact URLs should point into those sheets, not replace them. Affiliates can wait, as requested.

## 1. Destination priority beyond the first 100

We scored **271 candidate places** that are not on the first-100 list, using the patterns in the brief, plus “do I need an adapter for X”. The ranked table of 150 is below. The full 271-row file is `research/data/destinations_candidates_all.csv`.

**Travel demand** (the ranking input) is: volume of “best time to visit {place}” + the sum of “{place} weather in {month}” + the highest volume among plug phrasings + tipping + the highest tap-water phrasing + the highest currency phrasing + “do I need an adapter for {place}”. Generic weather and time-zone queries are listed in the CSV and excluded here.

**Opportunity score** equals travel demand, except when best-time KD is 10 or higher, in which case demand is multiplied by `(100 − KD) / 100`.

### A cleaner lens: “best time to visit” only

Because monthly-weather sums still include some local-forecast intent, especially for US cities, the cleanest travel-planning signal is the head term alone. US cities already planned in the first 100 (New York, Miami, Honolulu, Maui, Los Angeles, San Francisco) are a separate domestic track. International and territory candidates with at least 1,000 US monthly searches on “best time to visit {place}”:

| # | Place | Kind | Best time vol. | KD | CPC | Travel demand | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Puerto Rico | region | 14,800 | 10 | $0.80 | 72,690 |  |
| 2 | Maldives | country | 8,100 | 3 | $1.25 | 24,060 |  |
| 3 | Bermuda | country | 5,400 | 0 | $2.29 | 35,210 |  |
| 4 | Norway | country | 5,400 | 0 | $2.38 | 32,170 |  |
| 5 | Belize | country | 5,400 | 0 | $1.47 | 21,260 |  |
| 6 | Niagara Falls | city | 5,400 | 0 | $1.02 | 9,980 | US/Canada border city; not a national-park page. |
| 7 | Bora Bora | city | 5,400 | 0 | $1.50 | 9,350 |  |
| 8 | Guatemala | country | 4,400 | 0 | $3.92 | 29,760 |  |
| 9 | Fiji | country | 3,600 | 0 | $2.47 | 11,690 |  |
| 10 | China | country | 3,600 | 0 | $3.58 | 11,610 | Broad country term; city sheets may serve travelers better. |
| 11 | Galapagos | region | 3,600 | 0 | $7.18 | 5,980 | High demand, but a park-style guide is out of scope; only a practical destination sheet would fit. |
| 12 | Philippines | country | 2,900 | 0 | $0.74 | 32,380 |  |
| 13 | Dubai | city | 2,900 | 10 | $1.00 | 23,670 |  |
| 14 | Turks and Caicos | country | 2,900 | 0 | $2.39 | 18,260 |  |
| 15 | Tahiti | region | 2,900 | 0 | $2.70 | 8,270 |  |
| 16 | Taiwan | country | 2,400 | 0 | $0.38 | 12,470 |  |
| 17 | Amalfi Coast | region | 2,400 | 0 | $3.91 | 9,860 |  |
| 18 | Okinawa | region | 2,400 | 0 | $4.83 | 8,410 |  |
| 19 | US Virgin Islands | region | 2,400 | 0 | $0.96 | 5,610 |  |
| 20 | Sicily | region | 1,900 | 0 | $2.41 | 17,290 |  |
| 21 | Curacao | country | 1,900 | 0 | $1.39 | 12,130 |  |
| 22 | Barbados | country | 1,900 | 0 | $2.83 | 11,070 |  |
| 23 | Quebec City | city | 1,900 | 0 | $2.87 | 7,590 |  |
| 24 | Hong Kong | city | 1,600 | 0 | $0.73 | 17,870 |  |
| 25 | Copenhagen | city | 1,600 | 0 | $0.59 | 14,550 |  |
| 26 | Madeira | region | 1,600 | 0 | $1.83 | 8,640 |  |
| 27 | Tulum | city | 1,600 | 0 | $1.07 | 6,970 |  |
| 28 | Rio de Janeiro | city | 1,600 | 0 | $1.43 | 6,440 |  |
| 29 | Sri Lanka | country | 1,600 | 0 | $1.52 | 6,270 |  |
| 30 | Phuket | city | 1,600 | 0 | $4.12 | 6,170 |  |
| 31 | El Salvador | country | 1,300 | 0 | $1.23 | 16,420 |  |
| 32 | Buenos Aires | city | 1,300 | 0 | $2.38 | 10,100 |  |
| 33 | Kenya | country | 1,300 | 1 | $4.20 | 9,000 |  |
| 34 | Cape Town | city | 1,300 | 6 | $2.58 | 7,610 |  |
| 35 | Lake Como | region | 1,300 | 0 | $4.05 | 7,260 |  |
| 36 | Tanzania | country | 1,300 | 6 | $4.84 | 6,420 |  |
| 37 | Ibiza | city | 1,300 | 0 | $3.22 | 6,100 |  |
| 38 | Zanzibar | region | 1,300 | 0 | $6.16 | 3,070 |  |
| 39 | Ecuador | country | 1,000 | 0 | $2.29 | 17,850 |  |
| 40 | Malaysia | country | 1,000 | 0 | $3.56 | 10,150 |  |
| 41 | Finland | country | 1,000 | 1 | $1.18 | 9,090 |  |
| 42 | Saint Martin | country | 1,000 | 0 | $1.65 | 8,770 |  |
| 43 | Seychelles | country | 1,000 | 5 | $3.35 | 3,680 |  |
| 44 | Oaxaca | city | 1,000 | 0 | $2.23 | 3,320 |  |

Fifty-eight of the 271 candidates have “best time to visit” volume of at least 1,000; 96 have at least 500. The 150th place in the travel-demand ranking is Halifax, at 170 best-time volume and 1,980 travel demand. Below about 200 on the head term, a new place is usually only worth building as a child of a high-demand country already on the site.

### US domestic track (beyond the first 100)

These scores are lifted by monthly weather queries that include resident forecast demand. The “best time” column is the safer build signal. Chicago (6,600), New Orleans (5,400), Key West (4,400), Seattle and Charleston and Boston (3,600), San Diego, Nashville, and Savannah (2,900) are the strongest new US city sheets if the site expands domestically after New York, Miami, Hawaii, Los Angeles, and San Francisco.

### Top 150 by travel-demand opportunity

Full ranked list. Flags: US monthly-weather totals may include local forecasts; currency may include forex; Georgia is ambiguous with the US state.

| Rank | Place | Kind | Best time | KD | CPC | Month weather sum | Currency (max) | Tipping | Tap water (max) | Plug (max) | Travel demand | Opportunity | Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Puerto Rico | region | 14,800 | 10 | $0.80 | 42,600 | 14,800 | 170 | 320 | 0 | 72,690 | 65,421 |  |
| 2 | Chicago | city | 6,600 | 0 | $1.10 | 47,700 | 0 | 110 | 590 | 0 | 55,000 | 55,000 | US city: monthly weather may include local forecasts. |
| 3 | New Orleans | city | 5,400 | 1 | $0.80 | 48,600 | 50 | 20 | 480 | 0 | 54,550 | 54,550 | US city: monthly weather may include local forecasts. |
| 4 | San Diego | city | 2,900 | 0 | $1.21 | 46,000 | 10 | 0 | 390 | 0 | 49,300 | 49,300 | US city: monthly weather may include local forecasts. |
| 5 | Nashville | city | 2,900 | 0 | $1.53 | 40,000 | 0 | 20 | 260 | 0 | 43,180 | 43,180 | US city: monthly weather may include local forecasts. |
| 6 | Seattle | city | 3,600 | 0 | $1.76 | 35,400 | 0 | 90 | 390 | 0 | 39,480 | 39,480 | US city: monthly weather may include local forecasts. |
| 7 | Bermuda | country | 5,400 | 0 | $2.29 | 27,300 | 2,400 | 90 | 20 | 0 | 35,210 | 35,210 |  |
| 8 | Key West | city | 4,400 | 0 | $1.81 | 28,230 | 0 | 0 | 30 | 0 | 32,660 | 32,660 | US city: monthly weather may include local forecasts. |
| 9 | Charleston | city | 3,600 | 0 | $0.89 | 28,920 | 0 | 0 | 50 | 0 | 32,570 | 32,570 | US city: monthly weather may include local forecasts. |
| 10 | Philippines | country | 2,900 | 0 | $0.74 | 6,680 | 22,200 | 170 | 20 | 390 | 32,380 | 32,380 |  |
| 11 | Norway | country | 5,400 | 0 | $2.38 | 11,070 | 14,800 | 480 | 30 | 390 | 32,170 | 32,170 |  |
| 12 | Reykjavik | city | 590 | 0 | $1.79 | 31,000 | 480 | 10 | 10 | 0 | 32,090 | 32,090 | Iceland is already in the first 100; this is the city sheet. |
| 13 | Guatemala | country | 4,400 | 0 | $3.92 | 7,110 | 18,100 | 110 | 30 | 10 | 29,760 | 29,760 |  |
| 14 | Boston | city | 3,600 | 6 | $1.51 | 22,880 | 0 | 70 | 320 | 0 | 26,870 | 26,870 | US city: monthly weather may include local forecasts. |
| 15 | Maldives | country | 8,100 | 3 | $1.25 | 5,930 | 9,900 | 50 | 10 | 70 | 24,060 | 24,060 |  |
| 16 | Denver | city | 1,300 | 0 | $2.37 | 21,800 | 0 | 10 | 210 | 0 | 23,320 | 23,320 | US city: monthly weather may include local forecasts. |
| 17 | Saudi Arabia | country | 140 | 0 | — | 660 | 22,200 | 20 | 10 | 210 | 23,240 | 23,240 | Head-term demand is only 140; travel score is mostly currency volume. |
| 18 | Austin | city | 1,000 | 0 | $3.56 | 21,080 | 0 | 10 | 170 | 0 | 22,260 | 22,260 | US city: monthly weather may include local forecasts. |
| 19 | Dubai | city | 2,900 | 10 | $1.00 | 10,450 | 9,900 | 140 | 70 | 210 | 23,670 | 21,303 |  |
| 20 | Belize | country | 5,400 | 0 | $1.47 | 11,280 | 4,400 | 140 | 40 | 0 | 21,260 | 21,260 |  |
| 21 | Washington DC | city | 2,400 | 8 | $0.80 | 18,600 | 0 | 30 | 170 | 0 | 21,200 | 21,200 | Time-zone and weather volumes include a large local-resident share. US city: monthly weather may include local forecasts. |
| 22 | Savannah | city | 2,900 | 1 | $0.48 | 18,040 | 0 | 0 | 20 | 0 | 20,960 | 20,960 | US city: monthly weather may include local forecasts. |
| 23 | Sweden | country | 880 | 0 | $0.97 | 3,650 | 14,800 | 260 | 20 | 320 | 19,930 | 19,930 |  |
| 24 | Houston | city | 590 | 0 | $1.21 | 18,060 | 0 | 10 | 210 | 0 | 18,870 | 18,870 | US city: monthly weather may include local forecasts. |
| 25 | Turks and Caicos | country | 2,900 | 0 | $2.39 | 12,850 | 2,400 | 90 | 0 | 10 | 18,260 | 18,260 |  |
| 26 | Hong Kong | city | 1,600 | 0 | $0.73 | 8,810 | 6,600 | 260 | 110 | 480 | 17,870 | 17,870 |  |
| 27 | Ecuador | country | 1,000 | 0 | $2.29 | 1,910 | 14,800 | 110 | 20 | 10 | 17,850 | 17,850 |  |
| 28 | Sicily | region | 1,900 | 0 | $2.41 | 15,130 | 210 | 0 | 40 | 10 | 17,290 | 17,290 |  |
| 29 | Dallas | city | 390 | 0 | $0.52 | 16,580 | 0 | 0 | 140 | 0 | 17,110 | 17,110 | US city: monthly weather may include local forecasts. |
| 30 | Israel | country | 720 | 0 | $1.70 | 3,780 | 12,100 | 50 | 20 | 320 | 16,990 | 16,990 | Currency and time-zone volumes are large and may include non-travel intent; best-time volume is 720. |
| 31 | El Salvador | country | 1,300 | 0 | $1.23 | 2,980 | 12,100 | 30 | 10 | 0 | 16,420 | 16,420 |  |
| 32 | Atlanta | city | 590 | 2 | — | 15,630 | 40 | 0 | 140 | 0 | 16,400 | 16,400 | US city: monthly weather may include local forecasts. |
| 33 | Portland | city | 1,900 | 0 | $0.23 | 13,200 | 0 | 10 | 110 | 0 | 15,220 | 15,220 | US city: monthly weather may include local forecasts. |
| 34 | Copenhagen | city | 1,600 | 0 | $0.59 | 11,390 | 1,300 | 210 | 50 | 0 | 14,550 | 14,550 |  |
| 35 | Denmark | country | 480 | 4 | $0.77 | 2,690 | 9,900 | 260 | 20 | 390 | 13,740 | 13,740 |  |
| 36 | Santa Fe | city | 1,900 | 0 | $1.05 | 11,430 | 0 | 0 | 10 | 0 | 13,340 | 13,340 | US city: monthly weather may include local forecasts. |
| 37 | Taiwan | country | 2,400 | 0 | $0.38 | 9,290 | 480 | 210 | 70 | 20 | 12,470 | 12,470 |  |
| 38 | Honduras | country | 390 | 0 | — | 1,870 | 9,900 | 20 | 0 | 0 | 12,180 | 12,180 |  |
| 39 | Curacao | country | 1,900 | 0 | $1.39 | 6,490 | 3,600 | 110 | 30 | 0 | 12,130 | 12,130 |  |
| 40 | Malta | country | 880 | 0 | $1.93 | 10,170 | 480 | 90 | 50 | 110 | 11,790 | 11,790 |  |
| 41 | Fiji | country | 3,600 | 0 | $2.47 | 5,570 | 2,400 | 90 | 20 | 10 | 11,690 | 11,690 |  |
| 42 | Romania | country | 260 | 0 | $0.94 | 1,360 | 9,900 | 70 | 20 | 10 | 11,620 | 11,620 |  |
| 43 | China | country | 3,600 | 0 | $3.58 | 4,360 | 2,900 | 320 | 170 | 260 | 11,610 | 11,610 | Very broad; city sheets may serve travelers better than one national climate table. |
| 44 | Qatar | country | 140 | 0 | — | 1,130 | 9,900 | 30 | 10 | 10 | 11,220 | 11,220 |  |
| 45 | Cambodia | country | 880 | 0 | $1.64 | 2,030 | 8,100 | 90 | 0 | 10 | 11,110 | 11,110 |  |
| 46 | Barbados | country | 1,900 | 0 | $2.83 | 6,160 | 2,900 | 70 | 40 | 0 | 11,070 | 11,070 |  |
| 47 | Cozumel | city | 590 | 0 | $4.18 | 9,960 | 210 | 10 | 10 | 0 | 10,780 | 10,780 |  |
| 48 | Taipei | city | 590 | 0 | $1.25 | 8,440 | 1,300 | 30 | 0 | 0 | 10,360 | 10,360 |  |
| 49 | Malaysia | country | 1,000 | 0 | $3.56 | 2,150 | 6,600 | 110 | 30 | 260 | 10,150 | 10,150 |  |
| 50 | Buenos Aires | city | 1,300 | 0 | $2.38 | 8,160 | 480 | 70 | 90 | 0 | 10,100 | 10,100 |  |
| 51 | Niagara Falls | city | 5,400 | 0 | $1.02 | 4,570 | 0 | 0 | 10 | 0 | 9,980 | 9,980 |  |
| 52 | Amalfi Coast | region | 2,400 | 0 | $3.91 | 7,450 | 0 | 0 | 10 | 0 | 9,860 | 9,860 |  |
| 53 | Saint Lucia | country | 0 | — | — | 9,440 | 0 | 10 | 0 | 0 | 9,450 | 9,450 |  |
| 54 | Bora Bora | city | 5,400 | 0 | $1.50 | 2,910 | 1,000 | 30 | 10 | 0 | 9,350 | 9,350 |  |
| 55 | Georgia | country | 590 | 4 | $0.02 | 5,750 | 2,900 | 50 | 40 | 10 | 9,340 | 9,340 | Ambiguous with the U.S. state. Country demand is unreliable; prefer Tbilisi if Georgia the country is built later. |
| 56 | Finland | country | 1,000 | 1 | $1.18 | 2,430 | 5,400 | 110 | 10 | 140 | 9,090 | 9,090 |  |
| 57 | Kenya | country | 1,300 | 1 | $4.20 | 3,010 | 4,400 | 70 | 10 | 210 | 9,000 | 9,000 |  |
| 58 | Shanghai | city | 880 | 0 | $0.91 | 7,030 | 880 | 20 | 40 | 10 | 8,860 | 8,860 |  |
| 59 | Saint Martin | country | 1,000 | 0 | $1.65 | 4,870 | 2,900 | 0 | 0 | 0 | 8,770 | 8,770 |  |
| 60 | Belgium | country | 480 | 0 | $0.11 | 2,490 | 5,400 | 140 | 20 | 170 | 8,700 | 8,700 |  |
| 61 | Madeira | region | 1,600 | 0 | $1.83 | 6,900 | 110 | 10 | 10 | 10 | 8,640 | 8,640 |  |
| 62 | Albania | country | 590 | 0 | $0.34 | 2,500 | 5,400 | 50 | 40 | 10 | 8,590 | 8,590 |  |
| 63 | Okinawa | region | 2,400 | 0 | $4.83 | 5,990 | 0 | 10 | 10 | 0 | 8,410 | 8,410 |  |
| 64 | Nicaragua | country | 590 | 0 | — | 1,070 | 6,600 | 20 | 0 | 0 | 8,280 | 8,280 |  |
| 65 | Tahiti | region | 2,900 | 0 | $2.70 | 3,370 | 1,900 | 90 | 10 | 0 | 8,270 | 8,270 |  |
| 66 | Uruguay | country | 390 | 0 | $1.07 | 890 | 6,600 | 30 | 20 | 0 | 7,930 | 7,930 |  |
| 67 | Porto | city | 390 | 0 | $1.45 | 7,470 | 10 | 10 | 20 | 0 | 7,900 | 7,900 |  |
| 68 | Bolivia | country | 590 | 0 | $3.03 | 620 | 6,600 | 10 | 0 | 0 | 7,820 | 7,820 |  |
| 69 | Cape Town | city | 1,300 | 6 | $2.58 | 5,350 | 880 | 40 | 40 | 0 | 7,610 | 7,610 |  |
| 70 | Quebec City | city | 1,900 | 0 | $2.87 | 5,580 | 50 | 50 | 10 | 0 | 7,590 | 7,590 |  |
| 71 | Oman | country | 320 | 0 | — | 620 | 6,600 | 20 | 10 | 10 | 7,580 | 7,580 |  |
| 72 | Bulgaria | country | 110 | 0 | — | 720 | 6,600 | 30 | 20 | 10 | 7,490 | 7,490 |  |
| 73 | Lake Como | region | 1,300 | 0 | $4.05 | 5,950 | 0 | 0 | 10 | 0 | 7,260 | 7,260 |  |
| 74 | Serbia | country | 90 | 0 | — | 290 | 6,600 | 20 | 10 | 0 | 7,010 | 7,010 |  |
| 75 | Tulum | city | 1,600 | 0 | $1.07 | 5,320 | 20 | 20 | 10 | 0 | 6,970 | 6,970 |  |
| 76 | Lima | city | 480 | 0 | $3.74 | 5,730 | 480 | 30 | 20 | 0 | 6,740 | 6,740 |  |
| 77 | Cuba | country | 260 | 0 | $0.07 | 1,040 | 5,400 | 10 | 10 | 10 | 6,740 | 6,740 |  |
| 78 | Anchorage | city | 480 | 7 | $1.38 | 6,090 | 0 | 0 | 30 | 0 | 6,600 | 6,600 | US city: monthly weather may include local forecasts. |
| 79 | Asheville | city | 880 | 7 | $2.00 | 5,640 | 0 | 0 | 20 | 0 | 6,540 | 6,540 | US city: monthly weather may include local forecasts. |
| 80 | Philadelphia | city | 390 | 8 | $3.04 | 5,970 | 10 | 10 | 70 | 0 | 6,450 | 6,450 | US city: monthly weather may include local forecasts. |
| 81 | Rio de Janeiro | city | 1,600 | 0 | $1.43 | 4,480 | 320 | 20 | 20 | 0 | 6,440 | 6,440 |  |
| 82 | Tanzania | country | 1,300 | 6 | $4.84 | 2,470 | 2,400 | 70 | 10 | 170 | 6,420 | 6,420 |  |
| 83 | Laos | country | 390 | 0 | $1.89 | 490 | 5,400 | 20 | 10 | 10 | 6,320 | 6,320 |  |
| 84 | Sri Lanka | country | 1,600 | 0 | $1.52 | 2,200 | 2,400 | 50 | 10 | 10 | 6,270 | 6,270 |  |
| 85 | Phuket | city | 1,600 | 0 | $4.12 | 4,380 | 170 | 10 | 10 | 0 | 6,170 | 6,170 |  |
| 86 | Ibiza | city | 1,300 | 0 | $3.22 | 4,540 | 210 | 10 | 40 | 0 | 6,100 | 6,100 |  |
| 87 | Canary Islands | region | 590 | 0 | $2.83 | 5,220 | 260 | 10 | 10 | 0 | 6,090 | 6,090 |  |
| 88 | Galapagos | region | 3,600 | 0 | $7.18 | 2,200 | 170 | 10 | 0 | 0 | 5,980 | 5,980 |  |
| 89 | Stockholm | city | 390 | 0 | $0.26 | 5,050 | 480 | 40 | 20 | 0 | 5,980 | 5,980 |  |
| 90 | Malaga | city | 170 | 0 | $0.17 | 5,710 | 0 | 10 | 10 | 0 | 5,900 | 5,900 |  |
| 91 | Crete | region | 590 | 0 | $1.32 | 5,060 | 140 | 10 | 30 | 10 | 5,840 | 5,840 |  |
| 92 | Montenegro | country | 720 | 0 | $1.00 | 2,530 | 2,400 | 70 | 20 | 10 | 5,750 | 5,750 |  |
| 93 | Slovenia | country | 720 | 0 | $1.56 | 1,970 | 2,900 | 90 | 20 | 10 | 5,710 | 5,710 |  |
| 94 | US Virgin Islands | region | 2,400 | 0 | $0.96 | 2,820 | 390 | 0 | 0 | 0 | 5,610 | 5,610 |  |
| 95 | Beijing | city | 590 | 0 | $2.97 | 4,270 | 480 | 10 | 30 | 0 | 5,380 | 5,380 |  |
| 96 | Cairo | city | 720 | 0 | $2.77 | 4,370 | 260 | 10 | 10 | 0 | 5,370 | 5,370 |  |
| 97 | Jordan | country | 720 | 0 | $0.32 | 1,550 | 2,900 | 70 | 10 | 90 | 5,340 | 5,340 | Usually the country in travel queries, but the personal name can leak into some terms. |
| 98 | Hanoi | city | 590 | 0 | $1.26 | 4,560 | 70 | 10 | 10 | 0 | 5,240 | 5,240 |  |
| 99 | Cartagena | city | 880 | 0 | $1.49 | 4,140 | 170 | 10 | 10 | 0 | 5,210 | 5,210 |  |
| 100 | Nepal | country | 720 | 0 | $1.74 | 1,440 | 2,900 | 30 | 10 | 90 | 5,190 | 5,190 |  |
| 101 | Panama City | city | 590 | 0 | $1.91 | 4,230 | 320 | 0 | 20 | 0 | 5,160 | 5,160 |  |
| 102 | Sardinia | region | 720 | 0 | $2.16 | 4,340 | 50 | 0 | 10 | 0 | 5,120 | 5,120 |  |
| 103 | French Polynesia | country | 720 | 0 | $2.61 | 2,670 | 1,600 | 90 | 0 | 0 | 5,080 | 5,080 |  |
| 104 | Ethiopia | country | 210 | 0 | $1.15 | 260 | 4,400 | 10 | 0 | 40 | 4,920 | 4,920 |  |
| 105 | Melbourne | city | 390 | 0 | $5.99 | 4,290 | 0 | 10 | 10 | 0 | 4,700 | 4,700 |  |
| 106 | Cyprus | country | 210 | 0 | $0.07 | 2,650 | 1,600 | 20 | 10 | 0 | 4,490 | 4,490 |  |
| 107 | Oslo | city | 140 | 0 | $2.93 | 3,990 | 260 | 20 | 10 | 0 | 4,420 | 4,420 |  |
| 108 | Playa del Carmen | city | 720 | 0 | $0.77 | 3,620 | 20 | 10 | 10 | 0 | 4,380 | 4,380 |  |
| 109 | Mauritius | country | 880 | 0 | $3.27 | 1,260 | 1,900 | 20 | 10 | 30 | 4,100 | 4,100 |  |
| 110 | Trinidad and Tobago | country | 210 | 0 | $2.35 | 270 | 3,600 | 0 | 0 | 0 | 4,080 | 4,080 |  |
| 111 | Tenerife | region | 210 | 0 | $0.16 | 3,740 | 70 | 10 | 10 | 10 | 4,050 | 4,050 |  |
| 112 | Algarve | region | 260 | 0 | $0.25 | 3,650 | 0 | 10 | 10 | 0 | 3,930 | 3,930 |  |
| 113 | Cayman Islands | country | 880 | 11 | $1.09 | 2,520 | 880 | 20 | 10 | 0 | 4,310 | 3,835 |  |
| 114 | Seychelles | country | 1,000 | 5 | $3.35 | 1,360 | 1,300 | 10 | 10 | 0 | 3,680 | 3,680 |  |
| 115 | Auckland | city | 210 | 0 | $0.63 | 3,410 | 0 | 10 | 10 | 0 | 3,640 | 3,640 |  |
| 116 | Mykonos | city | 590 | 0 | $1.03 | 2,890 | 50 | 10 | 10 | 0 | 3,550 | 3,550 |  |
| 117 | Cusco | city | 260 | 0 | $2.50 | 3,160 | 0 | 10 | 10 | 0 | 3,440 | 3,440 |  |
| 118 | Ho Chi Minh City | city | 480 | 0 | $5.16 | 2,910 | 0 | 0 | 10 | 0 | 3,400 | 3,400 |  |
| 119 | Estonia | country | 170 | 0 | — | 760 | 2,400 | 50 | 10 | 10 | 3,400 | 3,400 |  |
| 120 | Latvia | country | 140 | 0 | — | 730 | 2,400 | 40 | 10 | 10 | 3,330 | 3,330 |  |
| 121 | Oaxaca | city | 1,000 | 0 | $2.23 | 2,300 | 0 | 10 | 10 | 0 | 3,320 | 3,320 |  |
| 122 | Madagascar | country | 720 | 0 | $3.67 | 500 | 1,900 | 10 | 0 | 0 | 3,130 | 3,130 |  |
| 123 | Grenada | country | 590 | 0 | $2.73 | 1,510 | 1,000 | 20 | 10 | 0 | 3,130 | 3,130 |  |
| 124 | Bahrain | country | 20 | 0 | — | 190 | 2,900 | 10 | 10 | 0 | 3,130 | 3,130 |  |
| 125 | Botswana | country | 390 | 0 | $5.21 | 770 | 1,900 | 10 | 10 | 10 | 3,090 | 3,090 |  |
| 126 | Zanzibar | region | 1,300 | 0 | $6.16 | 1,530 | 210 | 10 | 10 | 10 | 3,070 | 3,070 |  |
| 127 | Santiago | city | 260 | 0 | $0.61 | 2,750 | 0 | 10 | 10 | 0 | 3,030 | 3,030 |  |
| 128 | Luxembourg | country | 70 | 0 | $0.38 | 450 | 2,400 | 20 | 10 | 0 | 2,950 | 2,950 |  |
| 129 | Helsinki | city | 170 | 0 | $0.07 | 2,520 | 170 | 20 | 10 | 0 | 2,890 | 2,890 |  |
| 130 | Lithuania | country | 70 | 0 | — | 360 | 2,400 | 20 | 10 | 10 | 2,870 | 2,870 |  |
| 131 | Slovakia | country | 40 | 0 | — | 200 | 2,400 | 30 | 10 | 10 | 2,690 | 2,690 |  |
| 132 | Brussels | city | 110 | 0 | $0.04 | 2,160 | 320 | 0 | 20 | 0 | 2,610 | 2,610 |  |
| 133 | Delhi | city | 170 | 6 | $2.35 | 2,160 | 210 | 0 | 10 | 0 | 2,550 | 2,550 |  |
| 134 | Medellin | city | 590 | 0 | $0.77 | 1,890 | 0 | 10 | 30 | 0 | 2,520 | 2,520 |  |
| 135 | Tunisia | country | 320 | 0 | $1.99 | 1,580 | 480 | 20 | 10 | 90 | 2,500 | 2,500 |  |
| 136 | Chiang Mai | city | 480 | 0 | $0.66 | 1,950 | 0 | 10 | 10 | 0 | 2,450 | 2,450 |  |
| 137 | San Sebastian | city | 320 | 1 | $6.38 | 2,110 | 0 | 10 | 10 | 0 | 2,450 | 2,450 |  |
| 138 | Abu Dhabi | city | 140 | 0 | $3.04 | 910 | 1,300 | 20 | 10 | 0 | 2,380 | 2,380 |  |
| 139 | Bogota | city | 210 | 0 | — | 1,860 | 260 | 10 | 20 | 0 | 2,360 | 2,360 |  |
| 140 | Brisbane | city | 170 | 0 | $12.11 | 2,150 | 0 | 0 | 10 | 0 | 2,330 | 2,330 |  |
| 141 | Ghana | country | 590 | 0 | $3.14 | 960 | 720 | 10 | 0 | 10 | 2,290 | 2,290 |  |
| 142 | Bergen | city | 110 | 0 | $0.43 | 2,140 | 0 | 0 | 10 | 0 | 2,260 | 2,260 |  |
| 143 | Armenia | country | 110 | 0 | $21.46 | 520 | 1,600 | 10 | 10 | 0 | 2,250 | 2,250 |  |
| 144 | Namibia | country | 720 | 0 | $6.15 | 480 | 1,000 | 10 | 0 | 10 | 2,220 | 2,220 |  |
| 145 | Manila | city | 260 | 0 | $0.48 | 1,530 | 390 | 10 | 10 | 0 | 2,200 | 2,200 |  |
| 146 | Split | city | 90 | 0 | $0.84 | 2,030 | 40 | 0 | 10 | 0 | 2,170 | 2,170 |  |
| 147 | Positano | city | 260 | 0 | $1.48 | 1,860 | 0 | 10 | 10 | 0 | 2,140 | 2,140 |  |
| 148 | Puglia | region | 260 | 0 | $1.86 | 1,810 | 0 | 10 | 10 | 0 | 2,090 | 2,090 |  |
| 149 | Marseille | city | 90 | 1 | $9.76 | 1,950 | 0 | 10 | 10 | 0 | 2,060 | 2,060 |  |
| 150 | Halifax | city | 170 | 0 | $2.53 | 1,810 | 0 | 0 | 0 | 0 | 1,980 | 1,980 |  |

### First 100: finish these, and fix a few names

The first 100 were an editorial and NTTO list, not a search-volume ranking. Their head-term volumes, for context (same endpoint and pull):

- Median “best time to visit” volume among the first 100: **1,900**.
- Highest: Japan 27,100 (KD 2, CPC $1.77). Then Ireland 18,100 and Iceland 18,100.
- **Name aliases (do not add the volumes together; they may be grouped):** New York 8,100 vs New York City 880; Korea 5,400, the same as South Korea 5,400; United Kingdom 880 vs UK 880 vs Britain 20; Czech Republic 140 vs Czechia 10; UAE 50, the same as United Arab Emirates 50.
- Lowest official-name volumes still on the list: Czechia 10, Manchester 20, United Arab Emirates 50, Santo Domingo 50, Frankfurt and Lyon 70. Those city sheets can still be justified as companions to a high-demand country, but the UAE country *name* should not be the URL people are expected to find.

Highest first-100 head terms (keyword overview, 15 November 2026 pull):

| Place | Kind | Best time vol. | KD | CPC | Travel demand | Alias |
| --- | --- | --- | --- | --- | --- | --- |
| Japan | country | 27,100 | 2 | $1.77 | 100,050 |  |
| Ireland | country | 18,100 | 0 | $2.02 | 76,840 |  |
| Iceland | country | 18,100 | 0 | $1.37 | 72,640 |  |
| Italy | country | 14,800 | 0 | $2.98 | 80,750 |  |
| Costa Rica | country | 14,800 | 1 | $2.38 | 60,830 |  |
| Cancun | city | 12,100 | 2 | $2.19 | 61,070 |  |
| Portugal | country | 12,100 | 0 | $2.03 | 60,330 |  |
| Greece | country | 9,900 | 0 | $2.12 | 69,840 |  |
| Thailand | country | 9,900 | 11 | $2.89 | 54,290 |  |
| Switzerland | country | 9,900 | 0 | $2.37 | 42,950 |  |
| Aruba | country | 9,900 | 2 | $0.93 | 41,590 |  |
| Bali | city | 9,900 | 3 | $1.15 | 29,140 |  |
| Banff | city | 9,900 | 4 | $2.34 | 25,050 |  |
| Bahamas | country | 8,100 | 0 | $3.13 | 63,750 |  |
| New Zealand | country | 8,100 | 0 | $2.70 | 36,200 |  |
| Vietnam | country | 6,600 | 1 | $1.77 | 50,110 |  |
| Australia | country | 6,600 | 0 | $2.66 | 43,500 |  |
| Cabo San Lucas | city | 6,600 | 0 | $2.96 | 37,780 |  |
| Peru | country | 6,600 | 0 | $4.37 | 36,830 |  |
| Mexico City | city | 6,600 | 0 | $1.59 | 34,240 |  |

## 2. Fact and hub page demand

Volumes below are from the same keyword-overview pull unless noted. Closely related month phrasings are *not* summed in the unique-intent column.

### Month hubs — worth building

Head term to use: **“best places to visit in {month}”**. February and November are 12,100 each; December 9,900; July 8,100. The weaker “where is warm / hot in {month}” queries should be a section on that page, written from the climate tables you already have, not a second set of URLs.

| Month | Best places to visit | Where to go | Where to travel | Where is warm | Where is hot | Cheapest places | Best beach destinations | Approx. unique intent |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| January | 6,600 | 1,900 | 1,900 | 260 | 260 | 1,300 | 90 | 10,150 |
| February | 12,100 | 2,400 | 2,400 | 880 | 70 | 1,000 | 170 | 16,550 |
| March | 6,600 | 720 | 1,300 | 210 | 210 | 390 | 140 | 8,640 |
| April | 5,400 | 590 | 880 | 90 | 90 | 260 | 320 | 6,950 |
| May | 6,600 | 390 | 720 | 70 | 70 | 210 | 70 | 7,670 |
| June | 4,400 | 1,000 | 1,000 | 10 | 10 | 210 | 90 | 5,710 |
| July | 8,100 | 720 | 880 | 10 | 10 | 1,000 | 110 | 10,100 |
| August | 5,400 | 1,600 | 1,600 | 20 | 20 | 880 | 140 | 8,040 |
| September | 4,400 | 590 | 720 | 40 | 40 | 140 | 390 | 5,690 |
| October | 6,600 | 1,600 | 1,600 | 210 | 210 | 210 | 590 | 9,210 |
| November | 12,100 | 2,400 | 1,900 | 70 | 140 | 210 | 390 | 15,240 |
| December | 9,900 | 2,400 | 2,400 | 320 | 320 | 590 | 210 | 13,420 |

Unique-intent totals across 12 months: about **117,370** US monthly searches. “Best places to visit in {month}” alone sums to **88,200**. People Also Ask on “where to go in January” (SERP advanced, 15 November 2026) asked about the warmest place in the US, where is warm and cheap, and which country is best in January — all answerable from destination climate tables once enough sheets exist. Do not publish a month hub until it can list more than a handful of sourced places.

The generic head term **“best time to visit”** itself is 18,100 (KD 1, CPC $6.06). That can be the homepage or a parent hub that links to the 12 month pages and to the destination sheets.

### List-style fact hubs

| Query | Volume | KD | CPC | Verdict |
| --- | ---: | ---: | ---: | --- |
| countries that drive on the left | 8,100 | 11 | $0.01 | **Build.** Same volume for “on the right” and for “left hand traffic countries” (KD 18). “Which countries drive on the left” is 1,600 (KD 7). Related searches also want a map and a Europe subset. Official highway codes already sit on the sheets; the list page is a view of that data. |
| countries that drive on the right | 8,100 | 11 | $0.01 | **Build**, or one page that covers both sides with a toggle or two sections. |
| eurozone countries | 6,600 | 42 | — | **Build with care.** “What countries use the euro” 4,400 (KD 31); “countries that use the euro” 2,900 (KD 30). Harder SERP, official list from the EU/ECB, but do not turn it into a currency converter. |
| travel adapter | 8,100 | 9 | $0.43 | **Build a practical hub**, not a product-catalog or converter tool. PAA asks whether Americans need an adapter in Europe, and the difference between an adapter and a converter. “Do I need a travel adapter” was only 10; per-country “do I need an adapter for X” is usually missing from the database or in the low hundreds (Japan is the high at 480). The useful page is “what you need by country,” linking to each sheet and, later, to the right adapter offer. |
| type G / C plug countries | 70–110 | 14–26 | ~$0.06 | **Do not build as standalone list pages yet.** Too thin. Fold plug types into the adapter hub. |
| countries with safe tap water | 110 | 7 | — | **Do not build a thin list yet.** The exact brief phrase “countries where tap water is safe” was not in the Labs database. Related searches want maps and “best tap water” listicles. Keep the fact on each sheet (CDC or a cited official line). Revisit a list once many sheets have a sourced answer. |
| tipping by country | 90 | 4 | — | **Do not build a global tipping directory yet.** “Tipping in Europe” is 480 (KD 1, CPC $11.82) and is the only list-like tipping query with modest demand. Keep tipping on the destination sheet. |

## 3. Which single facts deserve their own URL later

**Proposed threshold:** a later standalone URL is worth considering when a distinct travel-fact query has **at least 1,000 US monthly searches**, the destination sheet is already live, and Search Console shows that query is not already being captured by the sheet. Use **2,000** as a higher bar for “{place} weather in {month}” pages, because those are naturally a month jump-link on the sheet.

Why 1,000: among “best time to visit {place}” queries in this pull, 129 of 368 database hits are at or above 1,000, and the first-100 median is 1,900. For rarer fact types the distribution falls off fast, so 1,000 marks a genuinely separate audience rather than a heading on the sheet.

How the fact types look in this pull (keyword overview, US English):

| Fact type | Keywords in database | Median vol. | Count ≥500 | Count ≥1,000 | Count ≥2,000 | Own URL? |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Best time to visit {place} | 368 | 480 | 177 | 129 | 77 | No — this *is* the destination sheet. |
| {place} weather in {month} | 4,207 | 210 | 1,304 | 824 | 331 | Not at first. Use in-page month anchors. Revisit a split only at ≥2,000 *and* after Search Console evidence. Highest in this set: “New York City weather in March” 12,100; Miami in January and December 9,900; Cancún in December 8,100. |
| Tipping in {place} | 299 | 20 | 17 | 8 | 0 | Only the eight ≥1,000, and only later if the sheet section does not rank: Italy 1,900; Japan 1,600; Mexico, Canada, London, Ireland 1,300; France and Spain 1,000. |
| Can you drink tap water in {place} | 311 | 10 | 4 | 1 | 1 | Almost never. The only ≥1,000 query is “can you drink tap water in New York City” at 2,400, which is largely a local water-quality question, not a travel one. International travel queries sit at 210–390 (Mexico, Italy, Paris, Japan, Costa Rica, Puerto Rico). Keep one sourced sentence on the sheet. |
| Plug type / what plug does {place} use | 99 + 63 | 90 / 50 | 16 combined ≥500 | 6 ≥1,000 | 1 | Rarely. The one large outlier is “plug type Ireland” at 4,400. Thailand 1,900; Greece and Vietnam 1,600; France and Spain 1,300. Prefer the sheet plus the adapter hub. |
| Do I need an adapter for {place} | 19 | 20 | 0 | 0 | 0 | No. Japan is highest at 480. Handle in the adapter hub and on the sheet. |
| What currency does / currency in {place} | 169 + 246 | 210 / 1,000 | many | many | 102 for “currency in” ≥2,000 | **No standalone converter, and no currency-only URL.** The volumes are real (India 74,000, Mexico / Dominican Republic / South Korea / Vietnam 27,100) but intent is mixed and a converter is out of scope. Keep the currency *name* on the sheet. |
| {place} time zone / time difference | 365 + 150 | 880 / 1,600 | many | 177 / 89 ≥1,000 | 121 / 61 ≥2,000 | **No.** High volume, mostly utility, and timeanddate-style tools already own it. Keep the IANA zone name on the sheet. |

## 4. Sections people ask about that the sheets do not cover yet

Sample of 15 destinations: Paris, Japan, Cancún, London, Rome, Bali, Iceland, Thailand, Sydney, Athens, Dubai, Norway, Philippines, Cape Town, and Peru. Keyword volumes are from keyword overview; questions and related searches are from SERP advanced, both pulled 15 November 2026.

### Volume on gap topics (15 destinations)

Close variants are shown raw; the unique-intent column takes the maximum of close pairs (for example esim / esim for; is X safe / safe to travel).

| Place | eSIM | Emergency no. | Is it safe? | Public holidays | Trip cost | Vaccinations | Wi‑Fi | Approx. unique intent |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Paris | 90 | 170 | 1,600 | 50 | 480 | 0* | 20 | 2,410 |
| Japan | 5,400 | 1,300 | 2,400 | 590 | 2,900 | 590 | 390 | 13,570 |
| Cancún | 20 | 0* | 9,900 | 0* | 210 | 20 | 20 | 10,170 |
| London | 170 | 260 | 1,900 | 0* | 210 | 10 | 40 | 2,600 |
| Rome | 30 | 0* | 880 | 10 | 170 | 0* | 30 | 1,120 |
| Bali | 320 | 0* | 3,600 | 10 | 260 | 260 | 20 | 4,470 |
| Iceland | 260 | 0* | 880 | 70 | 390 | 20 | 70 | 1,690 |
| Thailand | 720 | 140 | 6,600 | 260 | 590 | 1,300 | 50 | 9,660 |
| Sydney | 10 | 0* | 390 | 0* | 0* | 0* | 0* | 410 |
| Athens | 0* | 0* | 1,300 | 0* | 0* | 0* | 20 | 1,350 |
| Dubai | 260 | 50 | 5,400 | 170 | 260 | 10 | 40 | 6,200 |
| Norway | 110 | 110 | 880 | 210 | 110 | 10 | 50 | 1,480 |
| Philippines | 880 | 170 | 2,400 | 480 | 170 | 140 | 70 | 4,410 |
| Cape Town | 0* | 0* | 4,400 | 10 | 10 | 40 | 0* | 4,470 |
| Peru | 320 | 20 | 3,600 | 320 | 90 | 320 | 20 | 4,760 |

\* `0*` means the exact phrase was not in the Labs database, or it returned no volume — not a measured zero from a found record in every case. See `research/data/gap_queries_long.csv` for in-database flags.

Pattern totals across the 15 (raw sums, so close variants can overlap): “is {place} safe” 46,130 (all 15 had volume); “is {place} safe to travel” 14,250; “esim {place}” 8,590; “how much does a trip to {place} cost” 5,850; “vaccinations for {place}” 2,720; “emergency number in {place}” 2,220; “public holidays in {place}” 2,180.

### People Also Ask, and whether a sourced sentence is possible

SERP advanced returned four PAA questions on most of these queries (a typical SERP block, not an exhaustive list). Themes, with a source flag:

| Theme from PAA / related searches | Example | Official source possible? |
| --- | --- | --- |
| Hottest, coldest, or rainy month | “Which month is the hottest in Paris?”; “What is the rainy season for Cancun?” | **Yes.** Already the job of the climate table (named station, 1991–2020 normals). Add a one-line answer above the table so it can match these questions. |
| Best vs worst month, or cheapest month | “What are the best and worst months to visit Cancun?”; “What month is the cheapest to go to Cancun?”; related: “cheapest time to visit Japan” | **Climate part, yes. Price part, no**, not from a stable official source. Do not invent fares or hotel prices. |
| How many days to spend | “How many days do you need in Paris?” | **No official source.** Editorial, and easy to get thin. Skip, or keep it out of the sourced-fact template. |
| Cost of a trip | “Is $5000 enough for a trip to Japan?” (PAA); “how much does a trip to Japan cost” is 2,900 | **No reliable official traveler budget.** Do not invent a daily number. Omit, or later cite a dated official statistic without turning it into a budget calculator. |
| Safety | High keyword volume (Cancún 9,900; Thailand 6,600; Dubai 5,400; Cape Town 4,400) | **Yes, with care:** a dated sentence that points at the US State Department travel advisory (and does not rewrite it into a yes/no). This is sensitive and must stay dated. |
| Vaccinations | “vaccinations for Thailand” 1,300; Bali 260; Peru 320 | **Yes:** CDC traveler pages, dated the day they were checked. Same rule as tap water: if CDC is silent, say so. |
| Emergency numbers | “emergency number in Japan” 1,300; London 260; Paris 170 | **Yes:** official government / national emergency pages (and 112 in the EU). A short sourced line on the sheet is enough. |
| Public holidays | Japan 590; Philippines 480; Peru 320 | **Yes:** official government holiday calendars, dated by year. Useful and official, but they go stale every year, so only add them if you are willing to refresh. |
| eSIM / connectivity | “esim Japan” 5,400; Philippines 880; Thailand 720 | **Weak official source.** Regulators and licensed operators can be cited, but plans change often. Do not add an eSIM matrix you cannot maintain. A short “check a licensed operator; this is not a recommendation” note is the most you should attempt, if anything. |
| Wi‑Fi / internet | Low volume (Japan 390 is the high in this sample) | Usually **no** stable official source for “is there good wifi.” Skip. |
| Adapter vs converter, phone chargers | PAA on “do I need a travel adapter” | **Partly:** plug type and voltage from IEC (already on the sheet) can answer “do Americans need an adapter in Europe?” and “does a phone charger need a converter?” A converter *product* or matrix is out of scope. |
| Seasonal events and local gotchas | Cherry blossoms (related: Japan); seaweed in Cancún; northern lights in Iceland; “3 date rule in Japan”; dress questions | **Sometimes official** (meteorological or municipal calendars). Social-media “rules” are not. Only add a line you can date to a primary source. |

Related searches also repeat “worst time to visit,” “from the USA,” and city-within-country queries (Thailand → Phuket, Krabi; Iceland → Reykjavik; Dubai → Abu Dhabi). That supports building the obvious child city sheets when the country page goes up, not years later.

## 5. Phase 2 demand, briefly

### Airline baggage rules — strong, specific, worth building

Generic queries (keyword overview, 15 November 2026 pull):

| Query | Volume | KD | CPC |
| --- | ---: | ---: | ---: |
| carry on bag size | 165,000 | 45 | $1.25 |
| carry on size | 27,100 | 51 | $1.07 |
| personal item size | 22,200 | 13 | $1.96 |
| checked bag fee | 1,300 | 36 | $4.68 |
| airline carry on rules | 1,300 | 62 | $1.15 |
| airline baggage allowance | 1,000 | 54 | $2.02 |
| international baggage allowance | 390 | 15 | $0.54 |

The generic terms are competitive. The better pages are **airline-specific**, sourced to the carrier’s published rule and dated. Unique-intent totals below take the maximum of “baggage allowance” and “luggage allowance,” then add carry-on size, checked-bag fee, and personal-item queries (not double-counted). Top airlines in this pull:

| Airline | Approx. unique intent | Baggage allowance | Carry-on size | Checked bag fee | Personal item | Top query in set |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Southwest | 249,300 | 135,000 | 90,500 | 22,200 | 1,600 | southwest baggage allowance (135,000, KD 13) |
| American Airlines | 179,200 | 49,500 | 110,000 | 18,100 | 1,600 | american airlines carry on size (110,000, KD 7) |
| Delta | 90,300 | 2,900 | 74,000 | 12,100 | 1,300 | delta carry on size (74,000, KD 0*) |
| United | 71,400 | 33,100 | 22,200 | 14,800 | 1,300 | united baggage allowance (33,100, KD 14) |
| Frontier | 65,790 | 590 | 22,200 | 33,100 | 9,900 | frontier checked bag fee (33,100, KD 14) |
| JetBlue | 37,220 | 9,900 | 22,200 | 4,400 | 720 | jetblue carry on size (22,200, KD 9) |
| Alaska Airlines | 32,890 | 14,800 | 14,800 | 2,900 | 390 | alaska airlines baggage allowance (14,800, KD 34) |
| British Airways | 15,720 | 8,100 | 6,600 | 880 | 140 | british airways baggage allowance (8,100, KD 13) |
| Spirit | 13,190 | 590 | 6,600 | 3,600 | 2,400 | spirit carry on size (6,600, KD 12) |
| Air Canada | 11,880 | 1,600 | 5,400 | 4,400 | 480 | air canada carry on size (5,400, KD 14) |

Thirty-eight of the 44 airlines queried have at least 1,000 unique-intent volume; 17 have at least 5,000. Start Phase 2 baggage with the US carriers people actually fly, cited to each airline’s official page, and refresh when the rule changes. PAA on “airline baggage allowance” included United Basic Economy carry-on and toiletry limits — source those to the carrier and TSA, and do not guess.

Keyword suggestions for “baggage allowance” are dominated by Southwest variants at 135,000–165,000, which is the same demand cluster, not seven separate audiences.

### Gateway airports — high raw volume, mostly navigational

Almost every large airport name or code we queried is in the tens or hundreds of thousands (for example “Los Angeles International Airport” 1,220,000, KD 44; “Heathrow Airport” and “LHR airport” 135,000 each, KD 51 for the name). That demand is people trying to reach the official airport site, a flight, or a map. It is a poor target for a new informational domain.

“Airport terminals” is 33,100 but KD 100. “What terminal is my flight” is 110. “How early to arrive at airport international” was not in the database.

**Recommendation:** still build gateway-airport pages as companions to destination sheets (IATA code, official site, any *quoted, dated* fact the airport publishes). Do not plan them as traffic prizes for the airport’s own name. Baggage-rule pages are the stronger Phase 2 search opportunity.

## Method and limits

- Candidate universe: 271 places not in the first-100 list in `REPORT.md` (leftover cities in planned countries, plus new countries and cities commonly searched by US travelers). National parks, Las Vegas, and Orlando/theme-park destinations were excluded.
- First 100 places were queried on the same patterns, including monthly weather, so their numbers can be compared on the same footing (`research/data/destinations_first100.csv` and `destinations_all_by_best_time.csv`).
- We did not run per-keyword SERP competitor analyses, so “winnability” is KD plus a qualitative reading of navigational intent, not a full SERP audit. The site is new, so even KD 0 head terms will be a slow fight.
- Some exact phrases are missing from the Labs database (many “do I need an adapter for X” queries, some emergency-number phrases). Absence is reported as not in database, not as zero demand.
- Georgia (the country), York, Victoria, and similar names can be ambiguous. Georgia’s “best time” volume is only 590 and should not be treated as Tbilisi demand (Tbilisi itself is 90).

## Files

All raw tables are under `research/data/`:

- `keyword_overview.csv` — every labeled keyword we requested, with volume, CPC, KD, intent, last-updated time, and in-database flag
- `keyword_suggestions.csv` — suggestions for 16 seeds
- `people_also_ask.csv`, `related_searches.csv` — SERP advanced extracts
- `destinations_candidates_top150.csv`, `destinations_candidates_all.csv`, `destinations_first100.csv`, `destinations_all_by_best_time.csv`
- `hub_month_pages.csv`, `hub_fact_pages.csv`, `standalone_fact_queries.csv`
- `gap_queries_15_destinations.csv`, `gap_queries_long.csv`
- `phase2_airports.csv`, `phase2_airlines.csv`
- `api_spend_log.csv`, `api_run_meta.json` — spend and run metadata (no credentials)

