const openMenu = document.querySelector("#open-menu");
const menu = document.querySelector(".phone-menu");
const closeMenu = document.querySelector("#close-menu");


// Open Cart
openMenu.onclick = () => {
    menu.classList.add("active");
};

// Close Cart
closeMenu.onclick = () => {
    menu.classList.remove("active");
};