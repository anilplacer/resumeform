<?php
	if(isset($_POST['submit'])){
		$fname=$_POST['fname'];
		$lname=$_POST['lname'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$message=$_POST['message'];

		$to='anilplacer@mail.com'; // Receiver Email ID, Replace with your email ID
		$subject='Resume Form';
		$message="First Name :".$fname."\n"."Last Name :".$lname."\n"."Phone :".$phone."\n"."Wrote the following :"."\n\n".$message;
		$header="From: ".$email;

		if(mail($to, $subject, $message, $header)){
			echo "Sent Successfully";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>
