import clsx from 'clsx'
import React from 'react'
import { NoteType } from '../../domain/note'

interface KeyProps {
  type: NoteType
  label: string
  disabled?: boolean
}

const Key: FunctionalComponent<KeyProps> = (props) => {
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
