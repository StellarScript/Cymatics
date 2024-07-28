'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('./Canvas').then((C) => C.CymaticCanvas), {
   ssr: false,
});

export const CymaticCanvas: React.FC = () => (
   <Suspense fallback={<div>Loading...</div>}>
      <Canvas />
   </Suspense>
);
