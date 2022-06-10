let offcanvasContacto = document.querySelector(".offcanvasIzquierdo");

const establecerContacto = () => {
    const {nombre, mail, telefono} = infoContacto
    offcanvasContacto.innerHTML = `
    <div>
        <div class="text-light">
            <h5 class="py-4"> ${nombre} </h5>
        </div>
        <div class="text-light py-4">
            <h5 pb-1> Dirección de correo electrónico: </h5>
            <h5> ${mail} </h5>
        </div>
        <div class="text-light py-4">
            <h5> Teléfono de contacto: </h5>
            <h5> ${telefono} </h5>
        </div>
    </div>
    `
}

establecerContacto();