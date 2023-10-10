<?php
$servername="localhost";
$username="root";
$passcode="root";
$isConnection=false;
$str="hello";

//connecting to database
$userdata="TODOLIST";

$conn=mysqli_connect($servername,$username,$passcode,$userdata);
if($conn){
    $isConnection=true;
}
else{
    $isConnection=false;
}
?>