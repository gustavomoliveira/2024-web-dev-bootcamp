let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let leftImage = "./images/dice" + randomNumber1 + ".png"; //seleciona os dados
let leftDice = document.querySelectorAll("img")[0].setAttribute("src", leftImage);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let rightImage = "./images/dice" + randomNumber2 + ".png";
let rightDice = document.querySelectorAll("img")[1].setAttribute("src", rightImage);

let textH = document.querySelector(".container h1");
function changeText(n1, n2) {
    if(n1 > n2) {
        textH.textContent = "🚩 Player 1 Wins!";
    } else if(n1 < n2) {
        textH.textContent = "Playes 2 Wins! 🚩";
    } else {
        textH.textContent = "Draw! ⚔️";
    }
}
changeText(randomNumber1, randomNumber2);