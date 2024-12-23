// src/components/Footer.jsx
function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer
        style={{
          textAlign: 'center',
          width: '100%',
          backgroundColor: '#d42424',
          padding: '1rem',
          marginTop: '2rem'
        }}
      >
        <p style={{ margin: 0, color: '#fff' }}>
          © {currentYear} - Ouldelhkim.Souhail.Ismail, Tous droits réservés.
        </p>
      </footer>
    );
  }
  
  export default Footer;
  