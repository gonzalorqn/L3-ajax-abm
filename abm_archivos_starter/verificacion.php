<?php
if($_SESSION["usuario"] == "OK")
{
    echo("OK");
}
else
{
    echo("No_OK");
    //header("location=login.php");
}