// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get input element and message element from HTML
const guessInput = document.getElementById("guess");
const message = document.getElementById("message");

// Function to check the guess
function checkGuess() {
	// Get the user's guess
	const guess = Number(guessInput.value);

	// Check if the guess is valid
	if (isNaN(guess) || guess < 1 || guess > 100) {
		message.textContent = "Please enter a valid number between 1 and 100.";
	} else {
		// Check if the guess is correct
		if (guess === randomNumber) {
			message.textContent = "Congratulations! You guessed the correct number!";
		} else {
			// Give a hint to the user
			const hint = guess > randomNumber ? "too high" : "too low";
			message.textContent = `Sorry, your guess is ${hint}. Try again.`;
		}
	}

	// Clear the input field
	guessInput.value = "";
}

// Listen for Enter key press and call checkGuess function
guessInput.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		checkGuess();
	}
});
