import React from "react";
import Navbar from "../components/Navbar";
import "../styles/css.css";
import FelipeImg from "../assets/felipe.jpg";
import CorreiaImg from "../assets/correia.jpg";
import VHImg from "../assets/vh.jpg";
import BessonImg from "../assets/beso.jpg";
import WilliamImg from "../assets/wilia.jpg";
import Equipa from "../assets/quipa.jpg";

const equipe = [
  {
    nome: "Felipe",
    cargo: "Líder",
    imagem: FelipeImg,
    info: "Responsável pelo aprendizado, análise e experimentação. Página FAQ e Resultados",
  },
  {
    nome: "Murilo Correia",
    cargo: "Vice Líder",
    imagem: CorreiaImg,
    info: "Responsável pela finalização, identidade visual e hospedagem. Home, Equipe, Publicação",
  },
  {
    nome: "Vitor Hugo",
    cargo: "Integrante",
    imagem: VHImg,
    info: "Responsável pela parte técnica de montagem e simulação. Hardware e Simulação",
  },
  {
    nome: "Murilo Besson",
    cargo: "Integrante",
    imagem: BessonImg,
    info: "Responsável pelo código, explicação e parte lógica da seção de Software.",
  },
  {
    nome: "William Jr.",
    cargo: "Integrante",
    imagem: WilliamImg,
    info: "Responsável pelo conteúdo de introdução e contexto. Home e O Projeto.",
  },
];

export default function Equipe() {
  return (
    <main>
      <Navbar />
      <h1>Equipe</h1>
      <div className="equipe-container">
        {equipe.map((membro, index) => (
          <div key={index} className="cardi">
            <img
              src={membro.imagem}
              alt={membro.nome}
              className="cardi-image"
            />
            <h2 className="cardi-title">{membro.nome}</h2>
            <p className="cardi-cargo">{membro.cargo}</p>
            <div className="cardi-info">{membro.info}</div>
          </div>
        ))}
      </div>
      <div className="tCont">
        <div className="equipeTotal">
          <h2>Grupo 1.</h2>
          <img src={Equipa} alt="Equipe." className="equipeTotalI" />
        </div>
      </div>
    </main>
  );
}
