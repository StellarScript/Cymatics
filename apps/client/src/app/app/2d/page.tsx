'use server';

import dynamic from 'next/dynamic';

const CymaticCanvas = dynamic(() => import('./components/Canvas').then((C) => C.CymaticCanvas), {
   ssr: false,
});

export default async function Visulaization2D() {
   return (
      <div className="w-full overflow-auto scroll-smooth">
         <CymaticCanvas />
      </div>
   );
}
