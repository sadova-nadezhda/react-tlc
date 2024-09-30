import React, {useState} from 'react'
import Button from '../Button'

export default function PopupBtn({children, ...props}) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <Button {...props} onClick={openPopup}>{children}</Button>
  )
}
