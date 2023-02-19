// ! SUGAR SYNTAX //

// let numero = 5;

//primera simplificacion

// numero += 2;
// numero -= 2;
// numero *= 2;
// numero /= 2;


//FORMA SUGAR SYNTAX

// numero++;
// numero--;

// ! OPERADORES TRERNARIOS //

// FORMA TRADICIONAL

// temperatura = parseInt(prompt("Ingrese la temperatura actual"));

// if(temperatura >= 30){
//     alert("Es un dia caluroso")
// } else{
//     alert("Es un dia cálido")
// }

// ! FORMA CON OPERADOR TERNARIO //

// condicion ? caso1 : caso2

// temperatura >= 30 ? alert("Es un dia caluroso") : alert("Es un dia cálido");


// ! OPERADOR LOGICO AND

// FORMA TRADICIONAL CON ARRAY

// const carrito = []

// if(carrito.length === 0){
//     alert("El carrito esta vacío!");
// }

//FORMA CON OPERADOR LOGICO AND

// carrito.length === 0 && alert("El carrito esta vacío!") // SINO SE CUMPLE DEVUELVE FALSE


// ! OPERADOR LOGICO AND

// const persona = {
//     nombre:"Tomás",
//     edad: 21,
// }

// ! OPERADOR TERNARIO OR ==> FORMA TRADICIONAL

// if(persona.telefono === null){
//     console.log("El telefono no existe")
// } else{
//     console.log("El numero de telefono es " + persona.telefono);
// }

// FORMA CON OPERADOR TERNARIO OR

// console.log(persona.telefono || "El telefono no existe");


// FORMA TRADICIONAL CON LOCALSTORAGE

// carrito = [];

// carritoLS = localStorage.getItem("carrito");

// if(carritoLS !== null) {
//     carrito = JSON.parse(carritoLS);
// }

// FORMA CON OPERADOR OR

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// console.log(carrito);