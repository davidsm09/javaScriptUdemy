//Promesa

const usuarioAutenticado = new Promise ( (resolve, reject) => {
    const auth = true;
    
    if(auth) {
        resolve('usuario autenticado'); //La promesa se cumple
    }else {
        reject('no se pudo iniciar sesion'); // la Promesa no se cumple
    }
});

usuarioAutenticado
    .then( () => console.log(resultado))  //.then sirve para imprimir en pantalla el resultado de resolve de la promesa

    .catch( () => console.log(error))  //.catch para ver en pantalla el mensaje de error




//Existen 3 estados en las promesas
//PENDING: no se ha cumplido pero tampoco se ha rechazado
//FULLFILED: La promesa ya se cumplio
//REJECTED: La promesa se rechazo