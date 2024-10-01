import React from 'react';

import HeaderInfo from '../Header/parts/HeaderInfo';

import {menu} from '../../utils/menu.js';

// import s from './NavMenu.module.scss';

export default function NavMenu({classMenu, classNav, isMobile, closeMenu }) {
  return (
    <nav className={classNav}>
      <ul className={classMenu}>
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

