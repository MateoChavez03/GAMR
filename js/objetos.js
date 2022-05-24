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

const horizon = new Juego (1, "Horizon Forbidden West", 2600, "Play Station 5", `https://as01.epimg.net/meristation/imagenes/2021/05/15/noticias/1621083825_707762_1621084771_portada_normal.jpg`);
const halo = new Juego (2, "Halo Infinite", 3000, "Xbox Series", `https://i.blogs.es/c031b9/halo-infinite-portada/450_1000.jpeg`);
const hogwarts = new Juego (3, "Hogwarts Legacy", 2000, "Xbox Series", `https://as01.epimg.net/meristation/imagenes/2021/01/13/noticias/1610559449_696528_1610559646_portada_normal.jpg`);
const uncharted = new Juego (4, "Uncharted 4", 1500, "Play Station 5", `https://areajugones.sport.es/wp-content/uploads/2015/03/Uncharted-42.jpg`);
const last = new Juego (5, "The Last of Us 2", 4000, "Play Station 5", `https://as01.epimg.net/meristation/imagenes/2020/06/11/analisis/1591883470_004485_1591942609_noticia_normal.jpg`);
const gears = new Juego (6, "Gears 5", 2100, "Xbox Series", `https://www.muycomputer.com/wp-content/uploads/2019/08/Gears-5-1.jpg`);

const god = {...last, id: 7, nombre: "God of War", imagen: `https://hardzone.es/app/uploads-hardzone.es/2022/03/God-Of-War-PC-Portada.jpg`};
const unravel = {...gears, id: 8, nombre: "Unravel 2", imagen: `https://i.ytimg.com/vi/9H76s1MaMK4/maxresdefault.jpg`};
const spiderman = {...horizon, id: 9, nombre: "Spider-Man: Miles Morales", imagen: `https://i.ytimg.com/vi/Q3kfF3XNzw8/maxresdefault.jpg`};
const ratchet = {...last, id: 10, nombre: "Ratchet & Clank: Rift Apart", imagen: `https://as01.epimg.net/meristation/imagenes/2021/02/11/header_image/933090091613061458.jpg`};
const state = {...hogwarts, id: 11, nombre: "State of Decay 2", imagen: `https://as01.epimg.net/meristation/imagenes/2018/04/06/noticia/1522988280_498561_1531816355_sumario_normal.jpg`};
const sea = {...halo, id: 12, nombre: "Sea of Thieves", imagen: `https://www.zonammorpg.com/wp-content/uploads/2018/01/3b9907bf-92ef-46e4-9a02-ecbd453252cc.jpg`};


const juegos = [horizon, halo, hogwarts, uncharted, last, gears, god, unravel, spiderman, ratchet, state, sea];

// Información de contacto

const infoContacto = {
    nombre: "GAMR",
    mail: "gamr@gmail.com",
    telefono: "xxxxxxxxxxx",
    logoFacebook: "assets/img/logo_facebook.png",
    logoTwitter: "assets/img/logo_twitter.png",
    logoInstagram: "assets/img/logo_instagram.png", 
}