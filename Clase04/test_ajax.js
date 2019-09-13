"use strict";
window.onload = function () { test(); };
function test() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "Backend/test.php", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
        }
    };
}
function test_params() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "Backend/test_params.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("nombre=" + document.getElementById("txtNombre").value);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
        }
    };
}
//# sourceMappingURL=test_ajax.js.map