'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cymaticInputDefaults } from '@client/app/util/constants';
import { Control, ControlInputs } from '@client/app/components/Control';
import * as THREE from 'three';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Particles } from './Particles';

export const CymaticCanvas = () => {
   const [sliders, setSliders] = useState<ControlInputs>(cymaticInputDefaults);

   const handleSliderChange = (name: string, value: number) => {
      setSliders((prev) => ({
         ...prev,
         [name]: Number(value),
      }));
   };

   return (
      <div className="relative flex size-full flex-col lg:flex-row">
         <div className="flex size-full lg:w-2/6">
            <Control inputs={sliders} onSliderChange={handleSliderChange}>
               <Link
                  className="hover:bg-light-100 rounded-md border border-gray-100 bg-light-200 text-dark-100 hover:text-dark-200 p-3 transition-colors transition-200"
                  href={'/app/2d'}
               >
                  View in 2D
               </Link>
            </Control>
         </div>

         <div className="relative size-full lg:w-4/6">
            <div className="size-full p-3">
               <Canvas className="flex w-full justify-center">
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <Particles sliders={sliders} />
                  <OrbitControls panSpeed={0.5} zoomSpeed={0.4} />
                  <EffectComposer>
                     <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                  </EffectComposer>
               </Canvas>
            </div>
         </div>
      </div>
   );
};
