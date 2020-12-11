function count() {
    var m = +document.getElementById("m").value;
    var f = +document.getElementById("f").value;
    var k = +document.getElementById("k").value;

    if (m == "" || m <= 0) {
        alert("Podaj dodatnią masę!");
        return;
    }
    if (f == "" || f <= 0) {
        alert("Podaj dodatnią siłę!");
        return;
    }
    if (k == "" || k < 0 || k > 1) {
        alert("Podaj współczynnik <0, 1> !");
        return;
    }

    var Ft = m * k * 9.8;

    if (Ft > f)
        Ft = f;

    let widok = `Siła tarcia wynosi: Ft = ${Ft.toFixed(2)} N`;

    document.getElementById("calculated").innerHTML = widok;
}