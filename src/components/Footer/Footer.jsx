import React from 'react';

import Button from '../Button';
import NavMenu from '../NavMenu';

import { contacts } from '../../utils/contacts.js';

import s from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__container}>
          <div className={s.footer__row}>
            <a href="/" className={s.footer__logo}>
              <img src="/logo-foot.png" alt="logo-foot" />
            </a>
            <div className={s.footer__box}>
              <NavMenu classMenu={s.footer__menu} classNav={s.footer__nav} />
              <div className={s.footer__contacts + ' ' + s.footer__col}>
                <div className={s.footer__address + ' ' + s.footer__col}>
                  <span>Адрес</span>
                  <a href="">{contacts.address}</a>
                </div>
                <div className={s.footer__mail + ' ' + s.footer__col}>
                  <span>E-mail</span>
                  <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                </div>
                <div className={s.footer__tel + ' ' + s.footer__col}>
                  <span>Телефон</span>
                  <a href={`mailto:${contacts.phone}`}>{contacts.phone}</a>
                </div>
              </div>
              <div className={s.footer__socials + ' ' + s.footer__col}>
                <span>Соцсети</span>
                <a href={contacts.socials.instagram} target="_blank" rel="nofollow">Instagram</a>
                <a href={contacts.socials.whatsapp} target="_blank" rel="nofollow">Whatsapp</a>
              </div>
            </div>
          </div>
          <div className={s.footer__copy}>
            <span>© 2023, TLC</span>
            <span>Все права защищены</span>
            <Button component='a' href="" target="_blank">Сделано FACTUM</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
