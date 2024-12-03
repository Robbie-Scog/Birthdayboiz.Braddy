// DOM elements
const passwordScreen = document.getElementById("password-screen");
const cardScreen = document.getElementById("card-screen");
const passwordInput = document.getElementById("password-input");
const submitPassword = document.getElementById("submit-password");
const errorMessage = document.getElementById("error-message");

// Set the correct password (without leading zero)
const CORRECT_PASSWORD = 12142000;

// Event Listener for Password Submission
submitPassword.addEventListener("click", () => {
    const enteredPassword = parseInt(passwordInput.value, 10);  // Parse password input as an integer

    if (enteredPassword === CORRECT_PASSWORD) {
        // If password is correct, navigate to bcard.html
        window.location.href = "bcard.html";
    } else {
        // Display error message if the password is incorrect
        errorMessage.textContent = "Try again babe. It´s really simple, your birthday ;)";
    }
});

// Optional: Clear the error message when typing a new password
passwordInput.addEventListener("input", () => {
    errorMessage.textContent = "";  // Clear error message on new input
});

// Show Birthday Card (Button logic in bcard.html)
const showCardButton = document.getElementById("show-card");
if (showCardButton) {
    showCardButton.addEventListener("click", () => {
        // Ensure cardScreen is defined before using
        if (cardScreen) {
            cardScreen.classList.remove("hidden");   // Show card screen
        }
    });
}


