// Accion para guardar usuario

let crearUsuario = document.querySelector("#crearUsuario");
crearUsuario.onclick = () => {
    guardarUsuario();
    cambiarOffcanvas();
}

// Función para guardar usuario en local storage

let usuario = {};

const guardarUsuario = () => {
    let nombreUsuario = document.querySelector(".nombreUsuario").value;
    let mailUsuario = document.querySelector(".mailUsuario").value;
    let contraseñaUsuario = document.querySelector(".contraseñaUsuario").value;
    usuario = {nombre: nombreUsuario, mail: mailUsuario, contraseña: contraseñaUsuario};

    usuarios.push(usuario);
    guardarEnLocal("usuarios", JSON.stringify(usuarios));
}

// Modificacion dinamica de offcanvas al crear usuario

let tituloOffcanvas = document.querySelector(".tituloOffcanvas");
let bodyOffcanvas = document.querySelector(".bodyOffcanvas");

const cambiarOffcanvas = () => {
    const {nombre} = usuario;
    tituloOffcanvas.innerText = "Sesión Iniciada";
    bodyOffcanvas.innerHTML = `
    <div class="text-light">
        <h5> Bienvenido </h5>
        <h6 class="pt-2"> ${nombre} </h6>
        <p class="pt-2"> Esperamos que disfrute nuestra página </p>
    <div/>
    <div class="d-grid gap-2">
        <button class="btn btn-light" id="cerrarSesion" onclick=location.reload() type="button">Cerrar Sesión</button>
    </div>`;
    
}