import React, { useState } from 'react';
import Input from './parts/Input';
import Select from './parts/Select';
import Button from '../Button';

import s from './Form.module.scss';

const options = [
  { value: 'default', label: 'Выберите услугу', disabled: true },
  { value: 'ser1', label: 'Услуга 1' },
  { value: 'ser2', label: 'Услуга 2' },
  { value: 'ser3', label: 'Услуга 3' },
];

export default function Form({ isShort, formName }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    service: 'default',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSave = {
      ...formData,
      message: isShort ? '' : formData.message,
      service: isShort ? '' : formData.service,
      formName,
    };

    localStorage.setItem('formData', JSON.stringify(dataToSave));

    // Очистка полей после отправки (необязательно)
    setFormData({
      name: '',
      phone: '',
      message: '',
      service: 'default',
    });

    console.log('Данные сохранены в localStorage:', dataToSave);
  };

  return (
    <>
      {!isShort && <h4 className={s.hero__caption}>Оставить заявку</h4>}
      <form onSubmit={handleSubmit} className={!isShort ? s.hero__form : s.contacts__form}>
        <Input type="hidden" name="formName" value={formName} />
        <Input
          type="text"
          name="name"
          placeholder="Имя *"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Телефон*"
          required
          value={formData.phone}
          onChange={handleChange}
          mask="+7 (___) ___-__-__"
        />
        {!isShort && (
          <>
            <Input
              type="text"
              name="message"
              placeholder="Сообщение"
              value={formData.message}
              onChange={handleChange}
            />
            <Select
              name="service"
              options={options}
              value={formData.service}
              onChange={handleChange}
            />
          </>
        )}
        <Button type="submit" className={s.hero__btn + ' button'}>Отправить</Button>
      </form>
    </>
  );
}
