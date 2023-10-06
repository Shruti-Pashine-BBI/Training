<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Forgot Password</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>

    <form method="post" action="" id="form">
<label >  Change Password</label>
<br>
      <br>
      <label for="newPassword">New Password:</label>
      <input
        type="password"
        id="newPassword"
        name="newPassword"
        title="New password"
      />
      <br>
      <br>

      <label for="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        title="Confirm new password"
      />
<br>
<br>

      <label for="token">OTP:</label>
      <input type="text" id="token" name="token" title="Password Token" />
      <br>
<br>
      <p class="form-actions">
        <input type="submit" value="Change Password" title="Change password" />
      </p>
    </form>
  
  </body>
</html>
