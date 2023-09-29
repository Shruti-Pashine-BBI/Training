<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php
    $x=12;
    $y=14.5;
    
    echo $x;
   echo '<br>';
    echo $y;
   echo '<br>';

  echo "Hi";
  echo '<br>';
  echo $x + $y;
  echo '<br>';

    $txt = "W3Schools.com";

   echo "I love $txt!";
  
//variables scope
function hello(){
    echo "$txt";
}
echo '<br>';

hello();

function myTest() {
    global $x, $y;
    $y = $x + $y;
  }
  echo '<br>';
  
  myTest();
  echo $y; 
    ?>
</body>
</html>