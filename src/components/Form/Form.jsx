import React from 'react'
import Input from './parts/Input';
import Select from './parts/Select';
import Button from '../Button/Button';

const options = [
  { value: 'default', label: 'Выберите услугу', disabled: true },
  { value: 'ser1', label: 'Услуга 1' },
  { value: 'ser2', label: 'Услуга 2' },
  { value: 'ser3', label: 'Услуга 3' },
];

export default function Form({classForm, classBtn}) {
  return (
    <form className={classForm}>
      <Input type="text" placeholder="Имя *" />
      <Input type="tel" placeholder="Телефон*" />
      <Input type="text" placeholder="Сообщение" />
      <Select options={options} />
      <Button type="submit" className={classBtn + ' button'}>Отправить</Button>
    </form>
  )
}
