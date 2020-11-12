function diceRandom(){
  return randomNumber = Math.floor(Math.random()*6);
}

var imageArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var randomNumber1 = diceRandom();
var randomNumber2 = diceRandom();



document.querySelector(".dice1 .img1").setAttribute("src", imageArray[randomNumber1]);
document.querySelector(".dice2 .img2").setAttribute("src", imageArray[randomNumber2]);

if (randomNumber1 > randomNumber2){
  document.querySelector(".container h1").innerHTML = " Player 2 Wins 🚩!";
  document.querySelector(".dice1 p").innerHTML = "Player 2 💃"
  document.querySelector(".dice2 p").innerHTML = "Player 1 😢"

}
else if (randomNumber1 < randomNumber2){
  document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector(".container h1").innerHTML = "Draw!";

}

document.querySelector("footer").innerHTML = "www 🀄️ " + randomNumber1 + randomNumber2 + " 🀄️com";
