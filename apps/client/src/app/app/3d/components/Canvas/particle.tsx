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
      if (this.x < 0) this.x = 0;
      if (this.x > 1) this.x = 1;
      if (this.y < 0) this.y = 0;
      if (this.y > 1) this.y = 1;
      this.z = eq;
   }
}
