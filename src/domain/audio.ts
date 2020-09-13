import { AudioContextType } from "../react-app-env";
import { Optional } from "./type";

export function accessContext(): Optional<AudioContextType> {

  return window.AudioContext || window.webkitAudioContext || null;
}