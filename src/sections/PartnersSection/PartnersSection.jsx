import React from 'react';

import Title from '../../components/Title';
import PartnersRow from './parts/PartnersRow';

import { partners } from '../../utils/partners.js';

import s from './PartnersSection.module.scss';

export default function PartnersSection() {
  const { cards, title } = partners;
  const midIndex = Math.ceil(cards.length / 2);

  return (
    <section id='partners' className={`${s.partners} section`}>
      <div className={s.partners__container}>
        <div className="container">
          <Title component='h2' className={s.partners__title}>{title}</Title>
        </div>
        <div className={s.partners__marquees}>
          {['right', 'left'].map((direction, index) => (
            <PartnersRow 
              key={direction} 
              partners={cards.slice(index * midIndex, (index + 1) * midIndex)} 
              behavior="alternate" 
              direction={direction} 
              loop 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
