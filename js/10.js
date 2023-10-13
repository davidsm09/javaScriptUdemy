// Objetos 

const nombreProducto = 'monitor 20 pulgadas';
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto : 'monitor 20 pulgadas',
    precio : 300,
    disponible : true,
};



/* console.log(producto.precio); //acceder a valores especificos del objeto

console.log(producto["precio"]); //otra sintaxis para acceder a valores especificos en un objeto */


//modificar un objeto agregar valores

producto.imagen = 'imagen.jpg';

//eliminar valores io propiedades se utiliza la palabra reservada delete

delete producto.disponible;

console.log(producto);

