let clickCount = 0;
const maxClicks = 10;
const totalRepetitions = 600;  // Número de repeticiones
let repeatCount = 0; // Contador de repeticiones

const disableClose = () => {
    // Prevenir que el usuario cierre la página (haciendo clic en la X de la ventana)
    window.onbeforeunload = function() {
        return "¡Aún no puedes cerrar la página!";
    };
};

// Función para crear el mensaje en una posición aleatoria
const createMessage = () => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    const messageElement = document.createElement("div");
    messageElement.innerHTML = "¡Aún no puedes salir!";
    messageElement.style.position = "absolute";
    messageElement.style.left = `${randomX}px`;
    messageElement.style.top = `${randomY}px`;
    messageElement.style.fontSize = "24px";
    messageElement.style.color = "white";
    messageElement.style.backgroundColor = "red";
    messageElement.style.padding = "10px";
    messageElement.style.borderRadius = "5px";
    document.body.appendChild(messageElement);
};

// Función que muestra el mensaje y las alertas
const showMessage = () => {
    if (clickCount < maxClicks) {
        // Crear el mensaje en una posición aleatoria
        createMessage();

        // Mostrar la alerta
        const userResponse = confirm("Aún no puedes salir. ¿Aceptar para continuar o Cancelar para salir?");
        
        if (userResponse) {
            // Si acepta, repite el mensaje en la misma posición
            clickCount++; // Incrementa el contador
            showMessage(); // Repite el mensaje
        } else {
            // Si cancela, muestra el mensaje en una nueva posición repetidamente
            alert("No, aún no puedes salir de la página.");
            clickCount++; // Incrementa el contador

            // Mostrar el mensaje 600 veces con un intervalo de 1 segundo
            const interval = setInterval(() => {
                createMessage(); // Crear mensaje en una nueva posición aleatoria
                repeatCount++;

                if (repeatCount >= totalRepetitions) {
                    clearInterval(interval); // Detener la repetición después de 600 veces
                }
            }, 1000); // 1000 ms = 1 segundo

        }

        // Actualizar el contador de clics
        document.getElementById('count').textContent = `Intentos restantes: ${maxClicks - clickCount}`;
    } else {
        alert("¡Lo lograste! Ahora puedes salir.");
        window.close(); // Permite cerrar la página
    }
};

// Llamar a la función cuando la página esté completamente cargada
document.addEventListener('DOMContentLoaded', function() {
    disableClose(); // Deshabilitar el botón de cierre de la ventana
    showMessage(); // Muestra el mensaje al cargar la página
});
