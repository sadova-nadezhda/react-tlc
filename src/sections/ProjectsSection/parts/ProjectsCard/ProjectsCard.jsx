import React from 'react'

import s from './ProjectsCard.module.scss'

export default function ProjectsCard({img, caption}) {
  return (
    <div className={s.projects__card}>
      <div className={s.projects__img}><img src={img} alt="" /></div>
      <div className={s.projects__txt}>{caption}</div>
    </div>
  )
}
