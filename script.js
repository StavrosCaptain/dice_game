

var num = Math.floor(Math.random() * 6) + 1;

var img = "dice" + num + ".png";

var img_source = "images/" + img;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", img_source);




var num2 = Math.floor(Math.random() * 6) + 1;

var img2 = "dice" + num2 + ".png";

var img_source2 = "images/" + img2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", img_source2);




if (num > num2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (num < num2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (num = num2) {
    document.querySelector("h1").innerHTML = "It's a draw!";
}
