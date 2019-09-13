"use strict";
if (localStorage.getItem("Empleados") == null)
    localStorage.setItem("Empleados", "Juan-123,Rosa-456,Carlos-666");
function Loguear() {
    var nombre = (document.getElementById("txtNombre")).value;
    var clave = (document.getElementById("txtClave")).value;
    var aux = nombre + "-" + clave;
    var emp = localStorage.getItem("Empleados");
    if (emp != null) {
        var array_emp = emp.split(",");
        var flag_1 = true;
        array_emp.forEach(function (element) {
            if (aux == element) {
                flag_1 = false;
                console.log("Empleado correcto");
                window.location.href = "index.php";
            }
        });
        if (flag_1) {
            console.log("Empleado incorrecto");
        }
    }
}
//# sourceMappingURL=login.js.map