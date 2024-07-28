'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { ControlInputs } from '@client/app/components/Control';
import { Particle } from './particle';

interface ParticlesProps {
   sliders: ControlInputs;
}

export const Particles: React.FC<ParticlesProps> = ({ sliders }) => {
   const meshRef = useRef<THREE.InstancedMesh | null>(null);
   const particles = useRef<Particle[]>([]);
   const smoothSliders = useRef<ControlInputs>({ ...sliders });

   useEffect(() => {
      particles.current = [];
      for (let i = 0; i < sliders.particles; i++) {
         particles.current.push(new Particle());
      }
   }, [sliders.particles]);

   useFrame(() => {
      const minWalk = 0.002;
      const dummy = new THREE.Object3D();

      // Interpolate slider values for smooth transition
      smoothSliders.current.frequencyX += (sliders.frequencyX - smoothSliders.current.frequencyX) * 0.1;
      smoothSliders.current.frequencyY += (sliders.frequencyY - smoothSliders.current.frequencyY) * 0.1;
      smoothSliders.current.amplitudeX += (sliders.amplitudeX - smoothSliders.current.amplitudeX) * 0.1;
      smoothSliders.current.amplitudeY += (sliders.amplitudeY - smoothSliders.current.amplitudeY) * 0.1;
      smoothSliders.current.vibration += (sliders.vibration - smoothSliders.current.vibration) * 0.1;

      particles.current.forEach((particle, i) => {
         particle.move(
            smoothSliders.current.amplitudeX,
            smoothSliders.current.amplitudeY,
            smoothSliders.current.frequencyX,
            smoothSliders.current.frequencyY,
            smoothSliders.current.vibration,
            minWalk,
         );
         dummy.position.set((particle.x - 0.5) * 10, (particle.y - 0.5) * 10, particle.z);
         dummy.updateMatrix();
         meshRef.current?.setMatrixAt(i, dummy.matrix);
         meshRef.current?.position.set(0, 0, -3);
      });

      if (meshRef.current) {
         meshRef.current.instanceMatrix.needsUpdate = true;
      }
   });

   return (
      <instancedMesh ref={meshRef} args={[undefined, undefined, sliders.particles]}>
         <sphereGeometry args={[0.01, 8, 8]} />
         <meshStandardMaterial color="hotpink" />
      </instancedMesh>
   );
};
