import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          opacity: { value: 0.5 },
          size: { value: 2 },
          links: {
            enable: true,
            color: "#ffffff",
            opacity: 0.2,
            distance: 150,
          },
          move: { enable: true, speed: 0.6, outModes: { default: "out" } },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}

export default ParticleBackground;