/// <reference types="react-scripts" />

import { type } from "os";

type AudioContextType = typeof AudioContext;

interface Window extends Window {
  webkitAudioContext: AudioContextType
}