let clickCount = 0;
const maxClicks = 10;

const disableClose = () => {
    window.onbeforeunload = function() {
        return "¡Aún no puedes cerrar la página!";
    };
};

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

        // Crear la alerta con confirmación
        const userResponse = confirm("Aún no puedes salir. ¿Aceptar para repetir o Cancelar para salir?");
        if (userResponse) {
            // Si acepta, se repite el mensaje en otro lugar
            showMessage();
        } else {
            // Si cancela, muestra el mensaje de alerta
            alert("No, aún no puedes salir de la página.");
            clickCount++; // Incrementa el contador de clics
        }

        // Actualizar el contador de clics
        document.getElementById('count').textContent = `Intentos restantes: ${maxClicks - clickCount}`;
    } else {
        alert("¡Lo lograste! Ahora puedes salir.");
        window.close();
    }
};

// Llamar a la función cuando la página esté completamente cargada
document.addEventListener('DOMContentLoaded', function() {
    disableClose();
    showMessage();
});
