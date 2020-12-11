function checkTask1() {
    var ans = document.getElementById("task1").value;
    var element = document.getElementById("answer1");
    element.style = "display: inline;";
    let widok = ``;

    if (ans == 2) {
        widok += `Odpowiedziałeś poprawnie!</br>`;
    } else {
        widok += `Odpowiedziałeś niepoprawnie!</br>`;
    }

    document.getElementById("yn1").innerHTML = widok;
}

function checkTask2() {
    var ans = document.getElementById("task2").value;
    var element = document.getElementById("answer2");
    element.style = "display: inline;";
    let widok = ``;

    if (ans == 3) {
        widok += `Odpowiedziałeś poprawnie!</br>`;
    } else {
        widok += `Odpowiedziałeś niepoprawnie!</br>`;
    }

    document.getElementById("yn2").innerHTML = widok;
}