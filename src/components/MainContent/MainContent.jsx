import React from 'react'

import HeroSection from '../../sections/HeroSection'
import ServiceSection from '../../sections/ServiceSection'
import PartnersSection from '../../sections/PartnersSection'
import AboutSection from '../../sections/AboutSection'
import ProjectsSection from '../../sections/ProjectsSection'
import ContactsSection from '../../sections/ContactsSection'

import s from './MainContent.module.scss'

export default function MainContent() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <PartnersSection />
      <AboutSection />
      <ProjectsSection />
      <ContactsSection />
    </main>
  )
}
