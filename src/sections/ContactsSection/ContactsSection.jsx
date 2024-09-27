import React from 'react';

import Title from '../../components/Title';

import {contacts} from '../../utils/contacts.js';

import s from './ContactsSection.module.scss';
import ContactsForm from './parts/ContactsForm';

export default function ContactsSection() {
  return (
    <section className={s.contacts + ' section'}>
      <img className={s.contacts__back} src="/assets/img/earth.png" alt="" />
      <div className="container">
        <div className={s.contacts__container}>
          <Title className={s.contacts__title}>{contacts.title}</Title>
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
            <ContactsForm />
          </div>
        </div>
      </div>
    </section>
  )
}
