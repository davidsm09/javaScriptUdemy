//como unir dos objetos

const producto = {
    nombreProducto : 'monitor 20 pulgadas',
    precio : 300,
    disponible : true,
};

const medidas = {
    peso: '1kg',
    medida: '1m'
}

// espread operator para unir dos objetos

const nuevoProducto = { ...producto, ...medidas };

