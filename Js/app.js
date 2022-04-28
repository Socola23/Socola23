const menu = document.querySelector(".menu")
const opemMenuBtn = document.querySelector(".open-menu")
const closemenuBtn = document.querySelector(".close-menu")

function toggleMenu(){
    menu.classList.toggle("menu_opened");
}



opemMenuBtn.addEventListener("click", toggleMenu);
closemenuBtn.addEventListener("click", toggleMenu);


