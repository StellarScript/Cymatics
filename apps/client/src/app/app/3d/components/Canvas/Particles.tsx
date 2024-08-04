import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface Sliders {
   m: number;
   n: number;
   a: number;
   b: number;
   v: number;
   num: number;
}

const pi = Math.PI;

// Chladni 2D closed-form solution - returns between -1 and 1, used to calculate the z-coordinate for 3D effect
const chladni = (x: number, y: number, a: number, b: number, m: number, n: number) =>
   a * Math.sin(pi * n * x) * Math.sin(pi * m * y) + b * Math.sin(pi * m * x) * Math.sin(pi * n * y);

class Particle {
   x: number;
   y: number;
   z: number;
   stochasticAmplitude: number;

   constructor() {
      this.x = Math.random();
      this.y = Math.random();
      this.z = 0;
      this.stochasticAmplitude = 0;
   }

   move(a: number, b: number, m: number, n: number, v: number, minWalk: number) {
      const eq = chladni(this.x, this.y, a, b, m, n);
      this.stochasticAmplitude = v * Math.abs(eq);
      if (this.stochasticAmplitude <= minWalk) this.stochasticAmplitude = minWalk;

      this.x += THREE.MathUtils.randFloatSpread(this.stochasticAmplitude);
      this.y += THREE.MathUtils.randFloatSpread(this.stochasticAmplitude);

      // Ensure particles stay within bounds
      this.x = Math.max(0, Math.min(1, this.x));
      this.y = Math.max(0, Math.min(1, this.y));

      // Ensure z is non-negative and adjust based on wave equation
      this.z = Math.max(0, eq * 0.1); // Scale the z value to keep particles within a certain range
   }
}

export const Particles: React.FC<{ sliders: Sliders }> = ({ sliders }) => {
   const meshRef = useRef<THREE.InstancedMesh>(null);
   const particles = useRef<Particle[]>([]);

   useEffect(() => {
      particles.current = [];
      for (let i = 0; i < sliders.num; i++) {
         particles.current.push(new Particle());
      }
   }, [sliders.num]);

   useFrame(() => {
      const { m, n, a, b, v } = sliders;
      const minWalk = 0.002;
      const dummy = new THREE.Object3D();

      particles.current.forEach((particle, i) => {
         particle.move(a, b, m, n, v, minWalk);
         dummy.position.set((particle.x - 0.5) * 10, (particle.y - 0.5) * 10, particle.z);
         dummy.updateMatrix();
         meshRef.current?.setMatrixAt(i, dummy.matrix);
      });

      if (meshRef.current) {
         meshRef.current.instanceMatrix.needsUpdate = true;
      }
   });

   return (
      <instancedMesh ref={meshRef} args={[undefined, undefined, sliders.num]}>
         <sphereGeometry args={[0.02, 8, 8]} />
         <meshStandardMaterial color="sandybrown" />
      </instancedMesh>
   );
};
