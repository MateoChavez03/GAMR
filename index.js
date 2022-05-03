class Juego {
    constructor (nombre, precio, consola) {
        this.nombre = nombre;
        this.precio = precio;
        this.consola = consola;
    }
}

const juego1 = new Juego ("Horizon Forbidden West", 2600, "Play Station 5");
const juego2 = new Juego ("Halo Infinite", 3000, "Xbox Series X");

let entrada = parseFloat(prompt("Seleccione una de las siguientes opciones: \n1) Agregar Horizzon forbidden west al carrito \n2) Agregar Halo Infinite al carrito \n3) Vaciar carrito \n4) Consultar carrito \n5) Finalizar compra"));
let carrito = []

function vaciarCarrito() {
    carrito.splice(0, carrito.length);
    alert("El carrito fue vaciado correctamente");
}

while (entrada != 5) {
    switch (entrada) {
        case 1:
            carrito.push(juego1);
            break;
        case 2:
            carrito.push(juego2);
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

function consultarCarrito() {
    let valorCarrito = carrito.reduce( (accum, elem) => accum + elem.precio, 0);
    switch (valorCarrito) {
        case 0:
            alert("El carrito esta vacio");
            break;
        case 2600:
            alert(`Horizon forbidden west se encuentra en el carrito, el valor del carrito es de $${valorCarrito}`);
            break;
        case 3000:
            alert(`Halo Infinite se encuentra en el carrito, el valor del carrito es de $${valorCarrito}`);
            break;
        case 5600:
            alert(`Horizon forbidden west y Halo Infinite se encuentran en el carrito, el valor del carrito es de $${valorCarrito}`);
            break;
        default:
            alert(`Ocurrio un error con el carrito, solo puede agregar una copia de cada juego`);
            vaciarCarrito()
            break;
    }
}

if (carrito.length == 0){
    alert("Gracias por visitar nuestra página, esperemos que la próxima vez adquiera alguna copia de nuestros videojuegos.")
} else if (carrito.length > 2) {
    alert("Solo puede agregar una copia de cada juego, intentelo nuevamente");
    vaciarCarrito();
} else {
    alert("Gracias por comprar en nuestra tienda");
}