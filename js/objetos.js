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