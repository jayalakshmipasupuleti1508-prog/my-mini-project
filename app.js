let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);

let color=`rgb(${red},${green},${blue})`;
let div=document.querySelector("#colorbox");
div.style.backgroundColor=color;
let para=document.querySelector("p");
para.innerText=color;

