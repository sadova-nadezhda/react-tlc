import React from 'react'

import Title from '../../components/Title'
import PartnersRow from './parts/PartnersRow'

import { partners } from '../../utils/partners.js'
import { partners2 } from '../../utils/partners2.js'

import s from './PartnersSection.module.scss'

export default function PartnersSection() {
  return (
    <section id='partners' className={s.partners + ' section'}>
      <div className={s.partners__container}>
        <div className="container">
          <Title component='h2' className={s.partners__title}>{partners.title}</Title>
        </div>
        <div className={s.partners__marquees}>
          <PartnersRow partners={partners} behavior="alternate" direction="right" loop />
          <PartnersRow partners={partners2} behavior="alternate" direction="left" loop />
        </div>
      </div>
    </section>
  )
}
