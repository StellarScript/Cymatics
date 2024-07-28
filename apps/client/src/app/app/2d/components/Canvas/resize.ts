export const adjustSize = (val: number, percent: number) => {
   return val - (val * percent) / 100;
};

export const canvasSizes = (winSize: number) => {
   if (winSize < 1000) {
      return adjustSize(winSize, 5);
   }

   if (winSize > 1000 && winSize < 1200) {
      return adjustSize(winSize, 35);
   }

   if (winSize > 1200 && winSize < 1500) {
      return adjustSize(winSize, 35);
   }

   if (winSize > 1500 && winSize < 1900) {
      return adjustSize(winSize, 40);
   }

   if (winSize > 1900) {
      return adjustSize(winSize, 50);
   }

   return adjustSize(winSize, 35);
};
