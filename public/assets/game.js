
let choicePlayer;
let choiceAI;
let optionsAI;
let randomAI;
let skorMenang = 0;
let skorKalah = 0;

//perubahan 4 = deklarasi variabel untuk click rock


//deklarasi variabel background player
let bingkairock = document.getElementById("bingkairock");
let bingkaipaper = document.getElementById("bingkaipaper");
let bingkaiscissors = document.getElementById("bingkaiscissors");

//deklarasi variabel background komputer
let bingkairockAI = document.getElementById("bingkairockAI")
let bingkaipaperAI = document.getElementById("bingkaipaperAI")
let bingkaiscissorsAI = document.getElementById("bingkaiscissorsAI")


//deklarasi variabel untuk status dan skor
let papantengah = document.getElementById("papantengah")


//apabila player memilih batu
// let pilih_batu = async function() {
//   const ambilbatu = await pickRock();
//   const compare = await rockPaperScissors();

// }

document.getElementById("rock").onclick = function() {pickRock(), rockPaperScissors()};
function pickRock() {
    choicePlayer = "rock";
    optionsAI = ["rock", "paper", "scissors"];
    randomAI = Math.floor(Math.random()*3);
    choiceAI = optionsAI[randomAI];
    bingkairock.style.backgroundColor= "#C0C0C0";
    bingkaipaper.style.backgroundColor= "#a0845c";
    bingkaiscissors.style.backgroundColor= "#a0845c";
}

//apabila player memilih kertas

document.getElementById("paper").onclick = function() {pickPaper(), rockPaperScissors()};
function pickPaper() {
  choicePlayer = "paper";
  optionsAI = ["rock","paper","scissors"];
  randomAI = Math.floor(Math.random() * 3);
  choiceAI = optionsAI[randomAI];
  bingkairock.style.backgroundColor= "#a0845c";
  bingkaipaper.style.backgroundColor= "#C0C0C0";
  bingkaiscissors.style.backgroundColor= "#a0845c";

}

//apabila player memilih gunting

document.getElementById("scissors").onclick = function() {pickScissors(), rockPaperScissors()};
function pickScissors() {
  choicePlayer = "scissors";
  optionsAI = ["rock","paper","scissors"];
  randomAI = Math.floor(Math.random() * 3);
  choiceAI = optionsAI[randomAI]; 
  bingkairock.style.backgroundColor= "#a0845c";
  bingkaipaper.style.backgroundColor= "#a0845c";
  bingkaiscissors.style.backgroundColor= "#C0C0C0";
}

//fungsi komparasi utama

function rockPaperScissors() {
    if (choicePlayer == "rock" && choiceAI == "scissors" || choicePlayer == "paper" && choiceAI == "rock" || choicePlayer == "scissors" && choiceAI == "paper") {
      papantengah.innerHTML = `<h1> You WIN! </h1><hr>Computer chose ${choiceAI}<hr>wins: ${++skorMenang}<br>losses: ${skorKalah}`;
    }
    if (choicePlayer == "rock" && choiceAI == "paper" || choicePlayer == "paper" && choiceAI == "scissors" || choicePlayer == "scissors" && choiceAI == "rock") {
      papantengah.innerHTML = `<h1>Comp WIN</h1><hr>Computer chose ${choiceAI}<hr>wins: ${skorMenang}<br>losses: ${++skorKalah}`;
    }
    if (choicePlayer == choiceAI) {
      papantengah.innerHTML = `<h1>DRAW! </h1><hr>Computer chose ${choiceAI}<hr>wins: ${skorMenang}<br>losses: ${skorKalah}`;
    }



//menggantibackground AI

if (choiceAI =="rock") {
        bingkairockAI.style.backgroundColor= "#C0C0C0";
        bingkaipaperAI.style.backgroundColor= "#a0845c";
        bingkaiscissorsAI.style.backgroundColor= "#a0845c";          
}
      
if (choiceAI =="paper") {
        bingkairockAI.style.backgroundColor= "#a0845c";
        bingkaipaperAI.style.backgroundColor= "#C0C0C0";
        document.getElementById("bingkaiscissorsAI").style.backgroundColor= "#a0845c";      
}
      
 if (choiceAI =="scissors") {
        bingkairockAI.style.backgroundColor= "#a0845c";
        bingkaipaperAI.style.backgroundColor= "#a0845c";
        bingkaiscissorsAI.style.backgroundColor= "#C0C0C0";
    } 
}

