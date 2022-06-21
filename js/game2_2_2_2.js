window.onload = function(){
    document.getElementById('fademe').style.opacity = 1;
}

ch1 = document.querySelector("#choice1");
ch2 = document.querySelector("#choice2");
function change()
{
    location.href = "./death4.html";
}
ch1.addEventListener("click",change)

function change2()
{
    location.href = "./death5.html";
}
ch2.addEventListener("click",change2)

//timer
var timeInSecs;
var ticker;

function startTimer(secs) {
timeInSecs = parseInt(secs);
ticker = setInterval("tick()", 1000); 
}

function tick( ) {
var secs = timeInSecs;
if (secs > 0) {
timeInSecs--; 
}
else {
clearInterval(ticker);
location.href="death6.html";
}


var mins = Math.floor(secs/60);
secs %= 60;
var pretty =  ( (mins < 10) ? "0" : "" ) + mins + " : " + ( (secs < 10) ? "0" : "" ) + secs;

document.getElementById("countdown").innerHTML = pretty;
}

startTimer(1*60)
