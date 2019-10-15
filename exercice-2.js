let nbUser = prompt("Choisissez un chiffre :");
nbUser -= 1;

function fibonacci(nb) {
   let x = 0;
   let y = 1;
   let result = 0;
   document.write(x + "<br>")
   document.write(y + "<br>")
   for (let i = 2; i <= nb; i++) {
       result = x + y;
       x = y;
       y = result;
       document.write(result + "<br>");
   }
}
console.log(fibonacci(nbUser));