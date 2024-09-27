import React, {useState} from 'react'

export default function Select({ options }) {
  const [selectedOption, setSelectedOption] = useState('default');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <select value={selectedOption} onChange={handleChange}>
      {options.map((option) => (
        <option 
          key={option.value} 
          value={option.value} 
          disabled={option.disabled || false}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}
