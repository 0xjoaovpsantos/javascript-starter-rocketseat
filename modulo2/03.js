var list = document.querySelector("#lista");
var nomes = ["Diego", "Gabriel", "Lucas"];

for (nome of nomes) {
    var itemList = document.createElement("li");
    var text = document.createTextNode(nome);

    itemList.appendChild(text);
    list.appendChild(itemList);
}