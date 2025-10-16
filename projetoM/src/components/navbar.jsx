import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/projeto" className="nav-button">O Projeto</Link>
        <Link to="/simulacao" className="nav-button">Simulação Wokwi</Link>
        <Link to="/hardware" className="nav-button">Hardware</Link>
        <Link to="/software" className="nav-button">Software</Link>
        <Link to="/faq" className="nav-button">FAQ</Link>
        <Link to="/resultados" className="nav-button">Resultados</Link>
        <Link to="/equipe" className="nav-button">Equipe</Link>
      </div>
    </nav>
  );
}

export default Navbar;