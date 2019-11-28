var colors = generateColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor ="";
var message ="";
var newGame ="";
var clickedColor = "";
var easyButton="";
var hardButton ="";

 pickedColor = pickColor();

 fillColor();
 var colorDisplay = document.getElementById("rgbGame");
  if(colorDisplay)
	colorDisplay.textContent = pickedColor;

function fillColor(){
	for(var j=0;j<squares.length;j++)
	{
		squares[j].style.display = "block";
		if(colors[j])
		squares[j].style.backgroundColor= colors[j];
		else{
			squares[j].style.display = "none";
		}
		squares[j].addEventListener("click", function(){
		
		clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor)
		{
			message = document.getElementById("displayMessage");
			message.textContent ="Correct";
			changeColor(clickedColor);
			newGame.textContent = "Play Again?";
			
			
			
			document.getElementById("banner").style.backgroundColor = clickedColor;
			
		}
		else{
			
			this.style.backgroundColor= "#232323"
			message = document.getElementById("displayMessage");
			message.textContent ="Try Again";
		}
		
		})
	}
}

newGame = document.getElementById("newButton");
newGame.addEventListener("click", function(){
	//New Colors Generate
	
	this.classList.add("selected");
	newGame.textContent = "New Game";
	message.textContent ="";
	document.getElementById("banner").style.backgroundColor = "steelblue";
	colors = generateColors(6);
	pickedColor = pickColor();
	fillColor();
	colorDisplay.textContent = pickedColor;

});

easyButton = document.getElementById("easyButton");
easyButton.addEventListener("click", function(){
	hardButton.classList.remove("selected");
	this.classList.add("selected");
	
	message.textContent ="";
	document.getElementById("banner").style.backgroundColor = "steelblue";
	colors = generateColors(3);
	pickedColor = pickColor();
	fillColor();
	colorDisplay.textContent = pickedColor;
	
});

hardButton = document.getElementById("hardButton");
hardButton.addEventListener("click", function(){
	this.classList.add("selected");
	message.textContent ="";
	document.getElementById("banner").style.backgroundColor = "steelblue";
	colors = generateColors(6);
	pickedColor = pickColor();
	fillColor();
	colorDisplay.textContent = pickedColor;
});
function changeColor(clickedColor)
{
	
	for(var k=0;k<squares.length;k++)
	{
		squares[k].style.backgroundColor = clickedColor;
	}
}
function generateColors(num)
{
		
	var arr = [];
	
	for(var z=0;z<num;z++)
	{
		arr.push(randomNumber());
	}
	return arr;
}
function randomNumber()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 	"rgb("+ r +", "+ g +", " +b +")";

	
}
function pickColor()
{
	var color = Math.floor(Math.random() * colors.length );
	return colors[color];
}


