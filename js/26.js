// This npos sirve para acceder a valores de un objeto o arreglo con una funcion dentro del mismo (arreglo o objeto) donde se ejecute la funcion

const reservacion = {
    nombre: 'David',
    apelldio: 'Mesa',
    Total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 = {
    nombre: 'Juan',
    apelldio: 'Mesa',
    Total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();