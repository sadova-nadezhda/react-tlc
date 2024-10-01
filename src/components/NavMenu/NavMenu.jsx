import React from 'react';
import classNames from 'classnames';

import HeaderInfo from '../Header/parts/HeaderInfo';

import {menu} from '../../utils/menu.js';

import s from './NavMenu.module.scss';

export default function NavMenu({isMobile, isOpen, closeMenu }) {
  return (
    <nav className={classNames(s.header__nav, { [s.open]: isOpen })}>
      <ul className={s.header__menu}>
        {menu.map((item, index) => (
          <li key={index}>
            <a href={item.href} onClick={closeMenu}>{item.label}</a>
          </li>
        ))}
      </ul>
      {isMobile && <HeaderInfo />}
    </nav>
  )
}

