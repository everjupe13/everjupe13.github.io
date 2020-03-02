<?php 

$date_birth = $_POST['date_birth'];
$place_birth = $_POST['place_birth'];
$passport = $_POST['passport'];
$date_passport = $_POST['date_passport'];
$number_passport = $_POST['number_passport'];
$who_passport = $_POST['who_passport'];
$city2 = $_POST['city2'];
$street = $_POST['street'];
$building = $_POST['datereg'];
$datereg = $_POST['datereg'];
$street = $_POST['phonereg'];

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
	Дата рождения: ' . $date_birth . ' <br>
	Место рождения: ' . $place_birth . ' <br>
	Серия и номер паспорта: ' . $passport . ' <br>
	Код подразделения: ' . $number_passport . ' <br>
	Кем выдан: ' . $who_passport . ' <br>
	Город: ' . $city2 . ' <br> 
	Улица: ' . $street . ' <br> 
	Дом, квартира: ' . $building . ' <br> 
	Дата регистрации: ' . $datereg . ' <br> 
	Телефон по месту регистрации: ' . $phonereg . ' ';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>