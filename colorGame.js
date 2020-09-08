
var numSquares=6;

var colors=generateRandomColors(numSquares);


var squares=document.querySelectorAll(".square");
var pickedcolor= random();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var button=document.querySelector("button");

var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
colorDisplay.textContent=pickedcolor;


easy.addEventListener("click",function(){

	easy.classList.add("selected");
	hard.classList.remove("selected");
	numSquares=3;
	
	colors=generateRandomColors(numSquares);
    pickedcolor= random();

	colorDisplay.textContent=pickedcolor;

	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
			squares[i].style.backgroundColor = colors[i];

		else
			squares[i].style.display="none";
		

	}





});



hard.addEventListener("click",function(){

	easy.classList.remove("selected");
	hard.classList.add("selected");
	numSquares=6;

	colors=generateRandomColors(numSquares);
    pickedcolor= random();

    colorDisplay.textContent=pickedcolor;

	for(var i=0;i<squares.length;i++)
	{
		
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display="block";
		

	}



});







button.addEventListener("click",function(){

	//getting new colors
	colors=generateRandomColors(numSquares);

	//setting new picked color
	 pickedcolor= random();

	//changing th msg display
	colorDisplay.textContent=pickedcolor;

	//changing the buttons message back to new colors
	button.textContent="New Colors";

	messageDisplay.textContent="";

	//changing all the color boxes
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}

	h1.style.backgroundColor="steelblue";


});







for(var i=0;i<squares.length;i++)
{
	//adding the initial colors
	squares[i].style.backgroundColor=colors[i];

	//adding the listeners
	squares[i].addEventListener("click",function(){

		var currentcolor=this.style.backgroundColor;


		if(currentcolor==pickedcolor)
		{
			messageDisplay.textContent="Correct";
			colorchange(currentcolor);
			h1.style.backgroundColor=currentcolor;
			button.textContent="Play Again";
		}
		else
		{
			messageDisplay.textContent="Try Again";
			this.style.backgroundColor="#232323";
	
		}
		// alert("you have clicked a square");


	});

}


function colorchange(color){

	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}

}


function random(){
	var num=Math.floor(Math.random()*colors.length);
	return colors[num];

}

function generateRandomColors(num){

	var arr=[];

	for(var i=0;i<num;i++)
	{
		var color=randomColor();
		arr.push(color);
	}

return arr;


}



function randomColor(){

	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	var value="rgb("+ r + ", "+g+", "+b+")";
	return value;


}

