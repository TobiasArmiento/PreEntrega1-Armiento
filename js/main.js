


// let productos = [{id: 1, nombre: 'Banana', linea: 'D', tamaño: '35cc', precio: 200, cantidad: 1},
//                 {id: 2, nombre: 'Cacao', linea: 'D', tamaño: '35cc', precio: 200, cantidad: 2},
//                 {id: 3, nombre: 'Dulce de Leche', linea: 'D', tamaño: '35cc', precio: 200, cantidad: 1},
//                 {id: 4, nombre: 'Fernet', linea: 'D', tamaño: '35cc', precio: 200, cantidad: 1}
// ];



// console.log('El listado de productos es: ');
// for( const producto of productos) {
//     console.log(`Id: ${producto.id}`);
//     console.log(`nombre: ${producto.nombre}`);
//     console.log(`linea: ${producto.linea}`);
//     console.log(`tamaño: ${producto.tamaño}`);
//     console.log(`precio: ${producto.precio}`);
//     console.log(`cantidad: ${producto.cantidad}`);
//     console.log(" ");
// }


// productos.push



// ! creacion de una clase con su constructor y sus objetos.

class EsenciasAlimenticias {
    constructor(id, nombre, linea, tamaño, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.linea = linea;
        this.tamaño = tamaño;
        this.precio = Number(precio);
        this.cantidad = Number(cantidad);
        this.vendido = false;
        this.subtotal = 0;
    }

    // ! Se grega el iva dentro de la misma class.
    sumaIva () {
        this.precio = this.precio * 1.21;
    }
}


// ! Se declara el array
const esencias = []

// ! Se llama al array "esencias.push" y con "new" se agrega el nuevo producto a la clase EsenciasAlimienticias. 
esencias.push(new EsenciasAlimenticias (1, `Limon`, `D`, `110cc`, 200, 1)),
esencias.push(new EsenciasAlimenticias (2, 'Vainilla', 'D', '110cc', 200, 10)),
esencias.push(new EsenciasAlimenticias (3, 'Chocolate', 'D', '110cc', 200, 1)),
esencias.push(new EsenciasAlimenticias (4, 'Mango', 'D', '110cc', 200, 6)),

// ! Con un "console.log" se visualiza el resultado del agregado de nuevos productos dentro de la clase "EsenciasAlimenticias"
console.log(esencias);


// ! Se crea la funcion "subtotal" para calcular este mismo y el Iva luego de tener los valores de cada objeto creando una funcion. 
function subtotal () {
    for(const producto of esencias) {
    producto.sumaIva();
    producto.subtotal = producto.precio * producto.cantidad;
    producto.vendido = true;
    }
}

// ! Se llama a la funcion para poder visualizarla. 
subtotal();