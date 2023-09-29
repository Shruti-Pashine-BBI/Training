
<!DOCTYPE HTML>  
<html>
<head>
</head>
<body>  

<?php
// define variables and set to empty values
$fnameErr =$lnameErr = $emailErr= "";
$fname = $lname=$email = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["firstName"])) {
    $fnameErr = "Name is  ";
  } else {
    $fname = test_input($_POST["firstName"]);
  }
  if (empty($_POST["lastName"])) {
    $lnameErr = "Last Name is  ";
  } else {
    $lname = test_input($_POST["lastName"]);
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is  ";
  } else {
    $email = test_input($_POST["email"]);
  }
   
}

function test_input($data) {
 
  return $data;
}
?>

<h2>PHP Form Validation Example</h2>
<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">  
  <h3 id="Registration">Registration</h3>
        <label for="firstName" id="fname"  >First Name:</label>
        <input type="text" id=" fname"  style="display: inline; "name= "firstName"  >  
        <br>
        <br> 
        <label for="firstName" id="lname">Last Name:</label>
        <input type="text" id=" lname"  style="display: inline;" name= "lastName"     >
        <br> 
        <br>
        <label for="email" >Email:</label>
        <input type="email" id="email"  name= "email"    ><br>
        <br>
        <br>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone"  name= "phoneNo"    ><br>
        <br>
        <br>
        <label for="username">Username:</label>
        <input type="email" id="username"  name= "username"    ><br>
        <br>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password"  name= "password"    ><br>
        <br>
        <br>
        <button type="submit" >Submit</button>    
</form>

<?php
echo "<h2>Your Input Data:</h2>";
echo $fname;
echo "<br>";
echo $lname;
echo "<br>";

echo $email;
echo "<br>";
echo $email;
?>

</body>
</html>