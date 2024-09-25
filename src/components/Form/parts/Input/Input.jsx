import React from 'react'

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <input type={type} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
  )
}
