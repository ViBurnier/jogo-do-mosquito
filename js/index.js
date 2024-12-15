let startGame = document.getElementById('startGame')

let levelGame = document.getElementById('levelGame')


startGame.addEventListener("click", () => { 

    mensageUserSelectLvl(levelGame.value)
})

function mensageUserSelectLvl(lvlSelect){
    
    
    if(lvlSelect == 0){
        //fazer uma tela que fale pro usuario escolher uma dificuldade
        let card = document.getElementById('cardAlert').classList.remove("d-none")
    }

    else{
        localStorage.setItem('gameLevel', lvlSelect);
    
        window.location.href='app.html'
    }
    
}









