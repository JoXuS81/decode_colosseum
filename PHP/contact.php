<?php 


/*
Table of Contents
    Data
    Send Data 
*/


if(isset($_POST['submit']))
{
    // Data
    $to = "#"; // This is your Email address
    $from = $_POST['userEmail']; // This is the sender's Email address
    $name = $_POST['userName'];
    $company = $_POST['userCompany'];
    $phone = $_POST['userPhone'];
    $mail = $_POST['userEmail'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name . " " . $company . " " . $phone . " " . $mail . " wrote the following:" . "\n\n" . $_POST['userMessage'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['userMessage'];
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    // Send Data 
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // Sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
}


?>