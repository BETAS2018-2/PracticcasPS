

//console.log("HELLO ES6"); //Ejercicio 1


/*var nom = process.argv[2];
var minus = nom.toLowerCase();
console.log(`Hello, ${nom}!
Your name lowercased is "${minus}".`);*/ //Ejercicio 2


/*var argum = process.argv.slice(2);
var letras = argum.map( letra => letra[0] )
                    .reduce( (letraa, letra) => letraa + letra, '' );
console.log(`[${argum}] becomes "${letras}"`);*/ //Ejercicio 3


/*var foot = {
  kick: function () {
    this.yelp = "Ouch!"
    setImmediate(() => console.log(this.yelp));
  }
}
foot.kick();*/ //Ejercicio 4


/*let userArray = process.argv.slice(2);
let [ , username, email] = userArray;
console.log("{ username: '"+username+"', email: '"+email+"' }");*/ //Ejercicio 5


/*var numbers = process.argv.slice(2);
var min = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${min}`);*/ //Ejercicio 6


/*module.exports = function average(//what goes here ){
    /* what goes here?
}*/ //Ejercicio 7, no supe muy bien que hacer aquí


/*module.exports = function midpoint(//what goes here ) {
    // what goes here?
};*/ //Ejercicio 8, tampoco supe que hacer aquí


/*makeImportant("Hi", 5);             // => "Hi!!!!!"
    makeImportant("Hi");                // => "Hi!!"
    makeImportant("Hello?", undefined); // => "Hello?!!!!!!"*/ //Ejercicio 9, nope, tampoco supe que hacer


/*console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
function html(//what goes here? ) {
    // what goes here?
    // don't forget to return the escaped string!
}*/ //Ejercicio 10, En serio ¿Qué? Tampoco supe que onda