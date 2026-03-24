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
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
});

/* Auto close menu when clicking link */
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        toggle.classList.remove("active");
        menu.classList.remove("active");
    });
});
