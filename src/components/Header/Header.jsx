import React, {useState, useEffect, useRef} from 'react';

import NavMenu from '../NavMenu';
import Button from '../Button';
import HeaderInfo from './parts/HeaderInfo';

import logo from '/logo.png';

import s from './Header.module.scss';

export default function Header({ openPopup }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 520);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 767);
  const headerRef = useRef(null);

  const updateHeaderState = () => {
    setIsMobile(window.innerWidth <= 520);
    setIsOpen(window.innerWidth > 767);
  };

  const handleScroll = () => {
    if (headerRef.current) {
      headerRef.current.classList.toggle("scroll", window.scrollY > 50);
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
  }, []);

  return (
    <header className={s.header} ref={headerRef}>
      <div className="container">
        <div className={s.header__container}>
          <div className={s.header__row}>
            <a href="/" className={s.header__logo}>
              <img src={logo} alt="header logo" />
            </a>
            {!isMobile && <HeaderInfo />}
          </div>
          <div className={s.header__row}>
            <NavMenu isMobile={isMobile} isOpen={isOpen} closeMenu={toggleMenu} />
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
    </header>
  );
}
