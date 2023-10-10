<?php
include("../Controller/config/connection.php");
       

 
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      
      $username =$_POST['username'];
      $pass = $_POST['password']; 
    
      $sql = "SELECT * FROM userdata WHERE username = '$username' and passcode = '$pass'";
      $result = mysqli_query($conn,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      $count = mysqli_num_rows($result);
      
		
      if($count == 1) {
        session_start();
        $_SESSION['loggedin']=true;
        $_SESSION['username']=$username;
        $_SESSION['status']="Active";
        header('Location:../../TO_DO_LIST/View/TodoUI.php');
        exit;


      }else {
         $error = "Your Login Name or Password is invalid";
      }
   }

?>