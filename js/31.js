const boton = document.querySelector("#boton");
boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`EL resultado es ${resultado}`))
});


if(Notification.permission == 'granted') {
    new Notification('esta es una notificacion', {
        icon: 'img/whatsapp (2).png',
        body: 'Icono de Whatsapp',
    })
}