<!DOCTYPE html>
<html>
<body>

<?php
//Associative Array
$age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);

echo json_encode($age);
echo "<br>";
//index array
$fruit = array("apple","grapes","mango","orange");
echo json_encode($fruit);
echo "<br>";

$jsonobj = '{"Peter":35,"Ben":37,"Joe":43}';

$obj = json_decode($jsonobj);
var_dump(json_decode($jsonobj));
var_dump(json_decode($jsonobj,true));
echo "<br>";

echo $obj->Peter;
echo "<br>";

echo $obj->Ben;
echo "<br>";

echo $obj->Joe;
?>

</body>
</html>