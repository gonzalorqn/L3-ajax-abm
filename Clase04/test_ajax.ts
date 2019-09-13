window.onload = function(){test();};
function test()
{
    let xhttp : XMLHttpRequest = new XMLHttpRequest();

    xhttp.open("GET","Backend/test.php",true);

    xhttp.send();

    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            console.log(xhttp.responseText);
        } 
    }
}

function test_params()
{
    let xhttp : XMLHttpRequest = new XMLHttpRequest();

    xhttp.open("POST","Backend/test_params.php",true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send("nombre=" + (<HTMLInputElement> document.getElementById("txtNombre")).value);

    xhttp.onreadystatechange = () => {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            console.log(xhttp.responseText);
        } 
    }
}