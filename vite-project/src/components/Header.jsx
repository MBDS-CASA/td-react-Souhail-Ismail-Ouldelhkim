import reactLogo from '../assets/react.svg'; 

function Header() {
  return (
    <header style={{ textAlign: 'center' }}>
      <img
        src={reactLogo}
        alt="Logo Formation"
        style={{
          display: 'block',
          margin: '0 auto',
          width: '80px',   
          height: '80px',  
          objectFit: 'contain'
        }}
      />
      <h1>Ouldelhkim Souhail Ismail</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  );
}

export default Header;
