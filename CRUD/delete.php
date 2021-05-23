<?php
include 'db_con.php';
$data               = file_get_contents("php://input");
$dataJsonDecode     = json_decode($data); 
$id= $dataJsonDecode->id;

$sql="DELETE FROM login WHERE id=$id";
if($con->query($sql)){
    echo "Data deleted successful";
}
else{
    echo "Failed to delete Data";
}

?>