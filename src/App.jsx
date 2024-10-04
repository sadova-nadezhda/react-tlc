import React, {useState} from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Popup from './components/Popup'
import Form from './components/Form';

import "./styles/main.scss";

export default function App() {  
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <>
      <Popup isOpen={isOpen} closePopup={closePopup}>
        <Form formName="Модальное окно - Заказать звонок" />
      </Popup>
      <Header openPopup={openPopup} />
      <MainContent openPopup={openPopup} />
      <Footer />
    </>
  )
}

