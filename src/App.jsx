import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Popup from './components/Popup'

import "./styles/main.scss"

export default function App() {
  
  return (
    <>
      <Popup />
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

