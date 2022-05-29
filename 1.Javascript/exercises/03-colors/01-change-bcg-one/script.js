/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const element = document.getElementById("red");
    element.addEventListener("click", redbut);
    
    function redbut() {
      document.body.style.backgroundColor = "red";
    };
    const bluefuck = document.getElementById("blue");
    bluefuck.addEventListener("click", myFunction);
    
    function myFunction() {
      document.body.style.backgroundColor = "blue";
    };
    const greenfuck = document.getElementById("green");
    greenfuck.addEventListener("click", greenf);
    
    function greenf() {
      document.body.style.backgroundColor = "green";
    };
    const yellowfuck = document.getElementById("yellow");
    yellowfuck.addEventListener("click", yellowf);
    
    function yellowf() {
      document.body.style.backgroundColor = "yellow";
    }

})();
