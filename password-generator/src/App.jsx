import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);


  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {

    let pass = ""
    let alphabets = "ABCDEFGHIJKLMNOPQRSTWVUXYZabcdefghijklmnopqrstwuvxyz";
    if (charAllowed) {
      alphabets += "!@#$%^&*()_+~"
    }
    if (numberAllowed) {
      alphabets += "1234567890"
    }
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * alphabets.length + 1);
      pass += alphabets.charAt(index);
      
    }
    setPassword(pass)

  }, [length, charAllowed, numberAllowed])

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed, generatePassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-50 bg-gray-800 text-white ">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-gray-700 text-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyToClipBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>
  )
}

export default App
