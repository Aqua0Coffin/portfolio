import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesConfig } from "./particles-config";

/**
 * Hero Section
 * Features: Interactive particle field background, bold typography, CTA buttons
 * Mobile-first design with responsive scaling
 */
const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's a bundle giving access to all features
    // you can load everything in a single file from the config
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background - Interactive Particle Field */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="text-center max-w-4xl mx-auto z-10">
        {/* Team Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-indigo-400 bg-clip-text text-transparent">
          Zephyrus
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Cool. Mysterious. Bold. Unconventional.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-slate-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
