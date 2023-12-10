let numSquares = 3;
let colors = []; //array to store generated colors
let pickedColor; // color that the player needs to guess

let squares = document.querySelectorAll(".square"); //array of square elements 
let colorDisplay = document.querySelector("#color-display"); // Display for the target color
let messageDisplay = document.querySelector("#message"); // Display for game messages
let h1 = document.querySelector("h1"); // Header element
let resetButton = document.querySelector("#reset"); // Reset button element

init(); //Initialization function

function init() {
	colorDisplay.textContent = pickedColor; // Set the initial display for the target color
	//Set up the initial colors for squares using the 'colors' array
	setupSquares(); // Set up the squares and their event listeners
	reset(); // Reset the game
}

//Event listener for the reset button
resetButton.addEventListener("click", function() {
	reset();
});

// Function to set up the squares and their click event listeners
function setupSquares() {
	for (let i = 0; i < squares.length; i++) {
		// Set initial colors for the squares using the 'colors' array
		squares[i].style.backgroundColor = colors[i]; // Set initial colors for the squares
		squares[i].addEventListener("click", function() {
			let clickedColor = this.style.backgroundColor; // Get the color of the clicked square
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!"; // Display correct message	
				resetButton.textContent = "Play Again"; // Update button text
				changeColors(pickedColor); // Change colors of all squares and header
			}
			else {
				this.style.backgroundColor = "#232323"; // Change background color for incorrect guess
				messageDisplay.textContent = "try again"; // Display try again message
			}
		});
	}
}

// Function to reset the game
function reset() {
	// Generate new random colors and assign them to the 'colors' array
	colors = genRandomColors(numSquares); // Generate new random colors
	pickedColor = chooseColor(); // Choose a color for the player to guess
	colorDisplay.textContent = pickedColor; // Update the displayed target color
	h1.style.backgroundColor = "#2C8E99"; // Reset header background color
	resetButton.textContent = "New Colors"; // Reset button text
	messageDisplay.textContent = ""; // Clear game message
	for (let i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block"; // Show squares with colors
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none"; // Hide squares with no color
		}
	}
}

// Function to change the colors of the squares and heade
function changeColors(color) {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color; // Change background color for all squares
		h1.style.backgroundColor = color; // Change header background color
	}
}

// Function to choose a random color from the 'colors' array as the correct color
function chooseColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// Function to generate an array of random colors for the squares
function genRandomColors(num) {
	// Temporary array ('arr') to store colors during generation
	let arr = [];
	// Loop to generate random colors and push them into 'arr'
	for (let i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	 // Return 'arr', which becomes the elements of the 'colors' array
	return arr;
}

// Function to generate a random RGB color
function makeColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}