/* HUJAN LOVE */

function createPetal(){

const petal = document.createElement("div");

petal.classList.add("petal");

const flowers = [
"❤️",
"❤️",
"❤️",
"💖",
"💕",
"💗",
"💞",
"💘"
];

petal.innerHTML =
flowers[Math.floor(Math.random()*flowers.length)];

petal.style.left =
Math.random() * 100 + "vw";

petal.style.fontSize =
(25 + Math.random() * 25) + "px";

petal.style.animationDuration =
(8 + Math.random() * 6) + "s";

petal.style.opacity =
0.6 + Math.random() * 0.4;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},15000);

}

setInterval(createPetal,300);
