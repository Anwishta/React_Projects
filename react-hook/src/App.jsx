import { useState } from "react";


function App() {

  let [counter, setCounter] = useState(0);
  //let counter = 5;

  const increaseValue = () => {
    if (counter < 20 ) {
      
      setCounter(counter + 1)
    }
}

const decreaseValue = () => {
  if (counter > 0) {
    // console.log(counter);
    setCounter(counter - 1)
  }
  
}
  return (
    <>
      <h1>Welcome to Counter</h1>
      <h3>Value is {counter}</h3>
      <button onClick={increaseValue}>Increase Value </button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
