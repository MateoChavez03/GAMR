// Algoritmo para crear y guardar usuarios utilizando local storage

let usuarios = [];
let usuariosEnLS = JSON.parse(localStorage.getItem("usuarios"));

// Accion para guardar usuario

let crearUsuario = document.querySelector("#crearUsuario");
crearUsuario.onclick = () => {
    guardarUsuario();
    cambiarOffcanvas();
}

// Función para guardar usuario en local storage

function guardarUsuario() {
    let nombreUsuario = document.querySelector(".nombreUsuario").value;
    let mailUsuario = document.querySelector(".mailUsuario").value;
    let contraseñaUsuario = document.querySelector(".contraseñaUsuario").value;
    let usuario = {nombre: nombreUsuario, mail: mailUsuario, contraseña: contraseñaUsuario};
    if (usuariosEnLS != null) {
        usuarios = usuariosEnLS;
    }
    usuarios.push(usuario);
    guardarUsuarioLocal("usuarios", JSON.stringify(usuarios));
}

function guardarUsuarioLocal(clave, valor) {
    localStorage.setItem(clave, valor);
}

// Modificacion dinamica de offcanvas al crear usuario

let tituloOffcanvas = document.querySelector(".tituloOffcanvas");
let bodyOffcanvas = document.querySelector(".bodyOffcanvas");

function cambiarOffcanvas() {
    tituloOffcanvas.innerText = "Sesión Iniciada";
    bodyOffcanvas.innerHTML = `
    <div class="d-grid gap-2">
        <button class="btn btn-light" id="cerrarSesion" onclick=location.reload() type="button">Cerrar Sesión</button>
    </div>`;
    
}