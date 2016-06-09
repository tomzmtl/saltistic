<?php

namespace App\Http\Controllers;

use App\Game;
use App\Http\Requests\AddGameRequest;

class GameController extends Controller
{
    public function add (AddGameRequest $request)
    {
        $data = array_merge($request->all(), ['app_version' => getAppVersion()]);
        $response = $request->input('g-recaptcha-response');
        $host = $request->server('HTTP_HOST');

        if (!env('APP_DEBUG') && !isHuman($response, $host)) {
            return redirect('bot');
        }

        Game::create($data);

        return redirect('/')->with('gameAdded', true);
    }
}
