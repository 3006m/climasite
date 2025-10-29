import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/css.css";

import Video from "../assets/TesteQueima.mp4";
import Video2 from "../assets/TesteQueima2.mp4";
import Video3 from "../assets/TesteSala.mp4";
import Image from '../assets/Projeto.jpeg';
import Image2 from '../assets/MQTT.jpeg';

export default function Resultados() {
    const items = [
        {
            title: "Aprendizados e Desafios do Grupo",
            img: Image,
            text: `Durante o desenvolvimento do projeto, aprendemos a integrar sensores físicos com o ESP32,
configurar a comunicação MQTT e interpretar os dados coletados. Entre os desafios, destacam-se manter a
estabilidade da conexão Wi-Fi, calibrar corretamente os sensores de temperatura, umidade e gás, e criar
feedback visual eficiente utilizando LEDs. Além disso, aprendemos a organizar os tópicos MQTT e monitorar
os dados em tempo real através de aplicativos móveis.`
        },
        {
            title: "Cliente MQTT no Celular",
            img: Image2,
            text: `Mostramos os dados do sensor no celular usando um cliente MQTT, visualizando temperatura,
umidade e nível de gás em tempo real. Isso permitiu entender melhor como os dados do ESP32 podem ser
interpretados e utilizados em aplicações práticas de IoT.`
        },
        {
            title: "Teste do Sensor de Gás",
            video: Video,
            text: `O vídeo demonstra o teste do sensor de gás utilizando fósforo/papel queimando. Ele mostra a
reação do sensor e a ativação dos LEDs de alerta em tempo real, validando a eficácia do sistema.`
        },
        {
            title: "Teste do Sensor de Gás - Segundo Experimento",
            video: Video2,
            text: `Segundo teste do sensor de gás, reforçando os resultados anteriores e mostrando consistência
nas medições de fumaça e ativação dos LEDs.`
        },
        {
            title: "Teste em Ambiente da Sala",
            video: Video3,
            text: `Demonstração do funcionamento do sistema em um ambiente controlado, mostrando a integração
com o ESP32, sensores e LEDs, além do monitoramento via MQTT.`
        }
    ];

    return (
        <main>
            <Navbar />
            <h1>🌎 Resultados e Aprendizados</h1>

            <section>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`hardware-item ${index % 2 === 0 ? "normal" : "reversed"}`}
                    >
                        {item.img && <img src={item.img} alt={item.title} />}
                        {item.video && (
                            <video controls>
                                <source src={item.video} type="video/mp4" />
                                Seu navegador não suporta o elemento de vídeo.
                            </video>
                        )}

                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </section>
            <Footer />
        </main>
    );
}
