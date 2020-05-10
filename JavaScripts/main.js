const startBtn = document.getElementById("start-btn");
const starScreen = document.querySelector(".start-screen");
const modes = document.querySelector(".mode-select");
const modesBtn = document.querySelectorAll(".mod")
const screenTwo = document.querySelector(".rem");
const letters = document.getElementById("ters");
const counter = document.getElementById("counter");
const lastScreen = document.querySelector(".check-word");
const submiBtn = document.getElementById("subbtn");
const userLtrs = document.getElementById("enter");
const endScreen = document.querySelector(".last");
const msg = document.querySelector(".mssg");
const abtn = document.getElementById("againbtn");
const score = document.querySelector(".score");

var inter;
var scoreCount = 0;
var modeLetterCount = 0;

startBtn.addEventListener("click",function(){
    starScreen.style.display="none";
    modes.style.display="block";
    score.style.display="block"
    modeEvents();
    
})


function modeEvents(){
    for(let i=0;i<modesBtn.length;i++){
    modesBtn[i].addEventListener("click",function(){
        modes.style.display="none";
        screenTwo.style.display="block"
        inter = setInterval(timer,1000);
        if(modesBtn[i].classList.contains("easy")){
            modeLetterCount=5;
            ltrsGenerate();
        }
        else if(modesBtn[i].classList.contains("medium")){
            modeLetterCount=8;
            ltrsGenerate();
        }
        else{
            modeLetterCount=11;
            ltrsGenerate();
        }
    })
}
}


let ltrs = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];

rand_letters = "";
function ltrsGenerate(){
    for (let i = 0; i < modeLetterCount; i++) {
    let rand = Math.floor(Math.random() * ltrs.length);
    rand_letters += ltrs[rand];
}

    letters.innerHTML = rand_letters;
}



let counts = 6;
function timer(){
    counts--;
    counter.innerHTML=counts;
    if(counts==0){
        screenTwo.style.display="none"; 
        lastScreen.style.display="block";
        clearInterval(inter);
    }
}

submiBtn.addEventListener("click",function(){

    if(userLtrs.value==''){
        alert("Enter Letters");
    }
    else if(userLtrs.value.toUpperCase()==rand_letters){
        lastScreen.style.display="none";
        endScreen.style.display="block";
        msg.innerHTML="You Won";
        msg.style.color="green";
        scoreCount++;
        score.innerHTML= "Score:"+scoreCount;
    }
    else{
        lastScreen.style.display="none";
        endScreen.style.display="block";
        msg.innerHTML="You Lost";
        msg.style.color="red";
    }
})

abtn.addEventListener("click",()=>{
    screenTwo.style.display="block";
    endScreen.style.display="none";
    inter=setInterval(timer,1000);
    counts=6;
    userLtrs.value='';
    rand_letters = '';
    ltrsGenerate();

})