'use client';

import { cn } from '@client/lib/cn';
import React, { useState } from 'react';

interface RangeSliderProps {
  name: string;
  min: number;
  max: number;
  step: number;
  onChange?: (name: string, value: number) => void;
}

const MAX_SQUARES = 15;
const COLOR_RANGE = [
  '#6FC5F0',
  '#5BB7E5',
  '#519ADA',
  '#4782CF',
  '#3D6BC4',
  '#3354B9',
  '#2A3EAE',
  '#2028A3',
  '#1C239B',
  '#181F90',
  '#141B85',
  '#10177A',
  '#0C136F',
  '#0A1073',
  '#081068',
  '#06105D',
  '#041053',
];

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step,
  name,
  onChange,
}) => {
  const [value, setValue] = useState(min);

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
    onChange?.(e.target.name, Number(e.target.value));
  };

  const totalSquares = MAX_SQUARES;
  const stepSize = (max - min) / totalSquares;
  const squares = [];

  for (let i = 0; i <= totalSquares; i++) {
    squares.push(
      <div
        key={i}
        style={{
          background:
            i <= (value - min) / stepSize ? COLOR_RANGE[i] : '#374151',
        }}
        className={cn('size-4 rounded-sm')}
      />,
    );
  }

  return (
    <div className="mb-5 flex flex-col items-center">
      <input
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onSliderChange}
        className="absolute w-72 cursor-pointer opacity-0"
      />

      <div className="mb-2 flex h-5 w-72 justify-between">{squares}</div>
    </div>
  );
};

export default RangeSlider;
