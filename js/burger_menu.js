"use strict"

const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", () =>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}))