var numSquares = 6;
var colors = generateRandomColors(numSquares); 
var squares = document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		} else { squares[i].style.display = "none";}
	}

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} 
	}
});

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	this.textContent="New Colors";
	for(var i=0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background="#2d7eff";
	if (resetButton.textContent="Play Again")
		{resetButton.textContent="New Colors"}

});

colorDisplay.textContent=pickedColor;

for(var i=0; i<squares.length; i++){
	//adding colors to squares
	squares[i].style.background = colors[i]; 

	//adding clickListeners to squares
	squares[i].addEventListener("click", function(){
		//grabbing clicked color
		var clickedColor = this.style.background;
		//checking
		if (clickedColor === pickedColor){
			messageDisplay.textContent="Correct!!!";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again?";
		}
		else {
			this.style.background=("black")
			messageDisplay.textContent="Try Again";
		}
	});
}



function changeColors(color){
	//loop through all squares and match the colors
	for (var i=0; i < squares.length; i++){
		squares[i].style.background = color;

	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num){
	//add array
	var arr = []
	//add num random colors to array
	for (var i=0; i < num; i++){
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	var r =Math.floor(Math.random()*256 )
	var g =Math.floor(Math.random()*256 )
	var b =Math.floor(Math.random()*256 )
	return "rgb("+ r +", "+ g +", "+ b +")";
}