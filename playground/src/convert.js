import * as temperature from "./lib/temperature.js";
import * as distance from "./lib/distance.js";
import * as weight from "./lib/weight.js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const defaults = JSON.parse(
  readFileSync(join(__dirname, "../config/defaults.json"), "utf-8")
);

export function convert(type, value, from, to) {
  const numValue = Number(value);
  if (!Number.isFinite(numValue)) {
    throw new Error("Invalid numeric value provided");
  }
  const round = (v) => Math.round(v * Math.pow(10, defaults.precision)) / Math.pow(10, defaults.precision);
  
  switch (type) {
    case "temperature":
      return round(temperature.convertTemperature(numValue, from || defaults.temperature.defaultFrom, to || defaults.temperature.defaultTo));
    case "distance":
      return round(distance.convertDistance(numValue, from, to));
    case "weight":
      return round(weight.convertWeight(numValue, from, to));
    default:
      throw new Error("Unknown type " + type);
  }
}
