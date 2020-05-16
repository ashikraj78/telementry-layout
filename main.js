let parallax = document.getElementById("parallax");
window.addEventListener("scroll", function(){
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset*.7+"px";
})


let btn1 = document.querySelector('.bot1');
let btn2 = document.querySelector('.bot2');
let btn3 = document.querySelector('.bot3');
let aliquam = document.querySelector(".aliquam");
let consequat = document.querySelector(".consequat");
let feugiat = document.querySelector(".feugiat");


function showone(event){
    btn1.style.transform ="scale(1.2)";
    btn2.style.transform ="scale(1)"; 
    btn3.style.transform ="scale(1)";
    
    aliquam.style.display = "block";
    consequat.style.display="none";
    feugiat.style.display="none";
}

function showtwo(event){
    btn1.style.transform ="scale(1)";
    btn2.style.transform ="scale(1.2)"; 
    btn2.style.zIndex="6"
    btn3.style.transform ="scale(1)";  

    aliquam.style.display = "none";
    consequat.style.display="block";
    feugiat.style.display="none";
}

function showthree(event){
    btn1.style.transform ="scale(1)";
    btn2.style.transform ="scale(1)"; 
    btn3.style.transform ="scale(1.2)";  

    aliquam.style.display = "none";
    consequat.style.display="none";
    feugiat.style.display="block";
}



btn1.addEventListener("click",showone);
btn2.addEventListener("click",showtwo);
btn3.addEventListener("click",showthree);