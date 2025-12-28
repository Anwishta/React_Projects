import React from 'react'
import { useState } from 'react'

const Button = ({color}) => {
    const [colors, setColors] = useState(color)

    const colorChanger = () => {
        setColors(color => document.body.style.backgroundColor = color)
    }
  return (
    <div>
      <button onClick={colorChanger}>{color}</button>
    </div>
  )
}

export default Button
