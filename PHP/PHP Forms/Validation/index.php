<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Signup Form</title>
</head>
<body>

   
    <form action=" <?php echo $_SERVER["PHP_SELF"];?>" method="post">
        <h3 id="Registration">Registration</h3>
        <label for="firstName" id="fname"  >First Name:</label>
        <input type="text" id=" fname"  style="display: inline; "name= "firstName" required>  
        <br>
        <br> 
        <label for="firstName" id="lname">Last Name:</label>
        <input type="text" id=" lname"  style="display: inline;" name= "lastName" required   >
        <br> 
        <br>
        <label for="email" >Email:</label>
        <input type="email" id="email"  name= "email" required  ><br>
        <br>
        <br>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone"  name= "phoneNo" required  ><br>
        <br>
        <br>
        <label for="username">Username:</label>
        <input type="email" id="username"  name= "username" required  ><br>
        <br>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password"  name= "password" required  ><br>
        <br>
        <br>
        <button type="submit" >Submit</button>   
        </form>
        <br>
        <br>
        YOUR Pesonal Details:<br>
        <br>

        FirstName: <?php echo $_POST["firstName"]; ?><br>
lastName: <?php echo $_POST["lastName"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?><br>
Phone Number:<?php echo $_POST["phoneNo"]; ?><br>
UserName:<?php echo $_POST["username"]; ?><br>
Password:<?php echo $_POST["password"]; ?><br>
</body>
</html>