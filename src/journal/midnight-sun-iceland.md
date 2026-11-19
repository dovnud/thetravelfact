---
title: "Midnight sun in Iceland: when it happens, and what Reykjavík actually gets"
slug: midnight-sun-iceland
kicker: "Iceland"
dek: "Reykjavík's sun does set in June, but only for about three hours, and it never gets darker than civil twilight from 20 May to 24 July. Here are the 2026 sunrise and sunset times for Reykjavík and Akureyri, month by month, from the U.S. Naval Observatory."
published: "2026-11-19"
updated: "2026-11-19"
photo: iceland
feature: true
related:
  - /iceland/
  - /ireland/
  - /journal/best-time-to-visit-europe/
  - /journal/112-emergency-number/
  - /plug-types-by-country/
  - /best-places-to-visit-in-june/
sources:
  - title: "U.S. Naval Observatory, Astronomical Applications API, Sun and Moon data for one day (Reykjavík 64.1275° N, 21.9028° W; Akureyri 65.6856° N, 18.1003° W; 2026 dates)"
    url: "https://aa.usno.navy.mil/data/RS_OneDay"
    asOf: "2026-11-19"
  - title: "U.S. Naval Observatory, Rise, Set, and Twilight Definitions"
    url: "https://aa.usno.navy.mil/faq/RST_defs"
    asOf: "2026-11-19"
  - title: "Icelandic Met Office, Icelandic climate in general: a short description for tourists"
    url: "https://en.vedur.is/climatology/iceland/nr/1268"
    asOf: "2026-11-19"
  - title: "Icelandic Met Office, Climate Report: a short description of the climate of Iceland"
    url: "https://en.vedur.is/climatology/iceland/climate-report/"
    asOf: "2026-11-18"
  - title: "WMO climate normals 1991-2020, Akureyri (04063), station header"
    url: "https://www.ncei.noaa.gov/data/oceans/archive/arc0216/0253808/6.6/data/0-data/Region-6-WMO-Normals-9120/Iceland/CSV/Akureyri_04063.csv"
    asOf: "2026-11-19"
  - title: "IANA tzdb backward and africa files (Atlantic/Reykjavik linked to Africa/Abidjan, GMT)"
    url: "https://data.iana.org/time-zones/tzdb/backward"
    asOf: "2026-11-19"
---

**Short answer:** In Reykjavík the sun does not stay up all night, even at midsummer. In 2026 the U.S. Naval Observatory has it setting at **00:03** and rising again at **02:56** around the June solstice, so it is below the horizon for a little under three hours. What Reykjavík does get is a night that never turns dark: from **20 May to 24 July 2026**, 66 nights in a row, the sun never sinks far enough to end civil twilight. In Akureyri, on the north coast, the sun dips below the horizon for only about half an hour in late June, and the twilight-all-night stretch runs from **13 May to 30 July**.

The Icelandic Met Office puts it in one line in its [note for tourists](https://en.vedur.is/climatology/iceland/nr/1268), read 19 November 2026: in the first half of the summer tourist season, which it dates from late May to early September, "the sun stays above the horizon for almost 24 hours." The word that matters is *almost*. This story puts minutes on it.

## Where the numbers come from

Every sunrise, sunset and twilight time below comes from the [U.S. Naval Observatory's one-day Sun and Moon data](https://aa.usno.navy.mil/data/RS_OneDay), pulled through its public API on 19 November 2026 for dates in 2026. We asked for two points:

- **Reykjavík**, at 64°07′39″ N, 21°54′10″ W, the position of the WMO 04030 weather station on our [Iceland sheet](/iceland/).
- **Akureyri**, at 65°41′08″ N, 18°06′01″ W, the position in the header of the [WMO 1991–2020 file for Akureyri, station 04063](https://www.ncei.noaa.gov/data/oceans/archive/arc0216/0253808/6.6/data/0-data/Region-6-WMO-Normals-9120/Iceland/CSV/Akureyri_04063.csv). Akureyri does not have its own sheet on this site yet.

USNO gives times in Universal Time when asked for a zero offset. Iceland's clock is the same: IANA's tz database links `Atlantic/Reykjavik` to `Africa/Abidjan`, which has run on GMT with no daylight saving since 1912 (the [backward](https://data.iana.org/time-zones/tzdb/backward) and [africa](https://data.iana.org/time-zones/tzdb/africa) files, read 19 November 2026). So the times below are Iceland clock times all year.

Two definitions, both from USNO's [rise, set and twilight page](https://aa.usno.navy.mil/faq/RST_defs), read 19 November 2026:

- **Sunrise and sunset** are when the upper edge of the Sun's disk is on the horizon, assuming average atmospheric conditions and a level horizon. Mountains and fjord walls are not in the calculation, so a valley can lose the sun earlier than the table says.
- **Civil twilight** ends in the evening and begins in the morning when the centre of the Sun is 6 degrees below the horizon. USNO says that outside civil twilight, artificial light is normally needed for ordinary outdoor activities. Inside it, you can still see to walk around.

The "day length" column is our own subtraction of USNO's sunrise from its sunset. We did not round it beyond the minute.

## The light, month by month

USNO times for the 21st of each month in 2026, with Reykjavík's 1991–2020 average high and monthly precipitation from the [Iceland sheet](/iceland/#weather).

| 21st of | Reykjavík sunrise | Reykjavík sunset | Reykjavík day length | Akureyri day length | Reykjavík avg high | Reykjavík precip. |
| --- | --- | --- | --- | --- | --- | --- |
| January | 10:39 | 16:39 | 6 h 00 min | 5 h 24 min | 3.2 °C | 87.1 mm |
| February | 09:03 | 18:21 | 9 h 18 min | 9 h 05 min | 3.3 °C | 90.6 mm |
| March | 07:25 | 19:46 | 12 h 21 min | 12 h 23 min | 4.2 °C | 80.7 mm |
| April | 05:35 | 21:20 | 15 h 45 min | 16 h 03 min | 6.9 °C | 59.0 mm |
| May | 03:54 | 22:57 | 19 h 03 min | 19 h 49 min | 10.1 °C | 52.6 mm |
| June | 02:56 | 00:03 (next day) | 21 h 07 min | 23 h 29 min | 13.0 °C | 43.3 mm |
| July | 04:00 | 23:06 | 19 h 06 min | 19 h 55 min | 14.9 °C | 49.9 mm |
| August | 05:37 | 21:22 | 15 h 45 min | 16 h 03 min | 14.1 °C | 64.5 mm |
| September | 07:08 | 19:32 | 12 h 24 min | 12 h 26 min | 11.4 °C | 87.0 mm |
| October | 08:36 | 17:47 | 9 h 11 min | 8 h 58 min | 7.6 °C | 79.8 mm |
| November | 10:15 | 16:11 | 5 h 56 min | 5 h 20 min | 4.7 °C | 86.5 mm |
| December | 11:22 | 15:30 | 4 h 08 min | 3 h 03 min | 3.3 °C | 94.9 mm |

Read across June and the two cities pull apart. Akureyri, about a degree and a half further north, gets 23 hours 29 minutes of sun on 21 June against Reykjavík's 21 hours 7 minutes. Read down December and it flips: Akureyri gets 3 hours 3 minutes, an hour less than the capital. The equinox rows, March and September, are within two minutes of each other.

## Does the sun ever stay up all night?

Not at either point in 2026. We pulled every day from 25 April to 25 August for both coordinates, and every night in that window has a sunset followed by a sunrise. On one date at each point (16 June at Reykjavík, 4 June at Akureyri) USNO lists a sunrise but no sunset, because that evening's sunset slips past midnight into the next calendar day; the sun still sets.

At Reykjavík the shortest night is flat for most of a week. From 19 to 23 June the sun sets between 00:02 and 00:03 and rises at 02:56, a gap of a little under three hours. At Akureyri it is much tighter: on 21 and 22 June the sun sets at 00:59 and rises at 01:30, 31 minutes below the horizon.

So if "midnight sun" means the disk itself never leaves the sky, neither Reykjavík nor Akureyri has it in the 2026 figures. If it means you can stand outside at midnight without needing a light, both do, for more than two months.

## The nights that never get dark

This is the figure most people are really asking about. USNO flags a day as "continuously above the twilight limit" when the Sun never gets 6 degrees below the horizon: civil twilight never ends, so there is no true night.

| Point | First such night, 2026 | Last such night, 2026 | Nights |
| --- | --- | --- | --- |
| Reykjavík | 20 May | 24 July | 66 |
| Akureyri | 13 May | 30 July | 79 |

On 1 May in Reykjavík, civil twilight still ended at 23:02 and began again at 03:51. By 1 August it ended at 23:58 and began again at 03:05, and real night was back for about three hours. These are 2026 dates. Other years will be close but are not printed here, because we did not pull them.

## What the weather does with all that light

Long days are not the same as sunny days. The Met Office's tourist note says that even in midsummer "the sky is frequently cloudy or overcast and the sunshine does not warm the air much," that the daytime air is usually cool, and that nights are cold.

The Reykjavík table on the [Iceland sheet](/iceland/#weather) agrees. July has the highest average high in the file, **14.9 °C**, with an average low of 9.1 °C. June is the driest month in the table at **43.3 mm**, and the Met Office's [climate report](https://en.vedur.is/climatology/iceland/climate-report/) (read 18 November 2026) names May and June as the driest months nationally, with December and January bringing about twice their median precipitation. December is the wettest month in the Reykjavík file, at 94.9 mm.

That is why Iceland never appears on our month lists. They need an average high between 20 and 30 °C, and Reykjavík never reaches 20 °C in any month. If you want light *and* warmth in June, the [June list](/best-places-to-visit-in-june/) shows the places that clear that bar. If you want the light itself, Iceland's [best-time section](/iceland/#best-time) lays out the months with the Met Office's season notes.

## The other half of the year

The winter numbers are the mirror image. On 21 December 2026 USNO has Reykjavík's sun rising at 11:22 and setting at 15:30, four hours and eight minutes of it. In Akureyri the sun is up from 11:39 to 14:42. The Met Office's tourist note describes winter as long nights and severe storms, with the aurora borealis visible on clear nights.

We have no official aurora-frequency figure for Reykjavík or Akureyri, so this story prints none. What the USNO numbers do show is the reverse of the summer problem: between 20 May and 24 July, Reykjavík has no night darker than civil twilight at all.

## Planning around the light

- **Sleep.** If you are sensitive to light, the twilight table is the one to read. From mid-May to late July in Akureyri, and 20 May to 24 July in Reykjavík, the sky outside the window will not go fully dark.
- **Driving.** Iceland drives on the right; the [Iceland sheet](/iceland/#driving) cites Article 18 of the 2019 traffic act. The light makes long evenings on the road possible; the Met Office's warning about cool, cloudy summers still applies. See the [list of countries that drive on the left](/countries-that-drive-on-the-left/) if you are coming from one of them.
- **Plugs and money.** Iceland uses type C and F plugs at 230 V and 50 Hz, per the IEC list on the sheet; see [plug types by country](/plug-types-by-country/#type-c). The currency is the Iceland Krona (ISK), not the euro. Our [euro story](/journal/countries-that-use-the-euro/) lists the countries that do use it.
- **Emergencies.** The UK Foreign Office's Iceland page lists **112** for ambulance, fire and police, as printed on the sheet. Our [112 story](/journal/112-emergency-number/) explains the number across Europe.
- **Advisory.** The U.S. State Department's advisory for Iceland is Level 1, "Exercise Normal Precautions," dated 5 May 2026 in its feed, as printed on the [Iceland sheet](/iceland/#advisory).

## How Iceland compares

The light is extreme in both directions, and the temperatures are not. For a gentler version of long northern summer days, [Ireland's best-time section](/ireland/#best-time) quotes Met Éireann: May and June are Ireland's sunniest months, with 5 to 6.5 hours of sunshine a day over most of the country. That is hours of actual sunshine, a different measure from the sunrise-to-sunset day length in the table above, so the two are not compared number for number. For the rest of the continent, our [best time to visit Europe](/journal/best-time-to-visit-europe/) story walks through the sheets month by month.

## What we did not include

- **No day-length figures for other Icelandic towns.** We pulled only Reykjavík and Akureyri. Grímsey, the Westfjords and the east were not queried.
- **No Arctic Circle claim.** We did not open an official source that places the Arctic Circle against Icelandic territory, so this story does not say where in Iceland the sun stays up all night, or whether it does anywhere.
- **No other years.** The dates are for 2026. They will shift slightly from year to year, and we have not printed a 2027 table.
- **No aurora odds, no hours of actual sunshine for Reykjavík.** No official page with those figures was read.

The full month-by-month weather picture is in the [Iceland sheet's best-time section](/iceland/#best-time). Questions or corrections: [contact@thetravelfact.com](mailto:contact@thetravelfact.com).
