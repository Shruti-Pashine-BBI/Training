<?php
$servername="localhost";
$username="root";
$password="root";

//connecting to database
$userdata="TODOLIST";

$conn=mysqli_connect($servername,$username,$password,$userdata);
if($conn){
    echo "Successf";
}
else{
    echo "failp";
}
?>