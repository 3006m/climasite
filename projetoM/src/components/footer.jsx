import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (

    <footer className="footer">
      <div className="footer-container">
        {/* Seção de contato */}
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: alfaone.dev@gmail.com</p>
          <p>Telefone: +55 11 99999-9999</p>
        </div>

        {/* Seção de links úteis */}
        <div className="footer-section">
          <h3>Links Úteis</h3>
          <ul>
            <li><a href="#esp32">ESP32</a></li>
            <li><a href="#dht11">DHT11</a></li>
            <li><a href="#mq135">MQ-135</a></li>
            <li><a href="#leds">LEDs</a></li>
            <li><a href="#resistores">Resistores</a></li>
          </ul>
        </div>

        {/* Seção de redes sociais */}
        <div className="footer-section">
          <h3>Siga-nos</h3>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Grupo Alfa One. Todos os direitos reservados.</p>
        <p>Feito com React</p>
      </div>
    </footer>
  )
};