import React from 'react';
import Button from '../../components/Button';

import s from './ThankSection.module.scss';

export default function ThankSection() {
  return (
    <section id="thanks" className={`${s.thanks} section_top`}>
      <div className="container">
        <div className={s.thanks__container}>
          <h1 className={s.thanks__title}>Спасибо за заявку</h1>
          <Button className={`${s.thanks__btn} button`}>На главную</Button>
        </div>
      </div>
    </section>
  )
}
