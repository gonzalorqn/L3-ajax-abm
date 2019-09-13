window.onload = function(){Load();};
function Load()
{
    let xhttp : XMLHttpRequest = new XMLHttpRequest();

    xhttp.open("POST","verificacion.php",true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send();

    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            if(xhttp.responseText == "OK")
            {
                CargarListado();
            }
            else
            {
                window.location.href = "login.php";
            }
        } 
    }
}

function CargarListado()
{
    let xhttp : XMLHttpRequest = new XMLHttpRequest();

    xhttp.open("POST","administracion.php",true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send("queHago=mostrarGrilla");

    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            (<HTMLDivElement> document.getElementById("divGrilla")).innerHTML = xhttp.responseText;
        } 
    }
}