<?php 

$phone_anot = $_POST['phone_anot'];
$phone_owner = $_POST['phone_owner'];
$degree = $_POST['degree'];
$family = $_POST['family'];
$child_number = $_POST['child_number'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '';                 // Наш логин
$mail->Password = '';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('', 'PHELPER');   // От кого письмо 
$mail->addAddress('');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br>
	Дополнительный телефон: ' . $phone_anot . ' <br>
	Владелец телефона: ' . $phone_owner . ' <br>
	Образование: ' . $degree . ' <br>
	Семейное положение: ' . $family . ' <br> 
	Дети до 18 лет: ' . $child_number . ' ';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>