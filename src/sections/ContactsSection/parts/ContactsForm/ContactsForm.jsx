import React from 'react'

import Input from '../../../../components/Forms/parts/Input';
import Button from '../../../../components/Button';

import s from './ContactsForm.module.scss'

export default function ContactsForm() {
  return (
    <form className={s.contacts__form}>
      <Input type="text" placeholder='Имя *' required />
      <Input type="tel" placeholder='Телефон*' required />
      <Button className={s.contacts__btn + " button button_light"} type="submit">Оставить заявку</Button>
  </form>
  )
}
