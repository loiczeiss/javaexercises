/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   function data () {

    let answer = false

    while (!answer){
        
        let sexe= prompt("genre?");

        let age=  prompt("age?");
        
        let ville= prompt("ville?");

        answer=confirm('votre sexe est   '+ sexe +'\n'+'vous avez    '+ age +'ans'+'\n'+'et vous venez de     '+ ville +'\n vos données sont elles correctes?')
    }

   }
   data()

    })();
