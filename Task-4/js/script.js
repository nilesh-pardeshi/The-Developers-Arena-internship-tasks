/* =========================================================
   MOBILE NAV TOGGLE
========================================================= */
function toggleMenu() {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("show");
}

/* =========================================================
   FORM VALIDATION (Contact Page)
========================================================= */
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    if (!form) return; // only run on contact.html

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const msgField = document.getElementById("message");
    const output = document.getElementById("form-msg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Reset message
        output.textContent = "";
        output.style.color = "red";

        // Validate name
        if (nameField.value.trim().length < 3) {
            output.textContent = "Name must be at least 3 characters.";
            return;
        }

        // Validate email
        if (!emailField.value.includes("@") || !emailField.value.includes(".")) {
            output.textContent = "Enter a valid email address.";
            return;
        }

        // Validate message
        if (msgField.value.trim().length < 10) {
            output.textContent = "Message must be at least 10 characters.";
            return;
        }

        // Success
        output.textContent = "Message sent successfully!";
        output.style.color = "green";

        nameField.value = "";
        emailField.value = "";
        msgField.value = "";
    });
});

/* =========================================================
   FADE-IN ANIMATION ON SCROLL
========================================================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show-section");
    });
}, { threshold: 0.2 });

document.querySelectorAll(".section, .highlight, .service-row, .card").forEach(el => {
    observer.observe(el);
});
