/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let numbers = document.getElementById("numbers").value;
        console.log(numbers);
       /* let sortNum = numbers.sort ( function( a , b){
          if(a > b) return 1;
          if(a < b) return -1;
         return 0;
});
console.log(sortNum)*/
        // your code here
        /* see what type it is
typeof numbers;
console.log(typeof numbers)*/
/* json parse used to transform a string into an array of NUMBER*/
const arrayFormingFromStringNumbers = JSON.parse("[" + numbers + "]");
console.log(arrayFormingFromStringNumbers);


let sortNum = arrayFormingFromStringNumbers.sort ( function ( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
   return 0;
});
console.log(sortNum);
    });
})();
