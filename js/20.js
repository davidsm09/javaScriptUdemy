//metodos de propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`reproduciendo Cancion con el ID: ${id}`)
    },

    pausar: function() {
        console.log('En Pausa...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist: ${nombre}`)
    },


}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion: ${id}`)
}


reproductor.reproducir(3854);
reproductor.pausar();
reproductor.borrarCancion(654);
reproductor.crearPlaylist('New Music');
reproductor.reproducirPlaylist('New Music');
