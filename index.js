var randomNumber1= Math.floor(Math.random()*5)+1;
var randomNumber2= Math.floor(Math.random()*5)+1;
var output=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
document.querySelector(".img1").setAttribute("src",output[randomNumber1]);
document.querySelector(".img2").setAttribute("src",output[randomNumber2]);

    if(randomNumber1>randomNumber2)
        document.querySelector("h1").innerHTML="Player 1 Wins!";
    else if(randomNumber1<randomNumber2)
        document.querySelector("h1").innerHTML="Player 2 Wins!";
    else
        document.querySelector("h1").innerHTML="Draw!";
