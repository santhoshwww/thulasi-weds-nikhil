import "./style.css";
import "./css/base.css";
import "./css/hero.css";
import "./css/animations.css";

import { hero } from "./sections/hero";

document.querySelector("#app").innerHTML = hero();
