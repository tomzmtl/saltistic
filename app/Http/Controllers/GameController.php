<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddGameRequest;
use App\Services\GameService;
use App\Services\Pages\Games;
use App\Services\Recaptcha;

class GameController extends Controller
{
    public function __construct (GameService $service, Games $data)
    {
        $this->GameService = $service;
        $this->data = $data;
    }

    public function add ()
    {
        return view('games.add', $this->data->add());
    }

    public function index ()
    {
        return view('games.index', $this->data->index());
    }

    public function postAdd (AddGameRequest $request)
    {
        $recaptcha = new Recaptcha($request);

        if (!$recaptcha->verify())
        {
            return redirect('bot');
        }

        $data = array_merge($request->all(), ['app_version' => config('app.version.number')]);
        $this->GameService->createEntry($data);

        return redirect('/')->with('gameAdded', true);
    }
}
