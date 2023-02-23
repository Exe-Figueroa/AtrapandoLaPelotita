
const pelotita = document.querySelector('.pelotita-container')
const miDiv = document.querySelector(".move-ball");
let indicador=0
pelotita.addEventListener('mouseenter', moverla)
let width = miDiv.getBoundingClientRect().width;
let height = miDiv.getBoundingClientRect().height;

function moverla() {

    
    let min = 50

    pelotita.style.left = (Math.random() * (width - 70) ) + "px";
    pelotita.style.top = (Math.random() * (height - 70) ) + "px";
    indicador++
    switch(indicador){
        case 0:
            alert('osoooo')
        break;
        case 1: 
        alert('casii')
        break
        case 2:
        console.log(indicador)
        break;
        case 3: 
        console.log(indicador)
        break
        case 4:
        console.log(indicador)
        break;
        case 5: 
        console.log(indicador)
        break
        case 6:
        console.log(indicador)
        break;
        case 7: 
        console.log(indicador)
        break
        default: 
        indicador=0

    }
    
}
