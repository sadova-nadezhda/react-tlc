import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import s from './ServicesCard.module.scss';

export default function ServicesCard({caption, img, index}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.5,   
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },  // Начальное состояние: невидимый и смещён вниз
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,  // Задержка для появления по очереди
      },
    },
  };

  return (
    <motion.div 
      ref={ref}
      className={s.services__card}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className={s.services__num}></div>
      <div className={s.services__img}><img src={img} alt="" /></div>
      <h4 className={s.services__caption}>{caption}</h4>
    </motion.div>
  )
}
