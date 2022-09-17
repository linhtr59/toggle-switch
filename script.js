const textBoring = document.getElementById("boring");
const textFun = document.getElementById("fun");
const gif = document.getElementById("gif");
const toggle = document.getElementById("switch");


window.onload = function(){
    textFun.style.visibility = 'hidden';
}


toggle.addEventListener("change", (e) =>{
    if (toggle.checked){
        textFun.style.visibility ="visible";
        gif.style.visibility="visible"
        textBoring.style.visibility ="hidden";
        startRain();
        setInterval(startRain, 100);
        startConfetti();
    }
    else{
        textFun.style.visibility ="hidden";
        textBoring.style.visibility ="visible";
        gif.style.visibility="hidden";
    }
})



function startRain(){
    const star = document.createElement("div");
    star.innerText =  "🐥";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = Math.random() * 5 + "s";
    star.classList.add("star");
    document.body.appendChild(star);
}