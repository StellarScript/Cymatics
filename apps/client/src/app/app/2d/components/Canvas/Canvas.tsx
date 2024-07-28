'use client';

import { useCallback, useEffect, useRef } from 'react';
import P5 from 'p5';

import { Control } from './Control';
import { SliderProps } from './types';
import { adjustSize, canvasSizes } from './resize';

const defaultSettings = {
   nParticles: 20000,
   canvasSize: [770, 900],
   drawHeatmap: false,
};

const defaultSliders: SliderProps = {
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

   const settings = useRef(defaultSettings);
   const sliders = useRef<SliderProps>(defaultSliders);

   const toggleHeatMap = () => {
      settings.current = {
         ...settings.current,
         drawHeatmap: !settings.current.drawHeatmap,
      };
   };

   const handleSliderChange = (name: string, value: number) => {
      sliders.current = {
         ...sliders.current,
         [name]: value,
      };
   };

   const sketch = useCallback((p: P5) => {
      //
   }, []);

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
         <div className="flex w-full lg:w-2/6">
            <Control
               sliders={sliders.current}
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
