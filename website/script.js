var navLinks = document.getElementById("navLinks")

window.addEventListener("resize", fixMenu);

var ignore = document.querySelector("nav")
window.addEventListener("click",function(event){
    if(event.target != ignore && event.target.parentNode != ignore){
        hideMenu();
    }
})


function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-500px";
}

function fixMenu(){
    var w = window.innerWidth;
    if(w>=1612){
        hideMenu();
    }
}