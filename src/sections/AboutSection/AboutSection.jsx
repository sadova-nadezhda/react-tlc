import React from 'react';

import Title from '../../components/Title';
import Button from '../../components/Button';
import AboutCard from './parts/AboutCard';

import { about } from '../../utils/about.js';

import s from './AboutSection.module.scss';

export default function AboutSection({openPopup}) {
  return (
    <section id='about' className={s.about + ' section'} style={{backgroundImage:`url('/assets/img/back-1.png')`,}}>
      <div className="container">
        <div className={s.about__container}>
          <Title component='h2' className={s.about__title}>{about.title}</Title>
          <div className={s.about__desc}>{about.desc}</div>
          <div className={s.about__cards}>
            {about.cards.map((card, index) => (
              <AboutCard key={index} index={index} {...card} />
            ))}
          </div>
          <Button onClick={openPopup} className='button button_light'>Оставить заявку</Button>
        </div>
      </div>
    </section>
  )
}
