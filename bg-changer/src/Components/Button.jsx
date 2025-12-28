import React from 'react'
import { useState } from 'react'

<<<<<<< HEAD
const Button = ({color, setColor}) => {


  return (
    <div className='flex justify-center align-middle'>
      <button onClick={() => setColor(color)}>{color}</button>
=======
const Button = ({color}) => {
    const [colors, setColors] = useState(color)

    const colorChanger = () => {
        setColors(color => document.body.style.backgroundColor = color)
    }
  return (
    <div>
      <button onClick={colorChanger}>{color}</button>
>>>>>>> 9ecb5da (bg color added)
    </div>
  )
}

export default Button
