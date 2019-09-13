if(localStorage.getItem("Empleados") == null)
  localStorage.setItem("Empleados","Juan-123,Rosa-456,Carlos-666");

function Loguear()
{
  let nombre = (<HTMLInputElement>(document.getElementById("txtNombre"))).value;
  let clave = (<HTMLInputElement>(document.getElementById("txtClave"))).value;
  let aux = nombre + "-" + clave;
  let emp = localStorage.getItem("Empleados");

  if(emp != null)
  {
    let array_emp =  emp.split(",");
    let flag = true;

    array_emp.forEach(element =>
    {
      if(aux == element)
      {
        flag = false;
        console.log("Empleado correcto");
        window.location.href = "index.php";
      }
    });
    if(flag)
    {
      console.log("Empleado incorrecto");
    }
  }
}