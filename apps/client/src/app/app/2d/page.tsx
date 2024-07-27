'use server';

import { CymaticCanvas } from './components/Canvas';

export default async function Visulaization2D() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-row justify-center">
        <CymaticCanvas />
      </div>
    </div>
  );
}
