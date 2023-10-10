
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title> Signup Form</title>
<link rel="stylesheet" href="../Media/css/style.css">
</head>
<body>

    <h3 id="Registration" >Registration</h3>
    <form id="form" class="input-control" action="../Model/createUser.php" method ="POST">
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

        <script src="../../js/script.js">



       
        </script>
</body>
</html>
