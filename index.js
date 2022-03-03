function game (){
const randomNumber1 =Math.floor(Math.random()*6) + 1;
const randomDice1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDice1);

const randomNumber2 =Math.floor(Math.random()*6) + 1;
const randomDice2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);
if (randomNumber1 > randomNumber2){
document.getElementById("demo").innerHTML =" Player 1 is winner";
} else if (randomNumber1 < randomNumber2) {
    document.getElementById("demo").innerHTML =" Player 2 is winner";
} else {
    document.getElementById("demo").innerHTML ="It's a drow";
}}