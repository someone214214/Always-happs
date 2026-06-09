/* HUJAN LOVE */

function createPetal() {

const petal = document.createElement("div");

const hearts = [
"❤️",
"💖",
"💕",
"💗",
"💞",
"💘"
];

petal.className = "petal";

petal.textContent =
hearts[Math.floor(Math.random() * hearts.length)];

petal.style.left =
Math.random() * 100 + "vw";

petal.style.fontSize =
(20 + Math.random() * 20) + "px";

petal.style.animationDuration =
(8 + Math.random() * 6) + "s";

petal.style.opacity =
0.5 + Math.random() * 0.5;

document.body.appendChild(petal);

setTimeout(() => {
petal.remove();
}, 15000);

}

setInterval(createPetal, 300);

