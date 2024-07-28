'use client';

import { useCallback, useEffect, useRef } from 'react';
import P5 from 'p5';

import { chladni, lerp } from './math';
import { Particle } from './particals';
import { ControlInputs } from './types';
import { adjustSize, canvasSizes } from './resize';
import { Control } from './Control';

const defaultSettings = {
   nParticles: 20000,
   canvasSize: [770, 900],
   drawHeatmap: false,
};

const defaultSliders: ControlInputs = {
   frequencyX: 5,
   frequencyY: 5,
   amplitudeX: 1,
   amplitudeY: 1,
   vibration: 0.02,
   particles: 20000,
};

export const Canvas: React.FC = () => {
   const isLoaded = useRef<boolean>(false);
   const canvasRef = useRef<HTMLDivElement>(null);
   const particles = useRef<Particle[]>([]);

   const settings = useRef(defaultSettings);
   const sliders = useRef<ControlInputs>(defaultSliders);
   const smoothSliders = useRef<ControlInputs>({ ...sliders.current });

   const toggleHeatMap = (state: boolean) => {
      settings.current = {
         ...settings.current,
         drawHeatmap: state,
      };
   };

   const handleSliderChange = (name: string, value: number) => {
      sliders.current = {
         ...sliders.current,
         [name]: value,
      };
   };
   const setupParticles = useCallback((p: P5) => {
      particles.current = [];
      for (let i = 0; i < settings.current.nParticles; i++) {
         particles.current[i] = new Particle(p);
      }
   }, []);

   const wipeScreen = (p: P5) => {
      p.background(30);
      p.stroke(255);
   };

   const drawHeatmap = useCallback((p: P5) => {
      if (settings.current.drawHeatmap) {
         const res = 3;
         for (let i = 0; i <= p.width; i += res) {
            for (let j = 0; j <= p.height; j += res) {
               const eq = chladni(
                  i / p.width,
                  j / p.height,
                  sliders.current.amplitudeX,
                  sliders.current.amplitudeY,
                  sliders.current.frequencyX,
                  sliders.current.frequencyY,
               );
               p.noStroke();
               p.fill((eq + 1) * 127.5);
               p.square(i, j, res);
            }
         }
      }
   }, []);

   const sketch = useCallback(
      (p: P5) => {
         p.setup = () => {
            const canvas = p.createCanvas(settings.current.canvasSize[0], settings.current.canvasSize[1]);

            if (canvasRef.current) {
               canvas.parent(canvasRef.current);
               setupParticles(p);
            } else {
               console.error('Canvas ref not found');
            }
         };

         p.draw = () => {
            wipeScreen(p);
            drawHeatmap(p);

            // Smoothly interpolate sliders
            for (const key in sliders.current) {
               if (key !== 'num') {
                  const _key = key as keyof ControlInputs;
                  smoothSliders.current[_key] = lerp(smoothSliders.current[_key], sliders.current[_key], 0.1);
               }
            }

            const movingParticles = particles.current.slice(0, smoothSliders.current.particles);
            for (const particle of movingParticles) {
               particle.move(smoothSliders.current);
               particle.show();
            }
         };
      },
      [drawHeatmap, setupParticles],
   );

   useEffect(() => {
      const canvas = new P5(sketch);

      const handleResize = () => {
         canvas.resizeCanvas(canvasSizes(window.innerWidth), adjustSize(window.innerHeight, 3));
      };

      window.addEventListener('resize', handleResize);

      if (!isLoaded.current) {
         handleResize();
      }

      return () => {
         window.addEventListener('resize', handleResize);
         canvas.remove();
         isLoaded.current = true;
      };
   }, [settings, sketch]);

   return (
      <div className="relative flex size-full flex-col lg:flex-row">
         <div className="flex size-full lg:w-2/6">
            <Control
               inputs={sliders.current}
               toggleHeatMap={toggleHeatMap}
               onSliderChange={handleSliderChange}
            />
         </div>

         <div className="relative w-full lg:w-4/6">
            <div className="w-full p-3">
               <div ref={canvasRef} className="flex w-full justify-center" />
            </div>
         </div>
      </div>
   );
};
