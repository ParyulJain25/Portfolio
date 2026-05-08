// ===== MENU BUTTON =====
const menu = document.getElementById("nav-menu");
const toggle = document.getElementById("nav-toggle");

toggle.addEventListener("click", function () {
    menu.classList.toggle("show");
});


// ===== CHANGE HEADER COLOR ON SCROLL =====
window.addEventListener("scroll", function () {

    const header = document.querySelector(".l-header");

    if(window.scrollY > 50){
        header.style.background = "white";
        header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    }
    else{
        header.style.background = "transparent";
        header.style.boxShadow = "none";
    }

});


// ===== SMOOTH SCROLL =====
const links = document.querySelectorAll(".nav__link");

links.forEach(function(link){

    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth"
        });

    });

});