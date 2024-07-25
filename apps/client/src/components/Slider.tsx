'use client';

import { cn } from '@client/lib/cn';
import React, { useState, useRef } from 'react';

interface SliderProps {
  label: string;
  max: number;
  initialValue: number;
}

export const Slider: React.FC<SliderProps> = ({ label, max, initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging.current) {
      const rect = containerRef.current?.getBoundingClientRect?.();
      if (rect) {
        const offsetX = e.clientX - rect.left;
        const segmentWidth = rect.width / max;
        let newValue = Math.ceil(offsetX / segmentWidth);
        newValue = Math.max(0, Math.min(newValue, max));
        setValue(newValue);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    isDragging.current = true;
    handleMouseMove(e);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type="range"
        min="0"
        max={max}
        value={value}
        className="hidden"
        readOnly
      />
      <div
        ref={containerRef}
        className="mt-2 flex cursor-pointer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {Array.from({ length: max }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'mr-0.5 size-6 rounded bg-[#1f2937]',
              `${i < value ? 'bg-[#60a5fa]' : ''}`,
            )}
          />
        ))}
      </div>
    </div>
  );
};
