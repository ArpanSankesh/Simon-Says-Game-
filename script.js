let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;

let btns = ["purple", "red", "yellow", "green"];

let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function(){
   if(start == false){
    console.log("game started");
    start = true;

    levelUp();
   } 
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
   }
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
   }

function levelUp(){
    userSeq = [];
    level++
    h3.innerText = (`Level ${level}`);

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){

    if (userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000); 
        }
    }else{
        h3.innerHTML = `Game Over! Your score was ${level} <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn); 
    

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnPress);
}

function reset(){
    start = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}