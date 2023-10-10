<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

include "../TO_DO_LIST/Controller/config/path.php";
//echo constant("globalPath");
header('Location:' . globalPath . 'View/login.php');
exit;
?>
</body>
</html>