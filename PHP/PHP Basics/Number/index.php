<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php
   $x = 5985;
   var_dump(is_int($x));
   
   $y = 59.85;
   var_dump(is_int($y));
   var_dump(is_float($y));
   $z = 1.9e411;
var_dump($z);
    ?>
</body>
</html>