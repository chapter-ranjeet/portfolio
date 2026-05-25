// Simple scroll animation
const cards = document.querySelectorAll(".card");
const loadRevealTargets = [
    ".hero-copy",
    ".hero-visual",
    ".hero img",
    "#about h2",
    ".section-lead",
    ".about-card",
    "#education h2",
    ".education-card",
    "#experience h2",
    ".experience-card",
    "#skills h2",
    ".skill-box",
    "#projects h2",
    ".project-card",
    "#certifications h2",
    "#certifications .card",
    "#contact h2",
    "#contact p",
    "#contact .btn"
];

let introPlayed = false;

const playIntro = () => {
    if (introPlayed) {
        return;
    }

    introPlayed = true;
    const reveals = document.querySelectorAll(loadRevealTargets.join(", "));

    reveals.forEach((element, index) => {
        element.classList.add("reveal-on-load");
        element.style.transitionDelay = `${index * 90}ms`;
    });

    requestAnimationFrame(() => {
        document.body.classList.remove("page-loading");
        reveals.forEach((element) => {
            element.classList.add("is-visible");
        });
    });
};

setTimeout(playIntro, 30);
window.addEventListener("load", playIntro);

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
