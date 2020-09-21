'use strict'

// decir cual de los dos numeros es  mayor.
let stop = false;
while (stop == false) {
    let num1 = parseInt(prompt('Ingrese numero 1'));
    let num2 = parseInt(prompt('Ingrese numero 1'));
    if (num1 > num2) {

        alert("Numero 1 es el mayor ");
        stop = true;
    } else if (num2 > num1) {

        alert("Numero 2 es el mayor");
        stop = true;
    } else if (num1 = num2) {

        alert("Los numeros son iguales");
        stop = true;
    } else {

        alert("numero no es correcto")
    }
}