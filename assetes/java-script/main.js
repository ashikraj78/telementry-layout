// top-header styling 
let header = document.querySelector('.header');
function styleHeader(){ 
    let scrollPosition = Math.round(window.scrollY);
    if(scrollPosition > 480){
        header.classList.add("top-header");
    }else{
        header.classList.remove("top-header");
    }
}
window.addEventListener("scroll",styleHeader);



// parallax effect

let parallax = document.getElementById("parallax");
window.addEventListener("scroll", function(){
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset*.7+"px";
})



//  about button styling

let btn1 = document.querySelector('.bot1');
let btn2 = document.querySelector('.bot2');
let btn3 = document.querySelector('.bot3');
let aliquam = document.querySelector(".aliquam");
let consequat = document.querySelector(".consequat");
let feugiat = document.querySelector(".feugiat");
let active = "btn1"

function showone(event){
    aliquam.style.display = "block";
    consequat.style.display="none";
    feugiat.style.display="none";
    btn2.classList.remove('act')
    btn3.classList.remove('act')
}

function showtwo(event){
    aliquam.style.display = "none";
    consequat.style.display="block";
    feugiat.style.display="none";
    active = "btn2"
    btn2.classList.add(active === "btn2" ? 'act' : '')
    btn1.classList.remove('act')
    btn3.classList.remove('act')
}

function showthree(event){
    aliquam.style.display = "none";
    consequat.style.display="none";
    feugiat.style.display="block";
    active = "btn3"
    btn3.classList.add(active === "btn3" ? 'act' : '')
    btn1.classList.remove('act')
    btn2.classList.remove('act')
}


btn1.classList.add(active === "btn1" ? 'act' : '')

btn1.addEventListener("click",showone);
btn2.addEventListener("click",showtwo);
btn3.addEventListener("click",showthree);