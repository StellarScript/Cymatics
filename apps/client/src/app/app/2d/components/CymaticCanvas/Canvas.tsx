'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import p5 from 'p5';

import { chladni, lerp } from './math';
import { Params, Particle } from './Particals';

const defaultParams = {
  m: 5,
  n: 5,
  a: 1,
  b: 1,
  v: 0.02,
  num: 20000,
  hz: 5,
};

const defaultConfig = {
  nParticles: 20000,
  canvasSize: [600, 600],
  drawHeatmap: false,
};

export const CymaticCanvas = () => {
  const particlesRef = useRef<Particle[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [sliders, setSliders] = useState<Params>(defaultParams);
  const [targetSliders, ] = useState<Params>(defaultParams);
  const config = defaultConfig;

  const updateSliders = useCallback(() => {
    setSliders((prev) => ({
      ...prev,
      m: lerp(prev.m, targetSliders.m, 0.1),
      n: lerp(prev.n, targetSliders.n, 0.1),
      a: lerp(prev.a, targetSliders.a, 0.1),
      b: lerp(prev.b, targetSliders.b, 0.1),
      v: lerp(prev.v, targetSliders.v, 0.1),
    }));
  }, [
    targetSliders.a,
    targetSliders.b,
    targetSliders.m,
    targetSliders.n,
    targetSliders.v,
  ]);

  const setupParticles = useCallback(
    (p: p5) => {
      particlesRef.current = [];
      for (let i = 0; i < sliders.num; i++) {
        particlesRef.current[i] = new Particle(p);
      }
    },
    [sliders.num],
  );

  const drawHeatmap = useCallback(
    (p: p5) => {
      if (config.drawHeatmap) {
        const res = 3;
        for (let i = 0; i <= p.width; i += res) {
          for (let j = 0; j <= p.height; j += res) {
            const eq = chladni(
              i / p.width,
              j / p.height,
              sliders.a,
              sliders.b,
              sliders.m,
              sliders.n,
            );
            p.noStroke();
            p.fill((eq + 1) * 127.5);
            p.square(i, j, res);
          }
        }
      }
    },
    [config.drawHeatmap, sliders.a, sliders.b, sliders.m, sliders.n],
  );

  useEffect(() => {
    const sketch = (p: p5) => {
      p.setup = () => {
        const canvas = p.createCanvas(
          config.canvasSize[0],
          config.canvasSize[1],
        );

        if (canvasRef.current) {
          canvas.parent(canvasRef.current);
          setupParticles(p);
        } else {
          console.error('Canvas not found');
        }
      };

      p.draw = () => {
        updateSliders();
        wipeScreen(p);
        drawHeatmap(p);

        const movingParticles = particlesRef.current.slice(0, sliders.num);
        for (const particle of movingParticles) {
          particle.move(sliders);
          particle.show();
        }
      };
    };

    const myP5 = new p5(sketch);

    return () => {
      myP5.remove();
    };
  }, [
    config.canvasSize,
    drawHeatmap,
    setupParticles,
    sliders,
    sliders.num,
    updateSliders,
  ]);

  const wipeScreen = (p: p5) => {
    p.background(30);
    p.stroke(255);
  };

 
};
