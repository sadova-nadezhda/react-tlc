import React from 'react'

import s from './ServicesCard.module.scss'

export default function ServicesCard({caption, img}) {
  return (
    <div className={s.services__card}>
      <div className={s.services__num}></div>
      <div className={s.services__img}><img src={img} alt="" /></div>
      <h4 className={s.services__caption}>{caption}</h4>
    </div>
  )
}
