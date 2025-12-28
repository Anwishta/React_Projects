import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const anotherUser = "Anwishta"

const myApp = React.createElement(
  'a',
  {href: "https:facebook.com", target: "_blank"},
  "Click me to visit Facebook",
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    myApp
  /* </StrictMode>, */
)
