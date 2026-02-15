/**
 * Configuration for the tsparticles instance
 * A lightweight, performance-focused config for the hero background
 * Info: https://particles.js.org/docs/interfaces/ts_particles.Options.IOptions.html
 */

export const particlesConfig = {
  fullScreen: {
    enable: false, // Don't cover the entire screen, just the parent container
  },
  particles: {
    number: {
      value: 60, // Reduced from 80 for better performance on mobile
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#6366f1", // Using accent color from our theme
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#8b5cf6", // Using secondary accent color
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
};
