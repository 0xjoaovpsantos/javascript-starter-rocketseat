var inputElement = document.querySelector("input");
var list = document.querySelector("#lista");
var nomes = ["Diego", "Gabriel", "Lucas"];

function adicionar() {
    addName(inputElement.value);
    inputElement.value = "";
}

function addName(name) {
    var itemList = document.createElement("li");
    var text = document.createTextNode(name);

    itemList.appendChild(text);
    list.appendChild(itemList);
}

for (nome of nomes) {
    addName(nome);
}