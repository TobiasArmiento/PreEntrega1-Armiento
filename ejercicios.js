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

// let nombre = prompt("ingrese su nombre");
// const edad = prompt ("ingrese su edad");

// if((nombre === "Gabriel") && (edad > 24)) {
//     alert("Bienvenido Gabriel");
// }
// else if ((nombre === "Maria") && ((edad >= 28) && (edad <= 35))) {
//     alert("Maria usted tiene entre 28 y 35 años");
// }













//22222222222222222222222222222222
// El costo de la esencia es de $200. Escriba un programa en donde se le pida al usuario ingresar la cantidad de esencias que quiere y mostrar cuánto le saldría.


// alert("Antes de comenzar tenga en cuenta que el valor de cada Esencia es de $200");
// let cantidadDeEsenicas = parseInt(prompt("Ingrese cuantas esencias se quiere llevar"));
// const precioDeEsencias = 200;
// let precioTotal = cantidadDeEsenicas * precioDeEsencias;

// alert("El precio total del pedido es " + precioTotal + " pesos")


// // Escriba un programa en donde se le pida al usuario ingresar el color que se desee llevar. Teniendo en cuenta estos valores:
// - amarillo: $200
// - anaranjado: $250
// - azul: $150
// - celete: $100
// - rojo: $100
// - rosa: $150
// - naranja: $200
// - verde: $250
// Mostrarle al usuario cuál sería el costo de viajar al lugar que escribió.

// let colorDeEsencia = prompt("Ingrese que color se desea llevar");
// let costoDelColor = 500;

// if (colorDeEsencia === "amarillo" || colorDeEsencia === "naranja") {
//     costoDelColor = 200;
// }
// else if (colorDeEsencia === "anaranjado" || colorDeEsencia === "verde"){
//     costoDelColor = 250;
// }
// else if (colorDeEsencia === "azul" || colorDeEsencia === "rosa") {
//     costoDelColor = 150;
// }
// else if (colorDeEsencia === "celeste" || colorDeEsencia === "rojo") {
//      costoDelColor = 100;
// }

// alert("El valor del color ingresado es de " + costoDelColor)




// let Nombre = prompt("Ingrese un nombre, si desea finalizar escriba salir");

// while (Nombre !== "Salir" ) {

//     console.log("El nombre ingresado es " + Nombre);

//     nombre = prompt("Ingrese un nuevo nombre, si desea finalizar escriba salir");
// }

// console.log("finalizo el programa");

// let Nombre = prompt("Ingrese un nombre (si desea salir escriba Exit)");
//
// while(Nombre !== "Exit") {
//     console.log("El nombre ingresado es " + Nombre);
//     Nombre = prompt("Ingrese un nuevo nombre (si desea salir escriba Exit)");
// }
//
// console.log("Finalizó el programa");





// PRIMER PRE ENTREGA (FALTA AGREGAR COMENTARIOS AL CODIGO)
//
// alert("¡Hola! a continuación usted podra calcular el precio total de su pedido siendo consumidor final o responsable inscripto")
// let Nombre = prompt("Ingrese su nombre");
//
// while (Nombre === ""){
//     alert("El texto ingresado no es válido");
//     Nombre = prompt("Ingrese su nombre nuevamente");
//
// }
//
// alert("¡Bienvenido " + Nombre + "!" + " IMPORTANTE: Tenga en cuenta que cada envase de 110cc de cada color tiene un precio de $200");
//
// let CantidadDeColores = prompt("Ingrese la cantidad de colores que quiera comprar");
//
// while ((CantidadDeColores === "") || (CantidadDeColores < 0)){
//     alert("El numero ingresado no es válido")
//     CantidadDeColores = prompt("Ingrese nuevamente la cantidad de colores que quiera comprar");
// }
//
// let CantidadDeEnvases = prompt("Ingrese la cantidad de envases de 110cc quiere comprar de cada color (Precio de cada color es de $200)");
//
// while ((CantidadDeEnvases === "") || (CantidadDeEnvases < 0)){
//     alert("El numero ingresado no es válido")
//     CantidadDeEnvases = prompt("Ingrese nuevamente la cantidad de envases que quiera comprar de cada color");
// }
//
// let TipoDeConsumidor = prompt("¿Es usted consumidor final? (responda con un Si o con un No)");
// let PrecioDeCadaColor = 200;
//
// while (TipoDeConsumidor === ""){
//     alert("La respuesta es inválida");
//     TipoDeConsumidor = prompt("¿Es usted consumidor final? (responda con un Si o con un No)");
// }
//
// if (TipoDeConsumidor === "Si"){
//     let PrecioTotalConIva = parseInt(CantidadDeColores) * parseInt(CantidadDeEnvases) * PrecioDeCadaColor * 1.21;
//     alert("El precio final de su pedido es " + "$" + PrecioTotalConIva);
// }
// else if (TipoDeConsumidor === "No"){
//     let PrecioTotalSinIva = parseInt(CantidadDeColores) * parseInt(CantidadDeEnvases) * PrecioDeCadaColor;
//     alert("El precio final de su pedido es " + "$" + PrecioTotalSinIva);
// }
//
// else{
//     alert("La respuesta es inválida");
// }



// Realizar un programa que le pida al usuario cadenas de texto hasta que ingrese “Salir”. Una vez que sale,
// mostrarle en un alert los textos ingresados separados por una coma (,).


/* Como primer paso se crea la funcion con el procedimiento que se quiera devolver luego con un const para que quede
 el codigo mas simplificado */

// function cadenaDeTextosUnidas () {
//
//     let concatenacion = "";
//     /* Se crean variables donde se va a almacenar todos los textos ingresados por el usuario */
//
//     let concatenacionMasComa = ",";
//     /* Luego se crea una variable con COMA para que se agregue una coma luego de cada texto ingresado */
//
//     let ingreseTexto = prompt("Escriba un texto");
//     /* Se le pide al usuario que ingrese el texto */
//
//     while (ingreseTexto !== "Salir") {
//
//         concatenacion += ingreseTexto + concatenacionMasComa
//         /* Se concatenan / Suman todos los textos ingresados por el usuario mas la coma despues de cada uno de estos mismos */
//
//         ingreseTexto = prompt("Escriba un texto NUEVAMENTE (Si quiere finalizar escriba la palabra Salir");
//         /* Se le pide nuevamente al usuario que ingrese un texto con el ciclo WHILE hasta q ponga Salir*/
//     }
//
//     return concatenacion;
//     /* Te devuelve el resultado de toda la concatenacion mas las comas. SI NO SE PONE RETURN NUNCA TE LO VA A DEVOLVER POR LO TANTO NO SE VA A VISUALIZAR NUNCA */
//
// }
//
//
// const resultadoDeCadenaDeTextosUnidas = cadenaDeTextosUnidas();
// /* Se crea una variable para LLAMAR al resultado de todas las cadenas de texto unidas */
// console.log("El resultado de la concatenacion es " + resultadoDeCadenaDeTextosUnidas);





// Realizar un programa donde se le pida al usuario ingresar un número positivo y luego mostrar en pantalla el
// conteo hacia atrás hasta llegar a 0. // NOTA: Tener en cuenta validar que es un número positivo el que ingresó.
//
//
// function conteoDeNumerosHaciaAtras () {
//
//     let concatencaion = "";
//     let espacioEntreConcatenacion = " ";
//     let ingresarUnNumeroPositivo = prompt("Ingrese un numero POSITIVO");
//     let i = 0;
//
//     while (ingresarUnNumeroPositivo >= 0) {
//
//         concatencaion += ingresarUnNumeroPositivo + espacioEntreConcatenacion
//         ingresarUnNumeroPositivo--;
//     }
//
//     return concatencaion;
// }
//
// const llamarConteoDeNumerosHaciaAtras = conteoDeNumerosHaciaAtras();
//
// console.log("El conteo de numeros hacia atras es " + llamarConteoDeNumerosHaciaAtras);






// Pedirle al usuario que ingrese un número, realizar un conteo hacia atrás hasta llegar a 0 pero sólo mostrando los
// números que son pares.//

// function conteoDeNumerosHaciaAtras () {
//
//     let ingreseNumero = parseInt(prompt("Ingrese un numero"));
//
//     for (let i = 0; i <= ingreseNumero; i++) {
//
//         if(i % 2 === 1){
//             continue;
//         }
//
//         console.log(i);
//     }
//
// }
//
// const llamarConteoDeNumerosHaciaAtras = conteoDeNumerosHaciaAtras();
//
// console.log(llamarConteoDeNumerosHaciaAtras);








// /* Realizar un programa que le pida al usuario cuántos números quiere ingresar y entre todos los que ingrese
//  calcular cual es el mayor, el menor y la media. */
//
// /* Primero se pregunta al usuario y se declaran las variables donde se van a almacenar los numeros ingresados proximamente */
// let cantidadDeNumeros = prompt("Ingrese cuantos numeros quiere ingresar");
// let menor = 0;
// let mayor = 0;
// let media = 0;
//
// ! Se utiliza el ciclo for para que el usuario decida cuantos numeros desea poner */
// for (let i = 0; i < cantidadDeNumeros; i++) {
//
//     ! Se pregunta al usuario que numeros quiere poner */
//     let ingreseNumeros = parseInt(prompt("Ingrese un numero"));
//
//     ! I al llegar a 0 compara los numeros ingresados y los ubica en su correcto lugar*/
//     if(i === 0) {
//
//         menor = ingreseNumeros; /*1000*/
//         mayor = ingreseNumeros; /*1000*/ /* LUEGO SE ESCRIBE */ /*El MAYOR pasa a ser 12000*/
//     }
//
//
//     ! Si el numero ingresado es menor que el menor sera el numero mas chico */
//     if(ingreseNumeros < menor){
//
//         menor = ingreseNumeros;
//     }
//
//
//     ! Si el numero ingresado es mayor que el menor sera el numero mas grande */
//     if (ingreseNumeros > mayor) {
//
//         mayor = ingreseNumeros;
//     }
//
//
//     ! Se suman los numero ingresados y se los divide por la cantidad de numeros que ingreso el usuario */
//     media += ingreseNumeros;
//
// }
//
// console.log("El numero mas chico es " + menor);
// console.log("El numero mas grande es " + mayor);
// console.log("La media es " + media);
//




/* Hacer un programa en el cual se ingrese una figura (Triángulo, cuadrado, círculo y rectángulo) y dependiendo que
 figura elija, se le pida base, altura o radio y calcular el área. */

//
// const ingreseFigura = prompt("Ingrese una figura");
// function variablesAreaSinCirculo () {
//
//     let base = prompt("Ingrese la longitud de la base en mm");
//     let altura = prompt("Ingrese la longitud de la base en mm");
//
//     let calcularArea = base * altura;
//
//
//     console.log("El area del" + ingreseFigura + " es " + calcularArea);
// }
//
// if(ingreseFigura === "Triangulo") {
//
//     variablesAreaSinCirculo();
//
// }
//
// else if(ingreseFigura === "Cuadrado") {
//
//     variablesAreaSinCirculo();
// }
//
// else if(ingreseFigura === "Rectangulo") {
//
//     variablesAreaSinCirculo();
// }
//
// else if(ingreseFigura === "Circulo") {
//
//     let radio = prompt("Ingrese el radio del circulo")
//
//     let calcularArea = Math.PI *(radio * radio);
//
//     console.log("El area del circulo es es " + calcularArea);
// }
//
// else {
//     alert("El texto ingresado no es valido");
// }
//
// console.log("finaliza el programa");