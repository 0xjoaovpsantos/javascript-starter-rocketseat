var container = document.getElementById("container");
var button = document.getElementById("button");

button.onclick = function () {
    var square = document.createElement("div");
    square.style.width = "100px";
    square.style.height = "100px";
    square.style.backgroundColor = "red";
    container.appendChild(square);
};