window.onload = function(){
    document.getElementById('fademe').style.opacity = 1;
}

ch1 = document.querySelector("#choice1");
function change()
{
    location.href = "./game.html";
}
ch1.addEventListener("click",change)