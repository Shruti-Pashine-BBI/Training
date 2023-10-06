
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login Form</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
<?php include("config/connection.php");?>


    <form id="form" >

      <label for="username">Username (Email):</label>
      <br />
      <input type="email" id="username" required /><br />
      <br />
      <br />
      <label for="loginPassword">Password:</label>
      <br />
      <input type="password" id="loginPassword" required /><br />
      <br /><br />
      <button type="submit">Login</button>
      <button >
        <a href="SignUp.php" style="text-decoration: none; color: white"
          >Create an Account</a
        >
      </button>
      <button>
        <a
          href="forgotpassword.php"
          style="text-decoration: none; color: white"
          >Forgot Password</a
        >
      </button>
    </form>
    
  </body>
</html>
