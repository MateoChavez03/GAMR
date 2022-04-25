let entrada = parseFloat(prompt("Seleccione una de las siguientes opciones: \n1) Agregar Horizzon forbidden west al carrito \n2) Agregar Halo Infinite al carrito \n3) Vaciar carrito \n4) Consultar carrito \n5) Finalizar compra"));
let carrito = 0

function agregarHorizon() {
    carrito += 2600;
    alert("Horizon forbidden west fue agregado correctamente al carrito");
}

function agregarHalo() {
    carrito += 3000;
    alert("Halo Infinite fue agregado correctamente al carrito");
}

function vaciarCarrito() {
    carrito = 0;
    alert("El carrito fue vaciado correctamente");
}

function consultarCarrito() {
    switch (carrito) {
        case 0:
            alert("El carrito esta vacio");
            break;
        case 2600:
            alert(`Horizon forbidden west se encuentra en el carrito, el valor del carrito es de $${carrito}`);
            break;
        case 3000:
            alert(`Halo Infinite se encuentra en el carrito, el valor del carrito es de $${carrito}`);
            break;
        case 5600:
            alert(`Horizon forbidden west y Halo Infinite se encuentran en el carrito, el valor del carrito es de $${carrito}`);
            break;
        default:
            alert(`Ocurrio un error con el carrito, solo puede agregar una copia de cada juego`);
            vaciarCarrito()
            break;
    }
}

while (entrada != 5) {
    switch (entrada) {
        case 1:
            agregarHorizon();
            break;
        case 2:
            agregarHalo();
            break;
        case 3:
            vaciarCarrito();
            break;
        case 4:
            consultarCarrito();
            break;
        default:
            alert("El número ingresado es incorrecto, por favor ingrese un número entre 1 y 5")
            break;
    }
    entrada = parseFloat(prompt("Seleccione una de las siguientes opciones: \n1) Agregar Horizzon forbidden west al carrito \n2) Agregar Halo Infinite al carrito \n3) Vaciar carrito \n4) Consultar carrito \n5) Finalizar compra"));
}

if (carrito == 0){
    alert("Gracias por visitar nuestra página, esperemos que la próxima vez adquiera alguna copia de nuestros videojuegos.")
} else {
    alert(`Su compra finalizo con exito, el valor final de la compra fue de $${carrito}, gracias por visitar nuestra página.`);
}