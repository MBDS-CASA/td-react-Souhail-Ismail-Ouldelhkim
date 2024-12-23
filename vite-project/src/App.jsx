import { useState } from 'react'
import './App.css'

// Import des composants
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

// Optionnel : si tu veux afficher le logo React en bas de la page
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* On insère le Header ici */}
      <Header />

      {/* On insère notre contenu principal */}
      <MainContent />

      {/* Exemple d'utilisation du logo dans la page, si tu souhaites le conserver */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card" style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Modification <code>Souhail Ismail Ouldelhkim</code> Ouldelhkim Souhail Ismail
        </p>
      </div>

      <p className="read-the-docs" style={{ textAlign: 'center' }}>
        Ouldelhkim Souhail Ismail
      </p>

      {/* On place enfin le Footer en bas de la page */}
      <Footer />
    </>
  )
}

export default App
