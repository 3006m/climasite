import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
  const cards = [
    { title: 'O Projeto', path: '/projeto', description: 'Conheça nossa proposta' },
    { title: 'Simulação', path: '/simulacao', description: 'Teste no Wokwi' },
    { title: 'Hardware', path: '/hardware', description: 'Componentes utilizados' },
    { title: 'Software', path: '/software', description: 'Nossa implementação' },
    { title: 'FAQ', path: '/faq', description: 'Dúvidas frequentes' },
    { title: 'Resultados', path: '/resultados', description: 'Dados coletados' },
    { title: 'Equipe', path: '/equipe', description: 'Desenvolvedores' }
  ];

  return (
    <div className="home-page-container">
      <div className="home-hero">
        <div className="home-hero-overlay">
          <div className="home-main-content">
            <section className="home-hero-section">
              <h1>Sistema de Monitoramento Climático</h1>
              <p className="home-subtitle">
                Monitoramento em tempo real de variáveis climáticas com tecnologia IoT
              </p>
            </section>

            <section className="home-cards-grid">
              {cards.map((card, index) => (
                <Link to={card.path} className="home-card" key={index}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </Link>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
