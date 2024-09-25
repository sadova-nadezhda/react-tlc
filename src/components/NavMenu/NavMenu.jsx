import React from 'react'

import styles from './NavMenu.module.scss'

export default function NavMenu({classMenu, classNav}) {
  return (
    <nav className={classNav + ' ' + styles.nav}>
      <ul className={classMenu + ' ' + styles.menu}>
        <li><a href="">Услуги</a></li>
        <li><a href="">О компании</a></li>
        <li><a href="">Партнеры</a></li>
        <li><a href="">Контакты</a></li>
      </ul>
    </nav>
  )
}
