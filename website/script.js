var navLinks = document.getElementById("navLinks")

window.addEventListener("resize", fixMenu);

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-400px";
}

function fixMenu(){
    var w = window.innerWidth;
    if(w>=1612){
        hideMenu();
    }
}