// Async / Await

function descargarNuevosClientes () {
    return new Promise( resolve => {
        console.log('descargando clientes... espere...');

        setTimeout ( () => {
            resolve('Los clientes fueron descargados');
        }, 5000 );
    });
}

function descargarUltimosPedidos () {
    return new Promise( resolve => {
        console.log('descargando Pedidos... espere...');

        setTimeout ( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000 );
    });
}

async function app() {
    try {
        /*   const clientes = await descargarNuevosClientes();
        const pedidos = await descargarUltimosPedidos();
        console.log(clientes);
        console.log(pedidos); */

        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);

        console.log(resultado[0]);
        console.log(resultado[1]);

    } catch (error) {
        console.log(error);
    }
}

app();

console.log('este codigo no se bloquea');