import React from 'react'
import { keyboard } from "../Keyboard"
import { NoAudioMessage } from "../NoAudioMessage"
import { useAudioContext } from "../AudioContextProvider/useAudioContext"
import { FunctionComponent } from 'react'

export const Main: FunctionComponent = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <keyboard /> : <NoAudioMessage />
}

export default Main
