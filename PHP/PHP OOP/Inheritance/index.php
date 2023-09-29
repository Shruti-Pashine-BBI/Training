<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    class college{
        public $department;
        function __construct($department){
            $this->department=$department;
        }
        function setData()  {
            echo "$this->department ";
 
         }
    }
    class Student extends college{
        public $name,$age;

        function __construct($name,$age,$department){
            $this->name=$name;
            $this->age=$age;
            $this->department=$department;
        }
        function getData()  {
           return "My name is $this->name and I am $this->age Old and studying in $this->department";

        }
    }

    $obj=new Student("Sai",22,"Computer");
    // $obj->setData();
    echo $obj->getData();

    ?>
</body>
</html>