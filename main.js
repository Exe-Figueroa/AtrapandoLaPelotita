
const pelotita = document.querySelector('.pelotita-container')
const miDiv = document.querySelector(".move-ball");
let indicador=0

pelotita.addEventListener('mouseenter', moverla)

let width = miDiv.getBoundingClientRect().width;
let height = miDiv.getBoundingClientRect().height;

const cartelito = document.querySelector('.cartelito')

function moverla() {

    
    let min = 50

    pelotita.style.left = (Math.random() * (width - 70) ) + "px";
    pelotita.style.top = (Math.random() * (height - 70) ) + "px";
   
    switch(indicador){
        case 0:
            console.log(0)
        break;
        case 1: 
            cartelito.innerHTML = 'casii'
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
    indicador++
}
