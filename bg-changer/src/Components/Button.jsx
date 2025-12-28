import React from 'react'
import { useState } from 'react'

const Button = ({color, setColor}) => {


  return (
    <div className='flex justify-center align-middle'>
      <button onClick={() => setColor(color)}>{color}</button>
    </div>
  )
}

export default Button
