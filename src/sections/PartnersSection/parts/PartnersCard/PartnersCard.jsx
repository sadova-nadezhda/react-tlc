import React from 'react'

import s from './PartnersCard.module.scss'

export default function PartnersCard({img}) {
  return (
    <div className={s.partners__card}>
      <div className={s.partners__img}>
        <img src={img} alt="" />
      </div>
    </div>
  )
}
