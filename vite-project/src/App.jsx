import { useState } from "react";
import "./App.css";

// Import de tes composants
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import RandomNote from "./components/RandomNote";
import RandomNoteCandg from "./components/RandomNoteCandg";

import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainContent />

      {/* Conteneur Flex pour aligner RandomNote et RandomNoteCandg */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Centrer horizontalement
          alignItems: "flex-start", // Aligner verticalement en haut
          gap: "2rem", // Espacement entre les deux composants
          marginTop: "2rem", // Espace entre le contenu précédent et les composants
        }}
      >
        {/* Composant RandomNote */}
        <RandomNote />

        {/* Composant RandomNoteCandg */}
        <RandomNoteCandg />
      </div>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card" style={{ textAlign: "center", marginTop: "1rem" }}>
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Modification <code>Souhail Ismail Ouldelhkim</code> Ouldelhkim Souhail
          Ismail
        </p>
      </div>

      <p className="read-the-docs" style={{ textAlign: "center" }}>
        Ouldelhkim Souhail Ismail
      </p>

      <Footer />
    </>
  );
}

export default App;
