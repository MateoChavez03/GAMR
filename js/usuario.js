let tituloOffcanvas = document.querySelector(".tituloOffcanvas");
let bodyOffcanvas = document.querySelector(".bodyOffcanvas");

// Acción del boton crear usuario

let crearUsuario = document.querySelector("#crearUsuario");
crearUsuario.onclick = () => {
    tituloOffcanvas.innerText = "CREAR USUARIO";
    bodyOffcanvas.innerHTML= `
    <form>
        <div class="mb-4">
            <label for="exampleInputUsername" class="form-label text-light mb-3">Nombre de Usuario</label>
            <input type="text" class="form-control btn-light nombreUsuario" id="exampleInputUsername">
        </div>
        <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label text-light mb-3">Correo Electrónico</label>
            <input type="email" class="form-control btn-light mailUsuario" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
        </div>
        <div class="mb-4">
            <label for="exampleInputPassword1" class="form-label text-light mb-3">Contraseña</label>
            <input type="password" class="form-control btn-light contraseñaUsuario" id="exampleInputPassword1">
        </div>
        <div class="mb-4 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label text-light" for="exampleCheck1">Recibir novedades</label>
        </div>
        <button type="button" class="btn btn-light" id="finalizarCreacion" onclick=guardarUsuario()>CREAR</button>
    </form>
    `;
}

// Función para guardar usuario en local storage

let usuario = {};

const guardarUsuario = () => {
    let nombreUsuario = document.querySelector(".nombreUsuario").value;
    let mailUsuario = document.querySelector(".mailUsuario").value;
    let contraseñaUsuario = document.querySelector(".contraseñaUsuario").value;
    usuario = {nombre: nombreUsuario, mail: mailUsuario, contraseña: contraseñaUsuario};

    if ((nombreUsuario != ``) && (mailUsuario != ``) && (contraseñaUsuario != ``)) {
        usuarios.push(usuario);
        guardarEnLocal("usuarios", JSON.stringify(usuarios));
        cambiarOffcanvas(usuario);
    } else {
        Swal.fire({
            title: 'Por favor, ingrese la información correspondiente en el formulario',
            icon: 'warning',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2000,
            customClass:{
                title: 'text-dark',
                text: 'text-dark'
            }
        })
    }
}

// Modificación dinámica de offcanvas al crear usuario o iniciar sesión

const cambiarOffcanvas = (user) => {
    let {nombre} = user;
    tituloOffcanvas.innerText = "SESIÓN INICIADA";
    bodyOffcanvas.innerHTML = `
    <div class="text-light">
        <h5> Bienvenido </h5>
        <h6 class="pt-2"> ${nombre} </h6>
        <p class="pt-2"> Esperemos que disfrute nuestra página </p>
    <div/>
    <div class="d-grid gap-2">
        <button class="btn btn-light" id="cerrarSesion" onclick=location.reload() type="button">Cerrar Sesión</button>
    </div>`;
}

// Función de inicio de sesión

const iniciarSesion = () => {
    let nombreUsuario = document.querySelector(".nombreUsuario").value;
    let contraseñaUsuario = document.querySelector(".contraseñaUsuario").value;
    let iniciado = usuarios.find(usuario => (usuario.nombre === nombreUsuario) && (usuario.contraseña === contraseñaUsuario));
    
    if (iniciado != null) {
        cambiarOffcanvas(iniciado); 
    } else {
        Swal.fire({
            title: 'La información ingresada no corresponde a ningún usuario registrado',
            icon: 'warning',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2000,
            customClass:{
                title: 'text-dark',
                text: 'text-dark'
            }
        })
    }
}

// Acción para iniciar sesión

let inicioSesion = document.querySelector("#iniciarSesion");
inicioSesion.onclick = () => {
    iniciarSesion();
}