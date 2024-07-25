export const PI = 3.1415926535;

// Chladni equation
// a sin(pi nx) sin(pi my) + b sin(pi mx) sin(pi ny)
export const chladni = (
  x: number,
  y: number,
  a: number,
  b: number,
  m: number,
  n: number,
) =>
  a * Math.sin(PI * n * x) * Math.sin(PI * m * y) +
  b * Math.sin(PI * m * x) * Math.sin(PI * n * y);
