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




class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

//Inicia el programa


function renderizarProductos (productos) {

   //Limpiamos la tabla
    bodyTabla.innerHTML = "";

    productos.forEach ((producto) => {

        //Cremos la fila
        const tr = document.createElement("tr");

        const tdNombre = document.createElement("td");

            tdNombre.innerHTML= `${producto.nombre}`;

        const tdPrecio = document.createElement("td");

            tdPrecio.innerHTML = `$${producto.precio}`;

        const tdAcciones = document.createElement("td");
        
        const botonEliminarProducto = document.createElement("button");
            botonEliminarProducto.innerText = "Eliminar";


        //AGREGAR EVENTO AL BOTON DE ELIMINAR
        botonEliminarProducto.addEventListener ("click", () => {
            const indiceElementoEliminar = ListaDeProductos.findIndex((productoAEliminar) => {
                return productoAEliminar.nombre === producto.nombre;
            });

        // BORRO EL PRODUCTO UTILIZANDO EL INDICE

        ListaDeProductos.splice (indiceElementoEliminar, 1);

        actualizarLS();

        renderizarProductos(ListaDeProductos);

        });

        tdAcciones.append(botonEliminarProducto);

        //Agrego el td al tr

        tr.append(tdNombre);
        tr.append(tdPrecio);
        tr.append(tdAcciones);

        //Agrego el tr al tbody
        bodyTabla.append(tr);
    });

}

//OBTENGO LOS NUEVOS PRODUCTOS AGRAGADOS POR EL USUARIO
function obtenerProductos () {
    let productos = [];
    let productosLS = localStorage.getItem("productos");


    //SI HAY ALGO DISTINTO DE NULL LO PARSEO Y LO AGREGO A PRODUCTOS
    if(productosLS !== null) {
        productos = JSON.parse(productosLS);
    }

    return productos;
}


//ACTUALIZO EL LOCALSTORAGE CON LOS NUEVOS PRODUCTOS AGREGADOS
function actualizarLS () {
    
    const ListaDeProductosJSON = JSON.stringify(ListaDeProductos);
    localStorage.setItem("productos", ListaDeProductosJSON);
}


//Se crean variables llamando a los id del html para luego poder modificarlos
const formularioCargarProductos = document.getElementById("cargarProductos");
const inputNombre = document.getElementById("nombreDelProducto");
const inputPrecio = document.getElementById("precioDelProducto");
const bodyTabla = document.getElementById("bodyTabla");
const inputBuscar = document.getElementById("buscarProducto");
const ListaDeProductos = obtenerProductos();


console.log(ListaDeProductos);


//Se llama al formulario para luego almacenar los datos ingresados por el usuario
formularioCargarProductos.addEventListener ( "submit", (event) => {

  //freno el flujo
    event.preventDefault();

    //obtengo el nombre y el precio
    const nombre = inputNombre.value;
    const precio = inputPrecio.value;

   //reseteo el valor de cada input
    inputNombre.value = "";
    inputPrecio.value = "";

//agrego el producto ingresado por el usuario al array
    ListaDeProductos.push(new Producto (nombre, precio));

// LLAMAR A LA FUNCTION ACTUALIZARLS
    obtenerProductos();
    actualizarLS();

    renderizarProductos(ListaDeProductos);
});

inputBuscar.addEventListener("input", () => {

    const palabraABuscar = inputBuscar.value;

    //FILTRADO DE LOS PRODUCTOS
    const productosFiltrados = ListaDeProductos.filter ( (producto) => {
        return producto.nombre.toLowerCase()
        .includes(palabraABuscar.toLowerCase());
    });

    renderizarProductos(productosFiltrados);

});

renderizarProductos(ListaDeProductos);