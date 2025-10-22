import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/css.css";

export default function Hardware() {
  const items = [
    {
      title: "ESP32",
      img: "https://tse3.mm.bing.net/th/id/OIP.aPUOYlScbDxbp8bHZMZDRAHaHa?cb=12&pid=ImgDet&ucfimg=1&w=187&h=187&c=7&dpr=1,3&o=7&rm=3",
      text: `O ESP32 é um dos microcontroladores mais modernos e populares do mercado atual, desenvolvido pela Espressif Systems. 
Ele se destaca por possuir Wi-Fi e Bluetooth integrados, o que o torna ideal para aplicações de Internet das Coisas (IoT), automação residencial, monitoramento remoto e projetos educacionais.
Além da conectividade, o ESP32 conta com um processador dual-core, memória flash, ADC e diversos pinos GPIO, permitindo a conexão de sensores e atuadores.
Sua eficiência energética também é notável, podendo operar em modo de baixo consumo, ideal para dispositivos alimentados por bateria.
Graças à sua compatibilidade com a IDE do Arduino e à ampla comunidade de desenvolvedores, o ESP32 é uma excelente opção para iniciantes e profissionais.`,
    },
    {
      title: "DHT11",
      img: "https://thvnext.bing.com/th/id/OIP.z3_mGiXLbHi66YDfMwxhkQHaHa?w=194&h=194&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      text: `O DHT11 é um sensor digital de temperatura e umidade amplamente utilizado em projetos eletrônicos e de automação.
 Ele é capaz de medir temperaturas entre 0°C e 50°C e umidades relativas entre 20% e 90%, com boa precisão para aplicações básicas de monitoramento ambiental.
Seu funcionamento é simples: ele possui um termistor que mede a temperatura e um sensor capacitivo que detecta a umidade do ar.
 Essas informações são processadas e enviadas digitalmente para o microcontrolador, como o ESP32, através de um único pino de dados.
O DHT11 é muito utilizado em estações meteorológicas, sistemas de controle climático, monitoramento de estufas e até em projetos de automação residencial, onde é possível controlar ventiladores ou desumidificadores com base nos valores medidos.
 Sua facilidade de uso e baixo custo o tornam uma escolha popular para entusiastas e profissionais da área de eletrônica.`,
    },
    {
      title: "MQ-135",
      img: "https://thvnext.bing.com/th/id/OIP.w4tdbY8gYxRQqnCPUuWvBQHaHa?w=166&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      text: `O sensor MQ-135 é um componente analógico destinado à detecção de gases e monitoramento da qualidade do ar.
 Ele é sensível a uma variedade de substâncias, como amônia (NH₃), óxidos de nitrogênio (NOx), álcool, benzeno, fumaça e dióxido de carbono (CO₂).
 Por essa versatilidade, o MQ-135 é amplamente utilizado em estações ambientais, sistemas de segurança e projetos de IoT voltados à saúde e sustentabilidade.
O sensor funciona através de um elemento aquecido que reage quimicamente com os gases presentes no ar, alterando sua resistência interna.
 Essa variação é convertida em um sinal elétrico, que pode ser lido pelo ESP32 e transformado em informações úteis, como o nível de poluição ou a presença de gases nocivos.
Com ele, é possível criar aplicações práticas, como alarmes de vazamento, monitores de qualidade do ar e sistemas inteligentes de ventilação, tornando o ambiente mais seguro e saudável.
`,
    },
    {
      title: "LEDs",
      img: "https://thvnext.bing.com/th/id/OIP.g2qjcgz6sZSjuzOlTcB4AAHaHa?w=171&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      text: `Os LEDs (Light Emitting Diodes) são componentes eletrônicos capazes de emitir luz quando percorridos por corrente elétrica.
 Eles são extremamente eficientes, econômicos e duráveis, além de estarem disponíveis em diversas cores e intensidades.
Em projetos com o ESP32, os LEDs são muito utilizados como indicadores visuais: eles podem sinalizar o status de sensores, o funcionamento do sistema, alertas de erro ou simplesmente embelezar o projeto com efeitos de iluminação.
 Por exemplo, é possível programar um LED verde para indicar que o sistema está funcionando corretamente, um amarelo para alerta e um vermelho para erro — exatamente como em um semáforo eletrônico.
O controle de LEDs com o ESP32 é simples e direto, bastando definir o pino de saída e o estado lógico (HIGH ou LOW).
 Com técnicas mais avançadas, também é possível criar animações de luz, piscadas sincronizadas ou gradientes de cor, tornando o projeto mais interativo e atraente.
`,
    },
    {
      title: "Resistores",
      img: "https://media.istockphoto.com/id/477961985/photo/resistor.jpg?s=612x612&w=0&k=20&c=dr9rnHRVRGwk6mU0a46X-DU4UrfO6Ya8RpgCakaJBnY=",
      text: `Os resistores são componentes fundamentais em qualquer circuito eletrônico.
 Sua principal função é limitar a corrente elétrica, protegendo outros componentes — como LEDs, sensores e microcontroladores — de correntes excessivas que poderiam danificá-los.
Eles funcionam de acordo com a Lei de Ohm (V = R × I), que relaciona tensão, corrente e resistência.
 Ao inserir um resistor no circuito, a corrente que passa por ele é reduzida proporcionalmente ao seu valor de resistência, medido em ohms (Ω).
No caso dos LEDs, por exemplo, os resistores são indispensáveis: sem eles, o LED receberia uma corrente maior do que a suportada, podendo queimar instantaneamente.
 Além disso, os resistores são usados em divisores de tensão, filtros, sensores analógicos e diversas outras aplicações que exigem controle elétrico preciso.
Mesmo sendo um dos componentes mais simples, o resistor é essencial para o bom funcionamento e a segurança de qualquer circuito eletrônico.
`,
    },
    {
      title: "Breadboard",
      img: "https://thvnext.bing.com/th/id/OIP.6i2TQhYInNQcS4oC_NDQZgHaGP?cb=12&pid=ImgDet&ucfimg=1&w=187&h=157&c=7&dpr=1,3&o=7&rm=3",
      text: `O breadboard, também chamado de protoboard, é uma placa de ensaio utilizada para montar circuitos eletrônicos sem a necessidade de solda.
Ele possui furos conectados internamente por tiras metálicas, permitindo inserir componentes como resistores, LEDs, sensores e microcontroladores, como o ESP32, de forma rápida e organizada.
O uso do breadboard facilita a prototipagem: você pode testar diferentes ligações, ajustar valores de resistores ou trocar componentes sem danificar nada.
Isso é especialmente útil em projetos de IoT e automação, onde é comum experimentar diversas combinações de sensores e atuadores antes de montar o circuito final em uma placa de circuito impresso (PCB).
Além disso, o breadboard ajuda a visualizar a disposição física dos componentes, tornando o aprendizado de eletrônica muito mais intuitivo e seguro, principalmente para iniciantes.`,
    },
  ];

  return (
    // Container principal da página
    <main>
      <Navbar />
      {/* Título da seção */}
      <h1>Componentes de Hardware</h1>

      {/* Mapeia o array 'items' para renderizar cada componente */}
      <section>

        {items.map((item, index) => (
          // Container de cada item
          <div
            key={index}
            id={item.title.toLowerCase()} // adiciona id em minúsculas, ex: "esp32"
            // Chave única para o React
            /* * Define as classes CSS "normal" ou "reversed"
             * para criar o layout alternado (zig-zag).
             */
            className={`hardware-item ${index % 2 === 0 ? "normal" : "reversed"
              }`}
          >
            {/* Imagem do componente */}
            <img src={item.img} alt={item.title} />

            {/* Bloco de texto */}
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </main >
  );
}
