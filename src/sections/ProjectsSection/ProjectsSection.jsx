import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Title from '../../components/Title';
import Button from '../../components/Button';
import ProjectsCard from './parts/ProjectsCard';

import {projects} from '../../utils/projects.js';

import 'swiper/css';
import 'swiper/css/navigation';
import s from './ProjectsSection.module.scss';

export default function ProjectsSection() {
  return (
    <section id='projects' className={s.projects + ' section'}>
      <div className="container">
        <div className={s.projects__container}>
          <div className={s.projects__top}>
            <Title component='h2' className={s.projects__title}>{projects.title}</Title>
            <div className={s.projects__arrows}>
              <Button className={s.projects__arrow  + " projects-prev"}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 4L7 10L13 16" stroke="#16676B" strokeWidth="1.5"/>
                </svg>
              </Button>
              <Button className={s.projects__arrow + " projects-next"}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 4L13 10L7 16" stroke="#16676B" strokeWidth="1.5"/>
                </svg>
              </Button>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            navigation={{
              prevEl: '.projects-prev',
              nextEl: '.projects-next',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="projectSwiper"
          >
            {projects.cards.map((card, index) => (
              <SwiperSlide key={index}><ProjectsCard key={index} {...card} /></SwiperSlide>
            ))}
            
          </Swiper>
        </div>
      </div>
    </section>
  )
}
