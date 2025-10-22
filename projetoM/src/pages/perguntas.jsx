import { useState } from "react";
import "../styles/css.css";

export default function Perguntas() {
    const [opcao, setOpcao] = useState("Todas")

    const perguntas = [
        // Sensores e Hardware
        {
            pergunta: "O que é o sensor DHT11?",
            resposta: "É um sensor digital que mede temperatura e umidade e envia os dados ao ESP32 por um único pino.",
            categoria: "📡 Sensores e Hardware"
        },
        {
            pergunta: "Qual a função do sensor MQ-135?",
            resposta: "Detecta gases tóxicos e avalia a qualidade do ar, enviando um valor analógico proporcional à concentração.",
            categoria: "📡 Sensores e Hardware"
        },
        {
            pergunta: "Por que o DHT11 opera em 3V?",
            resposta: "Porque o ESP32 utiliza 3,3V em seus pinos GPIO, evitando risco de queima do microcontrolador.",
            categoria: "📡 Sensores e Hardware"
        },
        {
            pergunta: "O que acontece quando o MQ-135 é exposto à fumaça?",
            resposta: "O valor analógico aumenta, indicando pior qualidade do ar; isso pode acionar LEDs de alerta.",
            categoria: "📡 Sensores e Hardware"
        },
        {
            pergunta: "Por que usamos LEDs no projeto?",
            resposta: "Os LEDs indicam condições como temperatura alta, baixa umidade ou presença de gases, facilitando a visualização local.",
            categoria: "📡 Sensores e Hardware"
        },

        // ESP32 e Conexões
        {
            pergunta: "O que é o ESP32?",
            resposta: "É um microcontrolador com Wi-Fi e Bluetooth integrados, ideal para projetos de Internet das Coisas (IoT).",
            categoria: "⚙️ ESP32 e Conexões"
        },
        {
            pergunta: "Como o ESP32 se conecta à rede?",
            resposta: "Através do módulo Wi-Fi interno, configurado no código com o SSID e senha da rede local.",
            categoria: "⚙️ ESP32 e Conexões"
        },
        {
            pergunta: "Qual a função do pino analógico?",
            resposta: "Ler sinais variáveis de sensores como o MQ-135, convertendo-os em valores numéricos de 0 a 4095.",
            categoria: "⚙️ ESP32 e Conexões"
        },
        {
            pergunta: "O que faz a função setup()?",
            resposta: "É executada uma vez no início do código, configurando os pinos, o Wi-Fi e o MQTT.",
            categoria: "⚙️ ESP32 e Conexões"
        },
        {
            pergunta: "O que faz o loop()?",
            resposta: "Repete continuamente as leituras dos sensores, publica dados e atualiza o estado dos LEDs.",
            categoria: "⚙️ ESP32 e Conexões"
        },

        // MQTT
        {
            pergunta: "O que é o protocolo MQTT?",
            resposta: "É um protocolo de comunicação leve, usado para enviar e receber mensagens entre dispositivos IoT.",
            categoria: "💬 Comunicação MQTT"
        },
        {
            pergunta: "O que é o broker Mosquitto?",
            resposta: "É o servidor intermediário que recebe os dados do ESP32 e os repassa aos clientes conectados.",
            categoria: "💬 Comunicação MQTT"
        },
        {
            pergunta: "O que é um tópico MQTT?",
            resposta: "É o canal de comunicação onde os dados são publicados e assinados, como 'estacao/manhattan/temperature'.",
            categoria: "💬 Comunicação MQTT"
        },
        {
            pergunta: "O que significa publicar uma mensagem?",
            resposta: "Enviar dados de um dispositivo (publisher) para um tópico no broker MQTT.",
            categoria: "💬 Comunicação MQTT"
        },
        {
            pergunta: "O que é um cliente MQTT?",
            resposta: "É o aplicativo que envia ou recebe mensagens via MQTT — pode ser o ESP32, um celular ou outro sistema.",
            categoria: "💬 Comunicação MQTT"
        },

        // Software
        {
            pergunta: "Qual IDE foi usada no projeto?",
            resposta: "A IDE do Arduino, configurada com o pacote ESP32 e a seleção da placa 'ESP32 Dev Module'.",
            categoria: "💻 Software e Código"
        },
        {
            pergunta: "Para que serve a biblioteca DHT.h?",
            resposta: "Faz a leitura da temperatura e da umidade diretamente do sensor DHT11.",
            categoria: "💻 Software e Código"
        },
        {
            pergunta: "Qual a função da biblioteca PubSubClient.h?",
            resposta: "Gerencia a comunicação MQTT entre o ESP32 e o broker Mosquitto.",
            categoria: "💻 Software e Código"
        },
        {
            pergunta: "Como garantir que o ESP32 reconecte ao MQTT?",
            resposta: "Criando uma função reconnect_mqtt() que tenta reconectar sempre que a conexão cair.",
            categoria: "💻 Software e Código"
        },

        // Resultados
        {
            pergunta: "Como foi testado o sensor de gás?",
            resposta: "Aproximando fumaça de fósforo ou papel queimando, observando o aumento do valor lido no monitor serial.",
            categoria: "🌎 Resultados e Aprendizados"
        },
        {
            pergunta: "O que aprendemos sobre integração IoT?",
            resposta: "Que sensores físicos podem interagir com sistemas digitais em tempo real usando protocolos de rede.",
            categoria: "🌎 Resultados e Aprendizados"
        },
        {
            pergunta: "Qual foi o maior aprendizado do grupo?",
            resposta: "Compreender a importância da comunicação MQTT e do controle de hardware via software integrado.",
            categoria: "🌎 Resultados e Aprendizados"
        }
    ];

    function Card({ pergunta, resposta, categoria, opcao }) {
        const [aberta, setAberta] = useState(false); // Cada card tem seu próprio estado
        const visivel = opcao === "Todos" || opcao === categoria;
        return (
            <div className="card"
                onClick={() => setAberta(!aberta)}
                style={{
                    display: visivel ? "block" : "none",
                    opacity: visivel ? 1 : 0,
                    transition: "opacity 0.3s ease"
                }}
            >
                <div className="pergunta"><strong>❓ {pergunta}</strong></div>
                {aberta && <div className="resposta">{resposta}</div>}
                <div className="categoria">{categoria}</div>
            </div>
        );
    }

    return (
        <>
            <section className="Page">
                <h2>Perguntas e Respostas</h2>
                <h3>Selecione uma opção:</h3>
                <label>
                    opa
                    <select value={opcao} onChange={(e) => setOpcao(e.target.value)}>
                        <option value="📡 Sensores e Hardware">📡 Sensores e Hardware</option>
                        <option value="⚙️ ESP32 e Conexões">⚙️ ESP32 e Conexões</option>
                        <option value="💬 Comunicação MQTT">💬 Comunicação MQTT</option>
                        <option value="💻 Software e Código">💻 Software e Código</option>
                        <option value="🌎 Resultados e Aprendizados">🌎 Resultados e Aprendizados</option>
                    </select>
                </label>

                <p>Você escolheu: {opcao}</p>
                {perguntas.map((p, i) => (
                    <Card
                        key={i}
                        pergunta={p.pergunta}
                        resposta={p.resposta}
                        categoria={p.categoria}
                    />
                ))}
            </section>
        </>
    );
}
