import reactLogo from '../assets/react.svg'; // Vérifie le chemin d'accès

function Header() {
  return (
    <header style={{ textAlign: 'center' }}>
      <img
        src={reactLogo}
        alt="Logo Formation"
        style={{
          display: 'block',
          margin: '0 auto',
          width: '80px',   // Ajuste la largeur
          height: '80px',  // Ajuste la hauteur
          objectFit: 'contain'
        }}
      />
      <h1>Ouldelhkim Souhail Ismail</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  );
}

export default Header;
