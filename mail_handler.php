<?php

	if(isset($_POST['submit'])){
		$fname=$_POST['fname'];
		$lname=$_POST['lname'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$objective=$_POST['objective'];

		$to='anilplacer@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Resume Form';
		$message="First Name :".$fname."\n"."Last Name :".$lname."\n"."Phone :".$phone."\n"."Wrote the following :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$fname.", We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>