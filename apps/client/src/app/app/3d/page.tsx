'use server';

import dynamic from 'next/dynamic';

const CymaticCanvas = dynamic(() => import('./components/Canvas').then((C) => C.CymaticCanvas), {
   ssr: false,
});

export default async function Visulaization3D() {
   return (
      <div className="size-full overflow-auto scroll-smooth">
         <CymaticCanvas />
      </div>
   );
}
