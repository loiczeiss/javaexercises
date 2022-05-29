/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {


let number = 100; 
    function sumOfMultiples(number) {    
        let sum = 0;    
        for(let i=1; i<=number; i++) {        
          if(i % 3 === 0 || i % 5 === 0){            
            sum += i;        
          }    
        }    
        return sum;
      }

    // your code here

})();
