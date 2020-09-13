import { type } from "os"
import { OctaveIndex, PitchIndex } from "./note"

export type key = string
export type keys = key[]
export type OctavesRange = Extract<OctaveIndex, 4 | 5>

export const TOP_ROW: keys = Array.from("q2w3er5t6y7u");
export const BOTTOM_ROW: keys = Array.from("zsxdcvgbhnjm");

export function selectKey(
  octave: OctavesRange,
  index: PitchIndex
): key {
  const keysRow = octave < 5 ? TOP_ROW : BOTTOM_ROW;
  return keysRow[index];
}