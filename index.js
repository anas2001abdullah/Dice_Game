const name1 = localStorage.getItem('name1');
const name2 = localStorage.getItem('name2');
document.getElementById('p1').textContent = name1;
document.getElementById('p2').textContent = name2;
let ranNum = Math.random() * 6;
ranNum = Math.floor(ranNum) +  1;
var leftImg = document.querySelector(".img1");
var firstImg = "images/dice" + ranNum + ".png";
leftImg.setAttribute("src", firstImg);

let ranNum2 = Math.random() * 6;
ranNum2 = Math.floor(ranNum2) +  1;
var rightImg = document.querySelector(".img2");
var secondImg = "images/dice" + ranNum2 + ".png";
rightImg.setAttribute("src", secondImg);


if(ranNum > ranNum2) {
    document.querySelector('h1').innerHTML = "🚩 " + name1 + " wins!";
}
else if(ranNum < ranNum2) {
    document.querySelector('h1').innerHTML = name2 + " wins! 🚩";
}
else {
    document.querySelector('h1').innerHTML = "Draw! 🫱🏻‍🫲🏻 "
}
