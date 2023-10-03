// Tipos de datos
// Tipo de dato que se asigna a una variable

// string o cadena de texto



//diferentes maneras de asignar un string a una varibale
const producto = "texto"; // mas comun

//menos comunes
const producto2 = String('texto2'); 
const producto3 = new String ('texto3');



//ver en consola que tipo de datos tenemos
console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);



//metodos y operaciones en los strings
const tweet = 'aprendiendo js con el curso de desarrollo web completo';

const tweet2 = 'hola a todos';

console.log(tweet.length); // nos permite conocer la cantidad de caracteres que tiene el string

console.log(tweet.indexOf('js')); // nos permite encontrar palabras en cadenas de texto dandonos la ubicacion

console.log(tweet.includes('phyton'));//nos permite buscar dentro de una cadena de texto retornando true o false 





