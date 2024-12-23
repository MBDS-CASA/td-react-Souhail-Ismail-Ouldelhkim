// src/components/MainContent.jsx

function MainContent() {
    // Récupération de la date/heure actuelles
    const now = new Date();
  
    const day = now.getDate();                     
    const monthIndex = now.getMonth();             
    const year = now.getFullYear();                
    const hours = now.getHours();                  
    const minutes = now.getMinutes();             
    const seconds = now.getSeconds();              
  
    // Tableau pour convertir l'index du mois en nom de mois
    const months = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];

    const formatTimeUnit = (value) => value.toString().padStart(2, '0');
  
    return (
      <main style={{ textAlign: 'center', padding: '1rem' }}>
        <p>
          Bonjour, on est le {day} {months[monthIndex]} {year} et il est 
          {' '}{formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:{formatTimeUnit(seconds)}
        </p>
      </main>
    );
  }
  
  export default MainContent;
  