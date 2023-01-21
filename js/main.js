// comentario simple

/* 
comentario mas de una linea 
de la clase de javascript 
*/

// variables

// let edad = 5;
// edad = 15;

// const nombre = "rodrigo";

// //operaciones con numeros

// const numero1 = 20;
// const numero2 = 10;

// const suma = numero1 + numero2;

// document.write ("El resultado de la suma es " + suma)

// // multiplicacion

// const multiplicacion = numero1 * numero2;

// console.log (multiplicacion)

// // Division

// const division = numero1 / numero2;

// console.log (division)


// // concatenar cadenas

// const cadena1 = "Hola";
// const cadena2 = "Soy tobias";

// const concatenarString = cadena1 + cadena2; /* Esto va a quedar HolaSoy Tobias*/

// console.log (concatenarString)

// concatenar cadenas con espacio

/* const cadena3 = "Hello";
const cadena4 = "I am Tobias";
const espacio1 = " ";

const concatenarString2 = cadena3 + espacio1 + cadena4;

console.log (concatenarString2) /* Muestra el resultado de concatenarstring2 dentro de la consola del navegador web*/


// PROMPT crea un mensaje donde el usuario debe completar con informacion

//const nombre1 = prompt ("Ingrese su nombre" )

// console.log ("Su nombre es " + nombre1)

/* alert ("Su nombre es " + nombre1)*/


// parseInt() and parseFloat()

// const numero3 = 10;
// const numero4 = "10";

// const resultadoSuma= numero3 + parseInt(numero4);

// // Ejemplo claro de utilizacion del PARSEINT

// console.log (resultadoSuma)

// const numeroIngresado = parseInt(prompt("Ingrese su numero"))

// const resultado2 = numeroIngresado + 10;

// console.log ("El resultado de prompt es " + resultado2)




// EJERCICIOS DE PRACTICA //

// 111111111111111111111111111111
// Escriba un programa en donde el usuario ingrese 2 números e indique cuál es el mayor

// const numero1 = prompt("ingrese un numero")
// const numero2 = prompt("ingrese segundo numero")

// if (numero1 > numero2) {
//     console.log("el primer numero ingresado es mayor")
// }

// else if (numero2 > numero1) {
//     console.log("el segundo numero ingresado es mayor")
// }




//22222222222222222222222222222222
// El costo del helado es de $5. Escriba un programa en donde se le pida al usuario ingresar la cantidad de helados que quiere y mostrar cuánto le saldría

// let cantidadHelados = prompt("Ingrese Cantidad de Helados que desee");
// const costoHelado = 5;

// const multiplicacion = cantidadHelados * costoHelado

// console.log("El precio total de su pedido es " + multiplicacion)



//33333333333333333333333333333333
// Escriba un programa en donde se le solicite la edad al usuario y calcule su año de nacimiento, tomando en cuenta que el año actual es 2022.

// const edad = prompt("Ingrese su edad")
// const anioActual = 2023;

// const anioDeNacimiento = anioActual - parseInt(edad);

// console.log("Usted nació en el año " + anioDeNacimiento)




//44444444444444444444444444444444
// Escriba un programa en donde el usuario ingrese 3 notas, calcule el promedio y si es mayor o igual a 4 le indique que está aprobado con un alert.

// const nota1 = parseInt(prompt("Ingrese su primer nota"))
// const nota2 = parseInt(prompt("Ingrese su segunda nota"))
// const nota3 = parseInt(prompt("Ingrese su tercera nota"))

// const promedio = (nota1 + nota2 + nota3) / 3;

// if (promedio > 4){
//     alert("Usted esta aprobado")
// }

// else if (promedio < 4){
//     alert ("Usted esta desaprobado")
// }




//5555555555555555555555555555555
// Escriba un programa donde se le solicite el año de nacimiento. Si es mayor a 18 se le tiene que pedir que ingrese su nombre y apellido para mostrarle un texto con el formato: “Hola nombre apellido, tu edad actual es: edad”. Ejemplo: “Hola Rodrigo Río, tu edad actual es 25”.

// const anioDeNacimiento = prompt("Ingrese su año de nacimiento");
// const edad = 2023 - anioDeNacimiento;

// if (anioDeNacimiento <= 2005) {
//     let nombre = prompt("Ingrese su Nombre")
//     let apellido = prompt("Ingrese su Apellido")

//     alert("Hola " + nombre + apellido + " tu edad actual es " + edad)
// }

// else if (anioDeNacimiento > 2005){
//     alert("Usted es menor de edad")
// }




//6666666666666666666666666666666

// Escriba un programa que permita calcular el costo total del producto con su IVA. Para esto, solicite al usuario el precio del producto, calcule su IVA (21%) y muéstrele en pantalla con un alert el precio final.

// let precioDelProducto = prompt("Indique el precio de su producto")

// let ivaDelProducto = precioDelProducto * 1.21;

// alert ("El precio final de su producto mas iva es " + ivaDelProducto)




//77777777777777777777777777777777

// // Escriba un programa en donde se le pida al usuario ingresar el lugar a donde quiera viajar. Teniendo en cuenta estos valores:
// - Colombia: $40
// - México: $50
// - Brasil: $30
// - Uruguay: $20
// - Chile: $20
// - Ecuador: $30
// - Perú: $40
// - Estados Unidos: $50
// Mostrarle al usuario cuál sería el costo de viajar al lugar que escribió.

// const lugarDondeViajar = prompt("Ingrese el lugar donde quiera viajar")

// let costoDelViaje = 0;

// if (lugarDondeViajar === "Colombia" || lugarDondeViajar === "Peru") {
//     costoDelViaje = 40;
// }
// else if (lugarDondeViajar === "Mexico" || lugarDondeViajar === "Estados Unidos") {
//     costoDelViaje = 50;
// }
// else if (lugarDondeViajar === "Brasil" || lugarDondeViajar === "Ecuador") {
//     costoDelViaje = 30;
// }
// else if (lugarDondeViajar === "Uruguay" || lugarDondeViajar === "Chile") {
//     costoDelViaje = 20;
// }

// console.log("El costo del viaje es " + costoDelViaje);





/////////////Operadores lógicos

//1111111111111111111111111111111111

// // Siendo X, Y y Z valores booleanes cuyos valores son: X = true, Y = false y Z = true, determine el valor de cada expresión lógica:
// // (X && Y) || (X && Z)
// (T && F) || (T && T)
//    F     ||    T 
//          T

// // (X || !Y) && (!X || Z)
// (T || notF) && (notTrue || F)
//     T       &&      F
//             T

// // X || Y && Z        
// (T)  || F & T
// T    || F
//     T
// // !(X || Y) && Z 
//     F & F
//       F


// // X || Y || X && !Z && !Y 
//             (T && F && T)
//     T || F || F
//         T

// // !X || !Y || Z && X && !Y
//    F  || T  || (T && T && T)
//          T





//22222222222222222222222222222222

// Escriba un programa que le pida una letra al usuario y le diga si es una vocal o no

// const Letra = prompt("Escriba una letra");

// if((Letra === "a") || (Letra === "e") || (Letra === "i") || (Letra === "o") || (Letra === "u")) {
//     console.log("La letra es una vocal");
// }
// else {
//     console.log("la letra no es vocal");
// }




//33333333333333333333333333333333

// //Escriba un programa en donde se le pida un nombre y una edad al usuario. Muestre un mensaje en pantalla si:
// - El nombre es “Gabriel” y tiene más de 24 años
// - El nombre es “María” y tiene entre 28 y 35 años

let nombre = prompt("ingrese su nombre");
const edad = prompt ("ingrese su edad");

if((nombre === "Gabriel") && (edad > 24)) {
    alert("Bienvenido Gabriel");
}
else if ((nombre === "Maria") && ((edad >= 28) && (edad <= 35))) {
    alert("Maria usted tiene entre 28 y 35 años");
}