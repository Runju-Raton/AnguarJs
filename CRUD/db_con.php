<?php

$con=new mysqli('localhost','root','','practise');
if($con->connect_error){
    echo "Database Connection error: ->$connect->error";
}

?>