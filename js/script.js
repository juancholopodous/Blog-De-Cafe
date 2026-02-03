//Eventos de los Inputs y Textarea
const datos = {
    nombre1: '',
    email1: '',
    mensaje1: ''
}

const nombreInput = document.querySelector('#nombre1');
const emailInput = document.querySelector('#email1');
const mensajeInput = document.querySelector('#mensaje1');
const enviarFormulario = document.querySelector('.formulario');

nombreInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
mensajeInput.addEventListener('input', leerTexto);

// El Evento de Submit; 'submit' define el tipo de escucha para formularios
enviarFormulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario
    const { nombre1, email1, mensaje1 } = datos;

    if(nombre1 === '' || email1 === '' || mensaje1 === '') {
        mostrarAlerta('Todos los datos deben estar completos.', true);
        return; // Corta y previene la ejecución del código
    } 
    mostrarAlerta('El envío se a realizado correctamente');
})

function mostrarAlerta(mensaje, error = null) {
    const alerta =document.createElement('P');
    alerta.textContent = mensaje;
    
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('enviado');
    }

    enviarFormulario.appendChild(alerta);
    // Eliminar mensaje después de 3 segundos.
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function leerTexto(evento) {
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}
