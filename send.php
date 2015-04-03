<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

	$to = 'your-email-address';
	$subject = 'Contact Form Email';
	$message = 'Contact Name: ' . $_POST['name'] . "\n";
	$message .= 'Contact Email: ' . $_POST['email'] . "\n";
	$message .= 'Message: ' . $_POST['message'] . "\n";
	$headers = 'From: your-email-address' . "\r\n";

if (filter_var($email, FILTER_VALIDATE_EMAIL)) { 
    mail($to, $subject, $message, $headers); 
	echo "<span>Your email has been sent!</span>";
}else{
	echo "Invalid Email, please provide a correct email address.";
}

?>