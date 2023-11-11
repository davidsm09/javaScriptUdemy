const carrito = [
    { nombre: 'monitor', precio: 500},
    { nombre: 'cel', precio: 300},
    { nombre: 'audifonos', precio: 450},
    { nombre: 'mouse', precio: 200},
    { nombre: 'teclado', precio: 250},
    { nombre: 'altavoz', precio: 700},
    { nombre: 'tablet', precio: 1000},
    { nombre: 'lampara', precio: 150},
    { nombre: 'vaso', precio: 80},
]


// foreach son iteradores exclusivos de arreglos ellos por si solos se ejecutan una vez por cada elemento del arreglo


//foreach

carrito.forEach( producto => console.log(producto));
//sirve para cuando solamente queremos mostrar en pantalla o en consola 


//Map

carrito.map( producto => console.log(producto.nombre));

//crea otro arreglo con las especificaciones que le pedimos