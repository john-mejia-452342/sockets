const socket = io();

const btnPantalla = document.querySelector('#btn-pantalla-principal')
const btnTicket = document.querySelector('#btn-generar-ticket')
const btnEscritorio = document.querySelector('#btn-generar-escritorio')
const btnSiguienteTicket = document.querySelector('#btn-siguiente-ticket')


socket.on('connect', () => {
    console.log("En linea");
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

socket.on('saluden', (data) => {
    console.log(data);

});


btnTicket.addEventListener('click', () => {
    // Abre una nueva pestaña y carga el contenido de "escritorio.html"
    const nuevaPestana = window.open('ticket.html', '_blank');
});


btnPantalla.addEventListener('click', () => {
    // Abre una nueva pestaña y carga el contenido de "escritorio.html"
    const nuevaPestana = window.open('pantalla.html', '_blank');
});


btnEscritorio.addEventListener('click', () => {
    // Abre una nueva pestaña y carga el contenido de "escritorio.html"
    const nuevaPestana = window.open('escritorio.html', '_blank');
});

btnEnviar.addEventListener('click', () => {
    const mensaje = {
        nombre: txtNombre.value,
    }

    socket.emit('saludar', mensaje,(msg) => {

        console.log(msg);
    });
});

btnDia.addEventListener('click', () => {
    

    socket.emit('devuelvaFecha',(msg) => {

        console.log(msg);
    });
});

function upload(files) {

}