# Gaps

Checked 14 November 2026. A line here is a fact we would not print because the source was missing, incomplete, or in conflict. The sheets do not fill these in.

## Climate

- **Roma Ciampino (WMO 16239)** has a complete temperature normal and a precipitation normal that is blank for June, July, and August. Rome and the Italy sheet use **Roma Fiumicino (WMO 16242)** instead, and say so. Ciampino was not averaged with Fiumicino.
- **Venezia Tessera (WMO 16105)** leaves the March mean daily maximum blank. The March high cell on the Venice sheet is blank.
- **Puerto Vallarta station 14116** is marked suspended in the SMN catalogue and has no 1991–2020 normal. The sheet uses **El Cuale, station 14339**, in the same municipality.
- **Guadalajara (DGE), station 14066**, also has a 1991–2020 SMN normal. It is not merged with Guadalajara (Obs), station 14065, which is the sheet we published.
- **Tacubaya.** The SMN file issued 6 November 2026 (station 9048) does not match the WMO/NCEI station file `Tacubaya_76680.csv` from the 2023 release. Example: January average high is 22.2°C in the SMN file and 20.8°C in the NCEI file. The sheets use the later SMN file. The two files were not averaged.
- **Ringway (Manchester Airport)** historic Met Office series ends in 2004, when the file says the site closed. That is 14 years of the 1991–2020 period, which is not a normal. The Manchester sheet uses **Woodford**, the nearest station in the Met Office location-specific 1991–2020 set. Woodford is not the city centre and not the airport.
- **Toronto (City)** rainfall is blank for April through October. The sheet prints precipitation instead of rainfall, and says so. Toronto Pearson has a complete rainfall element and was not substituted.
- **Vancouver (Harbour)** has precipitation and temperature, and no rainfall element. The airport composite has rainfall. The sheet keeps the harbour station and prints precipitation.

## Practical facts

- **Plugs.** IEC's world-plugs page is behind a bot check on a direct download. The type, voltage, and frequency lines were taken from that page's country list as retrieved on 14 November 2026 (Mexico 127 V 60 Hz types A and B; Canada 120 V 60 Hz types A and B; United Kingdom 230 V 50 Hz type G; Italy 230 V 50 Hz types C, F, and L). A later direct fetch should re-check the live HTML.
- **Tipping percentages** were not found, in a page we could open, for Toronto, Vancouver, or Banff. Those sheets omit tipping. Canada as a country has no single figure: Montréal's office says 15% before tax and Calgary's says about 15–20% before tax, and those are not averaged. Mexico: Profeco says tipping is voluntary and does not give a customary percent, so none is printed.
- **Tap water.** CDC traveler pages for Mexico (reviewed 3 September 2026), Canada (8 October 2026), the United Kingdom (25 August 2026), and Italy (25 August 2026) do not say whether tap water is safe. The sheets say that, and do not upgrade it into a yes or a no.
- **Driving in Mexico** is cited from the federal highway regulation (Article 109, Diario Oficial, 22 November 2012), which is the right-hand lane on federal highways, with the exceptions in that article. We did not open every municipal traffic code.
- **Highway Code** rule 160 is the Great Britain code. Northern Ireland is not one of these sheets.
- **IANA zone1970.tab** comments label `America/Vancouver` with the abbreviation MST and `America/Edmonton` with CST. Those abbreviations are not printed. The zone names are. Mexican cities are placed with the Ley de los Husos Horarios (text current through the 29 November 2022 reform) plus the IANA name.

## Checked 15 November 2026

- **Milano Malpensa (WMO 16066)** leaves January and December precipitation blank. Milan uses **Milano Linate (WMO 16080)**. The files were not averaged.
- **Napoli Capodichino (WMO 16289)** leaves the May and July mean daily maximum and minimum blank, and leaves July precipitation blank. The cells are blank on the sheet. There is no second Naples station in the submission.
- **Punta Cana (WMO 78479).** The daily-maximum row in that file is numbered 78486, which is Santo Domingo, and the values are not Santo Domingo's own maximums either. The daily-minimum row is numbered 78479, and all twelve values match Santo Domingo's minimums. Temperature is not printed. Precipitation, numbered 78479 and different from Santo Domingo's, is printed.
- **Berlin-Alexanderplatz (WMO 10389)** has no daily maximum, daily minimum, or precipitation total in its WMO file. Berlin uses **Berlin-Tempelhof (WMO 10384)**. Dahlem and Brandenburg are complete and were not merged with Tempelhof.
- **Plugs, 15 November.** A direct download of iec.ch/world-plugs was stopped by a bot check, the same wall as on 14 November. The country lines used for France (230 V, 50 Hz, C and E), Spain (230 V, 50 Hz, C and F), Germany (230 V, 50 Hz, C and F), Japan (100 V, 50 Hz and 60 Hz, A and B), and the Dominican Republic (110 V, 60 Hz, A and B) are the lines returned from that page's country list the same day. Japan's line does not assign 50 Hz or 60 Hz to a city, so neither is chosen. The Dominican Republic tourism site agrees on 110 V and does not name the plug type.
- **Tipping in France** is taken from France.fr, whose own page says it was updated on 6 March 2019. The percentages are that page's. A newer consumer-protection page was not opened on this pass.
- **Tipping in Germany** is the September 2025 German National Tourist Office guide: bills include service, and 10 percent is common. Berlin.de says service is usually not included and gives 5–10 percent in casual places and 10 percent in nicer restaurants. Those pages were not averaged.
- **Tap water.** CDC pages for France and Spain (reviewed 8 October 2026), Germany and Japan (25 August 2026), and the Dominican Republic (3 September 2026) do not give a yes or a no. The Dominican Republic tourism site says tap water is not safe to drink. The sheet quotes that sentence and does not upgrade CDC.
- **Mallorca's time zone.** zone1970.tab comments Europe/Madrid as Spain (mainland) and does not name the Balearics. Real Decreto 236/2002 groups the Balearic archipelago with the peninsula, and the Canaries separately. The sheet uses Europe/Madrid for that reason and says so.
- **Japan's zone comment.** The Asia/Tokyo row comments Eyre Bird Observatory. The file's header says a comment is useful only for a country with more than one zone. Japan has one row, so that comment is not printed as a description of Japan.
- **Frankfurt/Main** is the only Frankfurt station in the German submission. The file's name is used. The sheet does not add the word airport.
- **Nice** is the station named NICE in the French file, at 2 m. The sheet does not add a label the file does not use.

## Checked 15 November 2026, places 41–60

- **Kyoto** is not in the NOAA NCEI Japan submission, version 6.6. The sheet uses the Japan Meteorological Agency monthly normal for block 47759. Position and height are the OSCAR/Surface record for WIGOS 0-20000-0-47759, not figures printed on the JMA normals page.
- **Portugal** has no folder in the Region VI collection. IPMA's 1991–2020 fiche for Lisboa / Instituto Geofísico (station 535, version 1.0 of 2024) says the series is hybrid: observed data plus WRF-modelled values. The numbers are printed with that caveat. Gago Coutinho and Tapada are separate hybrid fiches and were not averaged with Geofísico.
- **Greece and Athens** use the HNMS Elliniko table, period printed on the page as 1955–2010. The rows are the page's labels: maximum monthly temperature, minimum monthly temperature, and monthly mean precipitation height. Charts on the same page label the axes Temperature (C) and Precipitation (mm). This is not a 1991–2020 normal. The observatory image was still not transcribed.
- **Santorini.** The HNMS South Aegean city list opened on 15 November 2026 names Naxos and Rodos. Requests for Thira, Santorini, and Fira did not return a station table. Elliniko was not copied onto Santorini. The climate cells stay blank.
- **Zürich/Fluntern (WMO 06660)** prints a mean or a sum for every month and does not print a number-of-years row. The values are printed. Kloten was not averaged in.
- **Dublin Airport** header field prints 3969. The filename is 03969. Same station. Casement Aerodrome was not averaged with it.
- **Reykjavík** header prints 04030 and the data rows print 4030. Same station. Keflavík was not substituted.
- **Schiphol** height is printed as -3.87. De Bilt was not averaged with it.
- **Plugs, later on 15 November.** A direct download of iec.ch/world-plugs failed again. The lines for Ireland (230 V, 50 Hz, G), Portugal, the Netherlands, Greece, Iceland, Austria, and Croatia (230 V, 50 Hz, C and F), Switzerland (230 V, 50 Hz, C and J), and the Czech Republic (230 V, 50 Hz, C and E) were read from the Internet Archive copy of that page captured on 16 August 2026. Japan's line in that copy matches the line already on the Japan sheet.
- **Driving.** Greece uses Article 20(1) of Law 5209/2025, Government Gazette A 100 of 13 June 2025: right-hand traffic, and driving near the right edge. Iceland uses Article 18 of the Traffic Act No. 77/2019, in the Althingi consolidation current on 1 September 2026: as far to the right as possible, and the right lane when the road is divided into lanes in the same direction. Switzerland's parent sentence in the Road Traffic Act, Article 34(1), is cited by the ordinance and was not itself opened, so it is not quoted.
- **Tipping.** Ireland.com's taxi page says a tip is not essential and, if given, at least 10–15% of the fare. It does not state a restaurant percentage. Holland.com says about 10% is acceptable and not fixed. Visit Greece says not mandatory, and 5–10% is appreciated in restaurants. Switzerland Tourism's tipping page says not obligatory, and about 10% or rounding up is customary; its food-and-drink page says tips are included and rounding up is enough, and the two were not averaged. VisitCzechia says customary tips up to 10%. Croatia.hr says not mandatory, and at least 10–15% in restaurants if you tip. No tourism-office page stating a practice was opened for Austria or Iceland. Those two sheets still omit tipping.
- **Tap water.** CDC's Ireland page, reviewed 25 August 2026, says standards are similar to the United States and then warns about unregulated rural wells. It is quoted, and it is not upgraded to a yes for every tap. The other new countries' CDC pages, also reviewed 25 August 2026, do not give a yes or a no.
- **Time zones.** zone1970.tab, header note dated 15 May 2025, folds the Netherlands into the Europe/Brussels row, Iceland into the Africa/Abidjan row, and Croatia into the Europe/Belgrade row. zone.tab still names Europe/Amsterdam, Atlantic/Reykjavik, and Europe/Zagreb, and the backward file links the old names to the merged ones. The sheets print the zone.tab names and cite all three files. Portugal's three rows, mainland, Madeira, and Azores, are named and not collapsed.

## Checked 15 November 2026, places 61–80

- **Dubrovnik** is not in the Croatian NCEI submission. The DHMZ Dubrovnik page prints 1961–2024 monthly values with mean air temperature, not mean daily highs and lows. Only the precipitation column is printed; the high and low cells are blank.
- **Panama** has no folder in the NCEI Region IV collection, and no IMHPA 1991–2020 monthly normal was found. All climate cells are blank.
- **Aruba** is not in the NCEI collection. The Meteorological Department Aruba 1991–2020 summary PDF is used (Av. max., Av. min., Monthly rainfall rows). It does not name a station or position.
- **Peru**: no Lima file in the submission. Granja Kcayra (34001, 3214 m, Cusco region) is used and the sheet says it is a highland table. Some months count 28–29 years.
- **Brazil**: no Rio de Janeiro or São Paulo city file. Brasília (83377) is used.
- **Chile**: Pudahuel (85574) has number-of-years rows but no monthly values. Quinta Normal (85577) is used.
- **Colombia**: El Dorado CATAM (AUT); the number 21205791 is printed in the file's WMO_Number field and is shown as printed.
- **Costa Rica**: Juan Santamaría (78762) prints average highs of 30.3–33.1 °C at 913 m. They are printed as in the file. Position is to the minute only. Precipitation counts 29 years. Rechecked 15 November 2026 against the Instituto Meteorológico Nacional's "Climatología Aeronáutica 2005-2025" for the airport, whose 2010–2025 average maximums are 29.9–33.1 °C, peaking at 33.1 °C in April. The two agree within about half a degree, so the NCEI highs stay; the IMN table was not mixed in.
- **Egypt**: Cairo (A.P.) prints two decimals and a position without hemisphere letters; the position is not printed.
- **Hungary/Budapest** both use Budapest Belterület (12840); Pestszentlőrinc (12843) not averaged. **Istanbul** uses Florya (17636); Sarıyer files not averaged. **Turkey** uses Ankara Bölge (17130).
- **Plugs** are from the 16 August 2026 archive of iec.ch/world-plugs. Turkey's line prints 220 V. Morocco (127 V / 220 V) and Brazil (127 V / 220 V) do not assign voltage to a city.
- **Driving.** Sourced: Hungary (KRESZ 25. § (2), Nemzeti Jogtár consolidation), Turkey (Law 2918 art. 46, mevzuat.gov.tr), Colombia (Law 769/2002 art. 68, Senate consolidation), Brazil (Law 9,503/1997 art. 29 I, Planalto), Chile (DFL 1/2007 art. 116, BCN). Gap fill, 15 November 2026: Poland and Kraków (Road Traffic Act art. 16(1), consolidated text Dz.U. 2024 poz. 1251, Sejm ELI; later amendments not checked), Jamaica (Visit Jamaica FAQ), Bahamas (Bahamas.com island FAQ). Still no official source found: Morocco, Marrakech, Egypt, Costa Rica, Aruba, Panama, Peru, Argentina. Those sheets have no driving line.
- **Tipping.** Sourced: Hungary (Visit Hungary), Poland (Herway Poland on poland.travel), Costa Rica (Visit Costa Rica), Bahamas (Bahamas.com FAQ), Aruba (Aruba.com). Gap fill, 15 November 2026: Peru (Peru.travel, PROMPERÚ), Argentina (Argentina.travel, INPROTUR), Colombia (Superintendencia de Industria y Comercio), Chile (Dirección del Trabajo, with SERNAC), Panama (Panamá Digital, ACODECO), Brazil (Visit Brasil). Still not found: Turkey (GoTürkiye refused automated requests; a search snippet about esnaf lokantası was not used), Morocco, Egypt (Experience Egypt's useful-info page has no tipping text), Jamaica (the Visit Jamaica FAQ has none).
- **Tap water.** All 15 new CDC pages (reviewed 25 Aug – 10 Nov 2026) give no yes or no.
- **Time zones.** zone1970.tab folds the Bahamas into America/Toronto and Aruba into America/Puerto_Rico; the sheets print zone.tab's America/Nassau and America/Aruba and cite backward. Brazil (16 rows), Argentina (12), and Chile (4) are not collapsed.
- **Entry.** Costa Rica's immigration site refused automated requests; the sheet links the tourism board's entry-requirements page instead.

## Checked 15 November 2026, places 81–100, Hawaii, and Puerto Rico

- **Naming.** Per the SEO roadmap, the sheet is "New York", not "New York City", and the United Arab Emirates slot is a Dubai city sheet at `/united-arab-emirates/dubai/`. There is no UAE or United States country sheet yet; the index lists those cities under an unlinked heading. Hawaii (`/hawaii/`, a US state sheet) is the hub for Honolulu and Maui; Puerto Rico (`/puerto-rico/`) is a US territory sheet.
- **Vietnam** has no folder in the NCEI Region II collection, and no national 1991–2020 table was found. All climate cells are blank.
- **Bali**: I Gusti Ngurah Rai (97230) and Denpasar (97232) print no monthly values. All climate cells are blank; Jakarta was not copied in.
- **South Africa**: no Pretoria or Johannesburg file. Cape Town International Airport (68816) is used and the sheet says so.
- **Thailand/Bangkok** both use Bangkok Metropolis (48455); **South Korea/Seoul** both use Seoul (47108); **Hawaii/Honolulu** both use Honolulu International Airport (91182). Thai, Korean, and Indian files print some values without a decimal place (such as 33 or 30); they are shown as printed. New Delhi (Safdarjung) counts 26–28 years in several months.
- **Australia** uses Canberra Airport (94926); **Sydney** uses Observatory Hill (94768). **New Zealand** uses Wellington Aero AWS (93439). **Indonesia** uses Kemayoran (96745).
- **Driving.** Sourced: Australia (Australia.com road safety), New Zealand (NewZealand.com driving), South Africa (SouthAfrica.net, by car), Miami (Florida Statutes 316.081), Los Angeles and San Francisco (California Vehicle Code 21650), Hawaii, Honolulu, and Maui (HRS 291C-41). Not found or not loaded: Thailand, South Korea, Vietnam, Indonesia, Singapore, India, UAE/Dubai, Puerto Rico, and New York (the NY Senate statute page refused automated requests and timed out; a third-party copy was not used).
- **Tipping.** Sourced: New Zealand (NewZealand.com currency and costs), South Africa (SouthAfrica.net know before you go, UK edition). Not found or blocked: Thailand, South Korea, Vietnam, Indonesia, Singapore, Australia (the australia.com tipping page rendered without its text), India, Dubai (visitdubai.com refused automated requests), all US sheets (the city and state tourism pages tried were blocked or moved), and Puerto Rico.
- **Tap water.** CDC pages for the ten countries and Puerto Rico (reviewed 25 Aug – 10 Nov 2026) give no yes or no. The US mainland and Hawaii sheets have no tap-water line; no source was opened.
- **Time zones.** Vietnam: zone.tab gives one row, Asia/Ho_Chi_Minh; zone1970.tab puts north Vietnam on the Asia/Bangkok row. Both are described, not collapsed. Bali is Asia/Makassar, not Jakarta's zone. Australia (12 rows), Indonesia (4), New Zealand (2), and the United States (29) are not collapsed.
- **Entry.** Vietnam's e-visa site timed out; the sheet links the Immigration Department's site. US and Puerto Rico sheets link CBP's international-visitors page.

## Not on the site yet

- Viator, Expedia, Booking.com, and Travelpayouts IDs are empty. Those slots are not links.
- No display-ad script.
- No visa matrix, no converters, no airport pages, no park guide.

## Second gap fill, 15 November 2026

Filled, official sources only:

- Driving: Thailand, Bangkok, Singapore, South Korea, Seoul, India, Indonesia, Bali, Vietnam, Puerto Rico (Discover Puerto Rico says only "same side as the mainland"), New York, Peru, Panama, Argentina. Peru and Panama amendments after the decrees read were not checked.
- Tipping: all US sheets (Visit The USA, Brand USA), South Korea and Seoul (VisitKorea), Turkey and Istanbul (Go Türkiye, esnaf lokantası only). Japan sheets already had JNTO tipping.
- US tap water: Visit The USA's sentence, attributed to it, not to CDC or EPA.
- Climate: Vietnam (Da Nang) and Bali (Denpasar) precipitation from JMA ClimatView 1991–2020 normals; mean temperatures in the text. No normal highs or lows.

Still open:

- Driving: Dubai/UAE (Federal Law 21/1995 superseded by Decree-Law 14/2024; no keep-right rule found), Morocco, Egypt, Costa Rica (pgrweb.go.cr returned 500), Aruba.
- Tipping: Australia and Sydney (australia.com page renders no text), Thailand, Bangkok, Singapore, Vietnam, Indonesia, Bali, India, Dubai (cookie wall), Morocco, Egypt, Jamaica, Puerto Rico.
- Climate: Hanoi and Ho Chi Minh City normals; Vietnam's national service and BMKG tables not found; Panama.

## Advisory, health, and emergency lines, 15 November 2026

- Travel advisory: State Department feed (travel.state.gov RSS). US cities, Hawaii, and Puerto Rico print "Not applicable" because the State Department does not issue advisories for US jurisdictions. Regional levels inside a country are not tabulated; the sheet says when the advisory names areas with increased risk.
- Health and vaccines: CDC Travelers' Health destination pages. US cities and Hawaii have no CDC destination page, so the health line is blank there. The summary keeps only the main rows (hepatitis A and B, typhoid, yellow fever, malaria, Japanese encephalitis, tick-borne encephalitis, chikungunya, polio, rabies dogs) plus listed travel health notices.
- Emergency numbers: GOV.UK FCDO travel advice, Emergency services. United Kingdom: only the police number (999) is printed, from GOV.UK Contact the police; ambulance and fire numbers were not taken from a cited page. Puerto Rico: 9-1-1 only, from the Department of Public Safety.

## Month lists and the drive-on-the-left list, 15 November 2026

- The 12 month lists (/best-places-to-visit-in-january/ and the rest) use one rule: average high 20–30 °C inclusive and under 100 mm in the sheet's own table. Sheets with no high or no precipitation figure for a month (for example Vietnam, Bali, Panama, Punta Cana, Santorini, Dubrovnik) are listed as "not rated", not excluded.
- /countries-that-drive-on-the-left/ is built from the sheets' driving lines. Places with no official driving source (Dubai/UAE, Morocco, Egypt, Costa Rica, Aruba) are on neither the left nor the right list.

## Plug list and 112 story, 16 November 2026

- /plug-types-by-country/ is built from each sheet's plug line (IEC world plugs, live page on 14–15 November or the 16 August 2026 archive). It lists only places with a sheet. Japan's 50/60 Hz and the two voltages for Morocco, Brazil and Indonesia are printed as the IEC lines give them; none is assigned to a city.
- The 112 story uses the European Commission's 112 page (read 16 November 2026) for what 112 is, and each sheet's FCDO emergency line for country numbers. Still open: the UK sheet has only the police number (999); no cited GOV.UK page giving ambulance and fire numbers, or 112, for the UK was opened. Poland's FCDO line does not list 112; the story cites the Commission's EU-wide statement and does not add 112 to the Poland sheet. No official US source on whether 112 connects in the US was found; the story says to dial 911.

## Best-time sections and US dollar story, 17 November 2026

- New "Best time to visit, month by month" sections on Japan, Thailand, Costa Rica and Bali. Each month repeats the sheet's own station table and adds only what an official page states: JMA cherry-blossom flowering and full-bloom normals and 2021–2026 dates for Tokyo, JMA Kantō-Kōshin rainy-season normal and 2025–2026 dates (Japan); Land Development Department, Thailand, season windows (Thailand); Costa Rica Tourism Board climate page, Pacific and Caribbean regimes (Costa Rica). All read 17 November 2026.
- Still open, Japan: no JMA typhoon-approach normals for Tokyo/Kantō were opened; autumn leaf (kōyō) normals not added; Kyoto, Osaka, Sapporo and Okinawa calendars not added to the national sheet.
- Still open, Thailand: the Thai Meteorological Department's Climate of Thailand page (tmd.go.th/en/climate/climate-of-thailand) renders no text without JavaScript, so the Land Development Department page was used. No station table for Phuket, Chiang Mai, Koh Samui or the southern east coast.
- Still open, Costa Rica: only the Central Valley airport table; no Liberia (Pacific) or Limón (Caribbean) table yet, though the NOAA NCEI submission has both files.
- Still open, Bali: no official BMKG page giving Bali's normal dry-season and rainy-season start dates was read, so the section assigns no season names. A news report quoting the BMKG Bali climatology station (Kompas, 28 October 2026) says most of Bali usually enters the rainy season in early October; it was not used because it is not the agency's own page. No normal daily high or low.
- US dollar story: no Banco Central del Ecuador page was read, so Ecuador has no adoption date. No official source on dollar acceptance in Mexico, Costa Rica, Cambodia, Zimbabwe, Panama (balboa vs dollar cash) or Haiti; the story says so. Haiti, Ecuador, El Salvador, Timor-Leste and the Pacific dollar countries have no sheets.

## Best-time sections and Hawaii hurricane story, 18 November 2026

- New "Best time to visit, month by month" sections on Hawaii (NWS Honolulu Climate of Hawaiʻi; CPC central Pacific season and JAS peak), Puerto Rico (NHC climatology), Ireland (Met Éireann sunshine and temperature pages) and Iceland (Icelandic Met Office tourist note and climate report). All read 18 November 2026. Each month repeats the sheet's own station table.
- Still open, Puerto Rico: no official page naming a dry or rainy season for Puerto Rico was read (the NWS San Juan climate URL tried, weather.gov/sju/climo, returned 404), so no season names are assigned.
- Still open, Hawaii: the NHC central Pacific charts of storms within 200 and 75 miles of Hawaii are images and were not read for numbers; no official 2026 end-of-season summary yet; Hawaii, Honolulu and Maui sheets still have no cited emergency-number, advisory or health line. The NWS page's warmest (August–September) and coolest (February–March) months are statewide; at Honolulu airport January has the lowest averages, and the section says so.
- Still open, Ireland: Met Éireann's sunshine figures are national ranges; no Dublin Airport monthly sunshine normal was added. Ireland's 1991–2020 Dublin Airport table is the WMO/NCEI file already on the sheet.
- Still open, Iceland: the Met Office's "sun above the horizon for almost 24 hours" sentence is for Iceland in the first half of the summer season and is not a Reykjavík day-length table; no sunrise/sunset table and no aurora-frequency statistic from an official page were added.

## Best-time sections and midnight sun story, 19 November 2026

- New "Best time to visit, month by month" sections on Italy (Roma Fiumicino table, figures rounded to one decimal, plus Italia.it's national seasonal averages, read 19 November 2026) and Mexico (Tacubaya table plus the National Hurricane Center's eastern Pacific and Atlantic season windows and peaks, read 19 November 2026).
- Still open, Italy: Italia.it's seasonal figures are north/south ranges, not station normals; no spring or autumn figures on that page; no Aeronautica Militare or ISPRA page was opened. Florence, Venice, Milan and Naples have no best-time sections yet; Naples (May, July) and Venice (March high) gaps stand.
- Still open, Mexico: no official SMN/Conagua page stating the rainy-season window was opened (the gob.mx press URL tried returned 404 and the SMN 2026 cyclone-season page returned 500); news reports quoting SMN were not used. So the section names no rainy season, only the NHC hurricane windows. Cancún, Cabo San Lucas, Puerto Vallarta and Guadalajara have no best-time sections yet.
- Midnight sun story: USNO times pulled for two points only (Reykjavík WMO 04030 and Akureyri WMO 04063 coordinates), 2026 dates only. No official source placing the Arctic Circle against Icelandic territory (e.g. Grímsey) was read, so no claim about where the sun stays up all night. No aurora-frequency statistic and no Reykjavík monthly sunshine-hours normal. Akureyri has no sheet.

## Checked 19 November 2026, places 103–122

- **Taiwan, Taipei / Taibei (WMO 58968).** The NCEI China-folder file has a complete precipitation normal and blank daily maximum and minimum rows. The sheet prints rain only. The Central Weather Administration publishes official 1991–2020 monthly-mean tables, but the live pages returned 404 from this environment and a later archive fetch also failed. No third-party temperature figures were copied.
- **Guatemala, La Aurora (WMO 78641), 1491 m.** The NCEI file is internally consistent (rows tagged 78641). A nearby INSIVUMEH table for almost the same coordinates gives a very different precipitation column (for example January 20.6 mm versus 294 mm in the NCEI file) and implausibly low minimum temperatures. The two were not averaged or substituted. The sheet prints La Aurora as filed and notes the disagreement.
- **Belize, Philip Goldson Airport (WMO 78583)** is used because the Belmopan file is not averaged. **US Virgin Islands, Charlotte Amalie Airport (WMO 78543)** on St. Thomas is used; Christiansted was not averaged with it.
- **Kenya** has no folder in the NOAA NCEI 1991–2020 collection opened on this pass. The Kenya Meteorological Department publishes grids, not a named-station normal we could attach to a sheet. No Kenya sheet was added.
- **Turks and Caicos Islands** has no folder in that collection. No sheet was added.
- **Ecuador.** The only NCEI file opened was Rumipamba-Salcedo (WMO 84143), precipitation only, and it is not Quito or Guayaquil. No Ecuador sheet was added.
- **Maldives** is not on the IEC world-plugs country list (216 rows in the 16 August 2026 archive). The sheet says “Not on the IEC world-plugs list” and does not guess a type, voltage, or frequency. No official driving-side or tipping page was opened.
- **Curaçao** has no separate IEC row. The sheet uses the still-listed “Netherlands Antilles” line (Types A, B, C and F, 127 V and 220 V, 50 Hz) and says so. ISO 4217 List One published 17 September 2026 lists the Caribbean Guilder (XCG) for Curaçao, not the Netherlands Antillean guilder (ANG).
- **El Salvador.** ISO 4217 lists both the US Dollar (USD) and the El Salvador Colon (SVC). The sheet prints both and does not choose one.
- **Driving side** is sourced only for Norway (Lovdata, Forskrift om kjørende og gående trafikk §5(1)), China (Road Traffic Safety Law, Article 35, english.court.gov.cn), Finland (Visit Finland), and Sweden (Visit Sweden). No official driving page was opened for Maldives, Belize, Bermuda, Guatemala, Fiji, the Philippines, Taiwan, the US Virgin Islands, Barbados, Curaçao, Sri Lanka, El Salvador, Tanzania, Malaysia, Seychelles, or Mauritius, so those sheets omit driving.
- **Tipping** is sourced only for Sweden (Visit Sweden). No official tipping page was opened for the other nineteen new places.
- **US Virgin Islands emergency numbers.** The FCDO has no US Virgin Islands advice page (only the USA and the British Virgin Islands). No official 911 page on vi.gov was opened on this pass. The emergency line is omitted. The travel advisory is “Not applicable,” as for other US territories.
- **Seychelles entry.** Official immigration and foreign-affairs hosts did not return a usable page. The entry link is the official tourism site, seychelles.travel.
- **Tanzania entry.** The official immigration.go.tz page was opened but is a thin page (a few hundred bytes). It is still the official domain, and that is the link used.
- **Philippines entry.** immigration.gov.ph did not return a usable page; the official e-Visa site evisa.gov.ph is used instead. **Finland entry.** migri.fi returned 403; Enter Finland e-services is used instead.
