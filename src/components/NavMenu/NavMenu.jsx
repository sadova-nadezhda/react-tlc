import React from 'react'

import s from './NavMenu.module.scss'

export default function NavMenu({classMenu, classNav}) {
  return (
    <nav className={classNav + ' ' + s.nav}>
      <ul className={classMenu + ' ' + s.menu}>
        <li><a href="">Услуги</a></li>
        <li><a href="">О компании</a></li>
        <li><a href="">Партнеры</a></li>
        <li><a href="">Контакты</a></li>
      </ul>
    </nav>
  )
}
