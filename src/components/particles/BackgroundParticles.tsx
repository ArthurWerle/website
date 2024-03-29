import React from "react";
import Particles from "react-tsparticles";
import "./style.scss";

export default function BackgroundParticles() {
  const particlesOptions = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 250,
          duration: 2,
          opacity: 1,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#dc3545", "#ff73f1", "#808bed", "#dfe376", "#ffffff"],
      },
      collisions: {
        enable: true,
      },
      move: {
        enable: true,
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 400,
        },
        value: 20,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: {
          enable: true,
          minimumValue: 2,
        },
        value: {
          min: 2,
          max: 5,
        },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" options={particlesOptions} />;
}
