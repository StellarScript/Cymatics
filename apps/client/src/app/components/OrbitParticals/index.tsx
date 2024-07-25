'use client';

import '@client/app/styles/orbit-particals.scss';

export const OrbitParticals: React.FC = () => {
  const totalParticles = Array.from({ length: 300 }, (_, i) => i + 1);

  return (
    <div className="size-full relative flex flex-col items-center justify-center -top-32">
      <div className="wrap">
        {totalParticles.map((particle) => (
          <div key={particle} className={`c c-${particle}`} />
        ))}
      </div>
    </div>
  );
};
