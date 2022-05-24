let offcanvasContacto = document.querySelector(".offcanvasIzquierdo");

function establecerContacto() {
    const {nombre, mail, telefono, logoFacebook, logoTwitter, logoInstagram} = infoContacto
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
    <div>    
        <div class="py-4 align-bottom">
            <img class="px-2" src="${logoTwitter}" alt="">
            <img class="px-2" src="${logoFacebook}" alt="">
            <img class="px-2" src="${logoInstagram}" alt="">   
        </div>
    </div>
    `
}

establecerContacto();