# thetravelfact.com — what to build

Research date: 14 November 2026. Every figure is **VERIFIED** (source URL) or **ESTIMATE** (assumptions stated). A score is a judgment, not a measurement. Google Trends figures are US, broad match, weekly, 14 Nov 2021–14 Nov 2026 (261 weeks). Interest is an index, not a search count. Ratios use the mean of that index against the anchor `chainsaw chain size`. When the anchor was in the same request, the ratio is direct. Otherwise the keyword was paired with `baggage fees`, and that ratio was multiplied by the baggage-to-anchor ratio. Two baggage-to-anchor requests disagreed (10.0× and 11.8×), so bridged figures are shown as a range.

No Ahrefs or Semrush keyword volume was available without a login. One UK tool reports `chainsaw chain size chart` at 50 searches/month in the UK (SEOmonitor, [chainsaw maintenance AI visibility](https://www.seomonitor.com/ai-visibility/uk/category/chainsaw-maintenance)). That is a different country and a different phrase. It is not used to scale any US number. Unsourced “keyword list” blogs were discarded.

## Ranked shortlist

Weights: demand 30, income on his open accounts 25, chance of surviving a one-line answer on Google 15, data license and upkeep 10, page count 10, competition and hard constraints 10. Hard constraints override the score: no national parks (that is [tourordiy.com](https://tourordiy.com/)), no Las Vegas and no entertainment venues, no lead forms.

| Rank | Use | × anchor, US Trends, 5-year mean | Score | Verdict |
| --- | --- | --- | ---: | --- |
| 1 | Staged hub: one destination sheet that already holds the other facts | Covers the rows below | 7.6 | Build this |
| 2 | Best time to visit, with a month table | 38× ([batch](#demand-audit)) | 6.7 | Launch section |
| 3 | Airport facts | Security waits 2.6×; airport codes ~70×; airport parking ~81× | 6.6 | Add second, gateways only |
| 4 | Cruise port facts | ~45–50× | 6.2 | Later, terminal facts only |
| 5 | National parks | ~60–75× | 5.7 | Do not build. Overlaps TourOrDIY |
| 6 | Airline baggage and carry-on size | Fees 10–12×; carry-on 4–8× | 5.6 | Add third |
| 7 | Flight time and distance | ~130–160×, noisy | 5.6 | Do not build a city-pair grid |
| 8 | Plugs and voltage | Plug type 9.8×; travel adapter 7× and rising | 5.4 | A block on the country sheet, not its own site |
| 9 | Visa and entry | 18×, and 32× in the last 52 weeks | 5.2 | Last, and only as a link to the official page |
| 10 | Driving rules | Italy 0.9×; “international driving permit” 2.8× | 4.7 | A block, then its own URL only if Search Console shows the query |
| 11 | Passport and REAL ID | Renewal ~48×; REAL ID on the order of 100×, wide error | 4.6 | A few official explainers, not the site |
| 12 | Time zones and currency | “Time difference” ~60×, noisy; currency converter ~26× and falling | 4.6 | Name them on the sheet. Do not build converters |
| 13 | Tap water | “Is tap water safe” 4.3× | 3.9 | One cited sentence |
| 14 | Tipping | “Tipping in Italy” 0.19×; the generic phrase is about 1× or less | 2.7 | One cited sentence |

The hub scores higher than any single section because the domain name is the product. A thin launch of all 14 sections at once would score closer to 5. That version matches Google’s warning about many topics and automation. The staged version does not.

## Recommendation

Use thetravelfact.com as a broad travel-facts hub. Ship it as one deep template, then add sections. The launch template is a destination sheet. Each sheet is one URL and already contains the other facts, so the site is a hub on day one without being fourteen thin sites.

Launch order:

1. **Destination sheets.** Month-by-month temperature and rain from a named station, plus plug, voltage, driving side, tipping, tap water, currency name, time-zone name, and a link to the official entry page. Hotel, tour, and adapter offers sit on the same page.
2. **Gateway airports** for those destinations. Identity from OurAirports. Hotels via Expedia. Do not write a parking marketplace.
3. **Airline carry-on and baggage** for airlines those pages name. Amazon luggage.
4. **Split a fact onto its own URL only after** Google Search Console shows impressions for that fact on the parent page.
5. **Cruise ports** that belong to destinations already built. Terminal, dock or tender, and walking distance, cited to the port authority. No tour-versus-DIY calculator. That job is TourOrDIY.
6. **Entry rules** for US, UK, Canadian, and Australian passports, as a dated link to the government page, after a human check.
7. **Do not add** national parks, Las Vegas, theme parks, show and nightlife guides, currency or time-zone converters, flight-status pages, a city-pair flight-time grid, or a 200-by-200 visa matrix.

### How the sections link

Link only when the fact is about that place. A destination links to its gateway airports, the country sheet if one is later split out, and the cruise port if it is a port. An airport links to its city and to the baggage page of airlines that publish a fee there. An airline page links back to the hubs it uses. A country sheet links to the cities already built. There is no sitewide footer of every section. A page that links to unrelated facts looks like a directory, and it does not help the reader who came for Rome in October.

### Does Google reward a broad new hub?

Google does not require a niche site. John Mueller, 5 August 2023: “You don’t need to have a niche site in order to rank in Google; in fact, sometimes that’s a good way not to rank.” A page does not have to sit on a site “related to the niche” to be useful ([Search Engine Roundtable, 8 Aug 2023](https://www.seroundtable.com/google-niche-site-seo-ranking-topic-35830.html)). In a 26 June 2020 office hour he said one strong site covering many topics can make sense, and that splitting a section onto a new domain is a marketing choice, not an automatic ranking gain. He also said ten or twenty near-duplicate sites start to look like doorways ([English Google SEO office-hours, 26 June 2020](https://www.youtube.com/watch?v=zASRtpEkQio)).

The same docs warn against the failure mode. Google’s people-first guide asks whether the site has a primary purpose, and whether the publisher is “producing lots of content on many different topics in hopes that some of it might perform,” or “using extensive automation to produce content on many topics” ([Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). Scaled content abuse is many pages generated mainly to manipulate rankings, including AI pages that add nothing, and scraped or stitched pages ([Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)).

Read together: breadth is allowed, and a niche domain is not a bonus. A new site that stamps every fact type, every month, and every city pair on day one is the pattern those policies describe. A hub with one stated job — sourced trip facts, each number dated — is a primary purpose. “Travel facts” is one topic. Visa rules, baggage, and climate are sections of that topic, not unrelated businesses.

### Page-count plan

| Section | Pages | Basis |
| --- | ---: | --- |
| Destination sheets | 400–800 | **ESTIMATE.** About 150 countries with real US, UK, Canadian, or Australian travel, plus a few cities in the top countries. One URL per place, with the 12 months in a table. Not a keyword census. |
| Extra month URLs | 0 at launch | Add one only if Search Console shows a distinct month query. A default of 12 URLs per city is how thin duplicates get made. |
| Airports | Start with the gateways of the first 100 destinations. Ceiling 1,154 | **VERIFIED** file count: OurAirports CSV on 14 Nov 2026 has 86,363 rows, 1,154 large airports with `scheduled_service=yes`, 2,116 medium with scheduled service, 4,336 scheduled in total ([airports.csv](https://davidmegginson.github.io/ourairports-data/airports.csv)). Most of the 86,363 have no search demand. |
| Airlines | 150–250 | **ESTIMATE** of airlines with a public English fee page a tier-1 traveler might search. |
| Country sheet split out from the destination page | Up to ~200 | Only where a fact query earns impressions. |
| Cruise ports | A few hundred, not 2,312 | **VERIFIED** competitor inventory: CruiseMapper says 2,312 ports, including 690 river ports ([cruisemapper.com/ports](https://www.cruisemapper.com/ports)). Do not copy that database. Publish a port only when a port-authority page states the fact. |
| Visa pairs | At most four passports times the destinations already built | Not 200×200. |
| Flight-time pairs, converters, parks, Las Vegas | 0 | |

Useful total if the hub is finished the careful way: **ESTIMATE 2,000–4,000 pages.** The combinatorial version (city pairs, passport × destination, destination × month) can pass 50,000 pages and is the version not to build.

### Traffic and revenue

There is no traffic history on this domain (no Tranco rank on 14 Nov 2026). The ranges below are **ESTIMATE** products of assumptions, and a reasonable band is about half to double.

Assumptions: a new domain with no measured backlinks; head terms stay with incumbents and with Google’s own boxes; a long-tail page that ranks at all gets the visits/page below.

| Case | Indexed pages | Visits per indexed page per month | Visits per month |
| --- | ---: | ---: | ---: |
| 12-month base | 300 | 15 | 4,500 |
| 12-month bull | 1,000 | 60 | 60,000 |
| 24-month base | 1,200 | 25 | 30,000 |
| 24-month bull | 3,000 | 80 | 240,000 |

Display ads, per 1,000 sessions. A new site will not be in a premium network at month 12. Mediavine-class networks are cited by publishers as wanting on the order of 50,000 sessions. PubSignal says its own “$29 travel RPM” is a model, not a panel, and then quotes self-reported publisher RPMs whose median it puts at $18, with named reports from about $5 to $45 ([PubSignal travel RPM](https://pubsignal.in/benchmarks/travel-blog-rpm-rates), [how thin that sample is](https://pubsignal.in/blog/ad-rpm-data-sample-size)). Those quotes were not re-opened on each publisher’s site.

| Stage | Planning RPM | What it is |
| --- | --- | --- |
| Year 1, AdSense-class | $4–$10 | **ESTIMATE**, inside the secondary ranges blogs publish for AdSense. Not a measurement of this site. |
| After a premium network accepts it | $12–$25 | **ESTIMATE** planning band inside the publisher-reported travel quotes above. US, UK, Canada, Australia traffic. Other countries pay less. |

Affiliate scenario per 1,000 visits, **ESTIMATE**, every rate below the table is guessed except the commission percents: 8 hotel clicks, 3% of those book inside 7 days, $500 net stay, Expedia 4% = **$4.80**. Six Viator clicks, 5% book, $120 tour, 8% = **$2.88**. Ten Amazon clicks, 6% buy, $35 item, 4% = **$0.84**. Sum about **$8.50** if every guess hits. Planning content will do worse because the cookies are short. Use **$0–$8 per 1,000** as the affiliate band.

Arithmetic on verified rates, so a booking of that size would pay this much. This is not an average order value:

- Viator direct: 8% of the experience. A $100 tour is $8. A $200 tour is $16. Paid after the trip happens. Cancelled bookings do not pay. Cookie 30 days ([Viator partner resources](https://partnerresources.viator.com/)).
- Expedia creator terms, checked 14 Nov 2026: hotel 4% and activities 4% of net transaction value, vacation rental 2%, package 2%, car 1.5%, cruise and flight blank. A $600 hotel stay is $24. Window 7 days. Completed trips only. Points of sale include US, UK, Canada, Australia ([commercial terms](https://creator.expediagroup.com/en-us/commercial-terms)).
- Amazon.com luggage and a travel adapter in “all other” or luggage: 4%. An $80 bag is $3.20. The session is 24 hours, but an item added to the cart in that window can still pay if bought before the cart expires, which Amazon describes as usually 90 days ([rate card](https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ), [24-hour session](https://affiliate-program.amazon.com/help/node/topic/G9SMD8TQHFJ7728F)). Amazon.ca lists luggage at 7%. Amazon.com.au lists luggage at 10%. The current Amazon.co.uk help page lists luggage at 4%, and a second UK schedule URL still shows a higher apparel tier. The dashboard wins.

| Case | Visits / month | Ads | Affiliate at $0–$8 / 1,000 | All-in, ESTIMATE |
| --- | ---: | ---: | ---: | ---: |
| 12-month base | 4,500 | $18–$45 | $0–$36 | about $20–$80 / month |
| 12-month bull | 60,000 | $240–$1,500 | $0–$480 | about $250–$2,000 / month |
| 24-month base | 30,000 | $240–$540 | $0–$240 | about $250–$800 / month |
| 24-month bull | 240,000 | $3,600–$6,000 | $1,000–$2,400 | about $4,500–$8,500 / month |

The bull 24-month ad line uses the premium band, because 240,000 sessions would clear a typical network minimum. The base cases use the lower band. Year-1 income is small. The hub is a 24-month long-tail bet, not a year-1 yield.

### First 100 pages

All 100 are the same destination-sheet template. Places named by the US National Travel and Tourism Office are marked **NTTO**. Everything else is an **editorial** build list so the first 100 can be written. It is not a search-volume ranking. No official UK, Canadian, or Australian outbound ranking was retrieved, so this order follows US departures. Skip Las Vegas, Orlando and other theme parks, and any page whose subject is a show, a casino, or a nightlife district.

**NTTO, calendar 2024 outbound survey** unless noted ([trade.gov, 2024 characteristics](https://www.trade.gov/feature-article/us-outbound-travelers-characteristics-2024)). US residents took 107.7 million international trips. Mexico 39.9 million, Canada 14.1 million, overseas 53.8 million. Top overseas countries: United Kingdom 6.0 million, Italy 4.2 million, France 4.1 million, Dominican Republic 3.7 million, Spain 3.1 million. Mexico cities: Cancun 4.8 million, Mexico City 3.1 million, Cabo San Lucas 1.2 million, Guadalajara 1.0 million, Puerto Vallarta 870 thousand. Canada cities: Toronto 1.8 million, Vancouver 1.2 million, Montreal 949 thousand, Calgary 511 thousand, Banff 279 thousand. Germany is a top-five overseas market in Q3 2025; Japan is a top-five overseas market in Q1 2025 ([Q3 2025](https://www.trade.gov/feature-article/survey-international-air-travelers-results-q3-2025), [Q1 2025](https://www.trade.gov/feature-article/survey-international-air-travelers-results-q1-2025)).

1. Mexico NTTO
2. Cancun NTTO
3. Mexico City NTTO
4. Cabo San Lucas NTTO
5. Puerto Vallarta NTTO
6. Guadalajara NTTO
7. Canada NTTO
8. Toronto NTTO
9. Vancouver NTTO
10. Montreal NTTO
11. Calgary NTTO
12. Banff NTTO
13. United Kingdom NTTO
14. London editorial
15. Edinburgh editorial
16. Manchester editorial
17. Italy NTTO
18. Rome editorial
19. Florence editorial
20. Venice editorial
21. Milan editorial
22. Naples editorial
23. France NTTO
24. Paris editorial
25. Nice editorial
26. Lyon editorial
27. Dominican Republic NTTO
28. Punta Cana editorial
29. Santo Domingo editorial
30. Spain NTTO
31. Barcelona editorial
32. Madrid editorial
33. Seville editorial
34. Mallorca editorial
35. Valencia editorial
36. Germany NTTO Q3 2025
37. Berlin editorial
38. Munich editorial
39. Frankfurt editorial
40. Japan NTTO Q1 2025
41. Tokyo editorial
42. Kyoto editorial
43. Osaka editorial
44. Ireland editorial
45. Dublin editorial
46. Portugal editorial
47. Lisbon editorial
48. Netherlands editorial
49. Amsterdam editorial
50. Greece editorial
51. Athens editorial
52. Santorini editorial
53. Iceland editorial
54. Switzerland editorial
55. Zurich editorial
56. Austria editorial
57. Vienna editorial
58. Czechia editorial
59. Prague editorial
60. Croatia editorial
61. Dubrovnik editorial
62. Hungary editorial
63. Budapest editorial
64. Poland editorial
65. Krakow editorial
66. Turkey editorial
67. Istanbul editorial
68. Morocco editorial
69. Marrakech editorial
70. Egypt editorial
71. Costa Rica editorial
72. Jamaica editorial
73. Bahamas editorial
74. Aruba editorial
75. Panama editorial
76. Colombia editorial
77. Peru editorial
78. Brazil editorial
79. Argentina editorial
80. Chile editorial
81. Thailand editorial
82. Bangkok editorial
83. South Korea editorial
84. Seoul editorial
85. Vietnam editorial
86. Indonesia editorial
87. Bali editorial
88. Singapore editorial
89. Australia editorial
90. Sydney editorial
91. New Zealand editorial
92. India editorial
93. South Africa editorial
94. United Arab Emirates editorial
95. New York City editorial, domestic
96. Miami editorial
97. Honolulu editorial
98. Maui editorial
99. Los Angeles editorial
100. San Francisco editorial

Each sheet: station name and 1991–2020 normals, a “when it is hot, wet, and cold” paragraph that only restates those months, plug and voltage if a primary source states them, driving side if a primary source states it, tipping only with a cited source, tap water as one sentence pointing at CDC or “CDC has no country note,” currency and IANA time-zone name, a link to the government entry page with no rewritten visa rule, gateway airports from OurAirports, and the three affiliate blocks. Date the check. If a fact has no source, leave it off the page.

## Domain history

Current registration is new. Verisign RDAP: created 3 July 2026 16:51:23 UTC, expires 3 July 2027, registrar GoDaddy (IANA 146), nameservers `ns15.domaincontrol.com` and `ns16.domaincontrol.com`, status client delete, renew, transfer, and update prohibited, DNSSEC not signed ([RDAP](https://rdap.verisign.com/com/v1/domain/THETRAVELFACT.COM)). SOA serial `2026070301` matches that day. No MX, no TXT, no AAAA. `www` points at the apex.

The site answers on 76.223.105.230 and 13.248.243.5. ARIN RDAP: 76.223.105.230 is Amazon.com, Inc., handle `AMAZO-4`, net `NET-76-223-0-0-1`. 13.248.243.5 is in Amazon net `AT-88-Z` / `NET-13-244-0-0-1`. HTTP `Server: DPS/2.0.0` and the HTML generator `Starfield Technologies; Go Daddy Website Builder 8.0.0000`. The page is a GoDaddy “Launching Soon” placeholder, copyright 2026, with a contact form ([thetravelfact.com](https://thetravelfact.com/)).

Someone else held the name before. Certificate Transparency shows Let’s Encrypt certificates for the apex and `www` issued 29 Sep 2022, 27 Nov 2022, 27 Jan 2023, 28 Mar 2023, 26 May 2023, 25 Jul 2023, and 23 Sep 2023. The last of those expired 22 Dec 2023. The next certificates are GoDaddy’s, starting 3 July 2026, minutes after this registration ([crt.sh](https://crt.sh/?q=thetravelfact.com)). So a prior operator renewed HTTPS for about a year. What they published is not in the public crawl checked here.

Wayback Machine has no snapshot for the apex or `www` ([availability API](https://archive.org/wayback/available?url=thetravelfact.com)). urlscan.io has no scans in its public 30-day window. AlienVault OTX has zero pulses. Tranco has no rank. A web search for the domain returns the current placeholder. A `site:` query through the same search tool returned no results, which is common for a thin parked page. No deeper URL was found.

Backlinks: no public backlink index could be queried without a login (Ahrefs, Majestic). Absence from Wayback, from news, and from OTX is not a backlink count. Treat the referring-domain count as **unknown**, not zero. GoDaddy’s RDAP was rate-limited, so the prior registrant was not identified. There is no evidence in the sources above that the 2022–2023 site was spam, and there is no evidence it was a real publication. Residual reputation is an unknown, probably small.

`thetravelfacts.com` is a different site, an India-based travel blog registered 24 Feb 2021. It is a name collision, not this domain’s history. `travelfact.com` dates to 1999. `travel-facts.com` was not registered on 14 Nov 2026 (RDAP 404).

## Demand audit

Anchor in the same request as `best time to visit`: anchor mean 1.02, best-time mean 39.12, visa requirements 18.16, baggage fees 10.23, airport security wait times 2.68. Last 52 weeks: anchor 1.23, best time 53.19, visa 39.44, baggage 9.50, security waits 4.79. Visa is the one that grew.

Cleaner baggage-versus-anchor pair: means 32.314 and 2.728, ratio 11.8×. Last 52 weeks 7.9×. Baggage is a bit weaker than its five-year average. Season on that chart: baggage peaks in June, troughs in October.

| Query | How it was scaled | 5-year × anchor | Last 52 weeks |
| --- | --- | ---: | ---: |
| Best time to visit | Same request as the anchor | 38× | 43× |
| Best time to visit Italy | Same request as the anchor | 1.4× | 1.2× |
| Weather in April | 0.52× the best-time term in the same request | ~20× | higher in spring |
| Visa requirements | Same request as the anchor | 18× | 32× |
| Baggage fees | Direct pair | 10–12× | ~8× |
| Carry-on luggage size | Direct, batch with the anchor | 7.6× | 6.4× |
| Carry-on size | Via baggage | ~4× | ~7× |
| Spirit Airlines baggage fees | Via baggage | ~1× | well under 1× |
| Plug type | Direct | 9.8× | 11× |
| Travel adapter | Via baggage | ~7× | ~16× |
| Airport parking | Direct | ~81× | ~70× |
| Airport code | Via baggage | ~70× | ~60× |
| TSA wait times | Via baggage, baggage mean was only 1.7 | ~16× | ~33× |
| Flight time | Via baggage | ~130–160× | similar, noisy |
| Flight status | Via baggage, noisy | hundreds | not a project |
| National parks | Via baggage | ~60–75× | similar |
| Cruise port | Via baggage | ~48× | ~46× |
| Passport renewal | Direct | ~48× | ~38× |
| REAL ID | Via a request where baggage averaged 0.99 | order of 100× | still high, wide error |
| Currency converter | Via baggage | ~26× | ~14× |
| Time difference | Direct, anchor mean 0.88 | ~60× | noisy |
| Time zone converter | Anchor rounded to 0 | not reported | |
| International driving permit | Direct | 2.8× | 3.3× |
| Driving in Italy | Direct | 0.9× | 1.5× |
| Is tap water safe | Direct | 4.3× | 4.0× |
| Tipping in Italy | Direct | 0.19× | 0.17× |
| On-time performance | Direct | 9.4× | ~16× |

One destination, Italy, is already larger than the entire anchor. That is why destination sheets can work, and why the head term “best time to visit Italy” is also a fight.

Seasonality worth planning around, from the month buckets of those requests: best-time head term is mild (October peak, November trough, spread about 10 points on a mean near 39). “Weather in April” is not mild (March mean 58.7, June 5.8). Italy peaks in July. Adapters and plugs peak in spring. Cruise-port searches peak in January. Driving-permit searches peak in June and drop in October. Tap-water searches peak in August. TSA waits are spiky and were much higher in the last year than over five years. Baggage, parks, and flight time dip in the fall.

AI Overviews were not measured on live result pages in this pass. The risk below is a judgment from the shape of the query. A one-fact answer (voltage, currency, time difference, “do I need a visa”) is high risk. A month table, a sourced fee, or a terminal description is medium risk. Google can still summarize the table.

## Competitors and 2025–26 domains

Tranco rank on 13 Nov 2026, rank 1 being the most visited. Tranco is a research ranking, not a visit count. This domain, tourordiy.com, and sawchainsize.com had no rank.

| Site | Tranco rank | Why it matters |
| --- | ---: | --- |
| flightradar24.com | 995 | Real-time flights. Not the product. |
| nps.gov | 1,909 | Parks. Also why a second park site loses. |
| timeanddate.com | 2,190 | Time zones. |
| flightaware.com | 3,156 | Flight status. |
| rome2rio.com | 3,796 | City-to-city time. |
| xe.com | 4,267 | Currency. |
| tsa.gov | 7,552 | REAL ID and waits. |
| weatherspark.com | 12,141 | When to go and climate. |
| thepointsguy.com | 16,967 | Baggage and fees, among other things. |
| cruisecritic.com | 17,939 | Cruise. |
| travelmath.com | 39,597 | Distance and flight time. |
| passportindex.org | 38,564 | Passports. |
| cruisemapper.com | 42,781 | Ports. |
| seatguru.com | 47,145 | Airline seats. Still ranked. |
| visahq.com | 81,719 | Visas. |
| ivisa.com | 76,977 | Visas. |
| way.com | 104,808 | Parking and related services. |
| joinsherpa.com | 117,255 | Entry rules. |
| holiday-weather.com | 125,855 | When to go. |
| airportia.com | 143,958 | Airport directory. |
| sleepinginairports.net | 155,742 | Airport practical facts. |
| climatestotravel.com | 180,465 | Climate. |
| worldstandards.eu | 194,810 | Plugs. |
| weather2travel.com | 209,376 | When to go. |
| loungebuddy.com | 424,099 | Lounges. |
| whatsinport.com | 598,927 | Cruise ports, far down the list. |

RDAP registration dates for exact-match names. “Not a travel site” means the page that answered was unrelated or empty.

| Domain | Registered | What answered on 14 Nov 2026 |
| --- | --- | --- |
| airportfacts.com | 5 Feb 2025 | No HTTP response |
| airportwaittimes.com | 1 May 2025 | Cloudflare challenge, content not read |
| when-to-go.com | 6 Jul 2025 | No HTTP response |
| traveladapterguide.com | 15 Nov 2025, expires 15 Nov 2026 | Redirects to an unrelated beauty-product URL |
| nationalparkfacts.com | 24 Dec 2025 | GoDaddy site titled “National Park Facts” |
| tippingbycountry.com | 8 Jun 2026 | Live: “Tipping by Country” |
| passportfacts.com | 2 Aug 2026 | Cloudflare challenge, content not read |
| plugfacts.com | 14 Oct 2026 | Live, but it is appliance running cost, not travel plugs |

Older incumbents, so not 2025–26 copycats: besttimetovisit.com (2006), whentovisit.com (2007), baggagefees.com (2008), carryonsize.com (2009), plugtype.com (2009), flighttime.com (1997), cruiseports.com (1998), visarequirements.com (2002), doineedavisa.com (2007). `airlinebaggagefees.com`, `carryonsizechart.com`, `theairportfacts.com`, `voltagebycountry.com`, `realidfacts.com`, `cruiseportfacts.com`, and `countrytravelfacts.com` returned RDAP 404.

The live 2026 tipping site and the 2025 park-facts domain are the ones that matter. The park domain is another reason not to spend this site on parks.

## Section notes

Income rates cited above are not repeated in full. “AIO” means the judgment described in the demand audit.

**When to go.** Demand 38× the anchor, and a single country (Italy) is already 1.4× the anchor, so the long tail is the prize. Seasonality of the head term is mild. Competition is serious: WeatherSpark at Tranco 12,141, plus holiday-weather.com, weather2travel.com, climatestotravel.com, and every tourism board. Affiliate fit is real but the cookies are the problem: people read “best month” months before they book, and Expedia pays for 7 days. Put the hotel and tour links where the dates are, and expect many of those clicks to miss the cookie. Data: US normals from NOAA are openly usable with attribution and no claim of NOAA endorsement ([AWS registry](https://registry.opendata.aws/noaa-climate-normals/)). Global 1991–2020 WMO normals are distributed by NCEI from 141 countries, 6,818 station files ([NCEI product](https://www.ncei.noaa.gov/products/wmo-climate-normals), [readme PDF](https://www.nodc.noaa.gov/archive/arc0216/0253808/6.6/data/0-data/WMO-Normals-9120-Readme.pdf)). A single commercial license for every contributing weather service was not found. Open-Meteo’s free API forbids advertising sites; ads make the use commercial and the paid plan is required. The data itself is CC BY 4.0 ([terms](https://open-meteo.com/en/terms)). Pages: 400–800 sheets, **ESTIMATE**. Red team: do not invent a “best month.” Publish the station numbers and let the reader pick. Do not open 12 URLs per city. Head terms will not rank in year one.

**Airports.** The money query is parking (~81×), and it is transactional. Official airport sites and companies like way.com (Tranco 104,808) already answer it. Airport codes (~70×) are navigational and zero-click. Security-wait phrasing is only 2.6×, while “TSA wait times” is larger and spiky and is a live operations feed, not an evergreen page. Build the airport as the gateway of a destination: codes, terminals if the airport publishes them, the rail or bus a public agency publishes, and hotels. OurAirports repository is dedicated to the public domain under the Unlicense ([LICENSE](https://github.com/davidmegginson/ourairports-data/blob/main/LICENSE)). Parking prices and lounge rules are not in that file. Cite each price to the airport page and date it, or leave it off. Affiliate: Expedia hotels, 4% and 7 days, which fits “I need a room at this airport” better than it fits “best month to visit.” Viator for a transfer only where he is not rebuilding TourOrDIY’s tour-versus-DIY decision. Pages: the 1,154 large scheduled airports are the ceiling; the first wave is the gateways of the first 100 sheets. Red team: a parking table that goes stale is worse than no table. No Las Vegas pages.

**Baggage and carry-on.** Category demand is about 10–12× the anchor. One airline (Spirit) is only about the size of the anchor, and that query was weak in the last year. This is the closest shape to the chainsaw lookup: one entity, a spec table. Affiliate is Amazon luggage at 4% in the US, with a 24-hour window, so the page has to sit next to a bag the reader can buy now. Flight tickets are not on the Expedia rate card. There is no open baggage database. Fees must be restated from the airline page, dated, and linked. They change. Pages: **ESTIMATE** 150–250. AIO risk is medium because Google already shows fee snippets. Red team: a wrong fee is a trust problem and a maintenance job. Do not scrape airline sites against their terms. Do not publish a fee that was not on the airline’s page that week.

**Visa and entry.** Demand is high and it grew (18× to 32× in the last year). It is also the worst liability on the list. A wrong line can strand a traveler. Timatic is IATA’s commercial database and was not licensed here. Wikipedia’s visa tables are CC BY-SA, which is a poor fit for a site he will not want to share-alike. travel.state.gov covers US passports and is a US government work. It does not cover a British, Canadian, or Australian passport. Competitors: joinsherpa.com (117,255), visahq.com, ivisa.com, passportindex.org. His hotel and tour programs are a side effect of the decision, not the product, and visa-agency lead forms are out (no lead selling). Booking.com’s own partnership page does not publish a rate; secondary writeups disagree on the cookie, and new Booking affiliates are being sent through CJ, which for him is still pending. Do not plan income on Booking until his dashboard shows the rate. Pages could be huge and should not be. Red team: do not ship a matrix.

**Plugs and voltage.** Plug type is 9.8× the anchor and the adapter query is rising (about 7× to about 16×). Spring peak. Amazon is the right program, and the intent is close to the purchase. The section is too small and too easily answered in one line to be the whole site. About 200 countries, fewer with real demand. IEC’s world-plug pages are IEC’s copyright. Do not paste a Wikipedia table. State the type and voltage in original sentences and link the primary page. worldstandards.eu is the specialist (Tranco 194,810). `plugfacts.com` (Oct 2026) is not this niche. Red team: a wrong voltage is a damaged device. Check the primary source.

**Tipping.** Head demand is at or below the anchor. Italy, the example country, is 0.19×. A live site, tippingbycountry.com, was registered 8 June 2026. No strong affiliate. One sourced sentence on the destination sheet is enough. AIO risk is high. Customs also change and are often argued. If he has no source, he has no sentence.

**Flight time and distance.** The largest travel index in this set, and a trap. Google Flights and the flight box answer duration. travelmath.com (39,597) and rome2rio.com (3,796) have a decade of links. Great-circle distance can be computed from OurAirports coordinates, which are in the public-domain file. Scheduled block time is not. OpenFlights is old and its license is not a free pass to republish a schedule. Flight status is larger still and belongs to FlightAware (3,156) and Flightradar24 (995). Pages could be enormous and would be scaled content. On-time performance (~9–16×) has a clean US source in the Bureau of Transportation Statistics, and it is still a different product. Red team: a page that says “about 8 hours” with no schedule source is a thin page Google can replace.

**Passport and REAL ID.** Renewal is ~48× and REAL ID remains large after the 7 May 2025 deadline. Both are answered by tsa.gov (7,552) and by State Department pages. The page count is a few dozen state pages, not a programmatic site. passportfacts.com was registered 2 Aug 2026. Do not compete with the agency that issues the document. A short “what to bring to the airport” block that links out is the whole opportunity.

**Cruise ports.** About 45–50× the anchor, January peak, which matches wave season. Viator at 8% and 30 days is the best program he has, and a shore excursion is often booked closer to the sailing than a hotel is. That is the overlap risk: TourOrDIY already decides tour versus DIY for attractions. Keep these pages to the port. Dock or tender, which terminal, distance to the gate, hours, from the port authority. Cruise Critic (17,939) and CruiseMapper (42,781) will own the head terms. whatsinport.com ranks much lower (598,927), so weaker port pages do exist in the results, which is not the same as an opening. Red team: scraping CruiseMapper, and writing “top things to do” pages that recreate TourOrDIY.

**National parks.** Demand is real (~60–75×, May peak). NPS data is a US government work. TourOrDIY already covers all 63 parks, fees, and the tour-versus-DIY decision ([tourordiy.com](https://tourordiy.com/)). nationalparkfacts.com was registered 24 Dec 2025. Building this would split his own authority and sit under nps.gov (1,909). Score is high. The constraint says no.

**Time zones and currency.** “Time difference” is on the order of 60× and currency converter about 26×, falling to about 14× in the last year. timeanddate.com (2,190) and xe.com (4,267) plus Google’s own widgets. IANA time-zone names are free to use. ECB reference rates are free for many uses. Neither fact needs a tool. Put the currency name and the zone name on the destination sheet. A converter is a product he will not win, and it does not pay his affiliate accounts.

**Driving.** One country is about the size of the anchor. The permit query is 2.8× and strongly seasonal (June peak). The family of “driving in X” was not summed; Italy does not imply 200 times that. Expedia cars pay 1.5%, and not in Hong Kong, Japan, Singapore, or South Korea. Rentalcars-style programs inside Travelpayouts were not rate-checked page by page. Data is scattered across government highway codes. Wikipedia’s driving-side tables are CC BY-SA. Pages: one block per country, split later only with impressions. Red team: a wrong “which side” or a wrong permit rule is a safety and legal problem. Cite the government page.

**Tap water.** “Is tap water safe” is 4.3×, August peak. CDC Yellow Book guidance is a US government work and is the source to link, not to rewrite into medical advice. tapwatersafe.com (registered 16 Mar 2024, just outside this window) already occupies the name. About 200 countries, high AIO risk, almost no affiliate (a filter pitcher is a stretch). One sentence and a link.

## Red team of the hub

- The placeholder should be replaced entirely. A “Launching Soon” homepage is what Google has now.
- Bots that fill a template are allowed only where every number has a source line. The scaled-content policy is the main way this project fails.
- YMYL sections (entry, water, driving, voltage) can make the whole domain look careless if one country is wrong. Leave the fact off rather than guess.
- Cookies are shorter than trip planning. Viator 30 days is the longest of the verified programs. Expedia is 7. Amazon is 24 hours unless the item is in the cart. Booking’s cookie was not verified, and CJ is pending, so Booking is not in the plan.
- Travelpayouts’ own help lists Expedia as a 30% share of Expedia’s revenue, not of the booking, and lists Viator at 4% ([reward rates](https://support.travelpayouts.com/hc/en-us/articles/26221139025938-Reward-rates-in-Drive-Targeted-offers)). Direct Viator at 8% is the better contract. Use the dashboard if the two disagree.
- Head terms belong to the Tranco sites above. The hub wins, if it wins, on “Rome in November” plus the plug and the airport, not on “currency converter.”
- `thetravelfacts.com` is a live similar name. Not a trademark opinion. It is a reason to use a distinct title and logo.
- The 2022–2023 certificate history is unexplained. If old spam links appear later, disavow then. Nothing found now says they exist.
- Do not copy Wikipedia tables. CC BY-SA is the wrong license for this business.
- Open-Meteo’s free tier is incompatible with ads.
- Global climate files are hosted by NCEI, but each weather service’s terms were not all read. US normals are the clean set. For other countries, cite the station and drop any country whose service forbids reuse.
- Affiliate income is paid after travel, and free-cancellation hotel bookings will reverse. Do not book revenue at the click.
- No lead forms, no visa agents, no insurance quote widgets, no Las Vegas, no park pages, no tour-versus-DIY widgets.

## What was not verified

Live AI Overview presence. Semrush or Similarweb visit counts (Similarweb’s public API returned 403). Ahrefs or Majestic backlink counts. Booking.com’s current cookie and rate on an official rate card. A full UK, Canadian, and Australian outbound ranking. The content behind Cloudflare on passportfacts.com and airportwaittimes.com. Whether the 2022–2023 site had any audience.
