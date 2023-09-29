<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php
   $str="Hello World";
   //length
   echo strlen("shruti");
   echo "<br>";
   echo strlen($str);
   echo "<br>";
   //search for specific word
   echo strpos("Hello world!", "world");
   echo "<br>";
   //reverse
   echo strrev($str);
   echo "<br>";

   //replace
   echo str_replace("world", "Dolly", "Hello world!");
   echo "<br>";

   echo str_replace("World", "Dolly", $str);
   echo "<br>";

   $newtxt = str_replace("World", "Dolly", $str);
   echo    $newtxt;

    ?>
</body>
</html>