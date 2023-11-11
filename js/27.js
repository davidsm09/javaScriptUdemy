//POO (programacion orientada a objetos)


//Objeto literal

const nombre = {
    nombre: 'Tablet',
    precio: 500,
}

//Objeto construcctor

function Producto(nombre, precio, disponible, color) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
    this.color = color;
}

//Prototype Crea funciones que solo se utilizan en un objeto en especifico

Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: ${this.precio} disponibilidad ${this.disponible} en color ${this.color}`;
}


const producto2 = new Producto('Monitor 49"', 1500, false, 'negro');
const producto3 = new Producto('Lattop', 2800, true, 'azul');
const producto4 = new Producto('Movil', 800, true, 'blanco');
const producto5 = new Producto('Tv 65"', 5400, false, 'rojo');

console.log(producto2.formatearProducto());
console.log(producto3);
console.log(producto4.formatearProducto());
console.log(producto5);