"use strict"

//el use strict sirve para que js se ejecute de manera extricta y nos muestre errores de sintaxis, etc

const producto = {
    nombreProducto : 'monitor 20 pulgadas',
    precio : 300,
    disponible : true,
};

//metodo freeze sirve para congelar el objeto y que no se pueda modificar

/* Object.freeze(producto); */

//metodo seal no permite borrar ni agregar pero si modificar

Object.seal(producto);

producto.precio = 'nuevo precio'; 

/* producto.imagen = 'imagen.jpg'; */

console.log(Object.isFrozen(producto));

console.log(producto)