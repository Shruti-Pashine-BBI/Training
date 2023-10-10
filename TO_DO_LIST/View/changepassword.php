<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Forgot Password</title>
    <link rel="stylesheet" href="../Media/css/style.css">
  </head>
  <body>

    <form method="POST" action="../Model/newpassword.php" id="form" >
<label for="new_password">Enter your new password:</label>
<input type="password" name="new_password" required>
<input type="hidden" name="token" value="<?php echo $_GET['token']; ?>">
<input type="submit" value="Reset Password">


    </form>

  </body>
</html>
