<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php
   
  
//variables scope
function hello(){
    $text="hello world";
    echo $text;
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
  function familyName($fname) {
    echo "$fname Refsnes.<br>";
  }
  
  familyName("Jani");
  familyName("Hege");
  familyName("Stale");
  familyName("Kai Jim");
  familyName("Borge");



  function addNumbers(int $a, int $b) {
    return $a + $b;
  }
  echo addNumbers(5, "5 days");
    ?>
</body>
</html>