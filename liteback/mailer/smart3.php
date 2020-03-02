<?php 

$name_org = $_POST['name_org'];
$name_dol = $_POST['name_dol'];
$date_start = $_POST['date_start'];
$work_adress = $_POST['work_adress'];
$work_phone = $_POST['work_phone'];
$income = $_POST['income'];

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
	Название организации: ' . $name_org . ' <br>
	Название должности: ' . $name_dol . ' <br>
	Дата начала работы: ' . $date_start . ' <br>
	Рабочий адрес: ' . $work_adress . ' <br>
	Рабочий телефон: ' . $work_phone . ' <br> 
	Ежемесячный доход: ' . $income . ' ';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>