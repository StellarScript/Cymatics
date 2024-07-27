'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@client/lib/cn';

const steps = [
  '#335495',
  '#224893',
  '#1a53bd',
  '#2769d3',
  '#3f87dc',
  '#55a5e7',
  '#6fc5f0',
  '#6fc5f0',
];

interface SliderProps {
  name: string;
  min: number;
  max: number;
  step: number;
  onChange?: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  name,
  min = 0,
  max,
  onChange,
}) => {
  const [val, setVal] = useState<number>(min);
  const step = (max - min) / (steps.length - 1);
  const valueRef = useRef<number[]>([]);

  useEffect(() => {
    valueRef.current = Array.from(
      { length: steps.length },
      (_, i) => min + i * step,
    );
  }, [max, min, step]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value);
    setVal(index);
    onChange?.(valueRef.current[index]);
  };

  const handleOnClick = (index: number) => {
    setVal(index);
    onChange?.(valueRef.current[index]);
  };

  return (
    <div className="relative flex items-center">
      <input
        name={name}
        type="range"
        min="0"
        max={steps.length - 1}
        value={val}
        step="1"
        onChange={handleInputChange}
        className="absolute h-8 w-[17rem] cursor-pointer opacity-0"
      />

      <div className="flex w-full flex-row gap-0.5">
        {steps.map((color, i) => (
          <div
            key={i}
            className={cn('size-8 cursor-pointer rounded')}
            style={{ background: val >= i ? color : '#242424' }}
            onClick={() => handleOnClick(i)}
          />
        ))}
      </div>
    </div>
  );
};
