<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Changed Sucessfully</title>
  <link rel="stylesheet" href="../Media/css/style.css" />

</head>
<body>
<?php

include("../Controller/config/connection.php");


if (isset($_POST['new_password']) && isset($_POST['token'])) {
$newPassword = $_POST['new_password'];
// echo $newPassword;
$token = $_POST['token'];
// echo $token;
$sql = "UPDATE `UserData` SET `PASSCODE`='$newPassword' WHERE `EMAIL` =$token";


$updatedata=mysqli_query($conn,$sql);




if ($updatedata) {
   echo '  <form id="form" >
   <a href="../View/login.php" id="form" style="text-align:center""> Password change successfully now you can login</a>
     </form> ';
} else {
  echo "Error updating record: " . $conn->error;
}
$conn->close();
}
?>
</body>
</html>

