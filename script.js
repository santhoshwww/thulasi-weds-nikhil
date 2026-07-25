// ===============================
// Wedding Invitation Script
// Thulasi ❤️ Nikhil
// ===============================

AOS.init({
    duration: 1000,
    once: true
});

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (playing) {
        music.pause();
        musicBtn.innerHTML = "🔇";
    } else {
        music.play();
        musicBtn.innerHTML = "🔊";
    }

    playing = !playing;

});

const landing = document.getElementById("landing");
const doors = document.getElementById("doors");

const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");

const pages = document.querySelectorAll(".page");

const openBtn = document.getElementById("openInvitation");

openBtn.addEventListener("click", () => {

    doors.style.display = "block";

    setTimeout(() => {

        leftDoor.classList.add("open-left");
        rightDoor.classList.add("open-right");

    }, 300);

    setTimeout(() => {

        landing.style.display = "none";

        doors.style.display = "none";

        pages.forEach(page => page.style.display = "none");

        document.getElementById("ganesha").style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        music.play();
        playing = true;
        musicBtn.innerHTML = "🔊";

    }, 2300);

});

document.querySelectorAll(".nextBtn").forEach(button => {

    button.addEventListener("click", () => {

        const next = button.dataset.page;

        pages.forEach(page => {

            page.style.display = "none";

        });

        document.getElementById(next).style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

window.onload = () => {

    pages.forEach(page => page.style.display = "none");

}

// ===============================
// Falling Flower Petals
// ===============================

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random()*100+"vw";

    petal.style.animationDuration =
        (5 + Math.random()*6) + "s";

    petal.style.fontSize =
        (15 + Math.random()*20) + "px";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },11000);

}

setInterval(createPetal,350);
