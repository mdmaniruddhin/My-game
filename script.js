let userscore = 0;
let compscore = 0;
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const gencompchoice = () => {
const options =["rock","paper","scissor"];
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
};
const drawgame = () => {
msg.innerText = "game was draw.play again.";
msg.style.backgroundColor = "#081b31";
};
const showwiner = (userwin,userchoice,compchoice) => {
if (userwin) {
userscore++;
userscorePara.innerText = userscore;
msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
msg.style.backgroundColor = "green";
} else {
compscore++;
compscorePara.innerText = compscore;
msg.innerText = `You lose.${compchoice} beats your ${userchoice}`;
msg.style.backgroundColor = "red";
}
};
const playgame = (userchoice) =>{
console.log("user choice",userchoice);
const compchoice = gencompchoice();
console.log("comp choice", compchoice);
if (userchoice === compchoice) {
drawgame();
}else{
let userwin = true;

if (userchoice === "rock") {
userwin = compchoice === "paper" ? false : true;
} else if (userchoice === "paper") {
userwin = compchoice === "scissor" ? false : true;
} else {
userwin = compchoice === "rock" ? false : true;
}

showwiner(userwin,userchoice,compchoice);
};
};
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
choice.addEventListener("click",() =>{
const userchoice = choice.getAttribute("id");
playgame(userchoice);
});
});