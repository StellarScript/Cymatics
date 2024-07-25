'use client';

import '@client/app/styles/orbit-particals.scss';

export const OrbitParticals: React.FC = () => {
  const totalParticles = Array.from({ length: 500 }, (_, i) => i + 1);
  return (
    <div className="orbit-wrap">
      {totalParticles.map((particle) => (
        <div key={particle} className={`orbit orbit-${particle}`} />
      ))}
    </div>
  );
};
