<?php
include 'db_con.php';
$data               = file_get_contents("php://input");
 $dataJsonDecode     = json_decode($data); 
 $name= $dataJsonDecode->username;
 $email= $dataJsonDecode->email;
 $fullName= $dataJsonDecode->fullName;
 $data=$_GET;
//  echo $_GET['name'];
$data['name1']='Boss1';
$data['name2']='Boss2';
$data['name3']='Boss3';
$data['name4']='Boss4';
$data['name5']='Boss5';

 

 $sql="INSERT INTO login(name,email,full_name) VALUES('$name','$email','$fullName')";
 if($con->query($sql)){
   //echo "Data Inserted successful!";
 }
 else{
   //echo "Something ERROR";
 }
 echo json_encode($data,JSON_PRETTY_PRINT);
?>