/*Assigning the variables with values*/
let numSquares = 3;
let colors = [];
let pickedColor;

/*Assigning new variables*/
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#color-display");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let easyButton = document.querySelector(".mode");

/* function when the script runs*/
init();
/* the purpose of this is to display to show the color that the player needs to guess*/
function init() {
	colorDisplay.textContent = pickedColor;
	setupSquares();
	setupMode();
	reset();
}

/* to reset or restart the game.*/
resetButton.addEventListener("click", function() {
	reset();
});

/* setting up the behavior of each square on the page. */
function setupSquares() {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			let clickedColor = this.style.backgroundColor;
			/* to visually indicate a correct guess. */
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again";
				changeColors(pickedColor);
			}
			/* encourage the player to try again. */
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "try again";
			}
		});
	}
}
/* to handle the setup */
function setupMode() {
	/* used to visually indicate which mode is currently selected. */
	for(let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			/* represents buttons corresponding to different game modes. */
			for (let i = 0; i < modeButtons.length; i++) {
				/* When a mode button is clicked, the function inside the event listener is executed. */
				modeButtons[i].classList.remove("selected");
			}
			/* visually highlights the currently selected mode. */
			this.classList.add("selected");
			/* represents the number of squares or elements to be displayed on the page, adjusting the difficulty level. */
			if (this.textContent === "Easy") {
				numSquares = 3;
			}
			/* to reset the game with the new settings. */
			reset();
		});
	}
}


function reset() {
	
	// Generate random colors for the squares
	colors = genRandomColors(numSquares);
	
	// Pick a new color for the player to guess
	pickedColor = chooseColor();
	
	// Update the displayed color to guess
	colorDisplay.textContent = pickedColor;
	
	// Reset background color of h1
	h1.style.backgroundColor = "#2C8E99";
	
	// Change the text content of the resetButton
	resetButton.textContent = "New Colors";
	
	// Clear the message display
	messageDisplay.textContent = "";

	// Loop through each square
	for (let i = 0; i < squares.length; i++) {

		// Check if there is a color at this index
		if(colors[i]) {

			// Show the square and set its color
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {

			// Hide the square (if there is no color at this index)
			squares[i].style.display = "none";
		}
	}
}

function changeColors(color) {
	for(let i = 0; i < squares.length; i++) {
		
		// Set the background color of each square to the specified color
		squares[i].style.backgroundColor = color;

		// Set the background color of h1 to the specified color
		h1.style.backgroundColor = color;
	}
}

// Function to randomly choose a color from the 'colors' array
function chooseColor() {

	// Generate a random floating-point number between 0 (inclusive) and 1 (exclusive)
	let random = Math.floor(Math.random() * colors.length);

	// Retrieve and return the color at the randomly chosen index from the 'colors' array
	return colors[random];
}

// Function to generate an array of 'num' random colors
function genRandomColors(num) {

	// Create an empty array to store the random colors
	let arr = [];

	// Loop 'num' times to generate random colors and add them to the array
	for (let i = 0; i < num; i++) {

		// Use the 'makeColor' function to generate a random color and add it to the array
		arr.push(makeColor());
	}

	// Return the array of random colors
	return arr;
}
// Function to generate a random RGB color
function makeColor() {

	// Generate random values for red, green, and blue components
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	// Return the RGB color string using the generated values
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
