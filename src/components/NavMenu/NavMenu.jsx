import React from 'react'

import s from './NavMenu.module.scss'

export default function NavMenu({classMenu, classNav}) {
  return (
    <nav className={classNav + ' ' + s.nav}>
      <ul className={classMenu + ' ' + s.menu}>
        <li><a href="#services">Услуги</a></li>
        <li><a href="#about">О компании</a></li>
        <li><a href="#partners">Партнеры</a></li>
        <li><a href="#contacts">Контакты</a></li>
      </ul>
    </nav>
  )
}
