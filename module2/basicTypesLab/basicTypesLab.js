//pressing the button makes the square change color
//Gulyás János Adrián 2017
var color = "green";
var squareSizeNum = 100;
var squareSize = '${squareSizeNum}px';
var button = document.createElement('button');
var div = document.createElement('div');
button.textContent = "Change Color";
document.body.appendChild(button);
document.body.appendChild(div);
div.style.width = squareSize;
div.style.width = squareSize;
var colorChange = function (elem, color) {
    elem.style.backgroundColor = color;
    return true;
};
button.onclick = function (event) { colorChange(div, color); };
