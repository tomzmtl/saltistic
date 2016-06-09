<?php

namespace App\Http\Controllers;

use App\Saltistic\CharacterStore;
use App\Http\Requests;
use App\Game;
use App\Player;
use Illuminate\Http\Request;


class PageController extends Controller
{
    private $characters = null;

    public function __construct ()
    {
        $this->characters = new CharacterStore();
    }

    public function index ()
    {
        $games = Game::all();
        $players = Player::all();

        $results = [];
        foreach ($games as $game) {
            $results[] = [
                1 => [
                         'name' => $players->where('id', $game->player_1)->first()->full_name,
                        'score' => $game->score_1,
                       'winner' => $game->stocks === $game->score_1,
                    'character' => $this->characters->getCode($game->character_1),
                ],
                2 => [
                         'name' => $players->where('id', $game->player_2)->first()->full_name,
                        'score' => $game->score_2,
                       'winner' => $game->stocks === $game->score_2,
                    'character' => $this->characters->getCode($game->character_2),
                ]
            ];
        }

        $data = compact('results');

        //dd($results);

        return view('index', $data);
    }
}
