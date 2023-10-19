//funciones

//declaración de una funcion

function sumar () {

    console.log(10 + 10);

}


//se manda a llamar o a ejecutar la funcion
sumar();

//Expresión de una funcion

const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();


//IIFE

(function() {
    console.log('esto es una funcion');
})(); //esta tipo de funcion se manda a llamar ella misma se invoca ella misma no se recomienda para reutilizar son utiles para protejer que no se mezclen con mas funciones


