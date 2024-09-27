import React from 'react';

import s from './Popup.module.scss';
import Button from '../Button';
import Form from '../Forms';

export default function Popup() {
  return (
    <div className={s.popup}>
      <div className={s.popup__container}>
        <Button className={s.popup__close}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.99992 11.1787L14.714 15.8927C15.0394 16.2182 15.567 16.2182 15.8925 15.8927C16.2179 15.5673 16.2179 15.0396 15.8925 14.7142L11.1784 10.0002L15.8925 5.28612C16.2179 4.96069 16.2179 4.43305 15.8925 4.10761C15.567 3.78218 15.0394 3.78218 14.714 4.10761L9.99992 8.82165L5.28587 4.1076C4.96043 3.78217 4.4328 3.78217 4.10736 4.1076C3.78192 4.43304 3.78192 4.96068 4.10736 5.28611L8.82141 10.0002L4.10736 14.7142C3.78192 15.0397 3.78192 15.5673 4.10736 15.8927C4.4328 16.2182 4.96043 16.2182 5.28587 15.8927L9.99992 11.1787Z" fill="#222222"/>
          </svg>
        </Button>
        <Form />
      </div>
    </div>
  )
}
