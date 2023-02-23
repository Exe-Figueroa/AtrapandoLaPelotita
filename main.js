
const pelotita = document.querySelector('.pelotita')
const miDiv = document.querySelector(".move-ball");
let indicador=0
pelotita.addEventListener('mouseenter', moverla)
let width = miDiv.getBoundingClientRect().width;
let height = miDiv.getBoundingClientRect().height;

function moverla() {

    console.log('holaa')
    
    let min = 50

   pelotita.style.left = (Math.random() * (width - 70) ) + "px";
   pelotita.style.top = (Math.random() * (height - 70) ) + "px";
}

