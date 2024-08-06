'use client';

import RangeSlider from '@client/components/Slider';
import { ToggleTabs } from '@client/components/ToggleTabs';
import { Icons } from '@client/components/Icons';
import { Popup } from '@client/components/Popup';

export interface ControlInputs {
   frequencyX: number;
   frequencyY: number;
   amplitudeX: number;
   amplitudeY: number;
   vibration: number;
   particles: number;
}

interface ControlProps extends React.PropsWithChildren {
   inputs: ControlInputs;
   onSliderChange: (name: string, value: number) => void;
   toggleHeatMap?: (state: boolean) => void;
}

export const Control: React.FC<ControlProps> = ({ children, onSliderChange, toggleHeatMap, inputs }) => {
   return (
      <div className="flex w-full flex-col items-center justify-center p-3 lg:justify-start">
         <fieldset className="w-80">
            <label className="flex flex-col items-center">
               <Label description="Controls the number of half-waves along the x-axis. Higher values increase the number of nodes in the x-direction">
                  Wave Frequency in x-direction
               </Label>
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
               <Label description="Controls the number of half-waves along the y-axis. Higher values increase the number of nodes in the y-direction">
                  Wave Frequency in y-direction
               </Label>
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
               <Label description="Controls the amplitude of the sin(nx)sin(my) component of the wave pattern. Affects the overall shape and intensity of the pattern">
                  Amplitude Coefficient X
               </Label>
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
               <Label description="Controls the amplitude of the sin(mx)sin(ny) component of the wave pattern. Affects the overall shape and intensity of the pattern">
                  Amplitude Coefficient Y
               </Label>

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
               <Label description="Controls the strength of the vibration. Higher values cause particles to move more vigorously">
                  Vibration Strength
               </Label>
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
               <Label description="Controls the number of particles used in the simulation. More particles provide higher resolution but may reduce performance">
                  Number of Particles
               </Label>
               <RangeSlider
                  name="particles"
                  min={2000}
                  max={20000}
                  step={2000}
                  onChange={onSliderChange}
                  defaultValue={inputs.particles}
               />
            </label>

            {toggleHeatMap && (
               <div className="mb-5 w-full">
                  <ToggleTabs firstTabLabel="Heat Map" secondTabLabel="Cymatics" onChange={toggleHeatMap} />
               </div>
            )}
         </fieldset>

         {children && <div className="mt-6 flex justify-center">{children}</div>}
      </div>
   );
};

const Label: React.FC<React.PropsWithChildren & { description: string }> = ({ children, description }) => (
   <div className="flex w-72 flex-row items-center gap-1">
      <small className="text-light-100/80">
         <>{children}</>
      </small>
      <Popup content={description} className="">
         <Icons.InfoCircle className="text-light-100/80 size-3 cursor-pointer" />
      </Popup>
   </div>
);
