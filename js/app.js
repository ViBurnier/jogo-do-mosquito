
let flyTime = 0

// retun image fly 
//preciso do valor atualizado de imgflyfunc para colocar no X()
//colocando o valor atualizado no X() ele vai colocar a img da mosca 
//em lugares diferentes
let imageFlyFunction = createFlyImg(randomSizeFly(), randomDirectionFly())

//stopwatch
let time = 30;
let stopwatch = setInterval( function(){
    time -= 1
    let timerNumber = document.querySelector('span#timerNumber')
    timerNumber.innerHTML = time
    if(time < 0){
        window.location.href = 'vitoria.html'
    }
}, (1000))

//capturing random positions on the monitor
let randomPosition = function(parameters){
    let X = Math.floor(Math.random() * parameters[0]) - 200  
    let Y = Math.floor(Math.random() * parameters[1]) - 200
    
    posX = X < 0 ? 0 : X
    posY = Y < 0 ? 0 : Y
    
    return [posX, posY]
}

let randomPos = randomPosition(fixStage())

//change direction of the fly
function randomDirectionFly(){
    let direction = Math.floor(Math.random() * 2) 

    switch (direction) {
        case 0: return 'A'

        case 1: return 'B'
    }
}

//random size fly
function randomSizeFly(){
    let sizeFly = Math.floor(Math.random() * 3)

    switch(sizeFly){
        case 0: return 'f1'
        break;
        
        case 1: return 'f2'
        break;

        case 2: return 'f3'
        break;

    }
}

//create image fly for random position
function createFlyImg(size, direction){
    let imageFly = document.createElement('img')
    imageFly.classList.add(size, direction)
    imageFly.id = 'fly'
    imageFly.src = 'image/mosca.png'

    return imageFly
}

//set difficulty of game
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

//fix stage 
function fixStage(){  
    let height = 0 
    let width = 0
    
    //monitor resolution 
    height = window.innerHeight
    width = window.innerWidth
    
    return [width, height]
}

//inserting the image fly in the random position on the screen
function insertingImgFly(imageFly){
    let bodyHTML = document.querySelector('body')          
    imageFly.style.left = randomPos[0] + 'px'
    imageFly.style.top = randomPos[1] + 'px'
    imageFly.style.position = 'absolute'

    bodyHTML.appendChild(imageFly)
}

insertingImgFly(imageFlyFunction)

//delete the last fly if don't click in fly, losing life
let life = 3
function deletLastFly(idFly){

    if(document.getElementById(idFly.id)){
        document.getElementById(idFly.id).remove()

        document.getElementById('h' + life).src = 'image/coracao_vazio.png'
        
        switch(life){
            case 1: 
                alert("PERDEU")           
            break;

            case 2: 
                life--
                lifeHeart
            break;

            case 3: 
                life--
                lifeHeart 
            break;

            default:
                alert("ERROR")
        }
    } 
}

let X =  setInterval(function(){
        insertingImgFly()
        deletLastFly()
    }, difficultyGame())


X()

// //set difficult level the game
// difficultyGame()

// //puting image the fly on the screen
// insertingImgFly(imageFlyFunction)

// //delet fly, losing life
// deletLastFly(life, imageFlyFunction)


