import React from 'react';
import Navbar from '../components/Navbar';
import './equipe.css'; // Importando o arquivo CSS

const equipe = [
    { nome: 'Felipe', cargo: 'Líder', imagem: '/assets/felipe.jpg' },
    { nome: 'Murilo Correia', cargo: 'Vice Líder', imagem: '/assets/murilo_correia.jpg' },
    { nome: 'Vitor Hugo', cargo: 'Integrante', imagem: '/assets/vitor_hugo.jpg' },
    { nome: 'Murilo Besson', cargo: 'Integrante', imagem: '/assets/murilo_besson.jpg' },
    { nome: 'William Jr.', cargo: 'Integrante', imagem: '/assets/william_jr.jpg' },
];

export default function Equipe() {
    return (
        <main>
            <Navbar />
            <h1>Equipe</h1>
            <div className="equipe-container">
                {equipe.map((membro, index) => (
                    <div key={index} className="card">
                        <img src={membro.imagem} alt={membro.nome} className="card-image" />
                        <h2 className="card-title">{membro.nome}</h2>
                        <p className="card-cargo">{membro.cargo}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}