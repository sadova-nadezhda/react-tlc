import React from 'react';

import Title from '../../components/Title';
import ServicesCard from './parts/ServicesCard';

import { services } from '../../utils/services.js';

import s from './ServiceSection.module.scss';

export default function ServiceSection() {
  return (
    <section id='services' className={s.services}>
      <div className="container">
        <div className={s.services__container}>
          <Title component='h2' className={s.services__title}>{services.title}</Title>
          <div className={s.services__cards}>
            {services.cards.map((card, index) => (
              <ServicesCard key={index} index={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
