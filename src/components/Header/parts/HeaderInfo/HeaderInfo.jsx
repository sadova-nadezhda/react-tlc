import React from 'react'

import { contacts } from '../../../../utils/contacts.js';

import s from './HeaderInfo.module.scss'

export default function HeaderInfo() {
  return (
    <div className={s.header__box}>
      <a className={s.header__mail} href={`mail:${contacts.email}`}>{contacts.email}</a>
      <a className={s.header__tel} href={`tel:${contacts.phone}`}>{contacts.phone}</a>
    </div>
  )
}
