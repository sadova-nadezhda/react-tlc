import React, {useState} from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Popup from './components/Popup'
import Form from './components/Forms';

import "./styles/main.scss"
import { useState } from 'react'

export default function App() {  
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Popup>
        <Form />
      </Popup>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

