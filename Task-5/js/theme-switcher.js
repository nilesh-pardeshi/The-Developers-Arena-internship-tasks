

function toggleTheme() {
    const body = document.body;

    // Toggle class
    body.classList.toggle("theme-dark");

    // Save preference
    if (body.classList.contains("theme-dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

/* Load user preference on page load */
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("theme-dark");
    }
});



function toggleMenu() {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.toggle("show");
}

/* Close menu when clicking a link (optional) */
document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileNav").classList.remove("show");
    });
});
