import React from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainContent from './components/MainContent/MainContent'

import "./styles/main.scss"

export default function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

