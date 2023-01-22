
alert("¡Hola! a continuación usted podra calcular el precio total de su pedido siendo consumidor final o responsable inscripto")
let Nombre = prompt("Ingrese su nombre");

while (Nombre === ""){
    alert("El texto ingresado no es válido");
    Nombre = prompt("Ingrese su nombre nuevamente");

}

alert("¡Bienvenido " + Nombre + "!" + " IMPORTANTE: Tenga en cuenta que cada envase de 110cc de cada color tiene un precio de $200");

let CantidadDeColores = prompt("Ingrese la cantidad de colores que quiera comprar");

while ((CantidadDeColores === "") || (CantidadDeColores < 0)){
    alert("El numero ingresado no es válido")
    CantidadDeColores = prompt("Ingrese nuevamente la cantidad de colores que quiera comprar");
}

let CantidadDeEnvases = prompt("Ingrese la cantidad de envases de 110cc quiere comprar de cada color (Precio de cada color es de $200)");

while ((CantidadDeEnvases === "") || (CantidadDeEnvases < 0)){
    alert("El numero ingresado no es válido")
    CantidadDeEnvases = prompt("Ingrese nuevamente la cantidad de envases que quiera comprar de cada color");
}

let TipoDeConsumidor = prompt("¿Es usted consumidor final? (responda con un Si o con un No)");
let PrecioDeCadaColor = 200;

while (TipoDeConsumidor === ""){
    alert("La respuesta es inválida");
    TipoDeConsumidor = prompt("¿Es usted consumidor final? (responda con un Si o con un No)");
}

if (TipoDeConsumidor === "Si"){
    let PrecioTotalConIva = parseInt(CantidadDeColores) * parseInt(CantidadDeEnvases) * PrecioDeCadaColor * 1.21;
    alert("El precio final de su pedido es " + "$" + PrecioTotalConIva);
}
else if (TipoDeConsumidor === "No"){
    let PrecioTotalSinIva = parseInt(CantidadDeColores) * parseInt(CantidadDeEnvases) * PrecioDeCadaColor;
    alert("El precio final de su pedido es " + "$" + PrecioTotalSinIva);
}

else{
    alert("La respuesta es inválida");
}