<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    class Student{
        public $name,$age;

        function setData($name,$age){
            $this->name=$name;
            $this->age=$age;
        }
        function getData()  {
           return "My name is $this->name and I am $this->age Old";

        }
    }

    $obj=new Student();
    $obj->setData("Sai",22);
    echo $obj->getData();

    ?>
</body>
</html>