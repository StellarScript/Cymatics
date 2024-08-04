import React, { useState } from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { useSpring } from '@react-spring/three';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Control } from '@client/app/components/Control';
import { Particles } from './Particles';

interface Sliders {
   frequencyX: number;
   frequencyY: number;
   amplitudeX: number;
   amplitudeY: number;
   vibration: number;
   particles: number;
}

const defaultSliders = {
   frequencyX: 5,
   frequencyY: 5,
   amplitudeX: 1,
   amplitudeY: 1,
   vibration: 0.02,
   particles: 20000,
};

export const CymaticCanvas: React.FC = () => {
   const [sliders, setSliders] = useState<Sliders>(defaultSliders);

   const springProps = useSpring({
      m: sliders.frequencyX,
      n: sliders.frequencyY,
      a: sliders.amplitudeX,
      b: sliders.amplitudeY,
      v: sliders.vibration,
      num: sliders.particles,
      config: { tension: 100, friction: 40, delay: 100 },
   });

   const handleSliderChange = (name: string, value: number) => {
      setSliders((prev) => ({
         ...prev,
         [name]: Number(value),
      }));
   };

   return (
      <div className="relative flex size-full flex-col lg:flex-row">
         <div className="flex size-full pt-3 lg:w-2/6">
            <Control inputs={sliders} onSliderChange={handleSliderChange}>
               <Link
                  className="hover:bg-light-100 bg-light-200 text-dark-100 hover:text-dark-200 transition-200 rounded-md border border-gray-100 p-3 transition-colors"
                  href={'/app/2d'}
               >
                  View in 2D
               </Link>
            </Control>
         </div>
         <div className="flex size-full pt-3 lg:w-2/6">
            <Canvas>
               <ambientLight intensity={0.5} />
               <pointLight position={[10, 10, 10]} />

               <Particles
                  sliders={{
                     m: springProps.m.get(),
                     n: springProps.n.get(),
                     a: springProps.a.get(),
                     b: springProps.b.get(),
                     v: springProps.v.get(),
                     num: springProps.num.get(),
                  }}
               />
               <OrbitControls />
               <EffectComposer>
                  <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
               </EffectComposer>
            </Canvas>
         </div>
      </div>
   );
};
