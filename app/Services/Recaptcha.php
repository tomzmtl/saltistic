<?php

namespace App\Services;

use App\Services\GameLogic;
use Illuminate\Support\Collection;
use ReCaptcha\ReCaptcha as GoogleRecaptcha;

class Recaptcha
{
    private $request;

    public function __construct ($request)
    {
        $this->request = $request;
    }

    public function verify ()
    {
        if (!config('app.recaptcha')) {
            return true;
        }

        $response = $this->request->input('g-recaptcha-response');
        $host = $this->request->server('HTTP_HOST');

        $recaptcha = new GoogleRecaptcha('6Ld_7iATAAAAAFfsWAiZyFGAB5QDX4KaGOusespd');
        $resp = $recaptcha->verify($response, $_SERVER);
        return $resp->isSuccess();
    }
}
