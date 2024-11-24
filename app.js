document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const repeatPassword = document.getElementById("repeat-password");
    const togglePassword = document.getElementById("toggle-password");

    // Muestra/Oculta contraseña
    togglePassword.addEventListener("click", () => {
        const type = password.type === "password" ? "text" : "password";
        password.type = type;
        togglePassword.textContent = type === "password" ? "👁" : "🙈";
    });

    // Validación 
    form.addEventListener("submit", (e) => {
        let isValid = true;
        clearErrors();

        if (username.value.trim() === "" || username.value.length < 4) {
            showError(username, "El usuario debe tener al menos 4 caracteres.");
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            showError(email, "Introduce un correo válido.");
            isValid = false;
        }

        if (password.value.length < 8) {
            showError(password, "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (password.value !== repeatPassword.value) {
            showError(repeatPassword, "Las contraseñas no coinciden.");
            isValid = false;
        }

        if (isValid) {
           alert('Registro exitoso');
        } else {
            e.preventDefault(); // Impide el envío si hay errores
        }
    });

    // Funciones auxiliares
    function showError(input, message) {
        const error = document.getElementById(`${input.id}-error`);
        error.textContent = message;
    }

    function clearErrors() {
        document.querySelectorAll(".error-message").forEach((msg) => (msg.textContent = ""));
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
