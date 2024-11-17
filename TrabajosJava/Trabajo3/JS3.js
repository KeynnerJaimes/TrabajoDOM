document.addEventListener("DOMContentLoaded", function () {
    const formularioBusqueda = document.getElementById("formulario-busqueda");
    const campoBusqueda = document.getElementById("campo-busqueda");
    const resultadoBusqueda = document.getElementById("resultado-busqueda");
    const tablaDiccionario = document.getElementById("tabla-diccionario");

    formularioBusqueda.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const terminoBusqueda = campoBusqueda.value.toLowerCase().trim();
        const filas = tablaDiccionario.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
        let coincidencias = 0;

        for (let fila of filas) {
            const columnas = fila.getElementsByTagName("td");
            let filaVisible = false;

            for (let columna of columnas) {
                if (columna.textContent.toLowerCase().includes(terminoBusqueda)) {
                    filaVisible = true;
                    coincidencias++;
                }
            }

            fila.style.display = filaVisible ? "" : "none";
        }

        resultadoBusqueda.textContent = `Resultados: ${coincidencias} coincidencias`;
    });
});
