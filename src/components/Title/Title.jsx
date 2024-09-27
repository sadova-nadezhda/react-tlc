import React from 'react'

import s from './Title.module.scss'

export default function Title({className, children}) {
  return (
    <h2 className={className + ' ' + s.title + ' ' + s.title_up}>{children}</h2>
  )
}
