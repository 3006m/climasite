// Simulacao.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Print from '../assets/DesafioClima.png'
import '../styles/css.css';

export default function Simulacao() {
  return (
    <main>
      <Navbar />
      <h1>Simulação do Projeto</h1>

      <section className="simulacao-section">

        {/* Imagem */}
        <img
          src={Print} // Coloque a imagem da simulação aqui
          alt="Simulação Wokwi"
          className="simulacao-img"
        />

        
        <p className="simulacao-text">
          Esta simulação foi criada utilizando a plataforma Wokwi, que permite testar
          projetos com microcontroladores como o ESP32, sensores e atuadores em tempo real.
          No projeto mostrado, o ESP32 está monitorando a qualidade do ar, temperatura e umidade
          utilizando sensores como o MQ-135 e DHT11.
          Os dados capturados pelos sensores são enviados em tempo real para um servidor MQTT (Mosquitto),
          possibilitando monitoramento remoto e integração com aplicações IoT.
          Essa simulação é uma forma prática de validar o funcionamento do circuito e do código antes de
          implementar fisicamente.
        </p>

        {/* Link do Wokwi */}
        <a
          href="https://wokwi.com/projects/443701495408123905" // Coloque o link real da sua simulação
          target="_blank"
          rel="noopener noreferrer"
          className="simulacao-link"
        >
          Abrir Simulação no Wokwi
        </a>
      </section>

      <Footer />
    </main>
  );
}
