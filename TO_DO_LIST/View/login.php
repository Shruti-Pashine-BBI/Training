
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login Form</title>
    <link rel="stylesheet" href="../Media/css/style.css" />
  </head>
  <body>
<?php include("../Controller/config/connection.php");?>


    <form id="form" action="../Model/fetchlogindetails.php" method="POST">

      <label for="username">Username (Email):</label>
      <br />
      <input type="email" id="username" name="username" required /><br />
      <br />
      <br />
      <label for="password" > Password:</label>
      <br />
      <input type="password" id="password" name ="password" required /><br />
<br>
      <a
          href="forgotpassword.php"
          style="text-decoration: none;"
          >Forgot Password?</a
        >
      <br /><br />
      <button type="submit" name="submit" value="submit">Login</button>
      <pre style="text-align: center;">
        Not yet a member? <a href="SignUp.php" style="text-decoration: none; ">Signup now</a>
</pre>
      
    </form>

  </body>
</html>
