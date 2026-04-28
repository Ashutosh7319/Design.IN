// Hero Section Image Sliding Code

const slides = document.querySelectorAll(".slide");
const texts = document.querySelectorAll(".hero-text");

let index = 0;

function changeSlide() {

    slides[index].classList.remove("active");
    texts[index].classList.remove("active-text");

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    slides[index].classList.add("active");
    texts[index].classList.add("active-text");

}

setInterval(changeSlide, 5000);

// About Us section Image sliding code.

const members =
    document.querySelectorAll(".member-slide");

let memberIndex = 0;

function rotateMembers() {

    members[memberIndex]
        .classList.remove("active-member");

    memberIndex++;

    if (memberIndex >= members.length) {
        memberIndex = 0;
    }

    members[memberIndex]
        .classList.add("active-member");

}

setInterval(rotateMembers, 5000);

// Navigation Menu Toogle.

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle =
        document.getElementById("menu-toggle");

    const navLinks =
        document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuToggle.innerHTML = "✕";
        }
        else {
            menuToggle.innerHTML = "☰";
        }

    });

});

// Theme toggling code.

const toggleBtn =
    document.getElementById("theme-toggle");



/* keep saved theme */

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    toggleBtn.innerHTML = "☀";
}



toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");


    if (
        document.body.classList.contains("light")
    ) {

        toggleBtn.innerHTML = "☀";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        toggleBtn.innerHTML = "🌙";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});
