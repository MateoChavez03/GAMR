const productos = document.querySelector("#main");
const tabla = document.querySelector("#tablaCarrito");

// Función para agregar cards dinamicamente

const agregarCard = (item) => {
    return (
        `
        <div class="card m-5 bg-black text-light border-light" style="width: 25rem;">
            <img src="${item.imagen}" class="card-img-top pt-2" alt="portada">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
            </div>
                <ul class="list-group list-group-flush border-light">
                    <li class="list-group-item bg-black text-light border-light">Precio: $${item.precio}</li>
                    <li class="list-group-item bg-black text-light border-light">Consola: ${item.consola}</li>
                </ul>
            <div class="card-body game${item.id}">
                <button onclick=agregarCarrito(${item.id}) type="button" class="btn btn-light">AGREGAR AL CARRITO</button>
            </div>
        </div>
        `
    )
}

// Función para agregar tabla dinamicamente

const agregarTabla = (item) => {
    return(
        `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.nombre}</td>
            <td>$${item.precio}</td>
            <td>${item.consola}</td>
            <td>
                <button onclick=quitarCarrito(${item.id}) type="button" class="btn btn-dark btn-sm enCarrito${item.id}">QUITAR</button>
            </td>
        </tr>
        `
    )
}

// Función de carga de productos, tanto al main como al modal

const cargarProductos = (datos, nodo, esTabla) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += esTabla ? agregarTabla(el) : agregarCard(el);
    })
    nodo.innerHTML = acumulador;
};

// Funcion para guardar objetos en local storage

const guardarEnLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
}

// Función para mostrar juegos de Play Station 5

const filtroPorConsola = (consola) => {
    let juegosFiltrados = juegos.filter(juego => juego.consola === consola);
    cargarProductos(juegosFiltrados, main, false);
    comprobarCarrito();
}


// Acción para realizar filtro de juegos Play Station

let ps5 = document.querySelector(".ps5");
ps5.onclick = () => {
    filtroPorConsola("Play Station 5");
}

// Acción para realizar filtro de juegos Xbox

let xboxSeries = document.querySelector(".xboxSeries");
xboxSeries.onclick = () => {
    filtroPorConsola("Xbox Series");
}

// Acción para mostrar todos los juegos

let titulo = document.querySelector(".titulo");
titulo.onclick = () => {
    cargarProductos(juegos, main, false);
    comprobarCarrito();
}