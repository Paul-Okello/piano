import clsx from 'clsx'
import React from 'react'
import { FunctionComponent } from 'react'
import { NoteType } from '../../domain/note'
import "./style.css"

interface KeyProps {
  type: NoteType
  label: string
  disabled?: boolean
}

const Key: FunctionComponent<KeyProps> = (props) => {
  const { type, label, ...rest} = props
  return (
    <div>
      <button
        type="button"
        className={clsx(`key key--${type}`)}
        {...rest}
      >
        {label}
      </button>
    </div>
  )
}

export default Key
