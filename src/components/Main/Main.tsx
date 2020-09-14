import React from 'react'
import  Keyboard  from "../Keyboard/Keyboard"
import  NoAudioMessage  from "../NoAudioMessage/NoAudioMessage"
import { useAudioContext } from "../AudioContextProvider/useAudioContext"
import { FunctionComponent } from 'react'

export const Main: FunctionComponent = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <Keyboard /> : <NoAudioMessage />
}

export default Main
