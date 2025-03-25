import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    background: {
      color: { value: "#0d0d0d" }, // Fundo escuro
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "none" }, // Sem interação ao passar o mouse
      },
      modes: {},
    },
    particles: {
      number: {
        value: 150, // Quantidade de partículas
        density: { enable: true, area: 800 },
      },
      color: { value: "#ffffff" }, // Partículas brancas
      shape: { type: "circle" }, // Formato de bolinhas
      opacity: {
        value: 1, // Totalmente visíveis
      },
      size: {
        value: { min: 0.5, max: 4 }, // Tamanhos variados
        random: true,
      },
      move: {
        enable: true,
        speed: 0.8, // Movimentos mais lentos
        direction: "right", // Direção livre (flutuar)
        random: true, // Movimento aleatório
        straight: false, // Não movimento reto
        outModes: {
          default: "out", // As partículas reaparecem do outro lado
        },
      },
    },
    detectRetina: true,
  };

  return <Particles id="particles" init={init} options={options} />;
};

export default ParticlesComponent;