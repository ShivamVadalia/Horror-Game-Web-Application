window.onload = function(){
    document.getElementById('fademe').style.opacity = 1;
}

ch1 = document.querySelector("#choice1");
ch2 = document.querySelector("#choice2");
function change()
{
    location.href ="game.html";
}
ch1.addEventListener("click",change)

function change2()
{
    location.href ="index.html";
}
ch2.addEventListener("click",change2)
