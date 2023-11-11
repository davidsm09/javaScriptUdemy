//Arrow Funtion


//Sintaxis de arrow funtion

const sumar2 = (n1, n2) => console.log(n1 + n2);


sumar2(5 ,10);


const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`)


aprendiendo('javaScript')

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


const resultado2 = carrito.some(produto =>produto.nombre === 'tablet');
console.log(resultado2);

const resultado3 = carrito.reduce((total, produto) => total + produto.precio , 0);

console.log(resultado3);


//.filter nos permite filtrar de muchas maneras los arrays

const resultado4 = carrito.filter(produto => produto.precio > 400 , 0);

console.log(resultado4);