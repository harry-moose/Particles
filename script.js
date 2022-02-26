loadColorUpdater(tsParticles);
loadCircleShape(tsParticles);
loadBaseMover(tsParticles);
loadSizeUpdater(tsParticles);
loadOpacityUpdater(tsParticles);
loadOutModesUpdater(tsParticles);

tsParticles.load("tsparticles", {
  fpsLimit: 120,
  background: {
    color: "#000"
  },
  particles: {
    color: { value: "#ffffff" },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2,
      straight: false
    },
    number: { density: { enable: true, area: 800 }, value: 80 },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 5 }
    }
  }
});