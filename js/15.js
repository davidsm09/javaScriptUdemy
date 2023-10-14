
//array Methods


const meses = ['enero',  'febrero', 'marzo', 'mayo', 'junio'];

const carrito = [
    { nombre: 'minitor', precio: 500},
    { nombre: 'cel', precio: 300},
    { nombre: 'audifonos', precio: 450},
    { nombre: 'mouse', precio: 200},
    { nombre: 'teclado', precio: 250},
    { nombre: 'altavoz', precio: 700},
    { nombre: 'tablet', precio: 1000},
    { nombre: 'lampara', precio: 150},
    { nombre: 'vaso', precio: 80},
]

//forEach

meses.forEach(mes => { //forEach itera por acada uno de los elementos
    if(mes == 'mayo') { //si encuetra el elemento 
        console.log('mayo si existe'); //ejecutamos esto
    }
});

//includes comprueba si el elemento existe

const resultado = meses.includes('marzo');
console.log(resultado);

//some ideal para arreglo de objetos

const resultado2 = carrito.some(function(produto) {
    return produto.nombre === 'tablet';
});
console.log(resultado2);

const resultado3 = carrito.reduce(function(total, produto) {
    return total + produto.precio 
}, 0);

console.log(resultado3);


//.filter nos permite filtrar de muchas maneras los arrays

const resultado4 = carrito.filter(function(produto) {
    return produto.precio > 400 ; 
}, 0);

console.log(resultado4);


