// DICE GAME

{
var randomNumber= Math.floor(Math.random()*6)+1;
var random_Img= "images/DICE/dice" + randomNumber + '.png';
var img = document.querySelectorAll("img");
img[0].setAttribute("src", random_Img);

var randomNumber2= Math.floor(Math.random()*6)+1;
var random_Img2 = "images/DICE/dice" + randomNumber2 + '.png';
var img2 = document.querySelectorAll("img");
img2[1].setAttribute("src", random_Img2);


if(randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "<i class='fa fa-flag' aria-hidden='true'></i>Player 1 Wins";
}
else if(randomNumber < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins<i class='fa fa-flag' aria-hidden='true'></i>";
}
else{
  document.querySelector("h1").innerHTML = "DRAW !!";
}
}

//


//Main Page JS
