function fibonacci() {
   let x = 0;
   let y = 1;
   let result = 0;
   console.log (x);
   console.log (y);
   for (let i = 2; i <= 20; i++) {
       result = x + y;
       x = y;
       y = result;
       console.log (result);
   }
}

fibonacci();