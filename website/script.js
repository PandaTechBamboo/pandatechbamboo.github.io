var navLinks = document.getElementById("navLinks")
var links = document.querySelector(".js-being-wack")

window.addEventListener("resize", function(){
    var width = window.innerWidth;
    if(width>=1612){
        hideMenu();
    }
});

var ignore = document.querySelector("#burger-icon")

window.addEventListener("click",function(event){
    if(event.target !== navLinks && 
        event.target.parentNode !== navLinks && 
        event.target !== ignore && 
        event.target.parentNode !== ignore &&
        event.target.parentNode !== links){
        hideMenu();
    }
})


function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-500px";
}