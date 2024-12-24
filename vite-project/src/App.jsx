import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import RandomNote from "./components/RandomNote";
import RandomNoteCandg from "./components/RandomNoteCandg";
import reactLogo from "./assets/react.svg";


import Menu from "./components/Menu";

import Grade from "./components/Pages/grade";  
import Date from "./components/Pages/date";
import StuedentName from "./components/Pages/StudentName";
import Course from "./components/Pages/course";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Menu />
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/random-note" element={<RandomNote />} />
        <Route path="/random-note-candg" element={<RandomNoteCandg />} />
        <Route path="/grades" element={<Grade />} />
        <Route path="/course" element={<Course />} />
        <Route path="/studentName" element={<StuedentName />} />
        <Route path="/date" element={<Date />} />
      </Routes>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <RandomNote />
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
          Modification <code>Souhail Ismail Ouldelhkim</code> Ouldelhkim Souhail Ismail
        </p>
      </div>

      <p className="read-the-docs" style={{ textAlign: "center" }}>
        Ouldelhkim Souhail Ismail
      </p>

      <Footer />
    </Router>
  );
}

export default App;
