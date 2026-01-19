document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");
    const submitButton = document.getElementById("submitButton");
    
    // Validaciones en tiempo real
    document.getElementById("nombre").addEventListener("input", validateName);
    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("contraseña").addEventListener("input", validatePassword);
    document.getElementById("confirmarContraseña").addEventListener("input", validateConfirmPassword);
    document.getElementById("edad").addEventListener("input", validateAge);

    function validateName() {
        const name = document.getElementById("nombre");
        const error = document.getElementById("nombreError");
        if (name.value.length < 3) {
            name.classList.add("invalid");
            error.textContent = "El nombre debe tener al menos 3 caracteres.";
        } else {
            name.classList.remove("invalid");
            name.classList.add("valid");
            error.textContent = "";
        }
        checkFormValidity();
    }

    function validateEmail() {
        const email = document.getElementById("email");
        const error = document.getElementById("emailError");
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!regex.test(email.value)) {
            email.classList.add("invalid");
            error.textContent = "Por favor, ingrese un correo electrónico válido.";
        } else {
            email.classList.remove("invalid");
            email.classList.add("valid");
            error.textContent = "";
        }
        checkFormValidity();
    }

    function validatePassword() {
        const password = document.getElementById("contraseña");
        const error = document.getElementById("contraseñaError");
        const regex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!regex.test(password.value)) {
            password.classList.add("invalid");
            error.textContent = "La contraseña debe tener al menos 8 caracteres, con un número y un carácter especial.";
        } else {
            password.classList.remove("invalid");
            password.classList.add("valid");
            error.textContent = "";
        }
        checkFormValidity();
    }

    function validateConfirmPassword() {
        const password = document.getElementById("contraseña");
        const confirmPassword = document.getElementById("confirmarContraseña");
        const error = document.getElementById("confirmarContraseñaError");
        if (confirmPassword.value !== password.value) {
            confirmPassword.classList.add("invalid");
            error.textContent = "Las contraseñas no coinciden.";
        } else {
            confirmPassword.classList.remove("invalid");
            confirmPassword.classList.add("valid");
            error.textContent = "";
        }
        checkFormValidity();
    }

    function validateAge() {
        const age = document.getElementById("edad");
        const error = document.getElementById("edadError");
        if (age.value < 18) {
            age.classList.add("invalid");
            error.textContent = "Debes ser mayor de 18 años.";
        } else {
            age.classList.remove("invalid");
            age.classList.add("valid");
            error.textContent = "";
        }
        checkFormValidity();
    }

    function checkFormValidity() {
        if (
            document.querySelectorAll(".valid").length === 5 &&
            document.querySelectorAll(".invalid").length === 0
        ) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Formulario enviado con éxito.");
    });
});
