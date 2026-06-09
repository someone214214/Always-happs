const pages = document.querySelectorAll(".page");

function showPage(id){
pages.forEach(page=>{
page.classList.remove("active");
});

document.getElementById(id).classList.add("active");
}

const music = document.getElementById("music");

document.getElementById("startBtn").addEventListener("click",()=>{

showPage("envelopePage");

music.play().catch(()=>{});

});

document.getElementById("envelope").addEventListener("click",()=>{

document.getElementById("envelope").classList.add("open");

setTimeout(()=>{
showPage("menuPage");
},1000);

});

document.getElementById("galleryBtn").addEventListener("click",()=>{
showPage("galleryPage");
});

document.getElementById("letterBtn").addEventListener("click",()=>{
showPage("letterPage");
});

document.querySelectorAll(".backBtn").forEach(btn=>{

btn.addEventListener("click",()=>{
showPage("menuPage");
});

});

/* HUJAN LOVE */

setInterval(()=>{

const love = document.createElement("div");

const hearts = [
"❤️",
"💕",
"💖",
"💗",
"💞"
];

love.innerHTML =
hearts[Math.floor(Math.random()*hearts.length)];

love.style.position = "fixed";
love.style.left = Math.random()*100 + "vw";
love.style.top = "-50px";
love.style.fontSize = (20 + Math.random()*25) + "px";
love.style.pointerEvents = "none";
love.style.zIndex = "999";

document.body.appendChild(love);

let pos = -50;

const fall = setInterval(()=>{

pos += 3;

love.style.top = pos + "px";

if(pos > window.innerHeight){

clearInterval(fall);
love.remove();

}

},20);

},300);
