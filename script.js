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

let autoScroll;

/* GANTI HALAMAN */

function showPage(page){

pages.forEach(p=>{
p.classList.remove("active");
});

page.classList.add("active");

}

/* INTRO */

startBtn.onclick = () => {

showPage(envelopePage);

};

/* AMPLOP */

envelope.onclick = () => {

envelope.classList.add("open");

setTimeout(()=>{

showPage(menuPage);

},1800);

};

/* GALERI */

galleryBtn.onclick = () => {

showPage(galleryPage);

/* MULAI MUSIK */

music.play().catch(()=>{});

};

/* SURAT */

letterBtn.onclick = () => {

showPage(letterPage);

/* AUTO SCROLL */

setTimeout(()=>{

startAutoScroll();

},1000);

};

/* KEMBALI */

document.querySelectorAll(".backBtn").forEach(btn=>{

btn.onclick = () => {

clearInterval(autoScroll);

showPage(menuPage);

};

});

/* AUTO SCROLL SURAT */

function startAutoScroll(){

const box = document.querySelector(".letter-box");

if(!box) return;

clearInterval(autoScroll);

box.scrollTop = 0;

autoScroll = setInterval(()=>{

box.scrollTop += 1;

if(
box.scrollTop + box.clientHeight >= box.scrollHeight
){

clearInterval(autoScroll);

}

},40);

}

/* HUJAN BUNGA */

function createPetal(){

const petal = document.createElement("div");

petal.classList.add("petal");

const flowers = [
"🥀",
"🍂",
"🌹"
];

petal.innerHTML =
flowers[Math.floor(Math.random()*flowers.length)];

petal.style.left =
Math.random() * 100 + "vw";

petal.style.fontSize =
(18 + Math.random() * 20) + "px";

petal.style.animationDuration =
(5 + Math.random() * 5) + "s";

petal.style.opacity =
0.5 + Math.random() * 0.5;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,250);

/* EFEK CINEMATIC */

document.body.animate(
[
{
filter:"brightness(0.9)"
},
{
filter:"brightness(1)"
}
],
{
duration:4000,
iterations:Infinity,
direction:"alternate"
}
);
