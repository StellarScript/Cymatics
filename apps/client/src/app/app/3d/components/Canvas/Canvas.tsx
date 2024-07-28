'use client';

import { useState } from 'react';
import { ControlInputs } from '@client/app/components/Control';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Particles } from './Particles';

export const CymaticCanvas = () => {
   const [sliders, setSliders] = useState<ControlInputs>({
      frequencyX: 5,
      frequencyY: 5,
      amplitudeX: 1,
      amplitudeY: 1,
      vibration: 0.02,
      particles: 20000,
   });

   const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setSliders((prev) => ({
         ...prev,
         [name]: Number(value),
      }));
   };

   return (
      <div style={{ height: '100vh' }}>
         <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Particles sliders={sliders} />
            <OrbitControls />
            <EffectComposer>
               <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
            </EffectComposer>
         </Canvas>
         <div
            style={{
               position: 'absolute',
               top: 0,
               left: 0,
               padding: '10px',
               backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
         >
            <label>
               m:
               <input
                  type="range"
                  name="m"
                  min="1"
                  max="16"
                  value={sliders.frequencyX}
                  onChange={handleSliderChange}
               />
               {sliders.frequencyX}
            </label>
            <br />
            <label>
               n:
               <input
                  type="range"
                  name="n"
                  min="1"
                  max="16"
                  value={sliders.frequencyY}
                  onChange={handleSliderChange}
               />
               {sliders.frequencyY}
            </label>
            <br />
            <label>
               a:
               <input
                  type="range"
                  name="a"
                  min="-2"
                  max="2"
                  step="0.1"
                  value={sliders.amplitudeX}
                  onChange={handleSliderChange}
               />
               {sliders.amplitudeX}
            </label>
            <br />
            <label>
               b:
               <input
                  type="range"
                  name="b"
                  min="-2"
                  max="2"
                  step="0.1"
                  value={sliders.amplitudeY}
                  onChange={handleSliderChange}
               />
               {sliders.amplitudeY}
            </label>
            <br />
            <label>
               Vibration Strength (v):
               <input
                  type="range"
                  name="v"
                  min="0.01"
                  max="0.1"
                  step="0.01"
                  value={sliders.vibration}
                  onChange={handleSliderChange}
               />
               {sliders.vibration}
            </label>
            <br />
            <label>
               Number of Particles:
               <input
                  type="range"
                  name="num"
                  min="2000"
                  max="20000"
                  step="1000"
                  value={sliders.particles}
                  onChange={handleSliderChange}
               />
               {sliders.particles}
            </label>
         </div>
      </div>
   );
};
