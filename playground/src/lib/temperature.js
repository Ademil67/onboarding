export function convertTemperature(value, from, to) {
  let celsius = value;
  if (from === "F") celsius = (value - 32) * (5 / 9);
  else if (from === "K") celsius = value - 273.15;
  else if (from !== "C") throw new Error(`Unsupported temperature conversion: ${from} to ${to}`);

  if (to === "F") return celsius * (9 / 5) + 32;
  if (to === "K") return celsius + 273.15;
  if (to === "C") return celsius;
  throw new Error(`Unsupported temperature conversion: ${from} to ${to}`);
}
