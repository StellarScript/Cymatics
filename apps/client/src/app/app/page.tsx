import Link from 'next/link';
import { OrbitParticals } from '../components/OrbitParticals';

export default function AppPage() {
   return (
      <div className="flex w-full flex-col items-center justify-center">
         <div className="absolute">
            <OrbitParticals />
         </div>

         <div className="relative bottom-9 flex size-full flex-col items-center justify-center">
            <div className="flex h-full grow flex-col">
               <div className="flex flex-1 justify-center px-40 py-5">
                  <div className="flex w-full flex-col items-center justify-center">
                     <div className="mb-5 flex flex-col gap-2 text-center">
                        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white">
                           Explore Chladni Cymatics Visualization
                        </h1>
                        <h2 className="text-sm font-normal leading-normal text-white">
                           Discover the Patterns of Sound Waves
                        </h2>
                     </div>
                     <div className="flex flex-wrap justify-center gap-3">
                        <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#019863] text-sm font-bold leading-normal tracking-[0.015em] text-[#FFFFFF]">
                           <Link href="/app/3d" className="truncate px-4 py-3 ">
                              3D Visualization
                           </Link>
                        </button>
                        <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#F4EFE6] text-sm font-bold leading-normal tracking-[0.015em] text-[#1C160C]">
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
