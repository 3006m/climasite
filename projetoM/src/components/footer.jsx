import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Sobre */}
        <div className="footer-section">
          <h3>Sobre</h3>
          <p>
            Este site apresenta projetos e tutoriais com ESP32 e outros componentes eletrônicos,
            mostrando aplicações práticas e explicações detalhadas.
          </p>
        </div>

        {/* Links úteis */}
        <div className="footer-section">
          <h3>Links Úteis</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projeto">O Projeto</Link></li>
            <li><Link to="/simulacao">Simulação Wokwi</Link></li>
            <li><Link to="/hardware">Hardware</Link></li>
            <li><Link to="/software">Software</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/resultados">Resultados</Link></li>
            <li><Link to="/equipe">Equipe</Link></li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: grupoalfaone@gmail.com</p>
          <p>Telefone: +55 11 99999-9999</p>
        </div>

        {/* Redes sociais */}
        <div className="footer-section">
          <h3>Siga-nos</h3>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="footer-bottom">
        <p>© 2025 Grupo Alfa One. Todos os direitos reservados.</p>
        <p>Feito com React</p>
      </div>
    </footer>
  );
}
