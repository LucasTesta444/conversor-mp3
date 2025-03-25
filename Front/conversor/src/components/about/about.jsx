import React from "react";
import "./about.css"

function About() {
    return (
        <div className="container">
            <div className="container">
      <div className="titles">
        <div className="title">
          <h1 className="titleYoutube">YouTube</h1>
          <h1>para MP3</h1>
        </div>
        <div className="desc">
          <p>O melhor conversor do Brasil!</p>
        </div>
      </div>
            <div className="about">
              <div className="text-group-about">
                <p>Olá, me chamo </p>
                <p className="name-text-about">Lucas Testa</p>
                <p>!</p>
              </div>
                <p>Sou um jovem cristão aspirante em tecnologias. Atualmente, sou estudante de Engenharia de Software e estou focado em me tornar um grande desenvolvedor Full Stack. Tenho uma paixão por tecnologia desde criança; sempre fui o cara que sabia arrumar, montar e desmontar computadores, criar servidores de Minecraft, editar vídeos profissionalmente... Tudo o que era relacionado a computadores, eu dava um jeito de aprender. Acredito que sempre podemos aprender mais! Este projeto foi criado para desenvolver minhas habilidades e aprender um pouco sobre Back-End. Espero que vocês possam utilizá-lo da melhor maneira possível!</p>
            </div>
        </div>
    </div>
    );
};

export default About;