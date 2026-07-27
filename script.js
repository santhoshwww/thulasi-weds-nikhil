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

/* ==========================================
   SCRATCH CARD
========================================== */

const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");

const scratchContainer = document.querySelector(".scratch-container");

function resizeCanvas() {

    canvas.width = scratchContainer.offsetWidth;
    canvas.height = scratchContainer.offsetHeight;

    // Golden scratch layer
    ctx.globalCompositeOperation = "source-over";

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

    gradient.addColorStop(0, "#D4AF37");
    gradient.addColorStop(0.5, "#F4D03F");
    gradient.addColorStop(1, "#B8860B");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffffff";
    ctx.font = `bold ${canvas.width / 12}px Poppins`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(
        "Scratch Here ✨",
        canvas.width / 2,
        canvas.height / 2
    );

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let isDrawing = false;

ctx.globalCompositeOperation = "destination-out";

function scratch(x, y) {

    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fill();

}

function getPosition(e) {

    const rect = canvas.getBoundingClientRect();

    if (e.touches) {

        return {

            x: e.touches[0].clientX - rect.left,
            y: e.touches[0].clientY - rect.top

        };

    }

    return {

        x: e.clientX - rect.left,
        y: e.clientY - rect.top

    };

}

/* Desktop */

canvas.addEventListener("mousedown", () => {

    isDrawing = true;

});

canvas.addEventListener("mouseup", () => {

    isDrawing = false;
    checkScratch();

});

canvas.addEventListener("mousemove", (e) => {

    if (!isDrawing) return;

    const pos = getPosition(e);

    scratch(pos.x, pos.y);

});

/* Mobile */

canvas.addEventListener("touchstart", (e) => {

    isDrawing = true;

});

canvas.addEventListener("touchend", () => {

    isDrawing = false;
    checkScratch();

});

canvas.addEventListener("touchmove", (e) => {

    e.preventDefault();

    if (!isDrawing) return;

    const pos = getPosition(e);

    scratch(pos.x, pos.y);

}, { passive: false });

function checkScratch() {

    const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
    );

    let transparent = 0;

    for (let i = 3; i < imageData.data.length; i += 4) {

        if (imageData.data[i] === 0) {

            transparent++;

        }

    }

    const percentage =
        transparent / (canvas.width * canvas.height);

    if (percentage > 0.45) {

        canvas.style.transition = ".8s";

        canvas.style.opacity = "0";

        canvas.style.pointerEvents = "none";

    }

}