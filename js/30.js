//Promesa

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;
    
    if(auth) {
        resolve('usuario autenticado'); //La promesa se cumple
    }else {
        reject('no se pudo iniciar sesion'); // la Promesa no se cumple
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))  
    .catch( error => console.log(error))   



//Existen 3 estados en las promesas
//PENDING: no se ha cumplido pero tampoco se ha rechazado
//FULLFILED: La promesa ya se cumplio
//REJECTED: La promesa se rechazo