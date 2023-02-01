


// let productos = [{id: 1, nombre: 'Limon', linea: 'D', tamaño: '35cc', precio: 200, cantidad: 1},
//                 {id: 2, nombre: 'Vainilla', linea: 'D', tamaño: '35cc', precio: 200, cantidad: 2},
//                 {id: 3, nombre: 'Chocolate', linea: 'D', tamaño: '35cc', precio: 200, cantidad: 1},
//                 {id: 4, nombre: 'Frutilla', linea: 'D', tamaño: '35cc', precio: 200, cantidad: 1}
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



// ! creas una class con su constructor y sus objetos.

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

    sumaIva () {
        this.precio = this.precio * 1.21;
    }
}


const esencias = []

esencias.push(new EsenciasAlimenticias (1, `Limon`, `D`, `110cc`, 200, 1)),
esencias.push(new EsenciasAlimenticias (2, 'Vainilla', 'D', '110cc', 200, 10)),
esencias.push(new EsenciasAlimenticias (3, 'Chocolate', 'D', '110cc', 200, 1)),
esencias.push(new EsenciasAlimenticias (4, 'Mango', 'D', '110cc', 200, 6)),

console.log(esencias);

function subtotal () {
    for(const producto of esencias) {
    producto.sumaIva();
    producto.subtotal = producto.precio * producto.cantidad;
    producto.vendido = true;
    }
}

subtotal();