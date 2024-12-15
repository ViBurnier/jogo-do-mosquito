
 //fix stage 
 function fixStage(){  
     let height = 0 
     let width = 0
    
     //monitor resolution 
     height = window.innerHeight
     width = window.innerWidth
    
     return [height, width]
 }

 //capturing random positions on the monitor
 function randomPosition(parameters){
     let posX = Math.floor(Math.random() * parameters[1]) - 200  
    let posY = Math.floor(Math.random() * parameters[0]) - 200

     posX = posX < 0 ? 0 : posX
     posY = posY < 0 ? 0 : posY

     return [posY, posX]
 }
 randomPosition(fixStage())


 //timer
 let time = 30;
 let stopwatch = setInterval( function(){
     time -= 1
     let timerNumber = document.querySelector('span#timerNumber')
     timerNumber.innerHTML = time
     if(time < 0){
          window.location.href = 'vitoria.html'
     }
 }, (1000))

//set difficulty of game
let flyTime = 0
function difficultyGame(){
    let gameLevel = localStorage.getItem('gameLevel'); 

    switch(gameLevel){
        case "Easy": return flyTime = 1500
        break;

        case "Normal": return flyTime = 1000
        break;

        case "Hard": return flyTime = 650
        break;

        default:
            alert("Sorry ERRO")
    }
}


/*
    let criarMoscaTempo = 1500

    let nivel = window.location.search

    nivel = nivel.replace( '?', '')

    if(nivel == 'chorao'){
        criarMoscaTempo = 1500
    }
    else if(nivel == 'normal'){
        criarMoscaTempo = 1000
    }
    else if(nivel == 'dificil'){
        criarMoscaTempo = 650
    }

    let cronometro = setInterval( function(){
    tempo -= 1 

    if(tempo < 0){
        window.location.href = 'vitoria.html'
        clearInterval(cronometro)
        clearInterval(criarmosca)
    }

    document.querySelector('span#numeroCronometro').innerHTML = tempo
}, (1000) ) 
------------------------
    let posX = Math.floor(Math.random() * largura) - 200 
    let posY = Math.floor(Math.random() * altura) - 200
    
    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

document.querySelector('span#numeroCronometro').innerHTML = tempo

    posicaoRandom() 

    criarmosca()*/