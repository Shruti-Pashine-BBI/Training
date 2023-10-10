<?php
include("../Controller/config/connection.php");
 $str="hello";

    $email = $_POST["email"];
    $emailquery="select * from userdata where email='$email'";
    $query=mysqli_query($conn,$emailquery);
    $emailcount=mysqli_num_rows($query);
    if($emailcount){
        $userdata=mysqli_fetch_array($query);
        $username=$userdata['username'];
        $token=$userdata['token'];
        if($email){
            $_SESSION['msg']="check $email";
          echo $email;
          header("Location: ../../TO_DO_LIST/View/changepassword.php?token='$email'");
          exit();
            
        }
        else{
            echo"cannot send";
        }
    }
         

?>
