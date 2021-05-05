<?php
include 'db_con.php';
$data               = file_get_contents("php://input");
 $dataJsonDecode     = json_decode($data); 
 $name= $dataJsonDecode->username;
 $email= $dataJsonDecode->email;
 $fullName= $dataJsonDecode->fullName;
 echo $name;
 echo $email;
 echo $fullName;

 $sql="INSERT INTO login(name,email,full_name) VALUES('$name','$email','$fullName')";
 if($con->query($sql)){
   echo "Data Inserted successful!";
 }
 else{
   echo "Something ERROR";
 }

?>