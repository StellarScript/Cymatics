'use server';
import { Slider } from '@client/components/Slider';

export default async function Visulaization2D() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-row justify-center">
        <div className="flex w-1/2 flex-col items-start">
          <div className="flex items-center justify-center text-white">
            <div className="w-80 rounded-lg bg-gray-900 p-6 shadow-lg">
              <Slider label="" max={16} initialValue={0} />
              <Slider label="" max={16} initialValue={0} />
              <Slider label="" max={16} initialValue={0} />
            </div>
          </div>
        </div>
        <div className="flex w-1/2 flex-col items-start">
          <div className="border border-black p-5"></div>
        </div>
      </div>
    </div>
  );
}
