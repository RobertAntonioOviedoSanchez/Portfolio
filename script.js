// FUNCTION QUE MUESTRA EL MENU RESPONSIVE
const responsiveMenu = () => {
    const nav = document.getElementById("nav")

    if (nav.className === "") {
        nav.className = "responsive"
    } else {
        nav.className = ""
    }
}

// FUNCTION PARA DAR COLOR A LA OPCION SELECCIONADA EN EL NAV
const seleccionar = (link) => {
    let opciones = document.querySelectorAll("#links a")

    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";

    link.className = "seleccionado"

    //desaparecer el nav responsive cuando se da click en una opcion
    const nav = document.getElementById("#nav")
    nav.className = ""
}


// FUNCTION PARA VALIDAR AEL FORMULARIO
const validate = () => {
    let form = document.querySelector("form")

    if (form.nombre.value == 0) {
        form.nombre.value = ""
        form.nombre.focus()
        return false
    }

    if (form.email.value == 0) {
        form.email.value = ""
        form.email.focus()
        return false
    }

    if (form.mensaje.value == 0) {
        form.mensaje.value = ""
        form.mensaje.focus()
        return false
    }

    form.submit()
}