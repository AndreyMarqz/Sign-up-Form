const confirmButton = document.querySelector(".signup-btn");
const passwordField = document.querySelector(".password");
const confirmPasswordField = document.querySelector(".confirm-password");
const errorMessage = document.querySelector(".error-message");

confirmButton.addEventListener('submit', function(event){
    if (passwordField.value !== confirmPasswordField.value) {
        event.preventDefault();
        errorMessage.textContent = "The passwords don't match"
    } else {
        errorMessage.textContent = "";
        alert("Informations sent successfully")
    }
});