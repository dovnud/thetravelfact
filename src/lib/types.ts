export interface SourceRef {
  sourceTitle: string;
  sourceUrl: string;
  asOf: string;
}

export interface Fact {
  label: string;
  value: string;
  detail: string;
  sourceTitle?: string;
  sourceUrl?: string;
  asOf?: string;
  sources?: SourceRef[];
}

export interface ClimateMonth {
  month: string;
  high: string | null;
  low: string | null;
  rain: string | null;
  precip: string | null;
  nHigh?: number;
  nLow?: number;
  nRain?: number;
}

export interface Climate {
  caption: string;
  stationName: string;
  stationId: string | null;
  period: string;
  elevation: string | null;
  latitude: string | null;
  longitude: string | null;
  columnRain: string;
  months: ClimateMonth[];
  note: string;
  sourceTitle: string;
  sourceUrl: string;
  asOf: string;
}

export interface EntryLink {
  label: string;
  publisher: string;
  url: string;
  note: string;
}

export interface Destination {
  order: number;
  id: string;
  kind: "country" | "city";
  name: string;
  countrySlug: string;
  countryName: string;
  path: string;
  dek: string;
  paragraphs: string[];
  climate: Climate;
  season: string[];
  plugs: Fact;
  driving: Fact;
  tipping: Fact | null;
  water: Fact;
  currency: Fact;
  timeZone: Fact;
  entry: EntryLink;
}

export function factSources(fact: Fact): SourceRef[] {
  if (fact.sources?.length) return fact.sources;
  if (fact.sourceUrl && fact.sourceTitle) {
    return [{ sourceTitle: fact.sourceTitle, sourceUrl: fact.sourceUrl, asOf: fact.asOf ?? "2026-11-14" }];
  }
  return [];
}
