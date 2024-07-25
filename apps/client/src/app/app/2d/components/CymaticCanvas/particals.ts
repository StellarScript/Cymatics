import p5 from 'p5';
import { chladni } from './math';

export interface Sliders {
  m: number;
  n: number;
  a: number;
  b: number;
  v: number;
  num: number;
  hz: number;
}

export class Particle {
  p: p5;
  x: number;
  y: number;
  stochasticAmplitude: number;
  xOff: number;
  yOff: number;

  constructor(p: p5) {
    this.p = p;
    this.x = p.random(0, 1);
    this.y = p.random(0, 1);
    this.stochasticAmplitude = 0;
    this.xOff = 0;
    this.yOff = 0;
    this.updateOffsets();
  }

  move(sliders: Sliders) {
    const eq = chladni(
      this.x,
      this.y,
      sliders.a,
      sliders.b,
      sliders.m,
      sliders.n,
    );
    this.stochasticAmplitude = sliders.v * Math.abs(eq);

    if (this.stochasticAmplitude <= 0.002) this.stochasticAmplitude = 0.002;

    this.x += this.p.random(
      -this.stochasticAmplitude,
      this.stochasticAmplitude,
    );
    this.y += this.p.random(
      -this.stochasticAmplitude,
      this.stochasticAmplitude,
    );

    this.updateOffsets();
  }

  updateOffsets() {
    if (this.x <= 0) this.x = 0;
    if (this.x >= 1) this.x = 1;
    if (this.y <= 0) this.y = 0;
    if (this.y >= 1) this.y = 1;

    this.xOff = this.p.width * this.x;
    this.yOff = this.p.height * this.y;
  }

  show() {
    this.p.point(this.xOff, this.yOff);
  }
}
