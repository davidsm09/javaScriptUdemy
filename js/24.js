//Iteradores

//For 

/* for(let i = 0; i < 10; i++) { //La primera parte de la condicion es inicializar el index en 0 la segunda parte es la condicion y la tercera una vez que la condicion se cumpla el index se incrementa.
    console.log(i);
} */

/* for(let i = 1; i <= 100; i++) { 
    if(i % 2 === 0){
        console.log(`El numero ${i} es PAR`);
    }else{
        console.log(`el Numero ${i} es IMPAR`);
    }
} */

/* const carrito = [
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

for(let i = 0; carrito.length; i++) {
    console.log(carrito[i].nombre );
} */


//While  revisa que la condicion se cumpla para poder ejecutarse

/* let i = 0; //Indice

while(i <= 100){
    if(i % 2 === 0) {
        console.log(`El numero ${i} es Par`);
    }else {
        console.log(`El numero ${i} es Impar`); //Condicion
    }

    i++; //Incremeto
}
 */

// Do while  se ejecuta al menos 1 vez y despues hace la validacion aunque la condicion no se cumpla

let i = 0;

do {
    if(i % 2 === 0){
        console.log(`el numero ${i} es par`)
    }else{
        console.log(`el numero ${i} es impar`)
    }

    i++;


}while(i <= 100);

