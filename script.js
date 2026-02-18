/* NAVBAR SCROLL */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
if(window.scrollY > 50){
navbar.classList.add("navbar-scrolled");
}else{
navbar.classList.remove("navbar-scrolled");
}
});

/* SMOOTH SCROLL */
document.querySelectorAll("a[href^='#']").forEach(anchor=>{
anchor.addEventListener("click",function(e){
const target=document.querySelector(this.getAttribute("href"));
if(target){
e.preventDefault();
target.scrollIntoView({behavior:"smooth"});
}
});
});

/* REVEAL */
const reveals=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{threshold:0.2});

reveals.forEach(el=>observer.observe(el));

/* BACK TO TOP */
const backTop=document.querySelector(".back-to-top");

if(backTop){
window.addEventListener("scroll",()=>{
if(window.scrollY > 400){
backTop.classList.add("show");
}else{
backTop.classList.remove("show");
}
});

backTop.addEventListener("click",()=>{
window.scrollTo({top:0,behavior:"smooth"});
});
}
