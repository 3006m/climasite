import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/css.css";

import Image1 from '../assets/UPLOAD.png'
import esp from '../assets/esp32_devkitc.jpg'
import espp from '../assets/esp32_pinout-2.jpg'
import server from '../assets/KHM-001-02.png'
import uaifi from '../assets/unnamed.png'
import ide from '../assets/Arduino-Set-Up-Window.png'

export default function Software() {
  const items = [
    {
      title: "IDE Utilizada",
      text: `A IDE Arduino (Integrated Development Environment) é um software de código aberto projetado para facilitar a programação de placas Arduino. Ela oferece um ambiente integrado que permite escrever, compilar e carregar códigos diretamente para as placas, simplificando o desenvolvimento de projetos com microcontroladores.

A IDE é compatível com sistemas operacionais como Windows, macOS e Linux e inclui ferramentas essenciais, como editor de texto com destaque de sintaxe, compilador e monitor serial. Seu objetivo é tornar a programação acessível tanto para iniciantes quanto para profissionais.

Principais Funcionalidades:

-Editor de Código: Permite escrever e organizar o código com recursos como autocompletar, indentação automática e destaque de sintaxe.

-Compilador: Converte o código escrito (baseado em C/C++) em instruções que a placa Arduino pode executar.

-Gerenciador de Placas: Configura e seleciona o modelo da placa Arduino conectada.

-Monitor Serial: Ferramenta para depuração e visualização de dados enviados pela placa.

-Gerenciador de Bibliotecas: Facilita a inclusão de bibliotecas que adicionam funcionalidades extras, como controle de sensores e displays.

Benefícios:

A IDE Arduino simplifica o processo de programação, permitindo que o usuário foque na lógica do projeto sem se preocupar com detalhes técnicos complexos. É uma ferramenta indispensável para quem deseja explorar áreas como automação, robótica e IoT.

Seja para criar projetos simples, como acender um LED, ou sistemas mais avançados, a IDE Arduino é a porta de entrada para o mundo da programação de microcontroladores.`,
      image: Image1,
    },
    {
      title: "Configurações de Placa e Porta",
      text: `A placa utilizada neste projeto foi a ESP32 Dev Module, fabricada pela Espressif Systems. Ela foi instalada na IDE Arduino através do Gerenciador de Placas, utilizando o pacote “esp32 by Espressif Systems”.
As configurações recomendadas utilizadas no projeto foram:
Placa: ESP32 Dev Module
Flash Frequency: 80 MHz
Upload Speed: 115200
Partition Scheme: Default 4MB with spiffs
Porta (COM): selecionada automaticamente (ex: COM3 ou COM4).`,
      image: esp
    },
    {
      title: "Bibliotecas Utilizadas",
      text: `• DHT sensor library (Adafruit) leitura de temperatura e umidade.
• PubSubClient (Nick O’Leary) – comunicação MQTT.
• WiFi.h (Espressif) – conexão Wi-Fi.`,
      image: ide
    },
    {
      title: "Configuração dos Pinos do ESP32",
      text: `LED Amarelo → GPIO 19
LED Verde → GPIO 20
LED Vermelho → GPIO 21
LED de Controle → GPIO 22
Sensor DHT11 → GPIO 18
Sensor MQ-135 → GPIO 2 (A0)`,
      image: espp
    },
    {
      title: "Configuração da Rede Wi-Fi",
      text: `SSID: AP360_SENAI
Senha: senai123`,
      image: uaifi
    },
    {
      title: "Configuração do Servidor MQTT",
      text: `O MQTT (Message Queuing Telemetry Transport) é um protocolo leve e eficiente usado em IoT, permitindo que dispositivos enviem e recebam dados de forma confiável mesmo com pouca banda.

Ele funciona no modelo publish/subscribe, onde o broker recebe mensagens e as distribui aos clientes inscritos nos tópicos correspondentes.

No projeto, o ESP32 lê sensores (DHT11 e MQ-135) e publica dados de temperatura, umidade e gás nos tópicos configurados.

Exemplo de configuração:

Broker: 10.136.38.196
Porta: 1883
Client ID: PROJETO_MANHATTAN
Tópicos:
• estacao/manhattan/temperature
• estacao/manhattan/humidity
• estacao/manhattan/gas`,
      image: server
    },
  ];

  const code = `// --- DEFINIÇÃO DOS PINOS DOS LEDS ---
// Define o pino do LED amarelo
#define LED_AMARELO 19
// Define o pino do LED verde
#define LED_VERDE 20
// Define o pino do LED vermelho
#define LED_VERMELHO 21
// Define o pino do LED de controle (indica sistema ativo)
#define LED_CONTROLE 22

// --- SENSOR DE TEMPERATURA E UMIDADE (DHT11) ---
#include <DHT.h> // Importa a biblioteca para sensor DHT
#define DHT_PIN 18 // Define o pino conectado ao DHT11
#define DHT_TYPE DHT11 // Define o tipo do sensor (DHT11)
DHT dht(DHT_PIN, DHT_TYPE); // Cria um objeto DHT para ler temperatura e umidade

float temperature = 0.0; // Variável para armazenar a temperatura lida
float humidity = 0.0;    // Variável para armazenar a umidade lida

// --- SENSOR DE GÁS (MQ-135) ---
#define GAS_SENSOR 2 // Define o pino analógico conectado ao sensor MQ-135
float gas_value = 0.0;    // Variável para armazenar o valor do gás lido

// --- REDE Wi-Fi ---
#include <WiFi.h>          // Biblioteca para conexão Wi-Fi no ESP32
#include <PubSubClient.h>  // Biblioteca para comunicação MQTT
#define WIFI_SSID "AP360_SENAI"  // Nome da rede Wi-Fi
#define WIFI_PASS "senai123"     // Senha da rede Wi-Fi

// --- CONFIGURAÇÃO DO SERVIDOR MQTT ---
#define MQTT_SERVER "10.136.38.196" // IP do broker MQTT
#define MQTT_PORT 1883              // Porta usada pelo MQTT
#define CLIENT_ID "PROJETO_MANHATTAN" // ID do cliente MQTT (único)

// --- TÓPICOS MQTT PARA PUBLICAÇÃO ---
#define TOPIC_TEMP "estacao/manhattan/temperature" // Tópico para temperatura
#define TOPIC_HUM  "estacao/manhattan/humidity"    // Tópico para umidade
#define TOPIC_GAS  "estacao/manhattan/gas"         // Tópico para gás

// --- OBJETOS DE REDE ---
WiFiClient espClient;           // Cria objeto cliente para conexão Wi-Fi
PubSubClient mqttClient(espClient); // Cria cliente MQTT usando Wi-Fi

unsigned long lastMsg = 0;          // Armazena o tempo da última publicação
const long PUBLISH_INTERVAL = 5000; // Intervalo de publicação em milissegundos (5s)

// ===================================================================
// 🟦 FUNÇÃO: setup_wifi()
// Conecta o ESP32 à rede Wi-Fi
// ===================================================================
void setup_wifi() {
  delay(10); // Pequena pausa antes de iniciar
  Serial.println("Conectando ao WiFi..."); // Mensagem no monitor serial
  WiFi.begin(WIFI_SSID, WIFI_PASS); // Inicia a conexão Wi-Fi

  // Enquanto não conecta, exibe pontos no monitor serial
  while (WiFi.status() != WL_CONNECTED) {
    delay(500); // Aguarda 500ms
    Serial.print("."); // Imprime um ponto a cada 500ms
  }

  Serial.println("\nWiFi conectado!"); // Mensagem quando conectado
  Serial.print("IP: "); 
  Serial.println(WiFi.localIP()); // Mostra o IP do ESP32 na rede
}

// ===================================================================
// 🟩 FUNÇÃO: reconnect_mqtt()
// Tenta reconectar ao broker MQTT caso a conexão caia
// ===================================================================
void reconnect_mqtt() {
  while (!mqttClient.connected()) { // Enquanto não estiver conectado
    Serial.print("Conectando ao broker MQTT...");
    if (mqttClient.connect(CLIENT_ID)) { // Tenta conectar usando o Client ID
      Serial.println(" conectado!"); // Conectou com sucesso
    } else {
      Serial.print(" falhou, rc=");
      Serial.print(mqttClient.state()); // Mostra o código de erro
      Serial.println(" - tentando novamente em 5s");
      delay(5000); // Aguarda 5 segundos antes de tentar novamente
    }
  }
}

// ===================================================================
// 🟨 FUNÇÃO: publish_data()
// Publica dados formatados em um tópico MQTT
// ===================================================================
void publish_data(const char* topic, const char* label, float value, const char* unit) {
  char payload[50]; // Cria buffer para armazenar a mensagem
  snprintf(payload, sizeof(payload), "%s: %.2f %s", label, value, unit); // Formata a mensagem
  mqttClient.publish(topic, payload); // Envia a mensagem ao broker MQTT

  // Mostra no monitor serial o que foi publicado
  Serial.print("Publicado em ");
  Serial.print(topic);
  Serial.print(": ");
  Serial.println(payload);
}

// ===================================================================
// 🟥 FUNÇÃO: setup()
// Inicializa sensores, LEDs e conexões
// ===================================================================
void setup() {
  // Define LEDs como saídas
  pinMode(LED_VERMELHO, OUTPUT);
  pinMode(LED_VERDE, OUTPUT);
  pinMode(LED_AMARELO, OUTPUT);
  pinMode(LED_CONTROLE, OUTPUT);

  // Define pinos dos sensores como entrada
  pinMode(DHT_PIN, INPUT);
  pinMode(GAS_SENSOR, INPUT);

  dht.begin();       // Inicializa o sensor DHT11
  Serial.begin(115200); // Inicializa a comunicação serial
  setup_wifi();      // Conecta ao Wi-Fi
  mqttClient.setServer(MQTT_SERVER, MQTT_PORT); // Configura o broker MQTT

  digitalWrite(LED_CONTROLE, HIGH); // Liga LED de controle (sinal que o sistema está ativo)
  Serial.println("Sistema Iniciado!");
}

// ===================================================================
// 🟧 FUNÇÃO: loop()
// Loop principal do programa: lê sensores, aciona LEDs e publica dados MQTT
// ===================================================================
void loop() {
  if (!mqttClient.connected()) { // Se MQTT não estiver conectado
    reconnect_mqtt();            // Tenta reconectar
  }
  mqttClient.loop(); // Mantém o cliente MQTT ativo

  // --- Leitura dos sensores ---
  temperature = dht.readTemperature(); // Lê temperatura
  humidity = dht.readHumidity();       // Lê umidade

  if (isnan(temperature) || isnan(humidity)) { // Se houver erro na leitura
    Serial.println("Erro ao ler do sensor DHT!");
    return; // Sai da função loop e tenta novamente na próxima iteração
  }

  gas_value = analogRead(GAS_SENSOR); // Lê valor do sensor de gás

  // --- Mostra valores no monitor serial ---
  Serial.println("Temperatura: " + String(temperature, 1) + "°C");
  Serial.println("Umidade: " + String(humidity, 1) + "%");
  Serial.println("Gás: " + String(gas_value) + " ppm");

  // --- Lógica dos LEDs ---
  if (humidity <= 40) { // Umidade baixa
    digitalWrite(LED_VERMELHO, HIGH); // Acende LED vermelho
  } else {
    digitalWrite(LED_VERMELHO, LOW); // Apaga LED vermelho
  }

  if (temperature < 20) { // Temperatura baixa
    digitalWrite(LED_VERDE, HIGH); // Acende LED verde
  } else {
    digitalWrite(LED_VERDE, LOW);  // Apaga LED verde
  }

  if (temperature > 30) { // Temperatura alta
    digitalWrite(LED_VERDE, HIGH); // Acende LED verde
  } else {
    digitalWrite(LED_VERDE, LOW);  // Apaga LED verde
  }

  if (gas_value >= 3628) { // Gás acima do limite
    digitalWrite(LED_AMARELO, HIGH); // Acende LED amarelo
  } else {
    digitalWrite(LED_AMARELO, LOW); // Apaga LED amarelo
  }

  // --- Publica dados via MQTT a cada 5 segundos ---
  unsigned long now = millis(); // Tempo atual
  if (now - lastMsg > PUBLISH_INTERVAL) { // Se passou o intervalo
    lastMsg = now; // Atualiza tempo da última publicação
    publish_data(TOPIC_TEMP, "Temperature", temperature, "°C"); // Publica temperatura
    publish_data(TOPIC_HUM, "Humidity", humidity, "%");          // Publica umidade
    publish_data(TOPIC_GAS, "Gas", gas_value, "ppm");           // Publica gás
  }

  delay(2000); // Aguarda 2 segundos antes da próxima leitura
}`;

  return (
    <main>
      <Navbar />
      <section>
        <h1>Componentes de Software</h1>

        {items.map((item, index) => (
          <div
            key={index}
            className={`hardware-item ${index % 2 !== 0 ? "reversed" : ""}`}
          >
            {item.image && <img src={item.image} alt={item.title} />}
            <div>
              <h2>{item.title}</h2>
              {item.text.split("\n").map((line, i) =>
                line.trim().startsWith("•") ? (
                  <ul key={i}>
                    <li>{line.replace("•", "").trim()}</li>
                  </ul>
                ) : (
                  line.trim() && <p key={i}>{line}</p>
                )
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="code-section">
        <h1>Código Completo do Projeto</h1>
        <pre>
          <code>{code}</code>
        </pre>
      </section>

      <Footer />
    </main>
  );
}

