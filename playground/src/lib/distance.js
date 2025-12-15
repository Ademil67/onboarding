export function convertDistance(value, from, to) {
  const km = value * (from === "m" ? 0.001 : from === "mi" ? 1.60934 : 1);
  if (to === "km") return km;
  if (to === "mi") return km / 1.60934;
  if (to === "m") return km * 1000;
  throw new Error(`Unsupported distance conversion: ${from} to ${to}`);
}
