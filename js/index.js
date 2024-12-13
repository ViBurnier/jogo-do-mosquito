let startGame = document.getElementById('startGame')

startGame.addEventListener("click", () => { 
    mensageUserSelectLvl()
})


//the game level
function gameLvl(difficulty){
    

    if(difficulty == 'Easy'){
        return 1500
        
    }
    else if(difficulty == 'Normal'){
        return 1000
        
    }
    else if(difficulty == 'Hard'){
        return 650
        
    }
}

function mensageUserSelectLvl(){
    
    let levelGame = document.getElementById('levelGame')

    let card = document.getElementById('cardAlert')

    if(levelGame.value == 0){
        //fazer uma tela que fale pro usuario escolher uma dificuldade
        return card.classList.remove("d-none")
    }

    else{   
        return [levelGame.value, window.location.href = "app.html"]
    }
}






