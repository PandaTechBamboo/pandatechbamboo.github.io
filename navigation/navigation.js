var navLinks = document.getElementById("navLinks")

var ignore = document.querySelector("#burger-icon")

window.addEventListener("click", function(event) {
    if (
      event.target !== navLinks &&
      event.target.parentNode !== navLinks &&
      event.target !== ignore &&
      event.target.parentNode !== ignore &&
      event.target.parentNode !== links
    ) {
      hideMenu();
    }
  
    if (event.target == ignore) {
      toggleMenu();
    }
  });

function hideMenu() {
    navLinks.style.right = "-250px";
}

function toggleMenu() {
    if (navLinks.style.right === "-250px") {
      navLinks.style.right = "0";
    } else {
      navLinks.style.right = "-250px";
    }
  }

/*


window.addEventListener("resize", function(){
    var width = window.innerWidth;
    if(width>=1612){
        hideMenu();
    }
});

function datalistcall() {
    var o1 = document.getElementById("carsInput").value;
    document.getElementById("output").innerHTML = "You select " + o1 + " option";
}


var support = document.getElementById('PandaTechLogoSupport');
var logo = document.getElementById('PandaTech');

logo.setFont = function (font) {
    var size = this.offsetWidth,
    font_size = size * font;
    this.style.fontSize = font_size + '%';
    return this
};

logo.setFont(0.50);

window.onresize = function () {
    logo.setFont(0.50);
}*/