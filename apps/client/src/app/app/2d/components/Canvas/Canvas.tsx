'use client';

import { useRef } from 'react';
import { Control } from './Control';
import { SliderProps } from './types';

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
