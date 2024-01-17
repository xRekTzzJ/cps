let buttonMore = document.querySelector(".main__button--arrow");
buttonMore.addEventListener("click", resizeDescription);

function resizeDescription() {
    let text = document.querySelector(".main__textContent");

    if(buttonMore.textContent == "Читать далее") {
        text.style.height = "320px";
        buttonMore.textContent="Скрыть";
        buttonMore.classList.add("main__button--arrowUP");
    } else {
        text.style.height = "160px";
        buttonMore.textContent="Читать далее";
        buttonMore.classList.remove("main__button--arrowUP");
    }
}
let buttonMoreSecond = document.querySelector(".main__button--second");
buttonMoreSecond.addEventListener("click", resizeSwiper);
function resizeSwiper() {
    let wrapper = document.querySelector(".mainSwiper");

    if(buttonMoreSecond.textContent == "Показать всё") {
        wrapper.style.height = "360px";
        buttonMoreSecond.textContent="Скрыть";
        buttonMoreSecond.classList.add("main__button--arrowUP");
        
    } else {
        wrapper.style.height = "170px";
        buttonMoreSecond.textContent="Показать всё";
        buttonMoreSecond.classList.remove("main__button--arrowUP");
        
    }
}
let buttonMoreThird = document.querySelector(".main__button--third");
buttonMoreThird.addEventListener("click", resizeSwiperSecond);
function resizeSwiperSecond() {
    let wrapper = document.querySelector(".mainSwiper--second");
    if (buttonMoreThird.textContent == "Показать всё") {
        wrapper.style.height = "560px";
        buttonMoreThird.textContent = "Скрыть";
        buttonMoreThird.classList.add("main__button--arrowUP");
    } else {
        wrapper.style.height = "160px";
        buttonMoreThird.textContent = "Показать всё";
        buttonMoreThird.classList.remove("main__button--arrowUP");
    }
}