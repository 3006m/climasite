import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projeto() {
  return (
    <main>
      <Navbar />
      <h1> O Projeto </h1>
      <p>
        Em muitos lugares queremos saber a temperatura, a umidade do ambiente ou
        se tem gás tóxico no ar. Esses fatores influenciam o conforto, a saúde e
        a segurança das pessoas. Muitas vezes estamos em lugares muito quentes,
        úmidos ou com gases tóxicos, o que pode causar desconforto, problemas de
        saúde e até acidentes. Sem medir essas condições, não conseguimos
        perceber rapidamente quando algo está errado, e isso pode colocar
        pessoas em risco. Por isso, é importante ter um sistema que ajude a
        acompanhar essas informações de forma prática e rápida, garantindo que o
        ambiente seja seguro e agradável para todos. Além disso, ambientes
        diferentes exigem cuidados diferentes: em uma casa, escola ou fábrica,
        os níveis ideais de temperatura e umidade mudam, e o monitoramento
        constante ajuda a manter o ambiente dentro do padrão seguro. Isso evita
        problemas de saúde, melhora o bem-estar e ainda ajuda a prevenir
        acidentes com gases tóxicos.
      </p>

      <h1>A Solução</h1>
      <p>
        Para resolver esse problema, o projeto usa o ESP32 junto com os sensores
        DHT11 e MQ2. O DHT11 mede a temperatura e a umidade, enquanto o MQ2
        detecta gases tóxicos. Todos os dados são enviados para o ESP32, que
        processa as informações e mostra os resultados de forma simples por meio
        de LEDs, facilitando a visualização rápida. Além disso, o sistema pode
        usar o protocolo MQTT, que faz parte da IoT (Internet das Coisas), para
        enviar as informações pela rede e permitir que sejam vistas em tempo
        real em outro dispositivo. Com esse sistema,
        é possível acompanhar o ambiente mesmo à distância, perceber quando
        alguma medida está fora do normal e agir rapidamente. Assim, o projeto
        torna o monitoramento do ambiente mais seguro, prático e moderno,
        mostrando como a tecnologia pode ajudar no dia a dia.
      </p>
      <Footer />
    </main>
  );
}
