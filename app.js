let para=document.querySelector("p");
let div=document.querySelector("#colorbox");
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    div.style.backgroundColor=color;
    para.innerText=color;
})
    