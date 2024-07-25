import Link from 'next/link';
import { OrbitParticals } from '../components/OrbitParticals';

export default function AppPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="absolute">
        <OrbitParticals />
      </div>

      <div className="size-full relative flex flex-col items-center justify-center bottom-9">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex flex-col gap-2 text-center mb-5">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Explore Chladni Cymatics Visualization
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Discover the Patterns of Sound Waves
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#019863] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]">
                  <Link href="/app/3d" className="truncate px-4 py-3 ">
                    3D Visualization
                  </Link>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#F4EFE6] text-[#1C160C] text-sm font-bold leading-normal tracking-[0.015em]">
                  <Link href="/app/2d" className="truncate  px-4 py-3">
                    2D Visualization
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
