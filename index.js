class Juego {
    constructor (nombre, precio, consola) {
        this.nombre = nombre;
        this.precio = precio;
        this.consola = consola;
    }
    
    agregar() {
        carrito.push(this);
    }

    quitar() {
        let pos = carrito.indexOf(this);
        carrito.splice(pos, 1);
    }
}

const horizon = new Juego ("horizon forbidden west", 2600, "Play Station 5");
const halo = new Juego ("halo infinite", 3000, "Xbox Series X");

const juegos = [horizon, halo];
let entrada = parseInt(prompt("Seleccione una de las siguientes opciones: \n1) Buscar juego\n2) Vaciar carrito \n3) Consultar carrito \n4) Finalizar compra"));
let carrito = []

function vaciarCarrito() {
    carrito = [];
    alert("El carrito fue vaciado correctamente");
}

while (entrada != 4) {
    switch (entrada) {
        case 1:
            let busqueda = prompt("Ingrese el nombre del juego");
            buscar(busqueda);
            break;
        case 2:
            vaciarCarrito();
            break;
        case 3:
            consultarCarrito();
            break;
        default:
            alert("El número ingresado es incorrecto, por favor ingrese un número entre 1 y 5")
            break;
    }
    entrada = parseFloat(prompt("Seleccione una de las siguientes opciones: \n1) Buscar juego\n2) Vaciar carrito \n3) Consultar carrito \n4) Finalizar compra"));
}

function buscar(busqueda) {
    let juegoEncontrado = juegos.find( (elem) => elem.nombre === busqueda.toLowerCase() );
    if (juegoEncontrado != undefined) {
        let opcion = parseInt(prompt(`Nombre del juego: ${juegoEncontrado.nombre} \nPrecio: ${juegoEncontrado.precio} \n1) Agregar al carrito \n2) Quitar del carrito \n3) Volver`));
        switch (opcion) {
            case 1:
                juegoEncontrado.agregar()
                break;
            case 2:
                juegoEncontrado.quitar();
                break;
            case 3:
                break;
            default:
                alert("Por favor seleccione una opción valida");
                break;
        }
    } else {
        alert("No existe ningún juego con ese nombre");
    }
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