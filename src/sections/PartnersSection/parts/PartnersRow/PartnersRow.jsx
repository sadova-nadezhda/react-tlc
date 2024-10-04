import React from 'react'

import s from './PartnersRow.module.scss'
import PartnersCard from '../PartnersCard'

export default function PartnersRow({partners, ...props}) {
  return (
    <marquee {...props}>
      <div className={s.partners__row}>
        {partners.map((card, index) => (
          <PartnersCard key={index} {...card} />
        ))}
      </div>
    </marquee>
  )
}
