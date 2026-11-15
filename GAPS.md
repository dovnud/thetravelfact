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

## Not on the site yet

- Viator, Expedia, Booking.com, and Travelpayouts IDs are empty. Those slots are not links.
- No display-ad script.
- No visa matrix, no converters, no airport pages, no park guide.
