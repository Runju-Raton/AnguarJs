<?php
  include 'db_con.php';

  $sql="SELECT * FROM login";
  $result=$con->query($sql);
  if($result->num_rows>0){
    $output=$result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($output);
  } 
  else{
    echo "No data found!";
  }
 
?>