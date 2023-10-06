<?php include("config/connection.php");?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alert Signup Form</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

    <h3 id="Registration" action="#" method ="POST">Registration</h3>
    <form id="form" class="input-control">
        <label for="firstName" id="full">First Name:</label>
        <input type="text" id="firstName"   name ="firstName" required>  
        <br>
        <br> 
        <label for="lastName" id="full">Last Name:</label>
        <input type="text" id="lastName"  name ="lastName" required  >
        <br>
        <br>
        <label for="email" >Email:</label>
        <input type="email" id="email"  name ="email" required ><br>
        <br>
        <br>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name ="phone" required ><br>
        <br>
        <br>
        <!-- <label >Gender:</label>
        <label for="radiobutton">Male</label>
        <input type="radio" name="gender" id="radiobutton">
        <label for="radiobutton">Female</label>
        <input type="radio" name="gender" id="radiobutton">
        <label for="radiobutton">Other</label>
        <input type="radio" name="gender" id="radiobutton"> -->
        <br>
        <br>
        <label for="username">Username:</label>
        <input type="email" id="username"  name ="username" required ><br>
        <br>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" name ="password" required ><br>
        <br>
        <br>
        <button type="submit" value="register" name="register" onclick="validateForm()">Submit</button>
        <button> <a href="login.php" style="text-decoration: none; color:white">Log In</a></button> 
        </form>

        <script src="script.js">


<?php
if($_POST['register']){
    
        
          $fname = $_POST["firstName"];
          $lname = $_POST["lastName"]; 
          $email = $_POST["email"];
          $phone = $_POST["phone"];
          $username = $_POST["username"];
          $pass = $_POST["password"];

          $InsertQuery="INSERT INTO UserData VALUES ('$fname','$lname','$email','$phone','$username','$pass')";

          $insertdata=mysqli_query($conn,$InsertQuery);

          if($insertdata){
            echo "inserted";
          }
          else{
            echo "fail";
          }        
}
?>
       
        </script>
</body>
</html>
