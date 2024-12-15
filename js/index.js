let startGame = document.getElementById('startGame')

startGame.addEventListener("click", () => { 
    mensageUserSelectLvl()
})

function mensageUserSelectLvl(){
    
    let levelGame = document.getElementById('levelGame')

    
    if(levelGame.value == 0){
        //fazer uma tela que fale pro usuario escolher uma dificuldade
        let card = document.getElementById('cardAlert').classList.remove("d-none")
          
    }

}






