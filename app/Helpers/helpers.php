<?php

function selectIfOld($name, $value) {
    $old = old($name);
    if ($old === null) {
        return;
    }
    if ($old === (string) $value) {
        echo 'selected';
    }
}

function getAppVersion () {
    return trim(file_get_contents(base_path('.version')));
}

function isHuman ($response)
{
    $recaptcha = new \ReCaptcha\ReCaptcha('6Ld_7iATAAAAAFfsWAiZyFGAB5QDX4KaGOusespd');
    $resp = $recaptcha->verify($response, $_SERVER);
    return $resp->isSuccess();
}
