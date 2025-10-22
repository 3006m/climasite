import React from "react";
import "../styles/resultados.css";
import Navbar from "../components/navbar";
import Video from "../assets/TesteQueima.mp4"
import Video2 from "../assets/TesteQueima2.mp4"
import Video3 from "../assets/TesteSala.mp4"
import Image from '../assets/Projeto.jpeg'
import Image2 from '../assets/MQTT.jpeg'

export default function Resultados() {
    return (
        <main>
            <Navbar />
            <article className="Title">
                <h2>🌎 Resultados e Aprendizados</h2>
            </article>

            <article className="TextBlock">
                <h3>Aprendizados do Grupo</h3>
                <p>
                    Durante o projeto, aprendemos a integrar sensores físicos com o ESP32, configurar comunicação MQTT,
                    interpretar dados dos sensores e criar feedback visual com LEDs.
                </p>
            </article>

            <article className="TextBlock">
                <h3>Desafios</h3>
                <ul>
                    <li><p>
                        Manter a estabilidade da conexão Wi-Fi durante os testes.
                    </p></li>
                    <li><p>
                        Interpretar corretamente os valores do sensor de gás.
                    </p></li>
                    <li><p>
                        Organizar os tópicos MQTT de forma eficiente.
                    </p></li>
                    <li><p>
                        Garantir que os LEDs indicativos funcionem corretamente.
                    </p></li>
                </ul>
            </article>

            <article className="TextBlock">
                <h3>Imagens do Projeto</h3>
                <div className="Imagens">
                    <img src={Image} alt="Projeto físico ESP32" />
                    <img src={Image2} alt="Cliente MQTT no celular" />
                </div>
            </article>

            <article className="VideoBlock">
                <h3>Vídeo: Teste do Sensor de Gás</h3>
                <article className="Videos">
                    <video controls>
                        <source src={Video} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                    <video controls>
                        <source src={Video2} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                    <video controls>
                        <source src={Video3} type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </article>
            </article>
        </main>
    );
}
