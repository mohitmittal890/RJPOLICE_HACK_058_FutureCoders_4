<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$password = $_POST['password'];
$gender = $_POST['gender'];
$aadhar = $_POST['aadhar'];
$phone = $_POST['phone'];

// database connection
$conn = new mysqli('localhost','root','','Form');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(firstName,lastName,email,password,gender,aadhar,phone) values(?,?,?,?,?,?,?)");
    $stmt->bind_param("sssssii",$firstName,$lastName,$email,$password,$gender,$aadhar,$phone);
    $stmt->execute();
    echo "registration Successfully...";
    $stmt->close();
    $conn->close();
}
?>