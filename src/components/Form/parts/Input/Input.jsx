import React from 'react';
import { InputMask } from '@react-input/mask';

export default function Input({ mask, ...props }) {
  if (mask) {
    return <InputMask mask={mask} replacement={{ _: /\d/ }} {...props} />;
  }

  return <input {...props} />;
}