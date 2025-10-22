import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

function Home() {
  const cards = [
    {
      title: "O Projeto",
      path: "/projeto",
      description: "Conheça nossa proposta",
    },
    { title: "Simulação", path: "/simulacao", description: "Teste no Wokwi" },
    {
      title: "Hardware",
      path: "/hardware",
      description: "Componentes utilizados",
    },
    {
      title: "Software",
      path: "/software",
      description: "Nossa implementação",
    },
    { title: "FAQ", path: "/faq", description: "Dúvidas frequentes" },
    {
      title: "Resultados",
      path: "/resultados",
      description: "Dados coletados",
    },
    { title: "Equipe", path: "/equipe", description: "Desenvolvedores" },
  ];

  return (
    <div className="home-page-container">
      <div className="home-hero">
        <div className="home-hero-overlay">
          <div className="home-main-content">
            <section className="home-hero-section">
              <h1>Sistema de Monitoramento Climático</h1>
              <p className="home-subtitle">
                Monitoramento em tempo real de variáveis climáticas com
                tecnologia IoT
              </p>
            </section>
    <section className="blocoTextoHome"> 
            <p>
              {" "}
              <p>
                O objetivo deste projeto é montar um sistema usando o ESP32,
                junto com os sensores DHT11 e MQ2, para medir a umidade, a
                temperatura e a presença de gases tóxicos no ambiente.
              </p>
              <p>
                A ideia é criar uma forma simples e prática de monitorar essas
                condições, mostrando tudo por meio de LEDs. O DHT11 é o sensor
                responsável por medir a temperatura e a umidade, enquanto o MQ2
                detecta gases tóxicos, ajudando a identificar se há algum risco
                no ambiente. Para mostrar as informações, foram usados quatro
                LEDs: um indica a umidade, outro mostra a temperatura, o
                terceiro sinaliza a presença de gás tóxico e o último acende
                para indicar que o sistema está funcionando corretamente.
              </p>
              <p>
                Esse projeto mostra como é possivel usar diversas tecnologias
                juntas para criar algo útil e eficiente para monitorar o
                ambiente de forma simples. A parte de eletrônica ajudou a montar
                os fios e os sensores, a de programação serviu pra fazer o ESP32
                funcionar, ciencias também foi utilizada para entender sobre a
                umidade, temperatura e gases tóxicos.
              </p>
              <p>
                Juntando tudo isso, o projeto ficou mais fácil de entender,
                também mostrou que se juntar varias matérias podem criar algo
                legal e que realmente funcionasse e que seja algo real e útil,
                deixando o aprendizado mais interessante.
              </p>
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
