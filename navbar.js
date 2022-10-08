const hamMenu = document.querySelector(".ham-menu");
const navMenu = document.querySelector(".nav-menu");
const xMark = document.querySelector(".x-mark");


hamMenu.addEventListener("click", () => {
    navMenu.classList.toggle("toggle-nav-state");
    xMark.classList.toggle("toggle-x-mark");
    hamMenu.classList.toggle("toggle-ham-menu");
})

xMark.addEventListener("click", () => {
    navMenu.classList.toggle("toggle-nav-state");
    xMark.classList.toggle("toggle-x-mark");
    hamMenu.classList.toggle("toggle-ham-menu");
})


function removeClass() {
    if(window.innerWidth > 850) {
        navMenu.classList.remove("toggle-nav-state");
        xMark.classList.remove("toggle-x-mark");
        hamMenu.classList.remove("toggle-ham-menu");
    }
}


window.addEventListener("resize", () => {
    removeClass();
})

