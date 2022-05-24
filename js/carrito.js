let carrito = [];

// Funcion para cargar productos al carrito

const agregarCarrito = (id) => {
    const seleccion = juegos.find(item => item.id === id);
    const busqueda = carrito.findIndex(el => el.id === id);
    
    busqueda === -1 && carrito.push(seleccion);
    
    calculoTotal();
    enCarrito(id);
    cargarProductos(carrito, tabla, true);
}

// Función para cambiar estilo de boton cuando agregas al carrito

let botonModal = "";

function enCarrito(id) {
    juegos.forEach(() => {
        botonModal = document.querySelector(`.game${id}`);
        botonModal.innerHTML = `<button type="button" class="btn btn-light" disabled>EN CARRITO</button>`;
    })
}

// Función que calcula y modifica el valor total del carrito

let totalCarrito = document.querySelector("#total");
let valorCarrito = carrito.reduce( (accum, elem) => accum + elem.precio, 0);

function calculoTotal() {
    valorCarrito = carrito.reduce( (accum, elem) => accum + elem.precio, 0);
    totalCarrito.innerText = `Precio total: $${valorCarrito}`;
}

// Funcion para vaciar carrito desde el modal

function vaciarCarrito() {
    carrito = [];
    tabla.innerHTML = "";
    calculoTotal();
    cargarProductos(juegos, main, false);
}

// Acción para vaciar carrito desde el modal

let vaciar = document.querySelector(".vaciar");
vaciar.onclick = () => {
    vaciarCarrito();
} 

// Acción para finalizar compra desde el modal

let finalizar = document.querySelector(".finalizar");
finalizar.onclick = () => {
    vaciarCarrito();
}