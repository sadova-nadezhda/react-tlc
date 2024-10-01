import React, {useEffect} from 'react';

import NavMenu from '../NavMenu';
import Button from '../Button';

import s from './Header.module.scss';

import logo from '/logo.png';

export default function Header({openPopup}) {

  useEffect(() => {
    const header = document.querySelector("header");
    const sectionTop = document.querySelector('.section-top');

    function addPadTop(header, section) {
      if (header && section) {
        let headerHeight = header.offsetHeight;
        section.style.marginTop = `${headerHeight}px`;
      }
    }

    const handleScroll = () => {
      let scroll = window.scrollY;
      if (header) {
        header.classList.toggle("scroll", scroll > 50);
      }
    }

    const handleResize = () => {
      if (sectionTop && header) {
        addPadTop(header, sectionTop);
      }
    }

    if (sectionTop && header) {
      addPadTop(header, sectionTop);
      handleScroll(); // Initial check
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    }

    // Recalculate padding top when route changes
    addPadTop(header, sectionTop);

    // Cleanup function to remove the event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__container}>
          <div className={s.header__row}>
            <a href="/" className={s.header__logo}>
              <img src={logo} alt="header logo" />
            </a>
            <div className={s.header__box}>
              <a className={s.header__mail} href="mailto:info@tlcgroup.kz">info@tlcgroup.kz</a>
              <a className={s.header__tel} href="tel:+7 707 180 32 22">+7 707 180 32 22</a>
            </div>
          </div>
          <div className={s.header__row}>
            <NavMenu classMenu={s.header__menu} classNav={s.header__nav} />
            <Button className={s.header__call} onClick={openPopup}>Заказать звонок</Button>
            <div className={s.header__burger}>
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
