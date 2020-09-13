import React from 'react'
import { OctavesRange, selectKey } from "../../domain/keyboard"
import { notes } from "../../domain/note"
import { Key } from "../Key"
import "./style.css"

function Keyboard() {
  return (
    <div className="keyboard">
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave as OctavesRange, index);
        return <Key key={midi} type={type} label={label} />
      })}
    </div>
  )
}

export default Keyboard
