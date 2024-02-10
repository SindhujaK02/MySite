/*js*/
var button1=document.getElementsByClassName("button1")[0];
button1.onclick=function(){
var randomnumber1=Math.floor(Math.random()*6)+1;
console.log(randomnumber1);
document.getElementById("info").innerHTML="Refresh to restart the game!";
if(randomnumber1==1){
	document.getElementsByClassName("img1")[0].setAttribute("src","images/dice1.png");
}
else if(randomnumber1==2){
	document.getElementsByClassName("img1")[0].setAttribute("src","images/dice2.png");
}
else if(randomnumber1==3){
	document.getElementsByClassName("img1")[0].setAttribute("src","images/dice3.png");
}
else if(randomnumber1==4){
	document.getElementsByClassName("img1")[0].setAttribute("src","images/dice4.png");
}
else if(randomnumber1==5){
	document.getElementsByClassName("img1")[0].setAttribute("src","images/dice5.png");
}
else{
	document.getElementsByClassName("img1")[0].setAttribute("src","images/dice5.png");
}
/*js*/
var randomnumber2=Math.floor(Math.random()*6)+1;
console.log(randomnumber2);
if(randomnumber2==1){
	document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png");
}
else if(randomnumber2==2){
	document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png");
}
else if(randomnumber2==3){
	document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png");
}
else if(randomnumber2==4){
	document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png");
}
else if(randomnumber2==5){
	document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png");
}
else{
	document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png");
}
if(randomnumber1>randomnumber2){
	document.querySelector("h1").innerHTML="Player 1 wins";
	}
else if(randomnumber1<randomnumber2){
	document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
	document.querySelector("h1").innerHTML="Draw!";
}
}