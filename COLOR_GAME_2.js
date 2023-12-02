let numSquares = 3;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#color-display");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let easyButton = document.querySelector(".mode");

init();

function init() {
	colorDisplay.textContent = pickedColor;
	setupSquares();
	setupMode();
	reset();
}

resetButton.addEventListener("click", function() {
	reset();
});

function setupSquares() {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			let clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again";
				changeColors(pickedColor);
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "try again";
			}
		});
	}
}

function setupMode() {
	for(let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (let i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numSquares = 3;
			}
			reset();
		});
	}
}

function reset() {
	colors = genRandomColors(numSquares);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#2C8E99";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (let i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

function changeColors(color) {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

function chooseColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genRandomColors(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}

function makeColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}