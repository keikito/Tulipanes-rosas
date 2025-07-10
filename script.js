let clickCount = 0;
const maxClicks = 10;

const messageElement = document.getElementById('message');
const countElement = document.getElementById('count');

// Función para manejar el clic en el mensaje
messageElement.addEventListener('click', function() {
    clickCount++;

    if (clickCount < maxClicks) {
        countElement.textContent = `Intentos restantes: ${maxClicks - clickCount}`;
    } else {
        messageElement.textContent = "¡Lo has logrado! La página se cerrará ahora.";
        setTimeout(() => {
            window.close(); // Cerrar la ventana después de alcanzar el intento 10
        }, 1000);
    }
});
