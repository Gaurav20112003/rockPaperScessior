let userScore = 0;
let compScore = 0;

const user_Score = document.querySelector("#user-score");
const comp_Score = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genCompChoice = () =>{
    //rock,paper,scissors
    const options = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];


};

const drawGame = () =>{
    console.log("game was Draw.");
    msg.innerText = "Its a draw";
    msg.style.backgroundColor = "#081b31";
    user_Score.innerText = ++userScore;
    comp_Score.innerText = ++compScore;
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin){
        console.log("You Won !!");
        msg.innerText = 'You Won !!, your '+userChoice+' beats '+compChoice;
        msg.style.backgroundColor = "green";
        ++userScore;
        user_Score.innerText = userScore;
    } else{
        console.log("You Lost !!");
        msg.innerText = 'You Lost !! , '+compChoice +' beats your '+userChoice;
        msg.style.backgroundColor = "red";
        ++compScore;
        comp_Score.innerText = compScore;
    };
};


const playGame =(userChoice)=>{
    console.log("userChoice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice = ",compChoice);
    //Generate computer choice -> modular
    
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper"? false : true;
        }else if (userChoice === "Paper"){
            userWin = compChoice ==="Scissors"? false:true;            
        }else{
            userWin = compChoice ==="Rock"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);  
    };
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


