import { destinations } from "./destinations";
import type { Destination } from "./types";

export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const monthSlug = (m: string) => m.toLowerCase();
export const monthPath = (m: string) => `/best-places-to-visit-in-${monthSlug(m)}/`;

// The rule, in one place: average daily high 20–30 °C inclusive and under 100 mm in the water column.
export const RULE = { minHigh: 20, maxHigh: 30, maxRain: 100 };

export interface Pick {
  d: Destination;
  high: number;
  low: number | null;
  rain: number;
}

export function picksFor(monthIndex: number): Pick[] {
  return destinations
    .flatMap((d) => {
      const m = d.climate.months[monthIndex];
      if (!m || m.high == null || m.rain == null) return [];
      const high = Number(m.high);
      const rain = Number(m.rain);
      if (!Number.isFinite(high) || !Number.isFinite(rain)) return [];
      if (high < RULE.minHigh || high > RULE.maxHigh || rain >= RULE.maxRain) return [];
      return [{ d, high, low: m.low == null ? null : Number(m.low), rain }];
    })
    .sort((a, b) => a.rain - b.rain || a.d.order - b.d.order);
}

export function qualifyingMonths(d: Destination): string[] {
  return MONTHS.filter((_, i) => picksFor(i).some((p) => p.d.id === d.id && p.d.countrySlug === d.countrySlug));
}

export function unrated(monthIndex: number): Destination[] {
  return destinations.filter((d) => {
    const m = d.climate.months[monthIndex];
    return !m || m.high == null || m.rain == null;
  });
}
