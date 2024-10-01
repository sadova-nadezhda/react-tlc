import React from 'react'

import { hero } from '~/src/utils/hero.js'
import s from './HeroSection.module.scss'
import Form from '../../components/Form'
import Button from '../../components/Button/Button'

export default function HeroSection({openPopup}) {
  return (
    <section id='hero' className={s.hero + ' section-top'}>
      <div className="container">
        <div className={s.hero__container}>
          <div className={s.hero__row}>
            <h1 className={s.hero__title}>
              <span>{hero.span1}</span>
              <span>{hero.span2}</span>
            </h1>
            <div className={s.hero__subtitle}>{hero.subtitle}</div>
          </div>
          <div className={s.hero__wrap}>
            { window.innerWidth > 767 ?
              <div className={s.hero__application}>
                <Form isShort={false} />
              </div> : 
              <Button onClick={openPopup} className={ s.hero__btn_mb + " popup__btn button"}>Оставить заявку</Button> 
            }
            <div className={s.hero__img}><img src={hero.img} alt="" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
