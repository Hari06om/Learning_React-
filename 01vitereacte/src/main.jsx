import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function Myapp(){
  return(
    <div>
      <h1>Hello World</h1>
      <p>This is my first React app!</p>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click Me to visit chatpgt'
// }

const anotheruser =  " Hariom vemra | React Developer"

const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click Me to visit chatgpt ||| ',  // This is the children of the elemen
   anotheruser
)


const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Click Me to visit chatgpt
  </a>
)


createRoot(document.getElementById('root')).render(

    
    reactElement
  

)
