function randomNumber(){
  let randomNum = Math.floor(Math.random()*6+1);
  return randomNum;
}

var score1 = randomNumber();
var score2 = randomNumber();

window.onload= function(){
 changeImage();
 annouceWinner();
}

function changeImage(){
  if(score1 != null && score2 != null){
    let pic1 = `images/dice${score1}.png`;
    document.getElementsByClassName("img1")[0].src=pic1;    
    let pic2 = `images/dice${score2}.png`;
    document.getElementsByClassName("img2")[0].src=pic2;
    
  }
}
function rollDice(){
  score1 = randomNumber();
  score2 = randomNumber();
  changeImage();
  annouceWinner();
}
function annouceWinner(){
  if(score1 > score2){
    document.getElementById("title").textContent = "Player 1 wins";
  }
  else if(score1 < score2){
    document.getElementById("title").textContent = "Player 2 wins";
  }
  else{
    document.getElementById("title").textContent = "It's a tie";
  }
}
