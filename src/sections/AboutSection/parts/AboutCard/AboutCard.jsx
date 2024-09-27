import React from 'react'

import s from './AboutCard.module.scss'

export default function AboutCard({caption}) {
  return (
    <div className={s.about__card}>
      <p>{caption}</p>
    </div>
  )
}
