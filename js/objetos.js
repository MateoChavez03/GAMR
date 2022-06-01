// Información de contacto

const infoContacto = {
    nombre: "GAMR",
    mail: "gamr@gmail.com",
    telefono: "xxxxxxxxxxx",
    logoFacebook: "assets/img/logo_facebook.png",
    logoTwitter: "assets/img/logo_twitter.png",
    logoInstagram: "assets/img/logo_instagram.png", 
}

// Array de usuarios

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Array del carrito

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Instanciando los productos

let juegos = []

const traerJuegos = async () => {

    const response = await fetch('json/api.json');
    const data = await response.json();

    juegos = data;

    cargarProductos(juegos, main, false);
}

traerJuegos();
