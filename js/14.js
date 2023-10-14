// arrays

const numeros = [10 ,20 ,30, 40, 50];








/* //un arreglo puede contener distintos tipos de datos incluso objetos y arreglos
const arreglo = ["hola", 55, true, "no", null, {nombre: 'David', trabajo: "programador"}, [1, 2, 3]]

console.table(arreglo);


//acceder a los valores de un arreglo


//accedemos a la posicion 4 del array numeros
console.log(numeros[4]);


//conocer la extensión de un arreglo

console.log(meses.length);


//iterar un array
numeros.forEach( function(numero) {
    console.log(numero);
});
 */

//con esta sintaxys debemos conocer la extension del arrary para agregar un valor en una posicion nueva, si ponermos una posicion existente modificara el valor en dicha ubicación
numeros[5] = 60;


//.push permite agregar valores al final del array
numeros.push(80);


//.unshift los agrega al inicio del array
numeros.unshift(-10, -20);


console.table(numeros);




//eliminar valores de un arreglo
const meses = ['enero',  'febrero', 'marzo'];

/* meses.push('abril', 'mayo', 'junio');

/* meses.pop(); //elimina el ultimo elemento
meses.shift(); //elimina el primer elemento 


//splice elimina un valor especifico bassado en su indise 
meses.splice(2, 1);// primer valor index, segundo valor cuantos valores eliminar a partir de ese index

console.table(meses);
 */


// rest operator o espread operator

const nuevoArreglo = [...meses, 'julio'];
console.log(nuevoArreglo);// las buenas practicas actuales nos dicen que no es bueno modificar el arreglo original, con esta sintaxys creamos un nuevo arreglo copiando el original sin modificarlo y le agregamos el valor que queremos
