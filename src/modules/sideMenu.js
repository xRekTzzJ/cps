let menuButton = document.querySelector(".mobailheaderr__button_menu");
let menu = document.querySelector(".sidePanel");
let buttonClose = document.querySelector(".button--type--close");
let cover = document.querySelector("div");

menuButton.addEventListener("click", menuOpen);
cover.addEventListener("click", coverClose)


function menuOpen() {
    cover.classList.add("cover");
    menu.style.display = "block";
    menu.style.position = "fixed";
    menu.style.top = "0%";
    menu.style.left = "0%";
    menu.style.width = "320px";          
    menu.style.height = "100vh";   
    menu.style.zIndex = "2";    
     
}

buttonClose.addEventListener("click", menuClose);
function menuClose(evt) {
    cover.classList.remove("cover");
    menu.style.display = "none";
    menu.style.zIndex = "1"; 
    console.log(evt.target);  
}

function coverClose(evt) {
    if (evt.target == document.querySelector(".cover")) {
        document.querySelector("div").classList.remove("cover");
        menu.style.display = "none";
        menu.style.zIndex = "1"; 
        console.log(evt);
    }
}