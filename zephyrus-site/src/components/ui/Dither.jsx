import React, { useRef, useEffect } from "react";

/**
 * Dither Background Component
 * Creates an animated dithered background effect using canvas
 */
const Dither = ({
  waveColor = [0.5, 0.3, 0.8],
  disableAnimation = false,
  enableMouseInteraction = true,
  mouseRadius = 0.3,
  waveAmplitude = 0.3,
  waveFrequency = 3,
  waveSpeed = 0.05,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let time = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e) => {
      if (!enableMouseInteraction) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    };

    const ditherPattern = (x, y, threshold) => {
      const pattern = [
        [0, 8, 2, 10],
        [12, 4, 14, 6],
        [3, 11, 1, 9],
        [15, 7, 13, 5],
      ];
      return pattern[y % 4][x % 4] / 16 < threshold;
    };

    const render = () => {
      if (!ctx) return;
      
      const width = canvas.width;
      const height = canvas.height;
      
      if (width === 0 || height === 0) return;

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const nx = x / width;
          const ny = y / height;

          // Wave calculation
          const wave =
            Math.sin(nx * waveFrequency * Math.PI + time) * waveAmplitude +
            Math.sin(ny * waveFrequency * Math.PI + time * 0.7) * waveAmplitude * 0.5;

          // Mouse interaction
          let mouseInfluence = 0;
          if (enableMouseInteraction) {
            const dx = nx - mouseX;
            const dy = ny - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            mouseInfluence = Math.max(0, 1 - dist / mouseRadius) * 0.3;
          }

          // Gradient base
          const gradient = ny * 0.4 + nx * 0.2;
          const value = (gradient + wave * 0.3 + mouseInfluence) % 1;

          // Apply dithering
          const dithered = ditherPattern(x, y, value);

          const i = (y * width + x) * 4;
          if (dithered) {
            data[i] = Math.floor(waveColor[0] * 255 * 0.3);
            data[i + 1] = Math.floor(waveColor[1] * 255 * 0.3);
            data[i + 2] = Math.floor(waveColor[2] * 255 * 0.5);
            data[i + 3] = 255;
          } else {
            data[i] = Math.floor(waveColor[0] * 30);
            data[i + 1] = Math.floor(waveColor[1] * 20);
            data[i + 2] = Math.floor(waveColor[2] * 40);
            data[i + 3] = 255;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      if (!disableAnimation) {
        time += waveSpeed;
        animationId = requestAnimationFrame(render);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [waveColor, disableAnimation, enableMouseInteraction, mouseRadius, waveAmplitude, waveFrequency, waveSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
};

export default Dither;
