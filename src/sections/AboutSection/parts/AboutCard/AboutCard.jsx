import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import s from './AboutCard.module.scss'

export default function AboutCard({caption, index}) {
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
        delay: index * 0.2,  // Задержка для появления по очереди
      },
    },
  };

  return (
    <motion.div 
      ref={ref}
      className={s.about__card}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <p>{caption}</p>
    </motion.div>
  )
}
