// Algoritmo que añade productos al main y al modal

const productos = document.querySelector("#main");
const tabla = document.querySelector("#tablaCarrito");

// Función para agregar cards dinamicamente

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
            <div class="card-body game${item.id}">
                <button onclick=agregarCarrito(${item.id}) type="button" class="btn btn-light">AGREGAR AL CARRITO</button>
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
                <button type="button" class="btn btn-dark btn-sm" disabled>QUITAR</button>
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

cargarProductos(juegos, main, false);