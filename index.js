// Estableciendo los objetos de venta

class Juego {
    constructor (id, nombre, precio, consola, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.consola = consola;
        this.imagen = imagen
    }
}

const horizon = new Juego (1, "Horizon Forbidden West", 2600, "Play Station", `https://as01.epimg.net/meristation/imagenes/2021/05/15/noticias/1621083825_707762_1621084771_portada_normal.jpg`);
const halo = new Juego (2, "Halo Infinite", 3000, "Xbox Series", `https://i.blogs.es/c031b9/halo-infinite-portada/450_1000.jpeg`);
const hogwarts = new Juego (3, "Hogwarts Legacy", 2000, "Xbox Series", `https://as01.epimg.net/meristation/imagenes/2021/01/13/noticias/1610559449_696528_1610559646_portada_normal.jpg`);
const uncharted = new Juego (4, "Uncharted 4", 1500, "Play Station", `https://areajugones.sport.es/wp-content/uploads/2015/03/Uncharted-42.jpg`);
const last = new Juego (5, "The Last of Us 2", 4000, "Play Station", `https://as01.epimg.net/meristation/imagenes/2020/06/11/analisis/1591883470_004485_1591942609_noticia_normal.jpg`);
const gears = new Juego (6, "Gears 5", 2100, "Xbox Series", `https://www.muycomputer.com/wp-content/uploads/2019/08/Gears-5-1.jpg`);

const juegos = [horizon, halo, hogwarts, uncharted, last, gears];

// Algoritmo que añade productos al main y al modal

const productos = document.getElementById("main");
const tabla = document.getElementById("tablaCarrito");

let carrito = [];

// Función para agregar card dinamicamente

function agregarCard(item) {
    return (
        `
        <div class="card m-5 bg-black text-light border-light" style="width: 25rem;">
            <img src="${item.imagen}" class="card-img-top pt-2" alt="portada">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">Info</p>
            </div>
                <ul class="list-group list-group-flush border-light">
                    <li class="list-group-item bg-black text-light border-light">Precio: $${item.precio}</li>
                    <li class="list-group-item bg-black text-light border-light">Consola: ${item.consola}</li>
                </ul>
            <div class="card-body">
                <button onclick=agregarCarrito(${item.id}) type="button" class="btn btn-light agregar">AGREGAR AL CARRITO</button>
            </div>
        </div>
        `
    )
}

// Función para agregar tabla dinamicamente

function agregarTabla(item) {
    return(
        `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.nombre}</td>
            <td>$${item.precio}</td>
            <td>${item.consola}</td>
            <td>
                <button type="button" class="btn btn-dark btn-sm">QUITAR</button>
            </td>
        </tr>
        `
    )
}

// Función de carga de productos, tanto al main como al modal

let totalCarrito = document.getElementById("total");

const cargarProductos = (datos, nodo, esTabla) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += esTabla ? agregarTabla(el) : agregarCard(el);
    })
    nodo.innerHTML = acumulador;
};

const agregarCarrito = (id) => {
    const seleccion = juegos.find(item => item.id === id);
    const busqueda = carrito.findIndex(el => el.id === id);
    
    if (busqueda === -1) {
        carrito.push(seleccion)
    }
    
    let valorCarrito = carrito.reduce( (accum, elem) => accum + elem.precio, 0);
    totalCarrito.innerText = `Precio total: $${valorCarrito}`;

    cargarProductos(carrito, tabla, true);
}

cargarProductos(juegos, main, false);

// Acción para vaciar carrito desde el modal

function vaciarCarrito() {
    carrito = [];
    tabla.innerHTML = "";
    totalCarrito.innerText = "Precio total: $0";
}

let vaciar = document.querySelector(".vaciar");

vaciar.onclick = () => {
    vaciarCarrito();
} 

// Acción para finalizar compra

let finalizar = document.querySelector(".finalizar");

finalizar.onclick = () => {
    vaciarCarrito();
}
