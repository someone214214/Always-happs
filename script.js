const pages = document.querySelectorAll(".page");

const intro = document.getElementById("intro");
const envelopePage = document.getElementById("envelopePage");
const menuPage = document.getElementById("menuPage");
const galleryPage = document.getElementById("galleryPage");
const letterPage = document.getElementById("letterPage");

const startBtn = document.getElementById("startBtn");
const envelope = document.getElementById("envelope");

const galleryBtn = document.getElementById("galleryBtn");
const letterBtn = document.getElementById("letterBtn");

const music = document.getElementById("music");

function showPage(page){

pages.forEach(p=>{
p.classList.remove("active");
});

page.classList.add("active");

}

startBtn.onclick = () => {

showPage(envelopePage);

};

envelope.onclick = () => {

envelope.classList.add("open");

setTimeout(()=>{

showPage(menuPage);

},1800);

};

galleryBtn.onclick = () => {

showPage(galleryPage);

music.play();

};

letterBtn.onclick = () => {

showPage(letterPage);

};

document.querySelectorAll(".backBtn").forEach(btn=>{

btn.onclick = () => {

showPage(menuPage);

};

});

/* HUJAN BUNGA */

function createPetal(){

const petal = document.createElement("div");

petal.classList.add("petal");

const flowers = ["🥀","🍂","🌹"];

petal.innerHTML =
flowers[Math.floor(Math.random()*flowers.length)];

petal.style.left =
Math.random()*100 + "vw";

petal.style.fontSize =
(18 + Math.random()*20) + "px";

petal.style.animationDuration =
(5 + Math.random()*5) + "s";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},10000);

}

setInterval(createPetal,250);
