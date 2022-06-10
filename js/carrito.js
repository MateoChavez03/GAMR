let botonModal;

// Funcion para cargar productos al carrito

const agregarCarrito = (id) => {
    const seleccion = juegos.find(item => item.id === id);
    const busqueda = carrito.findIndex(el => el.id === id);
    
    busqueda === -1 && carrito.push(seleccion);
    
    botonModal = document.querySelector(`.game${id}`);
    botonModal.innerHTML = `<button type="button" class="btn btn-light" disabled>EN CARRITO</button>`;

    agregadoAlCarrito(seleccion.nombre);
    calculoTotal();
    guardarEnLocal("carrito", JSON.stringify(carrito));
    cargarProductos(carrito, tabla, true);
}

cargarProductos(carrito, tabla, true);

// Función que realiza una alerta al cargar un producto al carrito

const agregadoAlCarrito = (nombre) => {
    Swal.fire({
        position: 'bottom',
        width: '32rem',
        title: `${nombre} fue agregado correctamente al carrito`,
        showConfirmButton: false,
        timer: 1500,
        showClass: {
            popup: 'animate__animated animate__fadeInUp'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutDown'
          },
        customClass: {
            title: 'm-0',
            title: 'fs-6',
        }
      });
}

// Función que calcula y modifica el valor total del carrito

let totalCarrito = document.querySelector("#total");
let valorCarrito = carrito.reduce( (accum, elem) => accum + elem.precio, 0);

const calculoTotal = () => {
    valorCarrito = carrito.reduce( (accum, elem) => accum + elem.precio, 0);
    totalCarrito.innerText = `Precio total: $${valorCarrito}`;
}

calculoTotal();

// Funcion para quitar un elemento del carrito

const quitarCarrito = (id) => {
    const seleccion = juegos.find(item => item.id === id);
    const busqueda = carrito.findIndex(el => el.id === id);
  
    busqueda !== -1 && carrito.splice(busqueda, 1);

    Swal.fire({
        position: 'bottom',
        width: '32rem',
        title: `${seleccion.nombre} fue quitado correctamente del carrito`,
        showConfirmButton: false,
        timer: 1500,
        showClass: {
            popup: 'animate__animated animate__fadeInUp'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutDown'
          },
        customClass: {
            title: 'm-0',
            title: 'fs-6',
        }
    });

    botonModal = document.querySelector(`.game${id}`);
    botonModal.innerHTML = `<button onclick=agregarCarrito(${id}) type="button" class="btn btn-light">AGREGAR AL CARRITO</button>`;

    guardarEnLocal("carrito", JSON.stringify(carrito));
    cargarProductos(carrito, tabla, true);
    calculoTotal();
}


// Funcion para vaciar carrito desde el modal

const vaciarCarrito = () => {
    carrito = [];
    localStorage.removeItem("carrito");
    tabla.innerHTML = "";
    calculoTotal();
    cargarProductos(juegos, main, false);
}

// Acción para vaciar carrito desde el modal

let vaciar = document.querySelector(".vaciar");
vaciar.onclick = () => {
    if (carrito.length > 0) {
      Swal.fire({
        title: '¿Esta seguro que desea vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#000000',
        cancelButtonColor: '33,37,41',
        cancelButtonText: 'Volver',
        confirmButtonText: 'Confirmar',
        customClass:{
            title: 'text-dark'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: 'top',
            title: 'Vacio!',
            text: 'El carrito fue vaciado con éxito',
            showConfirmButton: false,
            timer: 1500,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
            customClass:{
                title: 'text-dark'
            }
          });
          vaciarCarrito();
        }
      })
    } else {
      Swal.fire({
        title: 'El carrito ya se encuentra vacio',
        icon: 'warning',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000,
        customClass:{
            title: 'text-dark'
        }
      })
    }
} 

// Acción para finalizar compra desde el modal

let finalizar = document.querySelector(".finalizar");
finalizar.onclick = () => {
  if (carrito.length > 0) {
    Swal.fire({
      title: '¿Esta seguro que desea finalizar la compra?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#000000',
      cancelButtonColor: '33,37,41',
      cancelButtonText: 'Volver',
      confirmButtonText: 'Finalizar',
      customClass:{
          title: 'text-dark'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Gracias!',
          text: 'La compra ha finalizado con éxito',
          showConfirmButton: false,
          timer: 3500,
          customClass:{
              title: 'text-dark'
          }
        });
        vaciarCarrito();
      }
    })
  } else {
    Swal.fire({
      title: 'El carrito se encuentra vacio',
      text: 'No es posible continuar con la compra, agregue algún juego al carrito',
      icon: 'warning',
      showCancelButton: false,
      showConfirmButton: false,
      timer: 3000,
      customClass:{
          title: 'text-dark',
          text: 'text-dark'
      }
    })
  }
}

// Funcion para comprobar el contenido del carrito

const comprobarCarrito = () => {

  if (carrito.length > 0) {
    Swal.fire({
      title: 'Comprobando contenido del carrito',
      icon: 'info',
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
    setTimeout(() => {
      for (const juego of carrito) {
        botonModal = document.querySelector(`.game${juego.id}`);
        botonModal != null && (botonModal.innerHTML = `<button type="button" class="btn btn-light" disabled>EN CARRITO</button>`);
      }
    }, 2000);
  }
}

comprobarCarrito();