function obtenerEmpleados() {
    const archivo = './js/empleados.json';

    fetch(archivo)
        .then(resultado => resultado.json())
        .then(datos => {
            const {empleados} = datos;
            console.log(empleados);
        })
}

obtenerEmpleados();