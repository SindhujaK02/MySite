/*detecting mouse clicks*/
var numOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numOfDrums;i++)
{
	document.querySelectorAll(".drum")[i].addEventListener("click",function (){			//anonymous fn is used here
		
		
		var expression=this.innerHTML;
		makesound(expression);													
		addAnimation(expression);																	}
														  );
}

/*detecting keyboard press*/
document.addEventListener("keypress",keyfunc);  //keyfunc called once keys pressed
function keyfunc(event){						//named fn is used here
	makesound(event.key);
	addAnimation(event.key);
}

/*func to make sound in both cases*/            
function makesound(letter){
switch(letter){
			case "w":
				var audio = new Audio("sounds/tom-4.mp3");
				audio.play();
				break;
			case 'a':
				var audio = new Audio("sounds/tom-3.mp3");	
				audio.play();
				break;
			case 's':
				var audio = new Audio("sounds/tom-2.mp3");
				audio.play();
				break;
			case 'd':
				var audio = new Audio("sounds/tom-1.mp3");
				audio.play();
				break;
			case 'j':
				var audio = new Audio("sounds/snare.mp3");
				audio.play();
				break;
			case 'k':
				var audio = new Audio("sounds/kick-bass.mp3");
				audio.play();
				break;
			case 'l':
				var audio = new Audio("sounds/crash.mp3");
				audio.play();
				break;
			default:
				console.log(expression);
			
					}
}

/*to make animation effect*/
function addAnimation(letter){
	document.querySelector("."+letter).classList.add("pressed");		//adding a class
	
	var delayInMilliseconds = 250; // 0.25 second

	setTimeout(function() {
		document.querySelector("."+letter).classList.remove("pressed");     //removing a class after a delay of 0.25 sec
			}, delayInMilliseconds);
	
						}
