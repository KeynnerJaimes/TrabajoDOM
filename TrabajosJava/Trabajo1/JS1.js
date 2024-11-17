document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-registro");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const contrasena = document.getElementById("contrasena").value.trim();

        const errorNombre = document.getElementById("errorNombre");
        const errorCorreo = document.getElementById("errorCorreo");
        const errorContrasena = document.getElementById("errorContrasena");


        errorNombre.textContent = "";
        errorCorreo.textContent = "";
        errorContrasena.textContent = "";

        let valido = true;


        if (nombre === "") {
            errorNombre.textContent = "El campo 'Nombre' no puede estar vacío.";
            valido = false;
        }


        if (correo === "") {
            errorCorreo.textContent = "El campo 'Correo Electrónico' no puede estar vacío.";
            valido = false;
        }


        if (contrasena === "") {
            errorContrasena.textContent = "El campo 'Contraseña' no puede estar vacío.";
            valido = false;
        } else if (contrasena.length < 6) {
            errorContrasena.textContent = "La contraseña es demasiado débil. Debe tener al menos 6 caracteres.";
            valido = false;
        }


        if (valido) {
            console.log("Registro Exitoso:");
            console.log("Nombre:", nombre);
            console.log("Correo Electrónico:", correo);
            console.log("Contraseña:", contrasena);
            alert("Registro exitoso!");
            formulario.reset();
        }
    });
});

