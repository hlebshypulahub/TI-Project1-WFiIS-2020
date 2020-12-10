function answer() {
    var element = document.getElementById("answer");
    element.style = "display: inline";
    var ask = document.getElementsByName("ask");
    let widok = ``;
    if (ask[1].checked) {
        widok += `Popatrz na rysunek poniżej &#128521;`;
    } else if (ask[0].checked) {
        widok += `Upewnij się, że znasz wszystkie!`;
    }

    element.innerHTML = widok;
}