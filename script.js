let clickCount = 0;
const maxClicks = 10;

const disableClose = () => {
    window.onbeforeunload = function() {
        return "¡Aún no puedes cerrar la página!";
    };
};

// Función que muestra el mensaje y las alertas
const showMessage = () => {
    if (clickCount < maxClicks) {
        // Crear el mensaje en una posición aleatoria
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

        // Mostrar la alerta
        const userResponse = confirm("Aún no puedes salir. ¿Aceptar para continuar o Cancelar para salir?");
        
        if (userResponse) {
            // Si acepta, repite el mensaje en la misma posición
            clickCount++; // Incrementa el contador
            showMessage(); // Repite el mensaje
        } else {
            // Si cancela, muestra el mensaje en una nueva posición
            alert("No, aún no puedes salir de la página.");
            clickCount++; // Incrementa el contador
            showMessage(); // Vuelve a mostrar el mensaje en otra ubicación
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
