let userScore = 0;
let compScore = 0;
let drawScore = 0;
let totalMoves = 0;

let userScore1 = document.querySelector('#user-score') 
let compScore1 = document.querySelector('#comp-score') 
let drawScore1 = document.querySelector('#draw-score') 
let totalMoves1 = document.querySelector('#totalMoves')


let msg = document.querySelector('#msg')
// let msgContenior = document.querySelector('.msg-contenior')

const choices = document.querySelectorAll('.choice')
// console.log(choices)
const genCompChoice = ()=>{
    const option = ["rock","paper","scissors"]
    let GetArray = Math.floor(Math.random()*3) 
    return option[GetArray]
}

const drawGme = (CompChoice,userChoice)=>{
    msg.innerText = `Game Was Draw. Play Again !. Your ${userChoice} Computer ${CompChoice}`
    // console.log("Draw game")
    msg.style.backgroundColor = '#081b31'
    drawScore++;
    drawScore1.innerText = drawScore

}


const winUser = (CompChoice,userChoice) =>{
    // console.log("You winner")
    msg.innerText = `You Win!.Your ${userChoice} beats ${CompChoice}`
    console.log(CompChoice)
    msg.style.backgroundColor ='green'
    userScore++;
    userScore1.innerText = userScore

}
const lossUser = (CompChoice,userChoice) =>{
    msg.innerText = `You Lost. ${CompChoice} beats Your ${userChoice}`
    console.log("You Losser")
    msg.style.backgroundColor ='red'
    compScore++;
    compScore1.innerText=compScore
}
const playGame = (userChoice)=>{
    console.log("User Choice",userChoice)
    const CompChoice =genCompChoice()
    // console.log("Comp Choice",CompChoice)
    totalMoves++;
    totalMoves1.innerText = totalMoves
    if(userChoice==CompChoice)
    {
        // Draw
        drawGme(CompChoice,userChoice)
    }
    else if(userChoice=="rock" && CompChoice == "scissors"){
        //win user
        winUser(CompChoice,userChoice)
    }
    else if(userChoice=="rock" && CompChoice == "paper"){
        //win user
        lossUser(CompChoice,userChoice)
    }
    else if(userChoice=="paper" && CompChoice == "scissors"){
        //win user
        lossUser(CompChoice,userChoice)
    }
    else if(userChoice=="paper" && CompChoice == "rock"){
        //win user
        winUser(CompChoice,userChoice)
    }
    else if(userChoice=="scissors" && CompChoice == "paper"){
        //win user
        winUser(CompChoice,userChoice)
    }
    else if(userChoice=="scissors" && CompChoice == "rock"){
        //win user
        lossUser(CompChoice,userChoice)
    }
}


choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener(('click'),()=>{
        const userChoice = choice.getAttribute('id')
        // console.log("Choices was clicked",userChoice)
        playGame(userChoice)
    })
})

