//funciones con parametros y argumentos

function sumar (numero1 = 0, numero2 = 0) { //en el cuerpo de la funcion se llaman parametros

    console.log(numero1 + numero2);

}//parametros por default ese =0 quieres decir que cuando no se le pasen argumentos al llamar la funcion tomaraq los parametros pre establecidos en la funcion
sumar(10 ,10);
sumar(15 ,8);
sumar(1 ,5); //en la ejecucion de la funcion se llama argumentos

//con parametros y argumentos las fuciones se pueden reutilizar mucho mas





const sumar2 = function(n1, n2) {
    console.log(n1 + n2);
}
sumar2(5, 10);
