import type { ClimateMonth, Destination } from "./types";

const modules = import.meta.glob("../data/destinations/*.json", { eager: true });

export const destinations: Destination[] = Object.values(modules)
  .map((mod) => (mod as { default: Destination }).default)
  .sort((a, b) => a.order - b.order);

export function getDestination(country: string, city?: string) {
  if (!city) return destinations.find((d) => d.kind === "country" && d.countrySlug === country);
  return destinations.find((d) => d.kind === "city" && d.countrySlug === country && d.id === city);
}

export function citiesIn(countrySlug: string) {
  return destinations.filter((d) => d.kind === "city" && d.countrySlug === countrySlug);
}

export function countryOf(destination: Destination) {
  return destinations.find((d) => d.kind === "country" && d.countrySlug === destination.countrySlug);
}

export interface Extreme {
  value: string;
  months: string[];
}

export function extreme(
  months: ClimateMonth[],
  key: "high" | "low" | "rain",
  mode: "max" | "min",
): Extreme | null {
  const rows = months.filter((month) => month[key] != null);
  if (!rows.length) return null;
  const nums = rows.map((month) => Number(month[key]));
  const target = mode === "max" ? Math.max(...nums) : Math.min(...nums);
  const tied = rows.filter((month) => Number(month[key]) === target);
  return { value: String(tied[0][key]), months: tied.map((month) => month.month) };
}

export function joinMonths(months: string[]) {
  if (months.length === 1) return months[0];
  if (months.length === 2) return `${months[0]} and ${months[1]}`;
  return `${months.slice(0, -1).join(", ")}, and ${months.at(-1)}`;
}
