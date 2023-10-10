<?php
include("../Controller/config/connection.php");



if(isset($_POST['register'])){

          $fname = $_POST["firstName"];
          $lname = $_POST["lastName"]; 
          $email = $_POST["email"];
          $phone = $_POST["phone"];
          $username = $_POST["username"];
          $pass = $_POST["password"];

          $InsertQuery="INSERT INTO `UserData`(`FNAME`, `LNAME`, `EMAIL`, `PHONENUMBER`, `USERNAME`, `PASSCODE`) VALUES ('$fname','$lname','$email','$phone','$username','$pass')";

          $insertdata=mysqli_query($conn,$InsertQuery);
          if ($insertdata) {
          
            //echo constant("globalPath");
            header('Location:../TO_DO_LIST/View/login.php');
            exit;
          } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
          }
          
          $conn->close();       
}
?>