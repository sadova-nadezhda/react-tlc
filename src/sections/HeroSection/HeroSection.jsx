import React, {useState, useEffect} from 'react'

import { hero } from '~/src/utils/hero.js'
import s from './HeroSection.module.scss'
import Form from '../../components/Form'
import Button from '../../components/Button/Button'
import Title from '../../components/Title'

export default function HeroSection({openPopup}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id='hero' className={s.hero}>
      <div className="container">
        <div className={s.hero__container}>
          <div className={s.hero__row}>
            <Title className={s.hero__title}>{hero.title}</Title>
            <Title component='h4' className={s.hero__subtitle}>{hero.subtitle}</Title>
          </div>
          <div className={s.hero__wrap}>
            {!isMobile ? (
              <div className={s.hero__application}>
                <Form />
              </div>
            ) : (
              <Button onClick={openPopup} className={`${s.hero__btn_mb} popup__btn button`}>
                Оставить заявку
              </Button>
            )}
            <div className={s.hero__img}><img src={hero.img} alt="" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
