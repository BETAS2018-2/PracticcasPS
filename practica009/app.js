//WORK IN PROGRESS - Todavía no funciona

//FECHA
var fechaActual = new Date();
var diaActual = fechaActual.getDate();
var mesActual = fechaActual.getMonth()+1;
var añoActual = fechaActual.getFullYear();
actual = diaActual + '/' + mesActual + '/' + añoActual;
var fechaNueva = new Date();

console.log(actual);

//Primos
var n = //numero que se ingresa
for(var i=2; i<n; i++) {
    if(n % i == 0 && n != 1) {
        console.log(n + " es un número primo");
    }
}