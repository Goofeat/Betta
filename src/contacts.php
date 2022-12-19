<?php
$to = trim($_POST['email']);
mail($to, 'Betta store', 'Thanks for your feedback! Kind Regards Betta Team.');
?>