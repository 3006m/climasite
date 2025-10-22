import { useState } from "react";
import "../styles/css.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Perguntas() {
    const [opcao, setOpcao] = useState("Todos")

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
        {
            pergunta: "Para que serve o pino do sensor de gás?",
            resposta: "Ele envia um sinal analógico proporcional à quantidade de gás detectado no ambiente.",
            categoria: "📡 Sensores e Hardware"
        },
        {
            pergunta: "Por que usamos resistores em série com LEDs?",
            resposta: "Para limitar a corrente elétrica e evitar que o LED queime.",
            categoria: "📡 Sensores e Hardware"
        },
        {
            pergunta: "Qual a importância do pino DHT_PIN ser configurado como INPUT?",
            resposta: "Isso permite que o ESP32 leia os dados enviados pelo sensor DHT11.",
            categoria: "📡 Sensores e Hardware"
        },
        {
            pergunta: "Por que o sensor MQ-135 precisa aquecer antes da leitura?",
            resposta: "Porque o elemento sensível do sensor precisa atingir temperatura ideal para fornecer medições estáveis.",
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
        {
            pergunta: "Por que é importante verificar se o ESP32 ainda está conectado ao MQTT?",
            resposta: "Para garantir que os dados continuem sendo publicados sem interrupções.",
            categoria: "⚙️ ESP32 e Conexões"
        },
        {
            pergunta: "O que acontece se o ESP32 perder a conexão Wi-Fi?",
            resposta: "Ele tentará reconectar automaticamente antes de retomar o envio dos dados.",
            categoria: "⚙️ ESP32 e Conexões"
        },
        {
            pergunta: "Qual a função do WiFiClient no código?",
            resposta: "É o objeto responsável por gerenciar a conexão de rede usada pelo MQTT.",
            categoria: "⚙️ ESP32 e Conexões"
        },
        {
            pergunta: "Por que o Serial.begin(115200) é usado no setup()?",
            resposta: "Para iniciar a comunicação serial com o computador e permitir o monitoramento via Serial Monitor.",
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
        {
            pergunta: "Por que o MQTT usa tópicos como 'estacao/manhattan/temperature'?",
            resposta: "Porque tópicos ajudam a organizar os dados por tipo e origem, facilitando a assinatura e leitura.",
            categoria: "💬 Comunicação MQTT"
        },
        {
            pergunta: "Qual é a vantagem de usar MQTT em vez de HTTP?",
            resposta: "O MQTT é mais leve e eficiente para dispositivos IoT com pouca energia e conexão instável.",
            categoria: "💬 Comunicação MQTT"
        },
        {
            pergunta: "O que faz a função mqttClient.loop()?",
            resposta: "Mantém o cliente MQTT ativo, verificando novas mensagens e mantendo a conexão.",
            categoria: "💬 Comunicação MQTT"
        },
        {
            pergunta: "Por que o código publica dados a cada 5 segundos?",
            resposta: "Para evitar sobrecarga na rede e permitir leituras regulares sem consumo excessivo de energia.",
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
        {
            pergunta: "Por que usamos funções como publish_data()?",
            resposta: "Para evitar repetição de código e centralizar a lógica de envio dos dados MQTT.",
            categoria: "💻 Software e Código"
        },
        {
            pergunta: "O que faz o comando snprintf()?",
            resposta: "Formata uma string combinando texto e variáveis numéricas antes de publicá-la via MQTT.",
            categoria: "💻 Software e Código"
        },
        {
            pergunta: "Por que usar delay(2000) no loop?",
            resposta: "Para evitar leituras muito rápidas e permitir tempo suficiente entre as medições.",
            categoria: "💻 Software e Código"
        },
        {
            pergunta: "Por que verificar isnan(temperature)?",
            resposta: "Para garantir que a leitura do sensor seja válida antes de enviar os dados.",
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
        },
        {
            pergunta: "O que o LED vermelho indica durante o funcionamento?",
            resposta: "Baixa umidade detectada pelo sensor DHT11.",
            categoria: "🌎 Resultados e Aprendizados"
        },
        {
            pergunta: "Como os LEDs ajudam na interpretação dos dados?",
            resposta: "Eles fornecem feedback visual imediato sobre o ambiente monitorado.",
            categoria: "🌎 Resultados e Aprendizados"
        },
        {
            pergunta: "O que significa ver o LED amarelo aceso?",
            resposta: "Que há presença de gás acima do limite definido no código.",
            categoria: "🌎 Resultados e Aprendizados"
        },
        {
            pergunta: "Como o grupo validou os resultados das medições?",
            resposta: "Comparando os valores do monitor serial com os LEDs acesos e os dados publicados no broker.",
            categoria: "🌎 Resultados e Aprendizados"
        },
    ];

    function Card({ pergunta, resposta, categoria, opcao }) {
        const [aberta, setAberta] = useState(false); // Cada card tem seu próprio estado
        const visivel = opcao === "Todos" || opcao === categoria;
        return (
            <div className="CardPergunta"
                onClick={() => setAberta(!aberta)}
                style={{
                    display: visivel ? "block" : "none",
                    opacity: visivel ? 1 : 0,
                    transition: "opacity 0.3s ease"
                }}
            >
                <h4 className="pergunta"><strong>❓ {pergunta}</strong></h4>
                {aberta && <h5 className="resposta">{resposta}</h5>}
                <h6 className="categoria">{categoria}</h6>
            </div>
        );
    }

    return (
        <main>
            <Navbar />
            <h1>👾 Perguntas e Respostas</h1>
            <div className="Select">
                <h2>Selecione uma opção:</h2>
                <select value={opcao} onChange={(e) => setOpcao(e.target.value)}>
                    <option value="Todos">👾 Mostrar Todos</option>
                    <option value="📡 Sensores e Hardware">📡 Sensores e Hardware</option>
                    <option value="⚙️ ESP32 e Conexões">⚙️ ESP32 e Conexões</option>
                    <option value="💬 Comunicação MQTT">💬 Comunicação MQTT</option>
                    <option value="💻 Software e Código">💻 Software e Código</option>
                    <option value="🌎 Resultados e Aprendizados">🌎 Resultados e Aprendizados</option>
                </select>
            </div>
            <article className="Cards">
                {perguntas.map((p, i) => (
                    <Card
                        key={i}
                        pergunta={p.pergunta}
                        resposta={p.resposta}
                        categoria={p.categoria}
                        opcao={opcao}
                    />
                ))}
            </article>
            <Footer />
        </main>
    );
}
