import "./style.css";

import "./css/variables.css";
import "./css/base.css";
import "./css/hero.css";
import "./css/animations.css";
import "./css/responsive.css";

import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

import { renderHero } from "./sections/hero";
import { initializeAnimations } from "./js/animation";
import { createPetals } from "./js/petals";

// ---------- Smooth Scroll ----------

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  smoothTouch: false
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ---------- Render App ----------

const app = document.querySelector("#app");

app.innerHTML = `
${renderHero()}
`;

// ---------- Loader ----------

window.addEventListener("load", () => {
  gsap.to("#loader", {
    opacity: 0,
    duration: 1,
    pointerEvents: "none",
    onComplete() {
      document.querySelector("#loader").remove();
    }
  });

  initializeAnimations();
  createPetals();
});

// ---------- Refresh ----------

window.addEventListener("resize", () => {
  ScrollTrigger?.refresh?.();
});
