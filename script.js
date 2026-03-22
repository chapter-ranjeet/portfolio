// Simple scroll animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        let position = card.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if(position < screen - 100){
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
