//Switch Se utiliza cuando son multiples condicionales

const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
    case 'cheque':
            console.log('pagaste con cheque');
        break;
    case 'efectivo':
    console.log('pagaste en efectivo');
        break;
    case 'bitcoin':
        console.log('pagaste con bitcoin');
        break;
    case 'la mama de una amiga':
        console.log('pagaste con la plata de la mama de una amiga');
        break;
    default:
        console.log('aun no has pagado');
        break;
}

