<?php
/**
 * Created by PhpStorm.
 * User: markprice
 * Date: 13/11/2017
 * Time: 10:48
 */


$name = $_POST['cmrName'];
$email = $_POST['cmrEmail'];
$tel = $_POST['cmrNumber'];
$message = $_POST['cmrMessage'];
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= 'From :' .  $email  . "\r\n";
$to = 'mark@m9digital.co.uk';
$subject ='Website Enquiry from M9 Digital Website Contact Form';
$thebody = "<table cellpadding=3 border=0>";
$thebody .= "<tr><td>Name</td><td>".  $name   ."</td></tr>";
$thebody .= "<tr><td>Phone</td><td>".  $tel   ."</td></tr>";
$thebody .= "<tr><td>Email</td><td>".  $email   ."</td></tr>";
$thebody .= "<tr><td>Comments</td><td>".  $message   ."</td></tr>";
$thebody .= "</table>";
mail($to, $subject, $thebody,$headers);
echo '<p>Thank You - Your Enquiry has been received. We will contact you in the near future.</p>';
