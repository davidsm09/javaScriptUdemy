//clases

class Producto {
    constructor(nombre, precio, disponible, color){
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
        this.color = color;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: ${this.precio} disponibilidad ${this.disponible} en color ${this.color}`;
    }

    colorDisponible () {
        return `El Producto ${this.nombre} esta disponibile en color ${this.color}`;
    }
}

const producto2 = new Producto('Monitor 49"', 1500, false, 'negro');
const producto3 = new Producto('Lattop', 2800, true, 'azul');
const producto4 = new Producto('Movil', 800, true, 'blanco');
const producto5 = new Producto('Tv 65"', 5400, false, 'rojo'); 


//Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto() } y su isbn es ${this.isbn}`;
    }
}

const libro = new Libro('Java Script', 800, '354680468468406500087');
console.log(libro.formatearProducto());


/* console.log(producto2.formatearProducto());
console.log(producto3.colorDisponible());
console.log(producto4.formatearProducto());
console.log(producto5.colorDisponible()); */