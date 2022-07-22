var interval = 2000;
var score = 0;
var timer;
var antImg;

window.onload = function start() {
	antImg = document.getElementById("ant");
	antImg .addEventListener("click", checkTap, false);
	antImg .addEventListener("ontouchstart", checkTap, false);
  	update();
}

function update() {
  document.getElementById('scoreLabel').innerHTML = score;
  timer = window.setInterval(moveAnt, interval );
}

function moveAnt(){
	antImg.style.left = (Math.random() * 800) + "px";
	antImg.style.top = (Math.random() * 400)  + "px";
    antImg.addEventListener("click", checkTap, false);
	antImg.addEventListener("ontouchstart", checkTap, false);
}

function checkTap() {
	antImg.removeEventListener("click", checkTap, false);
	score = score + 10;
	document.getElementById('scoreLabel').innerHTML = score;
	interval = interval - 200;
	clearInterval(timer);
	timer = window.setInterval(moveAnt, interval);
}


function resetSpeed() {
  interval = 2000
  clearInterval(timer);
  timer = window.setInterval(moveAnt, interval);
  alert("Speed has been reset");
}
  

function resetScore() {
  score = 0;
  document.getElementById('scoreLabel').innerHTML = score;
}

