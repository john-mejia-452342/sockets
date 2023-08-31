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


// btnEscritorio.addEventListener('click', () => {
//     // Abre una nueva pestaña y carga el contenido de "escritorio.html"
//     const nuevaPestana = window.open('escritorio.html', '_blank');
// });


const escritorios = new Set(); // Conjunto para almacenar los escritorios utilizados

    document.addEventListener('DOMContentLoaded', () => {
        const inputEscritorio = document.querySelector('#inputNumeroEscritorio');
        const btnGenerarEscritorio = document.getElementById('btn-generar-escritorio');

        btnGenerarEscritorio.addEventListener('click', () => {
            const numeroEscritorio = parseInt(inputEscritorio.value);
    
            if (numeroEscritorio > 0 && !isNaN(numeroEscritorio) && !escritorios.has(numeroEscritorio)) {
                escritorios.add(numeroEscritorio);
    
                // Agregar el número de escritorio como parámetro en la URL de la página "Escritorio"
                window.open(`escritorio.html?escritorio=${numeroEscritorio}`, '_blank');
            } else {
                alert('Número de escritorio inválido o ya utilizado.');
            }
        });
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