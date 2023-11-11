//Extruccturas de control

const puntaje = 1000; // "=" asignacion de variable

if(puntaje == 1000) { //"==" Comparacion que sea el mismo valor
    console.log('true');
} else{
    console.log('false');
}

//"===" compara el valor y tipo de dato

const efectivo = 1000;
const carrito = 800;

if( efectivo > carrito) {
    console.log('Transaccion Aprobada');
}else{
    console.log('Fondos Insuficientes');
}


const rol = 'administrador';

if(rol === 'administrador') {
    console.log('Acceso a todo el sistema');
}else if(rol === editor) {
    console.log('acceso solo al area de diseño');
}else {
    console.log('No tienes Acceso');
}
