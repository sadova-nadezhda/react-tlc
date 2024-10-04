import React, { useEffect, useRef }  from 'react';
import { gsap } from 'gsap'; 

import Title from '../../components/Title';
import Form from '../../components/Form';

import {contacts} from '../../utils/contacts.js';

import s from './ContactsSection.module.scss';


export default function ContactsSection() {
  const backRef = useRef(null); 
  const sectionRef = useRef(null);

  useEffect(() => {
    const backElement = backRef.current; 


    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(backElement, {
            scale: 1,
            transform: 'translateX(-50%)',
            duration: 1,
            ease: "power2.out"
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5 
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id='contacts' ref={sectionRef} className={s.contacts + ' section'}>
      <img ref={backRef} className={s.contacts__back} src="/assets/img/earth.png" alt="" />
      <div className="container">
        <div className={s.contacts__container}>
          <Title component='h2' className={s.contacts__title}>{contacts.title}</Title>
          <div className={s.contacts__wrap}>
            <div className={s.contacts__box}>
              <a href={`tel:${contacts.phone}`} className={s.contacts__tel}>{contacts.phone}</a>
              <a href="" target="_blank" className={s.contacts__address}>
                <span>{contacts.city}</span>
                <span>{contacts.address}</span>
              </a>
              <a href={`mailto:${contacts.email}`} className={s.contacts__mail}>{contacts.email}</a>
              <div className={s.contacts__socials}>
                <a href={contacts.socials.instagram} target="_blank" rel="nofollow">Instagram</a>
                <a href={contacts.socials.whatsapp} target="_blank" rel="nofollow">Whatsapp</a>
              </div>
            </div>
            <Form isShort formName="Контакты - Оставить заявку" />
          </div>
        </div>
      </div>
    </section>
  )
}
