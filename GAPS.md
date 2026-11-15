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

## Not on the site yet

- Viator, Expedia, Booking.com, and Travelpayouts IDs are empty. Those slots are not links.
- No display-ad script.
- No visa matrix, no converters, no airport pages, no park guide.
