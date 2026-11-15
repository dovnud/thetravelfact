/** Partner IDs. Empty means the slot renders, but it is not an affiliate link. */
export const affiliates = {
  amazonTag: "thetravelfact-20",
  viatorPid: "",
  expediaSiteId: "",
  bookingAid: "",
  travelpayoutsMarker: "",
};

export function amazonSearch(query: string) {
  const url = new URL("https://www.amazon.com/s");
  url.searchParams.set("k", query);
  url.searchParams.set("tag", affiliates.amazonTag);
  return url.toString();
}

export function adapterQuery(plugValue: string) {
  if (plugValue.includes("Type G")) return "type g travel adapter";
  if (plugValue.includes("C, F")) return "europe travel adapter";
  return "universal travel adapter";
}

export const partnerSlots = [
  { id: "viator", name: "Viator", kind: "Tours", idSet: affiliates.viatorPid.length > 0 },
  { id: "expedia", name: "Expedia", kind: "Hotels", idSet: affiliates.expediaSiteId.length > 0 },
  { id: "booking", name: "Booking.com", kind: "Hotels", idSet: affiliates.bookingAid.length > 0 },
  {
    id: "travelpayouts",
    name: "Travelpayouts",
    kind: "Network",
    idSet: affiliates.travelpayoutsMarker.length > 0,
  },
] as const;
