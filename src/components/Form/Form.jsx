import React from 'react';
import Input from './parts/Input';
import Select from './parts/Select';
import Button from '../Button';

import s from './Form.module.scss'

const options = [
  { value: 'default', label: 'Выберите услугу', disabled: true },
  { value: 'ser1', label: 'Услуга 1' },
  { value: 'ser2', label: 'Услуга 2' },
  { value: 'ser3', label: 'Услуга 3' },
];

export default function Form({isShort}) {
  return (
    <>
      {!isShort &&  <h4 className={s.hero__caption}>Оставить заявку</h4> }
      <form className={!isShort ? s.hero__form : s.contacts__form}>
        <Input type="text" placeholder="Имя *" required />
        <Input type="tel" placeholder="Телефон*" required />
        {!isShort && 
          <>
          <Input type="text" placeholder="Сообщение" />
          <Select options={options} />
          </>
        }
        <Button type="submit" className={s.hero__btn + ' button'}>Отправить</Button>
      </form>
    </>
  )
}
