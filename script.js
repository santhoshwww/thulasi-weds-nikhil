/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});


/* ==========================================
   COUNTDOWN
========================================== */

const weddingDate = new Date("August 28, 2026 10:18:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);


/* ==========================================
   RSVP POPUP
========================================== */

const popup = document.getElementById("popup");

const popupTitle = document.getElementById("popupTitle");

const popupMessage = document.getElementById("popupMessage");

document.getElementById("yesBtn").onclick = () => {

    popup.classList.add("show");

    popupTitle.innerHTML = "💖 Thank You!";

    popupMessage.innerHTML = `
        Your presence is the greatest gift we could ask for.
        <br><br>
        We are eagerly waiting to celebrate
        this beautiful day with you.
        <br><br>
        See you on <b>28 August 2026</b>.
    `;

};

document.getElementById("noBtn").onclick = () => {

    popup.classList.add("show");

    popupTitle.innerHTML = "❤️ We'll Miss You";

    popupMessage.innerHTML = `
        Though you won't be able to join us,
        your love and blessings mean the world to us.
        <br><br>
        Thank you for being part of our journey.
    `;

};

document.getElementById("closePopup").onclick = () => {

    popup.classList.remove("show");

};

window.onclick = function (event) {

    if (event.target === popup) {

        popup.classList.remove("show");

    }

};


/* ==========================================
   BACK TO TOP
========================================== */

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
