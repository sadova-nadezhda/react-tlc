import React, {useState, useEffect, useRef} from 'react';
import { motion } from "framer-motion";
import classNames from 'classnames';

import NavMenu from '../NavMenu';
import Button from '../Button';
import HeaderInfo from './parts/HeaderInfo';

import logo from '/logo.png';

import s from './Header.module.scss';

export default function Header({ openPopup }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 520);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 767);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const headerRef = useRef(null);


  const updateHeaderState = () => {
    setIsMobile(window.innerWidth <= 520);
    setIsOpen(window.innerWidth > 767);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const header = headerRef.current;

    if (header) {
      if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
        header.style.top = "0px";
      } else {
        header.style.top = "-110px";
      }

      if (currentScrollPos > 10) {
        header.classList.add(s.active);
        header.classList.remove(s.nonactive);
      } else {
        header.classList.add(s.nonactive);
        header.classList.remove(s.active);
      }

      setPrevScrollPos(currentScrollPos);

      header.classList.toggle("scroll", window.scrollY > 50);
    }
  };

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    updateHeaderState();
    window.addEventListener('resize', updateHeaderState);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', updateHeaderState);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <motion.header 
      className={s.header} 
      ref={headerRef}
      initial={{ opacity: 0, y: -50 }} // Начальное состояние
      animate={{ opacity: 1, y: 0 }}   // Конечное состояние
      transition={{ duration: 0.8, ease: 'easeInOut' }} // Параметры анимации
    >
      <div className="container">
        <div className={s.header__container}>
          <div className={s.header__row}>
            <a href="/" className={s.header__logo}>
              <img src={logo} alt="header logo" />
            </a>
            {!isMobile && <HeaderInfo />}
          </div>
          <div className={s.header__row}>
            <NavMenu classMenu={s.header__menu} classNav={classNames(s.header__nav, { [s.open]: isOpen })} isMobile={isMobile} closeMenu={toggleMenu} />
            <Button className={s.header__call} onClick={openPopup}>
              Заказать звонок
            </Button>
            <div className={`${s.header__burger} ${isOpen ? s.active : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
