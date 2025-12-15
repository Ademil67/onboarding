export function convertWeight(value, from, to) {
  const g = value * (from === "oz" ? 28.3495 : from === "lb" ? 453.592 : 1);
  if (to === "g") return g;
  if (to === "oz") return g / 28.3495;
  if (to === "lb") return g / 453.592;
  throw new Error(`Unsupported weight conversion: ${from} to ${to}`);
}
