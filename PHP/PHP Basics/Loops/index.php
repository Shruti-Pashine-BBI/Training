
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php
$x = 1;

while($x <= 5) {
  echo " While The number is: $x <br>";
  $x++;
}

//do while
do {
    echo "Do While The number is: $x <br>";
    $x++;
  } while ($x <= 4);

  //for
  for ($x = 0; $x <= 10; $x++) {
    echo "For The number is: $x <br>";
  }

  //foreach
  $colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
  echo "$value <br>";
}
?>

</body>
</html>