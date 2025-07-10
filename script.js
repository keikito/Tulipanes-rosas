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
        // Crear el mensaje en el centro de la pantalla
        const messageElement = document.createElement("div");
        messageElement.innerHTML = "¡Aún no puedes salir!";
        messageElement.style.position = "absolute";
        messageElement.style.left = "50%";
        messageElement.style.top = "50%";
        messageElement.style.transform = "translate(-50%, -50%)";
        messageElement.style.fontSize = "24px";
        messageElement.style.color = "white";
        messageElement.style.backgroundColor = "red";
        messageElement.style.padding = "10px";
        messageElement.style.borderRadius = "5px";
        document.body.appendChild(messageElement);

        // Mostrar una alerta
        alert("Aún no puedes salir. ¿Aceptar para continuar o Cancelar para salir?");
        
        // Si el usuario acepta, repite el proceso
        if (confirm("¿Aceptar para continuar o Cancelar para salir?")) {
            // Si acepta, repetimos el mensaje
            clickCount++; // Incrementamos el contador
            showMessage(); // Repite el mensaje
        } else {
            // Si cancela, mostramos otro mensaje de alerta
            alert("No, aún no puedes salir de la página.");
            clickCount++; // Incrementa el contador
        }

        // Actualiza el contador de intentos
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
