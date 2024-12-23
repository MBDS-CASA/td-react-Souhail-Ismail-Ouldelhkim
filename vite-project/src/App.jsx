import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>A la découverte des premières notions de React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Modification <code>Souhail Ismail Ouldelhkim</code> Ouldelhkim Souhail Ismail
        </p>
      </div>
      <p className="read-the-docs">
        Ouldelhkim Souhail Ismail 
      </p>
    </>
  )
}

export default App
