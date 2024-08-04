import * as THREE from 'three';
import { chladni } from '@client/app/util/math';

export class Particle {
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
