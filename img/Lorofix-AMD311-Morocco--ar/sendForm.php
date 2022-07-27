<?php
$clickid = $_POST['clickid'];
$postparams = array("subid" => $clickid, "status" => "lead", "payout" => 0);
$postparams = http_build_query($postparams);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://kt.nova.watch/e44b581/postback");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postparams);
curl_setopt($ch, CURLOPT_POST, 1);
$t = curl_exec($ch);
curl_close($ch);
$data = array(
    'name' => $_POST['name'],
    'phone' => $_POST['phone'],
    'device' => $_COOKIE['device'],
    'utm_source' => $_COOKIE['utm_source'],
    'utm_medium' => $_COOKIE['utm_medium'],
    'utm_campaign' => $_COOKIE['utm_campaign'],
    'utm_content' => $_COOKIE['utm_content'],
    'utm_term' => $_COOKIE['utm_term'],
    'key' =>  $_COOKIE['key'],
    'transition_id' =>  $_COOKIE['click'],
    'ip' =>  $_SERVER['REMOTE_ADDR'],
    'user_offer_id' => 116,
    'arbitr_key' =>  'ghf3zx6TjoKtJ2lz',
);
$Curl = curl_init();
$CurlOptions = array(
    CURLOPT_URL => 'https://api.inb-team.com/api/lead/create',
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => $data
);
curl_setopt_array($Curl, $CurlOptions);
$test = json_decode(curl_exec($Curl));
header('Location: '.$_SERVER['SCRIPT_URI']."./success.php");
?>