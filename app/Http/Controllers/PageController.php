<?php

namespace App\Http\Controllers;

use App\Saltistic\CharacterStore;
use App\Saltistic\GameLogic;
use App\Http\Requests;
use App\Game;
use App\Player;


class PageController extends Controller
{
    private $characters = null;

    public function __construct ()
    {
        $this->characters = new CharacterStore();
    }

    public function index ()
    {
        $games = Game::all()->sortByDesc('id');
        $players = Player::all();

        $results = [];
        foreach ($games as $game) {
            $results[] = [
                1 => [
                      'name' => $players->where('id', $game->player_1)->first()->name,
                     'score' => $game->score_1,
                    'winner' => GameLogic::isWinner(1, $game),
                    'character' => [
                      'icon' => $this->characters->getIconUrl($game->character_1),
                      'name' => $this->characters->getName($game->character_1),
                    ],
                ],
                2 => [
                      'name' => $players->where('id', $game->player_2)->first()->name,
                     'score' => $game->score_2,
                    'winner' => GameLogic::isWinner(2, $game),
                    'character' => [
                      'icon' => $this->characters->getIconUrl($game->character_2),
                      'name' => $this->characters->getName($game->character_2),
                    ],
                ]
            ];
        }

        $data = compact('results');

        //dd($results);

        return view('index', $data);
    }

    public function add ()
    {
        $characters = new CharacterStore();
        return view('add', [
            'characters' => $characters->getAll(),
               'players' => Player::all()->sortBy('name'),
                'stocks' => [GameLogic::MIN_STOCKS, GameLogic::MAX_STOCKS],
        ]);
    }
}
