
document.querySelector(".button--type--phone").addEventListener("click", modalClickOpen__feedback);
document.querySelector(".mobailheader__button_phone").addEventListener("click", modalClickOpen__feedback);
let cover = document.querySelector("div");

let modalCall = document.querySelector(".modal__feedback");
function modalClickOpen__feedback() {
    
    cover.classList.add("cover");
    modalCall.style.display="block";
    modalCall.style.right="0%";
    modalCall.style.top="0%";
}

document.querySelector(".close__second").addEventListener("click", modalClicClose__feedback);
function modalClicClose__feedback() {
    cover.classList.remove("cover");
    modalCall.style.display="none";
    modalCall.style.right="-30%";
    
}


document.querySelector(".button--type--message").addEventListener("click", modalClickOpen__Call);
document.querySelector(".mobailheader__button_message").addEventListener("click", modalClickOpen__Call);


let modalFeedBack = document.querySelector(".modal__call");
function modalClickOpen__Call() {
    cover.classList.add("cover");
    modalFeedBack.style.display="block";
    modalFeedBack.style.right="0%";
    modalFeedBack.style.top="0%";
}

document.querySelector(".button__modal--close").addEventListener("click", modalClicClose__Call);
function modalClicClose__Call() {
    cover.classList.remove("cover");
    modalFeedBack.style.display="none";

}




