import React from 'react'

import styles from './Header.module.scss'
import logo from '/logo.png'
import NavMenu from '../NavMenu'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <div className={styles.header__row}>
            <a href="/" className={styles.header__logo}>
              <img src={logo} alt="header logo" />
            </a>
            <div className={styles.header__box}>
              <a className={styles.header__mail} href="mailto:info@tlcgroup.kz">info@tlcgroup.kz</a>
              <a className={styles.header__tel} href="tel:+7 707 180 32 22">+7 707 180 32 22</a>
            </div>
          </div>
          <div className={styles.header__row}>
            <NavMenu classMenu={styles.header__menu} classNav={styles.header__nav} />
            <a className={styles.header__call} href="">Заказать звонок</a>
            <div className={styles.header__burger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
