const producto = {
    nombreProducto : 'monitor 20 pulgadas',
    precio : 300,
    disponible : true,
};



//extraer datos de un objeto forma anterior
/* const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto; */

/* console.log(precioProducto);
console.log(nombreProducto); */


//destructurin de objetos esta nueva manera de extraer datos crea la variable y en la misma linea extrae el valor

const {precio, nombreProducto} = producto;

console.log(precio)
console.log(nombreProducto)