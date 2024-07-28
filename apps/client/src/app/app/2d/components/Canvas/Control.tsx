'use client';

import Link from 'next/link';
import RangeSlider from '@client/components/Slider';
import { ToggleTabs } from '@client/components/ToggleTabs';
import { ControlInputs } from './types';

interface ControlProps {
   inputs: ControlInputs;
   onSliderChange: (name: string, value: number) => void;
   toggleHeatMap: (state: boolean) => void;
}

export const Control: React.FC<ControlProps> = ({ onSliderChange, toggleHeatMap, inputs }) => {
   return (
      <div className="flex w-full flex-col items-center justify-center p-3 lg:justify-start">
         <fieldset className="w-80">
            <div className="mb-5 w-full">
               <ToggleTabs firstTabLabel="Heat Map" secondTabLabel="Cymatics" onChange={toggleHeatMap} />
            </div>

            <label className="flex flex-col items-center">
               <small className="w-72">Wave Frequency in x-direction</small>
               <RangeSlider
                  min={1}
                  max={16}
                  name="frequencyX"
                  step={1}
                  onChange={onSliderChange}
                  defaultValue={inputs.frequencyX}
               />
            </label>
            <label className="flex flex-col items-center">
               <small className="w-72">wave Frequency in y-direction</small>
               <RangeSlider
                  min={1}
                  max={16}
                  name="frequencyY"
                  step={1}
                  onChange={onSliderChange}
                  defaultValue={inputs.frequencyY}
               />
            </label>

            <label className="flex flex-col items-center">
               <small className="w-72">Amplitude Coefficient for sin(nx)sin(my)</small>
               <RangeSlider
                  min={-2}
                  max={2}
                  name="amplitudeX"
                  step={0.1}
                  onChange={onSliderChange}
                  defaultValue={inputs.amplitudeX}
               />
            </label>

            <label className="flex flex-col items-center">
               <small className="w-72">Amplitude Coefficient for sin(mx)sin(ny)</small>
               <RangeSlider
                  min={-2}
                  max={2}
                  name="amplitudeY"
                  step={0.1}
                  onChange={onSliderChange}
                  defaultValue={inputs.amplitudeY}
               />
            </label>
         </fieldset>

         <fieldset className="w-80">
            <label className="flex flex-col items-center">
               <small className="w-72">Vibration Strength:</small>
               <RangeSlider
                  name="vibration"
                  min={0.01}
                  max={0.1}
                  step={0.01}
                  onChange={onSliderChange}
                  defaultValue={inputs.vibration}
               />
            </label>

            <label className="flex flex-col items-center">
               <small className="w-72">Number of Particles:</small>
               <RangeSlider
                  name="particles"
                  min={2000}
                  max={20000}
                  step={2000}
                  onChange={onSliderChange}
                  defaultValue={inputs.particles}
               />
            </label>
         </fieldset>

         <div className="mt-6 flex justify-center">
            <Link className="rounded border border-gray-100 p-3" href={'/app/3d'}>
               View in 3D
            </Link>
         </div>
      </div>
   );
};
