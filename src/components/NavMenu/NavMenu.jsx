import React from 'react';

import HeaderInfo from '../Header/parts/HeaderInfo';

import s from './NavMenu.module.scss';

export default function NavMenu({isMobile, isOpen}) {
  return (
    <nav className={s.header__nav} style={{ display: isOpen ? 'flex' : 'none' }}>
      <ul className={s.header__menu}>
        <li><a href="#services">Услуги</a></li>
        <li><a href="#about">О компании</a></li>
        <li><a href="#partners">Партнеры</a></li>
        <li><a href="#contacts">Контакты</a></li>
      </ul>
      {isMobile && <HeaderInfo />}
    </nav>
  )
}

