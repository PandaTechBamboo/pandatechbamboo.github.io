var navLinks = document.getElementById("navLinks")

window.addEventListener("resize", fixMenu);

function showMenu(){
    navLinks.style.top = "0";
}

function hideMenu(){
    navLinks.style.top = "-4000px";
}

function fixMenu(){
    var w = window.innerWidth;
    if(w>=1612){
        hideMenu();
    }
}