'use strict'

// sumar numeros y sacar total y media hasta que se ingresa numero negativo.
alert("Bienvenido");
let num1 = 0;
let suma = 0;
let media = 1;
let intentos = 0;
let stop = false;
while (stop == false) {

    num1 = parseInt(prompt('Ingrese el siguiente numero'));

    media = suma / intentos;
    console.log(intentos + " " + suma);
    if (num1 < 0) {

        alert("el resultado total fue " + suma);
        alert("y la media fue " + media);
        break;
    }
    intentos = intentos + 1;
    suma = suma + num1;

}