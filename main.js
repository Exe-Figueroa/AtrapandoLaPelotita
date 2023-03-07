
const pelotitac = document.querySelector('.pelotita-container')
const miDiv = document.querySelector(".move-ball");
let indicador=0
const containGame = document.querySelector ('.move-ball-container')
const btnStart = document.querySelector ('.play-game-button')


btnStart.addEventListener('click', playGame)

pelotitac.addEventListener('click', ganaste)
    
let width 
let height 

function obtenerTamañoContenedor (){
    width = miDiv.getBoundingClientRect().width;
    height = miDiv.getBoundingClientRect().height;
};


const cartelito = document.querySelector('.cartelito')

function playGame(){
    containGame.classList.remove('inactive');
    btnStart.classList.add('inactive');
    obtenerTamañoContenedor();
    setInterval(moverla, 300)
};

function moverla() {
    pelotitac.style.left = (Math.random() * (width - 70) ) + "px";
    pelotitac.style.top = (Math.random() * (height - 70) ) + "px";
}

function ganaste(){
    alert('ganaste')
}
const osooo=()=>{
switch(indicador){
    case 0:
        console.log(indicador)
        cartelito.innerHTML = 'Epaaa'
    break;
    case 1: 
        cartelito.innerHTML = 'casii'
    break
    case 2:
    console.log(indicador)
    cartelito.innerHTML = 'osoo'
    break;
    case 3: 
    console.log(indicador)
    cartelito.innerHTML = 'Fallaste'
    break
    case 4:
    console.log(indicador)
    cartelito.innerHTML = 'Cachulelu no me atrapa'
    cartelito.style.marginLeft='70px'
    break;
    case 5: 
    console.log(indicador)
    break
    case 6:
    cartelito.innerHTML = 'oleeee'
    break;
    case 7: 
    console.log(indicador)
    break
    default: 
    indicador=0
}
indicador++
}
miDiv.addEventListener('click', osooo)