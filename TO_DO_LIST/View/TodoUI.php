<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ToDo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../Media/css/todoui.css" />
  </head>
  <body>
    <header>
        <div>
      <h1>Todo</h1>
     
</div>
      <br />
      <form id="search-form">
        <input type="text" id="new-item" class="Add" placeholder="Add The Item" />
        <br />

        <button type="button" id="add-button" class="adding">+</button>
        <button type="button" id="remove-button" class="remove">-</button>
      </form>
     
      <div id="counter">NoItems</div>
      <ul id="listdiv" type="check"></ul>
      </button>
    </header>
    <a href="logout.php"><button class="button"><i class="fa fa-sign-out" aria-hidden="true" value="logout" style="line-height:80; text-align:right;">Logout</i></button></a>
    <?php
    session_start();
    if($_SESSION['status']!="Active"){
      header("location:login.php");
    }
    ?>
    <script src="../Media/js/todoscript.js"></script>
  </body>
</html>
