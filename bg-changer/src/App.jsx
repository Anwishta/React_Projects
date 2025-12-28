import { useState } from 'react'
import Button from './Components/Button'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
     <div className='flex justify-center align-middle' style={{backgroundColor: color, height: "100vh"}}>
      <Button color = "red" setColor = {setColor}/>
      <Button color = "green" setColor = {setColor}/>
      <Button color = "white" setColor = {setColor}/>
      <Button color = "orange" setColor = {setColor}/>
      <Button color = "yellow" setColor = {setColor}/>
     </div>
    </>
  )
}

export default App
